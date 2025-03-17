"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ThumbsUp, ArrowRight } from "lucide-react";

const featuredArticles = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence",
        excerpt: "Exploring the latest developments in AI and their impact on society.",
        author: "John Doe",
        readTime: "5 min read",
        likes: 234,
    },
    {
        id: 2,
        title: "Sustainable Business Practices",
        excerpt: "How companies are adapting to environmental challenges.",
        author: "Jane Smith",
        readTime: "7 min read",
        likes: 189,
    },
    {
        id: 3,
        title: "Digital Transformation",
        excerpt: "The role of technology in modern business operations.",
        author: "Mike Johnson",
        readTime: "6 min read",
        likes: 156,
    },
];

const FeaturedArticles = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-black">
                    Featured <span className="text-indigo-600">Articles</span>
                </h2>
                <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                    Explore expert insights, trending topics, and in-depth analysis from industry professionals.
                </p>
            </motion.div>

            {/* Articles Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredArticles.map((article, index) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="bg-gray-100 rounded-xl overflow-hidden border border-gray-300 hover:border-indigo-500 transition-all duration-300 shadow-md"
                    >
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                <Clock className="h-4 w-4" />
                                <span>{article.readTime}</span>
                                <span className="mx-2">•</span>
                                <ThumbsUp className="h-4 w-4" />
                                <span>{article.likes}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-2">{article.title}</h3>
                            <p className="text-gray-700 mb-4">{article.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">By {article.author}</span>
                                <Link
                                    href={`/articles/${article.id}`}
                                    className="text-indigo-600 hover:text-indigo-500 text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200"
                                >
                                    Read more
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedArticles;
