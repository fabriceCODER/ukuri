'use client';

import { motion } from 'framer-motion';

export default function Loading() {
     return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
               >
                    <motion.div
                         animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360],
                         }}
                         transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                         }}
                         className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <motion.h2
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.2 }}
                         className="text-xl font-semibold text-gray-700"
                    >
                         Loading...
                    </motion.h2>
                    <motion.p
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3 }}
                         className="text-gray-500 mt-2"
                    >
                         Please wait while we prepare your content
                    </motion.p>
               </motion.div>
          </div>
     );
} 