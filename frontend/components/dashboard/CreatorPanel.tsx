"use client";

import { motion } from 'framer-motion';
import { FileText, MessageSquare, Eye, ThumbsUp, PenTool } from 'lucide-react';
import Link from 'next/link';
import StatsWidget from './StatsWidget';

export default function CreatorPanel() {
    const stats = [
        {
            title: 'Published Articles',
            value: 24,
            change: 8,
            trend: 'up' as const,
            icon: <FileText className="h-6 w-6" />,
        },
        {
            title: 'Total Comments',
            value: 156,
            change: 12,
            trend: 'up' as const,
            icon: <MessageSquare className="h-6 w-6" />,
        },
        {
            title: 'Total Views',
            value: 12543,
            change: 15,
            trend: 'up' as const,
            icon: <Eye className="h-6 w-6" />,
        },
        {
            title: 'Total Likes',
            value: 843,
            change: 5,
            trend: 'up' as const,
            icon: <ThumbsUp className="h-6 w-6" />,
        },
    ];

    const recentArticles = [
        { id: 1, title: 'The Rise of AI in Healthcare', status: 'published', views: 1234, likes: 89 },
        { id: 2, title: 'Sustainable Energy Solutions', status: 'draft', views: 0, likes: 0 },
        { id: 3, title: 'Future of Remote Work', status: 'published', views: 567, likes: 45 },
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

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
                    <Link
                        href="/dashboard/articles/new"
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                    >
                        <PenTool className="h-5 w-5 mr-2" />
                        Write New Article
                    </Link>
                </div>
            </motion.div>

            {/* Recent Articles */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Recent Articles</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Views
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Likes
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
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${article.status === 'published'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}
                                            >
                                                {article.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {article.views.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {article.likes.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <Link
                                                href={`/dashboard/articles/${article.id}`}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>

            {/* Content Ideas */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Content Ideas</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                            Write about emerging technology trends
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                            Cover recent scientific discoveries
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                            Analyze current market trends
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Writing Tips</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            Use engaging headlines
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            Include relevant statistics
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            Add compelling visuals
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
