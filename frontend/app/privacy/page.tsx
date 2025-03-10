"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Key, Trash2, Download, Settings, ExternalLink } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function PrivacyPage() {
    const sections = [
        {
            title: 'Information We Collect',
            icon: Database,
            description: 'Understanding what information we collect and how we use it',
            content: [
                'Personal information provided during registration',
                'Usage data and analytics',
                'Content you create and share',
                'Communication data and preferences',
                'Device and browser information',
                'Location data (with your consent)',
            ]
        },
        {
            title: 'How We Use Your Data',
            icon: Settings,
            description: 'Transparent information about data usage and processing',
            content: [
                'To provide and improve our services',
                'To personalize your experience',
                'To communicate with you about updates',
                'For security and fraud prevention',
                'To analyze and improve our platform',
                'To comply with legal obligations',
            ]
        },
        {
            title: 'Data Protection',
            icon: Shield,
            description: 'Our commitment to keeping your data safe and secure',
            content: [
                'Industry-standard security measures',
                'Regular security audits and updates',
                'Encrypted data transmission (SSL/TLS)',
                'Secure data storage with encryption',
                'Access controls and authentication',
                'Regular backup procedures',
            ]
        },
        {
            title: 'Your Rights',
            icon: Key,
            description: 'Understanding and exercising your data privacy rights',
            content: [
                'Access your personal data anytime',
                'Request data correction or updates',
                'Delete your account and data',
                'Export your data in common formats',
                'Opt-out of data processing',
                'Withdraw consent at any time',
            ]
        }
    ];

    const features = [
        {
            icon: Lock,
            title: 'Secure Storage',
            description: 'Your data is encrypted and stored securely using industry-standard protocols'
        },
        {
            icon: Eye,
            title: 'Transparency',
            description: 'Clear and detailed information about how we collect and use your data'
        },
        {
            icon: Trash2,
            title: 'Data Control',
            description: 'Full control over your data with easy deletion and export options'
        },
        {
            icon: Download,
            title: 'Data Portability',
            description: 'Export your data in standard formats whenever you need'
        }
    ];

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
                            <Shield className="h-16 w-16 text-indigo-200" />
                        </motion.div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                        >
                            Privacy Policy
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                        >
                            We take your privacy seriously. Learn how we protect and manage your data.
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100 mb-6">
                                <feature.icon className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Privacy Sections */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-8"
                        >
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mr-4">
                                    <section.icon className="h-6 w-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                                    <p className="text-gray-600 mt-1">{section.description}</p>
                                </div>
                            </div>
                            <ul className="space-y-4 ml-4">
                                {section.content.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start">
                                        <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-indigo-500 mr-3" />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 bg-white rounded-xl shadow-sm p-8 text-center"
                >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Have Questions?</h3>
                    <p className="text-gray-600 mb-6">
                        For privacy-related inquiries or to exercise your data rights, please contact our Data Protection Officer
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:privacy@ukurikose.com"
                            className="inline-flex items-center px-6 py-3 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200"
                        >
                            <Mail className="h-5 w-5 mr-2" />
                            privacy@ukurikose.com
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                        >
                            <ExternalLink className="h-5 w-5 mr-2" />
                            Contact Form
                        </a>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            This privacy policy is effective as of February 15, 2024
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
