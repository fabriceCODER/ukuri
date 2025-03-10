'use client';

import { motion } from 'framer-motion';
import { Edit2, Trash2, MoreVertical, Search, Filter } from 'lucide-react';

interface DataTableProps {
     columns: {
          key: string;
          label: string;
          render?: (item: any) => React.ReactNode;
     }[];
     data: any[];
     title: string;
     description?: string;
     searchPlaceholder?: string;
     onEdit?: (item: any) => void;
     onDelete?: (item: any) => void;
}

export default function DataTable({
     columns,
     data,
     title,
     description,
     searchPlaceholder = "Search...",
     onEdit,
     onDelete
}: DataTableProps) {
     return (
          <div className="bg-white rounded-xl shadow-sm">
               <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                         <div>
                              <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                              {description && (
                                   <p className="mt-1 text-sm text-gray-600">{description}</p>
                              )}
                         </div>
                         <div className="flex flex-col sm:flex-row gap-4">
                              <div className="relative">
                                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                   <input
                                        type="text"
                                        placeholder={searchPlaceholder}
                                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full sm:w-64"
                                   />
                              </div>
                              <div className="relative">
                                   <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                   <select className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white">
                                        <option value="">All</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                   </select>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="overflow-x-auto">
                    <table className="w-full">
                         <thead>
                              <tr className="bg-gray-50 border-b border-gray-200">
                                   {columns.map((column) => (
                                        <th
                                             key={column.key}
                                             className="px-6 py-4 text-left text-sm font-medium text-gray-500"
                                        >
                                             {column.label}
                                        </th>
                                   ))}
                                   <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">
                                        Actions
                                   </th>
                              </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-200">
                              {data.map((item, index) => (
                                   <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="hover:bg-gray-50"
                                   >
                                        {columns.map((column) => (
                                             <td
                                                  key={column.key}
                                                  className="px-6 py-4 text-sm text-gray-900"
                                             >
                                                  {column.render
                                                       ? column.render(item)
                                                       : item[column.key]}
                                             </td>
                                        ))}
                                        <td className="px-6 py-4 text-right text-sm">
                                             <div className="flex items-center justify-end gap-2">
                                                  {onEdit && (
                                                       <button
                                                            onClick={() => onEdit(item)}
                                                            className="p-1 text-indigo-600 hover:text-indigo-900 rounded-full hover:bg-indigo-50"
                                                       >
                                                            <Edit2 className="h-4 w-4" />
                                                       </button>
                                                  )}
                                                  {onDelete && (
                                                       <button
                                                            onClick={() => onDelete(item)}
                                                            className="p-1 text-red-600 hover:text-red-900 rounded-full hover:bg-red-50"
                                                       >
                                                            <Trash2 className="h-4 w-4" />
                                                       </button>
                                                  )}
                                                  <button className="p-1 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
                                                       <MoreVertical className="h-4 w-4" />
                                                  </button>
                                             </div>
                                        </td>
                                   </motion.tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
} 