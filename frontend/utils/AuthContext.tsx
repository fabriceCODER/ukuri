'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
     id: string;
     name: string;
     email: string;
     role: string;
}

interface AuthContextType {
     user: User | null;
     login: (token: string, userData: User) => void;
     logout: () => void;
     isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
     const [user, setUser] = useState<User | null>(null);
     const [isLoading, setIsLoading] = useState(true);
     const router = useRouter();

     useEffect(() => {
          const initializeAuth = async () => {
               try {
                    const token = localStorage.getItem('token');
                    const userData = localStorage.getItem('user');

                    if (token && userData) {
                         // Verify token with the backend
                         try {
                              const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify`, {
                                   headers: {
                                        Authorization: `Bearer ${token}`,
                                   },
                              });

                              if (response.ok) {
                                   setUser(JSON.parse(userData));
                              } else {
                                   // If token is invalid, clear storage
                                   localStorage.removeItem('token');
                                   localStorage.removeItem('user');
                                   setUser(null);
                              }
                         } catch (error) {
                              console.error('Error verifying token:', error);
                              // If there's a network error, keep the user logged in
                              setUser(JSON.parse(userData));
                         }
                    }
               } catch (error) {
                    console.error('Auth initialization error:', error);
               } finally {
                    setIsLoading(false);
               }
          };

          initializeAuth();
     }, []);

     const login = (token: string, userData: User) => {
          try {
               localStorage.setItem('token', token);
               localStorage.setItem('user', JSON.stringify(userData));
               setUser(userData);
          } catch (error) {
               console.error('Error during login:', error);
          }
     };

     const logout = () => {
          try {
               localStorage.removeItem('token');
               localStorage.removeItem('user');
               setUser(null);
               router.push('/login');
          } catch (error) {
               console.error('Error during logout:', error);
          }
     };

     return (
          <AuthContext.Provider value={{ user, login, logout, isLoading }}>
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