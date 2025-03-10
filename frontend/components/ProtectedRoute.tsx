'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/AuthContext';
import Loading from '@/app/loading';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
     const { user, isLoading } = useAuth();
     const router = useRouter();

     useEffect(() => {
          if (!isLoading && !user) {
               router.push('/login');
          }
     }, [user, isLoading, router]);

     if (isLoading) {
          return <Loading />;
     }

     if (!user) {
          return null; // Will redirect in useEffect
     }

     return <>{children}</>;
} 