"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Globe, Target } from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "Quality Content",
        description: "Access well-researched and professionally written articles.",
    },
    {
        icon: Users,
        title: "Expert Writers",
        description: "Learn from industry professionals and thought leaders.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Connect with a worldwide community of readers and writers.",
    },
    {
        icon: Target,
        title: "Focused Topics",
        description: "Find content tailored to your interests and needs.",
    },
];

export default function HeroSection() {
    return (
        <div className="relative bg-gradient-to-r from-indigo-700 to-indigo-900 min-h-screen flex items-center justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                            Welcome to UkuriKose
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                    >
                        Discover Knowledge, Share Wisdom
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-lg sm:text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed"
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
                            className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300 shadow-md"
                        >
                            Explore Articles
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="/register"
                            className="inline-flex items-center px-6 py-3 rounded-lg text-indigo-700 bg-white hover:bg-gray-100 transition-colors duration-300 shadow-md"
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
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-indigo-200 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
