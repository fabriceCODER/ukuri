"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Target, ArrowRight, Star, Clock, ThumbsUp } from 'lucide-react';
import Hero from '@/components/home/Hero';

const featuredArticles = [
    {
        id: 1,
        title: 'The Future of Artificial Intelligence',
        excerpt: 'Exploring the latest developments in AI and their impact on society.',
        author: 'John Doe',
        readTime: '5 min read',
        likes: 234,
        image: '/images/ai-future.jpg'
    },
    {
        id: 2,
        title: 'Sustainable Business Practices',
        excerpt: 'How companies are adapting to environmental challenges.',
        author: 'Jane Smith',
        readTime: '7 min read',
        likes: 189,
        image: '/images/sustainable.jpg'
    },
    {
        id: 3,
        title: 'Digital Transformation',
        excerpt: 'The role of technology in modern business operations.',
        author: 'Mike Johnson',
        readTime: '6 min read',
        likes: 156,
        image: '/images/digital.jpg'
    }
];

const categories = [
    { name: 'Technology', count: 156 },
    { name: 'Business', count: 98 },
    { name: 'Science', count: 76 },
    { name: 'Health', count: 64 },
    { name: 'Education', count: 45 },
    { name: 'Lifestyle', count: 34 }
];

const HomePage = () => {
    return (
        <div className="min-h-screen relative bg-gradient-to-b from-blue-900 to-gray-800 overflow-hidden">
            {/* Background SVG */}
            <div className="absolute inset-0 opacity-10">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 800 800"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="400"
                        cy="400"
                        r="300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-200"
                    />
                    {/* Orbit lines */}
                    <path
                        d="M 400 100 A 300 300 0 0 1 400 700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-300"
                    />
                    <path
                        d="M 100 400 A 300 300 0 0 1 700 400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-300"
                    />
                    {/* News icons and dots around the globe */}
                    <g className="text-green-200">
                        <circle cx="500" cy="300" r="4" />
                        <circle cx="300" cy="500" r="4" />
                        <circle cx="450" cy="450" r="4" />
                        <circle cx="350" cy="350" r="4" />
                        <circle cx="550" cy="400" r="4" />
                        <circle cx="250" cy="400" r="4" />
                    </g>
                    {/* Document icons */}
                    <g className="text-green-300">
                        <path d="M480 280 h20 v25 h-20 z" />
                        <path d="M280 480 h20 v25 h-20 z" />
                        <path d="M430 430 h20 v25 h-20 z" />
                        <path d="M330 330 h20 v25 h-20 z" />
                    </g>
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Welcome to{" "}
                        <span className="text-indigo-400">UkuriKose</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Your trusted source for curated news and insightful articles from around the globe.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/login"
                                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                            >
                                Sign In
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/register"
                                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-white hover:bg-gray-700 transition-colors duration-200"
                            >
                                Create Account
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-white mb-2">Global Coverage</h3>
                            <p className="text-gray-300">Access news from every corner of the world</p>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-white mb-2">Real-time Updates</h3>
                            <p className="text-gray-300">Stay informed with the latest developments</p>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-white mb-2">Expert Analysis</h3>
                            <p className="text-gray-300">Gain insights from industry experts</p>
                        </div>
                    </motion.div>

                    {/* Featured Articles Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-24 w-full max-w-7xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Featured Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                            {featuredArticles.map((article, index) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.2 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                                >
                                    <div className="relative h-48 bg-gray-900">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <BookOpen className="w-12 h-12 text-indigo-400 opacity-50" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                                            <Clock className="h-4 w-4" />
                                            <span>{article.readTime}</span>
                                            <span className="mx-2">•</span>
                                            <ThumbsUp className="h-4 w-4" />
                                            <span>{article.likes}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4">{article.excerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">By {article.author}</span>
                                            <Link
                                                href={`/articles/${article.id}`}
                                                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200"
                                            >
                                                Read more
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
    );
};

export default HomePage;
