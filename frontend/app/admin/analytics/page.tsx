"use client";

import { motion } from 'framer-motion';
import { Users, FileText, Eye, TrendingUp, Calendar, Clock, BarChart2 } from 'lucide-react';
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatsCard from "@/components/dashboard/StatsCard";

const AdminAnalytics = () => {
    const stats = [
        {
            title: 'Total Users',
            value: '12,345',
            icon: Users,
            change: { value: 12, isPositive: true },
            description: 'Active users this month'
        },
        {
            title: 'Total Articles',
            value: '876',
            icon: FileText,
            change: { value: 8, isPositive: true },
            description: 'Published articles'
        },
        {
            title: 'Total Views',
            value: '1.2M',
            icon: Eye,
            change: { value: 15, isPositive: true },
            description: 'Monthly page views'
        },
        {
            title: 'Engagement Rate',
            value: '68%',
            icon: TrendingUp,
            change: { value: 5, isPositive: true },
            description: 'User interaction rate'
        }
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1">
                <DashboardHeader title="Analytics Dashboard" />
                <div className="container mx-auto px-6 py-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <StatsCard
                                key={stat.title}
                                {...stat}
                            />
                        ))}
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Traffic Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-xl shadow-sm p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">Traffic Overview</h2>
                                    <p className="text-sm text-gray-600">Monthly visitor statistics</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                                        <Calendar className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                                        <Clock className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                                <BarChart2 className="h-12 w-12 text-gray-400" />
                            </div>
                        </motion.div>

                        {/* User Activity */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-xl shadow-sm p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">User Activity</h2>
                                    <p className="text-sm text-gray-600">Recent user interactions</p>
                                </div>
                                <button className="text-sm text-indigo-600 hover:text-indigo-700">
                                    View All
                                </button>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                            <Users className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">New user registration</p>
                                            <p className="text-xs text-gray-500">2 minutes ago</p>
                                        </div>
                                        <div className="text-sm text-gray-500">+1</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalytics;
