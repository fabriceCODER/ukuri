"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/utils/AuthContext';
import { api } from '@/utils/api';
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AdminPanel from "@/components/dashboard/AdminPanel";
import CreatorPanel from "@/components/dashboard/CreatorPanel";
import StatsWidget from "@/components/dashboard/StatsWidget";
import Spinner from "@/components/common/Spinner";

export default function Dashboard() {
    const { user } = useAuth();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('No authentication token found');

                const data = await api.articles.getAll(token);
                setArticles(data);
            } catch (err) {
                setError('Failed to fetch articles. Please try again later.');
                console.error('Error fetching articles:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (error) {
        throw new Error(error); // This will be caught by the error boundary
    }

    return (
        <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-50">
                {/* Sidebar */}
                <Sidebar />

                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <DashboardHeader title="Dashboard Overview" />

                    <div className="px-8 py-10">
                        {/* Stats Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                            <StatsWidget title="📑 Total Articles" value={user.totalArticles} />
                            <StatsWidget title="💬 Total Comments" value={user.totalComments} />
                            <StatsWidget title="�� Total Views" value={user.totalViews} />
                            <StatsWidget title="❤️ Total Likes" value={user.totalLikes} />
                        </div>

                        {/* Role-Based Dashboard Panel */}
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            {user.role === "admin" ? <AdminPanel /> : <CreatorPanel />}
                        </div>

                        {isLoading ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                                <p className="text-gray-600">Loading your articles...</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {articles.map((article: any) => (
                                    <motion.div
                                        key={article.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                                    >
                                        {article.image && (
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-48 object-cover"
                                            />
                                        )}
                                        <div className="p-6">
                                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                                {article.title}
                                            </h2>
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {article.content}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-500">
                                                    {new Date(article.createdAt).toLocaleDateString()}
                                                </span>
                                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
