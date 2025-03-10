'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { ErrorBoundary } from 'react-error-boundary';
import { AlertCircle } from 'lucide-react';

function ErrorFallback({ error, resetErrorBoundary }: any) {
     return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
               <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 mb-4">
                         <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h2>
                    <p className="text-gray-600 mb-4">{error.message}</p>
                    <button
                         onClick={resetErrorBoundary}
                         className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                         Try again
                    </button>
               </div>
          </div>
     );
}

export default function ClientLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <ErrorBoundary
               FallbackComponent={ErrorFallback}
               onReset={() => {
                    // Reset the state here
                    window.location.href = '/';
               }}
          >
               <AuthProvider>
                    {children}
               </AuthProvider>
          </ErrorBoundary>
     );
} 