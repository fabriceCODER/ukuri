'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
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
     error: string | null;
     login: (email: string, password: string) => Promise<void>;
     register: (name: string, email: string, password: string) => Promise<void>;
     logout: () => Promise<void>;
     clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
     const [user, setUser] = useState<User | null>(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          checkAuth();
     }, []);

     const checkAuth = async () => {
          try {
               const response = await api.auth.me();
               if (response.data) {
                    setUser(response.data);
               }
          } catch (err) {
               console.error('Auth check failed:', err);
          } finally {
               setLoading(false);
          }
     };

     const login = async (email: string, password: string) => {
          try {
               setError(null);
               const response = await api.auth.login(email, password);

               if (response.error) {
                    throw new Error(response.error);
               }

               if (response.data) {
                    setUser(response.data.user);
                    // Store the token if your API returns one
                    if (response.data.token) {
                         localStorage.setItem('token', response.data.token);
                    }
               }
          } catch (err) {
               setError(err instanceof Error ? err.message : 'Login failed');
               throw err;
          }
     };

     const register = async (name: string, email: string, password: string) => {
          try {
               setError(null);
               const response = await api.auth.register(name, email, password);

               if (response.error) {
                    throw new Error(response.error);
               }

               if (response.data) {
                    setUser(response.data.user);
                    // Store the token if your API returns one
                    if (response.data.token) {
                         localStorage.setItem('token', response.data.token);
                    }
               }
          } catch (err) {
               setError(err instanceof Error ? err.message : 'Registration failed');
               throw err;
          }
     };

     const logout = async () => {
          try {
               await api.auth.logout();
               setUser(null);
               localStorage.removeItem('token');
          } catch (err) {
               console.error('Logout failed:', err);
          }
     };

     const clearError = () => {
          setError(null);
     };

     return (
          <AuthContext.Provider
               value={{
                    user,
                    loading,
                    error,
                    login,
                    register,
                    logout,
                    clearError,
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