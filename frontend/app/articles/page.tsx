'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Clock, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

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
            excerpt: 'Exploring the latest developments in AI and their impact on society. From machine learning breakthroughs to ethical considerations, discover how AI is shaping our future.',
            author: 'John Doe',
            authorImage: '/authors/john-doe.jpg',
            category: 'Technology',
            readTime: '5 min read',
            likes: 234,
            views: 1205,
            isTrending: true,
            tags: ['AI', 'Technology', 'Future', 'Machine Learning'],
            image: '/articles/ai-future.jpg',
            publishedAt: '2024-02-15'
        },
        {
            id: 2,
            title: 'Sustainable Business Practices in 2024',
            excerpt: 'How companies are adapting to environmental challenges and implementing eco-friendly solutions. Learn about innovative approaches to sustainability in modern business.',
            author: 'Jane Smith',
            authorImage: '/authors/jane-smith.jpg',
            category: 'Business',
            readTime: '7 min read',
            likes: 189,
            views: 892,
            isTrending: true,
            tags: ['Sustainability', 'Business', 'Environment', 'Green Tech'],
            image: '/articles/sustainable-business.jpg',
            publishedAt: '2024-02-14'
        },
        {
            id: 3,
            title: 'Breakthrough in Quantum Computing',
            excerpt: 'Scientists achieve major milestone in quantum computing research, opening new possibilities for complex problem-solving and cryptography.',
            author: 'Dr. Robert Chen',
            authorImage: '/authors/robert-chen.jpg',
            category: 'Science',
            readTime: '8 min read',
            likes: 156,
            views: 743,
            isTrending: false,
            tags: ['Quantum Computing', 'Science', 'Technology', 'Research'],
            image: '/articles/quantum-computing.jpg',
            publishedAt: '2024-02-13'
        },
        {
            id: 4,
            title: 'Mindfulness and Mental Health',
            excerpt: 'Understanding the importance of mindfulness practices in maintaining mental health and reducing stress in our fast-paced world.',
            author: 'Sarah Johnson',
            authorImage: '/authors/sarah-johnson.jpg',
            category: 'Health',
            readTime: '6 min read',
            likes: 278,
            views: 1567,
            isTrending: true,
            tags: ['Mental Health', 'Mindfulness', 'Wellness', 'Self-care'],
            image: '/articles/mindfulness.jpg',
            publishedAt: '2024-02-12'
        },
        {
            id: 5,
            title: 'The Rise of Remote Education',
            excerpt: 'How digital technologies are transforming education and creating new opportunities for learning in the post-pandemic world.',
            author: 'Michael Brown',
            authorImage: '/authors/michael-brown.jpg',
            category: 'Education',
            readTime: '5 min read',
            likes: 145,
            views: 892,
            isTrending: false,
            tags: ['Education', 'Remote Learning', 'EdTech', 'Digital'],
            image: '/articles/remote-education.jpg',
            publishedAt: '2024-02-11'
        },
        {
            id: 6,
            title: 'Modern Interior Design Trends',
            excerpt: 'Discover the latest trends in interior design, from minimalist aesthetics to sustainable materials and smart home integration.',
            author: 'Emma Davis',
            authorImage: '/authors/emma-davis.jpg',
            category: 'Lifestyle',
            readTime: '4 min read',
            likes: 198,
            views: 945,
            isTrending: false,
            tags: ['Interior Design', 'Home', 'Lifestyle', 'Trends'],
            image: '/articles/interior-design.jpg',
            publishedAt: '2024-02-10'
        }
    ];

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    const trendingArticles = articles.filter(article => article.isTrending);

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

            {/* Trending Articles */}
            {trendingArticles.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center mb-6">
                        <TrendingUp className="h-6 w-6 text-indigo-600 mr-2" />
                        <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trendingArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                                    />
                                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                                        <TrendingUp className="h-3 w-3 mr-1" />
                                        Trending
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <Clock className="h-4 w-4" />
                                        <span>{article.readTime}</span>
                                        <span className="mx-2">•</span>
                                        <Eye className="h-4 w-4" />
                                        <span>{article.views}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                            <Image
                                                src={article.authorImage}
                                                alt={article.author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
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
            )}

            {/* All Articles */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <Clock className="h-4 w-4" />
                                    <span>{article.readTime}</span>
                                    <span className="mx-2">•</span>
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>{article.likes}</span>
                                    <span className="mx-2">•</span>
                                    <Eye className="h-4 w-4" />
                                    <span>{article.views}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                        <Image
                                            src={article.authorImage}
                                            alt={article.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
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
