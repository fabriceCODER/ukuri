"use client";
import Link from "next/link";
import { BookOpen, Clock, ThumbsUp, ArrowRight } from 'lucide-react';

const featuredArticles = [
    {
        id: 1,
        title: 'The Future of Artificial Intelligence',
        excerpt: 'Exploring the latest developments in AI and their impact on society.',
        author: 'John Doe',
        readTime: '5 min read',
        likes: 234,
        image: '/images/newai.jpg'
    },
    {
        id: 2,
        title: 'Sustainable Business Practices',
        excerpt: 'How companies are adapting to environmental challenges.',
        author: 'Jane Smith',
        readTime: '7 min read',
        likes: 189,
        image: '/images/stock-market.jpg'
    },
    {
        id: 3,
        title: 'Digital Transformation',
        excerpt: 'The role of technology in modern business operations.',
        author: 'Mike Johnson',
        readTime: '6 min read',
        likes: 156,
        image: '/images/ai.jpg'
    }
];

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900">
            {/* Header */}
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="text-5xl font-bold text-white mb-6">
                    Welcome to <span className="text-indigo-400">UkuriKose</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                    Your trusted source for curated news and insightful articles from around the globe.
                </p>

                <div className="flex gap-4">
                    <Link
                        href="/login"
                        className="px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/register"
                        className="px-6 py-3 rounded-lg border border-gray-300 text-white hover:bg-gray-700 transition"
                    >
                        Create Account
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 bg-gray-800 text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-lg bg-gray-900">
                        <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
                        <p className="text-gray-400">Access news from every corner of the world.</p>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-900">
                        <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
                        <p className="text-gray-400">Stay informed with the latest developments.</p>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-900">
                        <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
                        <p className="text-gray-400">Gain insights from industry experts.</p>
                    </div>
                </div>
            </div>

            {/* Featured Articles Section */}
            <div className="py-16 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredArticles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-indigo-500 transition"
                        >
                            <div className="relative h-48 bg-gray-900 flex items-center justify-center">
                                <BookOpen className="w-12 h-12 text-indigo-400 opacity-50" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                                    <Clock className="h-4 w-4" />
                                    <span>{article.readTime}</span>
                                    <span className="mx-2">•</span>
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>{article.likes}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">By {article.author}</span>
                                    <Link
                                        href={`/articles/${article.id}`}
                                        className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 transition"
                                    >
                                        Read more
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
