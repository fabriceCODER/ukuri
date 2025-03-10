'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Filter, Clock, User, ThumbsUp, Tag } from 'lucide-react';

export default function ArticlesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        'All',
        'Technology',
        'Business',
        'Science',
        'Health',
        'Education',
        'Lifestyle',
        'Culture',
    ];

    const articles = [
        {
            id: 1,
            title: 'The Future of Artificial Intelligence',
            excerpt: 'Exploring the latest developments in AI and their impact on society...',
            author: 'John Doe',
            category: 'Technology',
            readTime: '5 min read',
            likes: 234,
            tags: ['AI', 'Technology', 'Future'],
            image: '/placeholder-1.jpg'
        },
        {
            id: 2,
            title: 'Sustainable Business Practices',
            excerpt: 'How companies are adapting to environmental challenges...',
            author: 'Jane Smith',
            category: 'Business',
            readTime: '7 min read',
            likes: 189,
            tags: ['Sustainability', 'Business', 'Environment'],
            image: '/placeholder-2.jpg'
        },
        // Add more articles as needed
    ];

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-24 sm:py-32"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center mb-6"
                        >
                            <BookOpen className="h-16 w-16 text-indigo-200" />
                        </motion.div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                        >
                            Explore Articles
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                        >
                            Discover insightful articles from our community of expert writers
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Search and Filter Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-xl p-6"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                            />
                        </div>
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow appearance-none bg-white"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category.toLowerCase()}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                        >
                            <div className="h-48 bg-gray-200">
                                {/* Image placeholder */}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <Clock className="h-4 w-4" />
                                    <span>{article.readTime}</span>
                                    <span className="mx-2">•</span>
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>{article.likes}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                <div className="flex items-center gap-2 mb-4">
                                    <User className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">{article.author}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-600"
                                        >
                                            <Tag className="h-3 w-3 mr-1" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
