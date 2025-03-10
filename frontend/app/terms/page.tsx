"use client";

import { motion } from "framer-motion";
import { Scale, Shield, FileText, CheckCircle, AlertCircle, Info } from "lucide-react";

export default function TermsPage() {
    const sections = [
        {
            title: 'Acceptance of Terms',
            icon: CheckCircle,
            description: 'Understanding and agreeing to our terms of service',
            content: [
                'By accessing and using UkuriKose, you agree to be bound by these terms',
                'You must be at least 18 years old to use our services',
                'You are responsible for maintaining the security of your account',
                'You agree to provide accurate and complete information',
                'You understand that your content may be reviewed and moderated',
                'You acknowledge that we may modify these terms at any time'
            ]
        },
        {
            title: 'User Responsibilities',
            icon: Shield,
            description: 'Your obligations and responsibilities as a user',
            content: [
                'Maintain the confidentiality of your account credentials',
                'Respect intellectual property rights and copyright laws',
                'Follow community guidelines and content policies',
                'Report any violations or suspicious activities',
                'Keep your account information up to date',
                'Use the platform in compliance with applicable laws'
            ]
        },
        {
            title: 'Content Guidelines',
            icon: FileText,
            description: 'Rules and standards for content creation and sharing',
            content: [
                'Content must be original and not infringe on others\' rights',
                'No hate speech, harassment, or discriminatory content',
                'No spam, misleading information, or malicious content',
                'Respect privacy and personal information',
                'Follow proper citation and attribution practices',
                'Maintain professional and respectful communication'
            ]
        },
        {
            title: 'Platform Rules',
            icon: Scale,
            description: 'General rules and policies for using our platform',
            content: [
                'No unauthorized access or use of the platform',
                'No interference with platform functionality',
                'No automated scraping or data collection',
                'No creation of multiple accounts',
                'No sharing of account access',
                'No use of the platform for illegal purposes'
            ]
        }
    ];

    const features = [
        {
            icon: Shield,
            title: 'Secure Platform',
            description: 'Your data and content are protected with industry-standard security measures'
        },
        {
            icon: CheckCircle,
            title: 'Clear Guidelines',
            description: 'Transparent rules and policies for all users'
        },
        {
            icon: AlertCircle,
            title: 'Fair Moderation',
            description: 'Consistent and fair content moderation practices'
        },
        {
            icon: Info,
            title: 'Regular Updates',
            description: 'Terms are regularly reviewed and updated as needed'
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
                            Please read these terms carefully before using our platform
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
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

            {/* Terms Sections */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
                        If you have any questions about our terms of service, please contact our support team
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:support@ukurikose.com"
                            className="inline-flex items-center px-6 py-3 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200"
                        >
                            support@ukurikose.com
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                        >
                            Contact Support
                        </a>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            These terms are effective as of February 15, 2024
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
