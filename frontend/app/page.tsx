'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAuth } from '@/utils/AuthContext';
import { Newspaper, Users, TrendingUp, Globe } from 'lucide-react';

const features = [
    {
        icon: Newspaper,
        title: 'Latest News',
        description: 'Stay updated with breaking news and current events from reliable sources.',
    },
    {
        icon: Users,
        title: 'Expert Analysis',
        description: 'Get in-depth analysis and insights from industry experts and thought leaders.',
    },
    {
        icon: TrendingUp,
        title: 'Trending Topics',
        description: 'Discover what\'s trending and stay ahead of the curve with our curated content.',
    },
    {
        icon: Globe,
        title: 'Global Coverage',
        description: 'Access news and stories from around the world, bringing you a global perspective.',
    },
];

export default function HomePage() {
    const { user } = useAuth();

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-indigo-100 to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Choose UkuriKose?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover the features that make us the leading platform for news and information.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                                >
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <Icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-indigo-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Join our community of readers and stay informed with the latest news and updates.
                        </p>
                        <Link
                            href="/signup"
                            className="px-8 py-3 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 transition inline-block"
                        >
                            Create Your Account
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
