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
        <div className="min-h-screen bg-gray-50 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

                    <div className="space-y-6 text-gray-600">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                            <p>By accessing our website, you agree to be bound by these terms of service and all applicable laws and regulations.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                            <p>Permission is granted to temporarily access the materials on our website for personal, non-commercial use only.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Content</h2>
                            <p>You retain all rights to any content you submit, post or display on or through our service.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Privacy</h2>
                            <p>Please review our Privacy Policy to understand how we collect and use your information.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Modifications</h2>
                            <p>We reserve the right to modify or replace these terms at any time. We&apos;ll notify you of any changes by posting the new terms on this page.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                            <p>If you have any questions about these terms, please contact us.</p>
                        </section>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
