'use client';

import { motion } from 'framer-motion';
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
        image: '/articles/ai-future.jpg'
    },
    {
        id: 2,
        title: 'Sustainable Business Practices',
        excerpt: 'How companies are adapting to environmental challenges.',
        author: 'Jane Smith',
        readTime: '7 min read',
        likes: 189,
        image: '/articles/sustainable-business.jpg'
    },
    {
        id: 3,
        title: 'Digital Transformation',
        excerpt: 'The role of technology in modern business operations.',
        author: 'Mike Johnson',
        readTime: '6 min read',
        likes: 156,
        image: '/articles/digital-transformation.jpg'
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

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Hero />

            {/* Featured Articles */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-gray-900"
                        >
                            Featured Articles
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 text-lg text-gray-600"
                        >
                            Discover our most popular and engaging content
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
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
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">By {article.author}</span>
                                        <a
                                            href={`/articles/${article.id}`}
                                            className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                                        >
                                            Read more →
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-gray-900"
                        >
                            Browse Categories
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 text-lg text-gray-600"
                        >
                            Explore articles by topic
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => (
                            <motion.a
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                href={`/articles?category=${category.name.toLowerCase()}`}
                                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200"
                            >
                                <h3 className="font-medium text-gray-900">{category.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{category.count} articles</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Share Your Knowledge?
                        </h2>
                        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Join our community of writers and share your insights with readers worldwide.
                        </p>
                        <a
                            href="/register"
                            className="inline-flex items-center px-6 py-3 rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
