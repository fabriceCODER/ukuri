'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Sparkles, Shield } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-32 px-6 sm:px-8 lg:px-16"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                            >
                                Share Your Knowledge
                                <span className="block text-indigo-200">Empower Others</span>
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                            >
                                Join our platform to create, share, and discover high-quality content. Connect with readers and fellow writers in a professional environment.
                            </motion.p>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
                            >
                                <Link
                                    href="/register"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition duration-150 ease-in-out"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                                    <img
                                        className="w-full"
                                        src="/hero-image.jpg"
                                        alt="Content Platform"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Features Section */}
            <section className="py-20 px-6 sm:px-8 lg:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Why Choose UkuriKose?
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Everything you need to create and share professional content
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: <BookOpen className="h-8 w-8" />,
                                title: 'Rich Content Editor',
                                description: 'Create beautiful articles with our intuitive editor',
                            },
                            {
                                icon: <Users className="h-8 w-8" />,
                                title: 'Growing Community',
                                description: 'Connect with readers and fellow writers',
                            },
                            {
                                icon: <Sparkles className="h-8 w-8" />,
                                title: 'Analytics & Insights',
                                description: 'Track your content performance and reach',
                            },
                            {
                                icon: <Shield className="h-8 w-8" />,
                                title: 'Secure Platform',
                                description: 'Your content is safe and protected',
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 * index }}
                                className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-indigo-700 py-16 px-6 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Ready to Start Writing?
                    </h2>
                    <p className="mt-4 text-xl text-indigo-100">
                        Join thousands of writers who trust UkuriKose for their content creation
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/register"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition duration-150 ease-in-out"
                        >
                            Create Your Account
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
