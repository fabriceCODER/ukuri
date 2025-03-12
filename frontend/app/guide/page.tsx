"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';

const guideSections = [
    {
        title: 'Getting Started',
        content: 'Learn how to create your account and set up your profile.'
    },
    {
        title: 'Writing Articles',
        content: 'Guidelines for creating and publishing high-quality content.'
    },
    {
        title: 'Community Guidelines',
        content: 'Our standards for maintaining a respectful and engaging community.'
    }
];

export default function GuidePage() {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Writer&apos;s Guide
                    </h1>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about writing for our platform.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {guideSections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleSection(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left"
                            >
                                <h2 className="text-lg font-medium text-gray-900">
                                    {section.title}
                                </h2>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-500 transform transition-transform ${openSection === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openSection === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-4"
                                >
                                    <p className="text-gray-600">{section.content}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
