"use client";

import { motion } from 'framer-motion';
import { FileText, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import StatsWidget from './StatsWidget';

export default function AdminPanel() {
    const stats = [
        {
            title: 'Total Articles',
            value: 256,
            change: 12,
            trend: 'up' as const,
            icon: <FileText className="h-6 w-6" />,
        },
        {
            title: 'Active Users',
            value: 1458,
            change: 8,
            trend: 'up' as const,
            icon: <Users className="h-6 w-6" />,
        },
        {
            title: 'Pending Reviews',
            value: 23,
            change: -5,
            trend: 'down' as const,
            icon: <AlertTriangle className="h-6 w-6" />,
        },
        {
            title: 'Approved Articles',
            value: 189,
            change: 15,
            trend: 'up' as const,
            icon: <CheckCircle className="h-6 w-6" />,
        },
    ];

    const recentArticles = [
        { id: 1, title: 'The Future of AI', author: 'John Doe', status: 'pending' },
        { id: 2, title: 'Climate Change Effects', author: 'Jane Smith', status: 'approved' },
        { id: 3, title: 'Space Exploration', author: 'Mike Johnson', status: 'pending' },
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <StatsWidget
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        trend={stat.trend}
                        icon={stat.icon}
                    />
                ))}
            </div>

            {/* Recent Articles */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Articles</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Author
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {recentArticles.map((article) => (
                                    <tr key={article.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {article.title}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {article.author}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${article.status === 'approved'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}
                                            >
                                                {article.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <button className="text-indigo-600 hover:text-indigo-900">Review</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="space-y-2">
                        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                            Review Pending Articles
                        </button>
                        <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition">
                            Manage Users
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">System Status</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Server Status</span>
                            <span className="text-sm font-medium text-green-600">Operational</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Last Backup</span>
                            <span className="text-sm font-medium text-gray-900">2 hours ago</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
