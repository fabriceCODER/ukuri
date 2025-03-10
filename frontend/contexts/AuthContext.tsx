'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
     id: string;
     name: string;
     email: string;
     role: string;
}

interface AuthContextType {
     user: User | null;
     loading: boolean;
     login: (email: string, password: string) => Promise<void>;
     register: (name: string, email: string, password: string) => Promise<void>;
     logout: () => Promise<void>;
     isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
     const [user, setUser] = useState<User | null>(null);
     const [loading, setLoading] = useState(true);
     const router = useRouter();

     useEffect(() => {
          checkAuth();
     }, []);

     const checkAuth = async () => {
          try {
               const token = localStorage.getItem('token');
               if (!token) {
                    setLoading(false);
                    return;
               }

               const response = await fetch('http://localhost:3001/api/auth/me', {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });

               if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
               } else {
                    localStorage.removeItem('token');
               }
          } catch (error) {
               console.error('Auth check failed:', error);
               localStorage.removeItem('token');
          } finally {
               setLoading(false);
          }
     };

     const login = async (email: string, password: string) => {
          try {
               const response = await fetch('http://localhost:3001/api/auth/login', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
               });

               if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || 'Login failed');
               }

               const data = await response.json();
               localStorage.setItem('token', data.token);
               setUser(data.user);
               router.push('/dashboard');
          } catch (error) {
               console.error('Login failed:', error);
               throw error;
          }
     };

     const register = async (name: string, email: string, password: string) => {
          try {
               const response = await fetch('http://localhost:3001/api/auth/register', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
               });

               if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || 'Registration failed');
               }

               const data = await response.json();
               localStorage.setItem('token', data.token);
               setUser(data.user);
               router.push('/dashboard');
          } catch (error) {
               console.error('Registration failed:', error);
               throw error;
          }
     };

     const logout = async () => {
          try {
               const token = localStorage.getItem('token');
               if (token) {
                    await fetch('http://localhost:3001/api/auth/logout', {
                         method: 'POST',
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
               }
          } catch (error) {
               console.error('Logout failed:', error);
          } finally {
               localStorage.removeItem('token');
               setUser(null);
               router.push('/');
          }
     };

     return (
          <AuthContext.Provider
               value={{
                    user,
                    loading,
                    login,
                    register,
                    logout,
                    isAuthenticated: !!user,
               }}
          >
               {children}
          </AuthContext.Provider>
     );
}

export function useAuth() {
     const context = useContext(AuthContext);
     if (context === undefined) {
          throw new Error('useAuth must be used within an AuthProvider');
     }
     return context;
} 