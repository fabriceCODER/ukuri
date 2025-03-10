'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
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
                         className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 mb-6"
                    >
                         <Search className="w-12 h-12 text-gray-600" />
                    </motion.div>

                    <motion.h1
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.1 }}
                         className="text-6xl font-bold text-gray-900 mb-4"
                    >
                         404
                    </motion.h1>

                    <motion.h2
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.2 }}
                         className="text-2xl font-semibold text-gray-700 mb-4"
                    >
                         Page Not Found
                    </motion.h2>

                    <motion.p
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3 }}
                         className="text-gray-600 mb-8"
                    >
                         The page you are looking for might have been removed, had its name changed,
                         or is temporarily unavailable.
                    </motion.p>

                    <motion.div
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.4 }}
                    >
                         <Link
                              href="/"
                              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                         >
                              <Home className="w-5 h-5 mr-2" />
                              Back to Home
                         </Link>
                    </motion.div>
               </motion.div>
          </div>
     );
} 