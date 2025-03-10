'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertCircle, Home, RefreshCcw } from 'lucide-react';

interface ErrorProps {
     error: Error & { digest?: string };
     reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
     useEffect(() => {
          // Log the error to an error reporting service
          console.error('Page Error:', error);
     }, [error]);

     // Determine if this is an authentication error
     const isAuthError = error.message?.toLowerCase().includes('auth') ||
          error.message?.toLowerCase().includes('login') ||
          error.message?.toLowerCase().includes('unauthorized');

     return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center"
               >
                    <motion.div
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 mb-4"
                    >
                         <AlertCircle className="w-8 h-8 text-red-600" />
                    </motion.div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                         {isAuthError ? 'Authentication Required' : 'Something went wrong'}
                    </h1>

                    <p className="text-gray-600 mb-8">
                         {isAuthError
                              ? 'Please log in to access this page.'
                              : 'We apologize for the inconvenience. Please try again or return to the home page.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         {!isAuthError && (
                              <button
                                   onClick={reset}
                                   className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                   <RefreshCcw className="w-4 h-4 mr-2" />
                                   Try Again
                              </button>
                         )}

                         <Link
                              href={isAuthError ? "/login" : "/"}
                              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                         >
                              <Home className="w-4 h-4 mr-2" />
                              {isAuthError ? 'Go to Login' : 'Back to Home'}
                         </Link>
                    </div>
               </motion.div>
          </div>
     );
} 