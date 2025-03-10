"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/utils/AuthContext';
import { api } from '@/utils/api';
import AdminPanel from "@/components/dashboard/AdminPanel";
import CreatorPanel from "@/components/dashboard/CreatorPanel";
import StatsWidget from "@/components/dashboard/StatsWidget";
import Card from "@/components/common/Card";
import { AlertCircle } from 'lucide-react';

interface ArticleStats {
    totalArticles: number;
    totalComments: number;
    totalViews: number;
    totalLikes: number;
}

export default function Dashboard() {
    const { user, isLoading } = useAuth();
    const [articles, setArticles] = useState([]);
    const [stats, setStats] = useState<ArticleStats>({
        totalArticles: 0,
        totalComments: 0,
        totalViews: 0,
        totalLikes: 0
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('Please log in to view your articles');
                    return;
                }

                const [articlesData, statsData] = await Promise.all([
                    api.articles.getAll(token),
                    api.articles.getStats(token)
                ]);

                setArticles(articlesData);
                setStats(statsData);
                setError(null);
            } catch (err) {
                setError('Failed to fetch data. Please try again later.');
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
            >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Access Denied</h2>
                <p className="text-gray-600">Please sign in to access the dashboard.</p>
            </motion.div>
        );
    }

    return (
        <ProtectedRoute>
            <div className="px-8 py-10">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Welcome back, {user.name}!
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Here's an overview of your {user.role === 'admin' ? 'platform' : 'content'} performance
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <StatsWidget title="📑 Total Articles" value={stats.totalArticles} />
                    <StatsWidget title="💬 Total Comments" value={stats.totalComments} />
                    <StatsWidget title="👀 Total Views" value={stats.totalViews} />
                    <StatsWidget title="❤️ Total Likes" value={stats.totalLikes} />
                </div>

                {/* Role-Based Dashboard Panel */}
                <div className="bg-white shadow-lg rounded-lg mb-8">
                    {user.role === "admin" ? <AdminPanel /> : <CreatorPanel />}
                </div>

                {/* Articles Section */}
                {error ? (
                    <Card className="bg-red-50 border-red-100 p-6">
                        <div className="flex items-center gap-3 text-red-600">
                            <AlertCircle className="w-5 h-5" />
                            <p>{error}</p>
                        </div>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.length === 0 ? (
                            <Card className="col-span-full bg-gray-50 p-8 text-center">
                                <p className="text-gray-600">No articles found. Create your first article to get started!</p>
                            </Card>
                        ) : (
                            articles.map((article: any) => (
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
                            ))
                        )}
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
}
