"use client";

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Globe, Target } from 'lucide-react';

const features = [
    {
        icon: BookOpen,
        title: 'Quality Content',
        description: 'Access well-researched and professionally written articles'
    },
    {
        icon: Users,
        title: 'Expert Writers',
        description: 'Learn from industry professionals and thought leaders'
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Connect with a worldwide community of readers and writers'
    },
    {
        icon: Target,
        title: 'Focused Topics',
        description: 'Find content tailored to your interests and needs'
    }
];

export default function Hero() {
    return (
        <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-200">
                            <span className="text-sm font-medium">Welcome to UkuriKose</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                    >
                        Discover Knowledge, Share Wisdom
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                    >
                        Join our community of writers and readers to explore, learn, and share insights on topics that matter.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="/articles"
                            className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200"
                        >
                            Explore Articles
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="/register"
                            className="inline-flex items-center px-6 py-3 rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
                        >
                            Get Started
                        </a>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-indigo-100 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
