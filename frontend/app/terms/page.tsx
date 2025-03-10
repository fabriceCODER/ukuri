"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Users, AlertCircle } from "lucide-react";

export default function TermsPage() {
    const sections = [
        {
            title: 'Terms of Use',
            content: [
                'By accessing and using UkuriKose, you agree to comply with and be bound by these Terms of Service.',
                'You must be at least 18 years old to use our services.',
                'You are responsible for maintaining the confidentiality of your account credentials.',
            ]
        },
        {
            title: 'Content Guidelines',
            content: [
                'All submitted content must be original and not infringe on any intellectual property rights.',
                'Content must not contain hate speech, discrimination, or inappropriate material.',
                'We reserve the right to remove any content that violates our guidelines.',
            ]
        },
        {
            title: 'User Responsibilities',
            content: [
                'Users must provide accurate information when creating an account.',
                'Users are responsible for all activities that occur under their account.',
                'Users must not engage in any activity that disrupts our services.',
            ]
        },
        {
            title: 'Privacy and Data',
            content: [
                'We collect and process personal data as described in our Privacy Policy.',
                'Users retain ownership of their content but grant us license to use it.',
                'We implement security measures to protect user data.',
            ]
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
                            <Scale className="h-16 w-16 text-indigo-200" />
                        </motion.div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                        >
                            Terms of Service
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                        >
                            Please read these terms carefully before using our services
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Key Points Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        {
                            icon: Shield,
                            title: 'Security First',
                            description: 'We prioritize the security and privacy of our users data'
                        },
                        {
                            icon: Users,
                            title: 'Community Guidelines',
                            description: 'Clear rules to maintain a respectful environment'
                        },
                        {
                            icon: AlertCircle,
                            title: 'Your Rights',
                            description: 'Understanding your rights and responsibilities'
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100 mb-6">
                                <item.icon className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Terms Sections */}
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
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                            <ul className="space-y-4">
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

                {/* Last Updated */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12 text-sm text-gray-500"
                >
                    Last updated: {new Date().toLocaleDateString()}
                </motion.div>
            </div>
        </div>
    );
}
