"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

const PrivacyPage = () => {
    return (
        <section className="max-w-5xl mx-auto my-20 px-6">
            <Navbar />
            {/* Page Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
                <p className="text-lg text-gray-600 mt-2">Your privacy matters. Learn how we collect, use, and protect your data.</p>
            </div>

            {/* Privacy Content */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-10 space-y-8 text-gray-700"
            >
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
                    <p className="mt-2">
                        We collect personal and non-personal information, including name, email, and browsing behavior, to enhance your experience.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
                    <p className="mt-2">
                        Your data helps us improve our services, personalize content, and provide a secure browsing experience.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">3. Cookies & Tracking Technologies</h2>
                    <p className="mt-2">
                        We use cookies to analyze site traffic and enhance user experience. You can manage cookie preferences in your browser settings.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">4. Data Protection & Security</h2>
                    <p className="mt-2">
                        We implement industry-standard security measures to safeguard your information from unauthorized access.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">5. Third-Party Services</h2>
                    <p className="mt-2">
                        We may integrate with third-party platforms like Google and Facebook for authentication, which follow their respective privacy policies.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">6. Your Rights</h2>
                    <p className="mt-2">
                        You have the right to access, update, or delete your data. Contact us if you need assistance.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">7. Updates to This Policy</h2>
                    <p className="mt-2">
                        We may update our privacy policy periodically. Check this page for the latest version.
                    </p>
                </div>
            </motion.div>

            {/* Contact & CTA */}
            <div className="mt-16 text-center">
                <p className="text-lg text-gray-700">Have questions? Contact us at <span className="text-blue-600">support@newsplatform.com</span></p>
            </div>
        </section>
    );
};

export default PrivacyPage;
