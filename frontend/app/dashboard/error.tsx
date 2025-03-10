'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function DashboardError({
     error,
     reset,
}: {
     error: Error & { digest?: string };
     reset: () => void;
}) {
     useEffect(() => {
          console.error(error);
     }, [error]);

     return (
          <div className="min-h-[60vh] flex items-center justify-center">
               <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                         <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                         Something went wrong!
                    </h2>
                    <p className="text-gray-600 mb-6">
                         {error.message || 'An unexpected error occurred while loading the dashboard.'}
                    </p>
                    <button
                         onClick={reset}
                         className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                         Try again
                    </button>
               </div>
          </div>
     );
} 