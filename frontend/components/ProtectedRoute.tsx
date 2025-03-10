'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/AuthContext';
import Loading from '@/app/loading';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
     const { user, isLoading } = useAuth();
     const router = useRouter();
     const [isRedirecting, setIsRedirecting] = useState(false);

     useEffect(() => {
          let timeoutId: NodeJS.Timeout;

          if (!isLoading && !user && !isRedirecting) {
               setIsRedirecting(true);
               // Add a small delay before redirect to prevent flash of content
               timeoutId = setTimeout(() => {
                    router.push('/login');
               }, 100);
          }

          return () => {
               if (timeoutId) {
                    clearTimeout(timeoutId);
               }
          };
     }, [user, isLoading, router, isRedirecting]);

     // Show loading state while checking authentication or during redirect
     if (isLoading || isRedirecting) {
          return <Loading />;
     }

     // If authenticated, render the protected content
     if (user) {
          return <>{children}</>;
     }

     // Return null while redirect is pending
     return null;
} 