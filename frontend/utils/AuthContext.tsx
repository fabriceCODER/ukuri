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
          // Check for token and user data in localStorage on mount
          const token = localStorage.getItem('token');
          const userData = localStorage.getItem('user');

          if (token && userData) {
               setUser(JSON.parse(userData));
          }
          setIsLoading(false);
     }, []);

     const login = (token: string, userData: User) => {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
     };

     const logout = () => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
          router.push('/login');
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