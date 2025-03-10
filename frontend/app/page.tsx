'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAuth } from '@/utils/AuthContext';

export default function HomePage() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Welcome to UkuriKose
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Your trusted source for news and articles. Stay informed with the latest updates
                        from around the world.
                    </p>
                    <div className="flex justify-center gap-4">
                        {user ? (
                            <Link
                                href="/dashboard"
                                className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    className="px-8 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition"
                                >
                                    Create Account
                                </Link>
                            </>
                        )}
                    </div>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Latest News</h3>
                        <p className="text-gray-600">
                            Stay updated with breaking news and current events from reliable sources.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Expert Analysis</h3>
                        <p className="text-gray-600">
                            Get in-depth analysis and insights from industry experts and thought leaders.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
                        <p className="text-gray-600">
                            Join discussions, share perspectives, and connect with other readers.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
