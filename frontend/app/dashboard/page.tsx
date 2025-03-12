"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { api } from '@/utils/api';
import AdminPanel from "@/components/dashboard/AdminPanel";
import CreatorPanel from "@/components/dashboard/CreatorPanel";
import StatsWidget from "@/components/dashboard/StatsWidget";
import Card from "@/components/common/Card";
import { AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
    FileText,
    Users,
    Eye,
    ThumbsUp,
    Plus,
    Edit,
    Trash2,
    BarChart,
    Clock,
} from 'lucide-react';

interface ArticleStats {
    totalArticles: number;
    totalComments: number;
    totalViews: number;
    totalLikes: number;
}

interface Article {
    id: string;
    title: string;
    excerpt: string;
    status: 'draft' | 'published';
    views: number;
    likes: number;
    createdAt: string;
}

interface DashboardStats {
    totalArticles: number;
    totalViews: number;
    totalLikes: number;
    totalFollowers: number;
}

export default function Dashboard() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [articles, setArticles] = useState<Article[]>([]);
    const [stats, setStats] = useState<DashboardStats>({
        totalArticles: 0,
        totalViews: 0,
        totalLikes: 0,
        totalFollowers: 0,
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [isLoading, user, router]);

    useEffect(() => {
        if (user) {
            loadDashboardData();
        }
    }, [user]);

    const loadDashboardData = async () => {
        try {
            const [articlesResponse, statsResponse] = await Promise.all([
                api.articles.getAll(),
                api.articles.getStats(),
            ]);

            if (articlesResponse.data) {
                setArticles(articlesResponse.data as Article[]);
            }
            if (statsResponse.data) {
                setStats(statsResponse.data as DashboardStats);
            }
            setError(null);
        } catch (error) {
            setError('Failed to load dashboard data. Please try again later.');
            console.error('Failed to load dashboard data:', error);
        }
    };

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
                        Here&apos;s what&apos;s happening with your content today.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-lg shadow p-6"
                    >
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-indigo-100">
                                <FileText className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Articles</p>
                                <p className="text-2xl font-semibold text-gray-900">{stats.totalArticles}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-lg shadow p-6"
                    >
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-green-100">
                                <Eye className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Views</p>
                                <p className="text-2xl font-semibold text-gray-900">{stats.totalViews}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-lg shadow p-6"
                    >
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-yellow-100">
                                <ThumbsUp className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Likes</p>
                                <p className="text-2xl font-semibold text-gray-900">{stats.totalLikes}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-lg shadow p-6"
                    >
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-blue-100">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Followers</p>
                                <p className="text-2xl font-semibold text-gray-900">{stats.totalFollowers}</p>
                            </div>
                        </div>
                    </motion.div>
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white rounded-lg shadow"
                    >
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-medium text-gray-900">Your Articles</h2>
                                <button
                                    onClick={() => router.push('/dashboard/articles/new')}
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    <Plus className="h-5 w-5 mr-2" />
                                    New Article
                                </button>
                            </div>
                        </div>

                        <div className="divide-y divide-gray-200">
                            {articles.map((article) => (
                                <div key={article.id} className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">
                                                {article.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{article.excerpt}</p>
                                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                                <Clock className="h-4 w-4 mr-1" />
                                                {new Date(article.createdAt).toLocaleDateString()}
                                                <span className="mx-2">•</span>
                                                <span
                                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${article.status === 'published'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                        }`}
                                                >
                                                    {article.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Eye className="h-4 w-4 mr-1" />
                                                {article.views}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <ThumbsUp className="h-4 w-4 mr-1" />
                                                {article.likes}
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => router.push(`/dashboard/articles/${article.id}/edit`)}
                                                    className="text-gray-400 hover:text-gray-500"
                                                >
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        // Handle delete
                                                    }}
                                                    className="text-gray-400 hover:text-red-500"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </ProtectedRoute>
    );
}
