'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
     title: string;
     value: string | number;
     icon: LucideIcon;
     change?: {
          value: number;
          isPositive: boolean;
     };
     description?: string;
}

export default function StatsCard({
     title,
     value,
     icon: Icon,
     change,
     description
}: StatsCardProps) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
          >
               <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
                         <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    {change && (
                         <div className={`flex items-center text-sm ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                              {change.isPositive ? '↑' : '↓'} {Math.abs(change.value)}%
                         </div>
                    )}
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
               <p className="text-gray-600 text-sm">{title}</p>
               {description && (
                    <p className="mt-2 text-sm text-gray-500">{description}</p>
               )}
          </motion.div>
     );
} 