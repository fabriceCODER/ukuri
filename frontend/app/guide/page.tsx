"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaSearch, FaEdit, FaGlobe, FaRegNewspaper } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import { BookOpen, Edit, Image as ImageIcon, Tags, Send, ThumbsUp, Users, Settings } from 'lucide-react';

const guideSections = [
    {
        id: "getting-started",
        title: "Getting Started",
        content: "Welcome to our news platform! Whether you're here to stay informed or contribute your own news, this guide will help you navigate the site effectively."
    },
    {
        id: "browsing-news",
        title: "Browsing & Searching News",
        icon: <FaSearch className="text-blue-500" size={25} />,
        content: "You can explore the latest news articles from different categories on the homepage. Use the search bar to quickly find articles on topics that interest you."
    },
    {
        id: "submitting-news",
        title: "Submitting Your News",
        icon: <FaEdit className="text-green-500" size={25} />,
        content: "Want to contribute? Click on 'Submit News' and fill out the form with your article's details. Our editorial team will review it before publishing."
    },
    {
        id: "verification-process",
        title: "How We Verify News",
        icon: <FaGlobe className="text-orange-500" size={25} />,
        content: "All submitted articles go through a strict fact-checking process to ensure accuracy and credibility before they are published on our platform."
    },
    {
        id: "staying-updated",
        title: "Staying Updated",
        icon: <FaRegNewspaper className="text-purple-500" size={25} />,
        content: "Subscribe to our newsletter or enable notifications to receive the latest updates directly in your inbox or on your device."
    }
];

const GuidePage = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (id: string) => {
        setOpenSection(openSection === id ? null : id);
    };

    const sections = [
        {
            title: 'Getting Started',
            icon: BookOpen,
            steps: [
                'Create an account or sign in',
                'Complete your profile with relevant information',
                'Choose your areas of interest',
                'Start exploring content or create your first article',
            ]
        },
        {
            title: 'Writing Articles',
            icon: Edit,
            steps: [
                'Click on "Submit Article" in the navigation',
                'Choose a compelling title and category',
                'Write your content using our rich text editor',
                'Add relevant tags to help readers find your content',
            ]
        },
        {
            title: 'Adding Media',
            icon: ImageIcon,
            steps: [
                'Upload a cover image for your article',
                'Include relevant images within your content',
                'Add captions to explain visual content',
                'Ensure all media is properly credited',
            ]
        },
        {
            title: 'Publishing Process',
            icon: Send,
            steps: [
                'Review your article for accuracy',
                'Submit for editorial review',
                'Receive feedback from our team',
                'Make necessary revisions if requested',
            ]
        }
    ];

    const tips = [
        {
            icon: ThumbsUp,
            title: 'Quality Content',
            description: 'Focus on providing value to readers with well-researched, original content'
        },
        {
            icon: Tags,
            title: 'Proper Tagging',
            description: 'Use relevant tags to help readers discover your articles'
        },
        {
            icon: Users,
            title: 'Engage Community',
            description: 'Interact with readers through comments and discussions'
        },
        {
            icon: Settings,
            title: 'Regular Updates',
            description: 'Keep your content fresh and up-to-date'
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
                            <BookOpen className="h-16 w-16 text-indigo-200" />
                        </motion.div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                        >
                            Writer's Guide
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                        >
                            Learn how to create engaging content and reach a global audience
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Tips Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {tips.map((tip, index) => (
                        <motion.div
                            key={tip.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100 mb-6">
                                <tip.icon className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
                            <p className="text-gray-600">{tip.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Guide Sections */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white rounded-xl shadow-sm p-8"
                        >
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mr-4">
                                    <section.icon className="h-6 w-6 text-indigo-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                            </div>
                            <ol className="space-y-4">
                                {section.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold mr-3">
                                            {stepIndex + 1}
                                        </span>
                                        <span className="text-gray-600">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Resources */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Need More Help?</h3>
                    <p className="text-gray-600">
                        Check out our{' '}
                        <a href="/faq" className="text-indigo-600 hover:text-indigo-500">
                            FAQ section
                        </a>{' '}
                        or contact our support team at{' '}
                        <a href="mailto:support@ukurikose.com" className="text-indigo-600 hover:text-indigo-500">
                            support@ukurikose.com
                        </a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default GuidePage;
