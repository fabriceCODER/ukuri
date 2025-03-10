'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/utils/api';

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

               const { data, error } = await api.auth.me();
               if (error) {
                    localStorage.removeItem('token');
               } else if (data) {
                    setUser(data);
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
               const { data, error } = await api.auth.login(email, password);
               if (error) {
                    throw new Error(error);
               }
               if (data) {
                    localStorage.setItem('token', data.token);
                    setUser(data.user);
                    router.push('/dashboard');
               }
          } catch (error) {
               console.error('Login failed:', error);
               throw error;
          }
     };

     const register = async (name: string, email: string, password: string) => {
          try {
               const { data, error } = await api.auth.register(name, email, password);
               if (error) {
                    throw new Error(error);
               }
               if (data) {
                    localStorage.setItem('token', data.token);
                    setUser(data.user);
                    router.push('/dashboard');
               }
          } catch (error) {
               console.error('Registration failed:', error);
               throw error;
          }
     };

     const logout = async () => {
          try {
               const token = localStorage.getItem('token');
               if (token) {
                    await api.auth.logout();
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