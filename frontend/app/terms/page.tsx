"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

const TermsPage = () => {
    return (
        <section className="max-w-5xl mx-auto my-20 px-6">
            <Navbar />
            {/* Page Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
                <p className="text-lg text-gray-600 mt-2">Understand the rules and guidelines for using our platform.</p>
            </div>

            {/* Terms Content */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-10 space-y-8 text-gray-700"
            >
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
                    <p className="mt-2">
                        By using our platform, you agree to comply with these terms and any applicable laws. If you disagree, please discontinue use immediately.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">2. User Responsibilities</h2>
                    <p className="mt-2">
                        You are responsible for the content you post and must not share false, misleading, or harmful information.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">3. Intellectual Property</h2>
                    <p className="mt-2">
                        All content on this platform, unless otherwise stated, is the intellectual property of our news platform. Unauthorized use is prohibited.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">4. User-Generated Content</h2>
                    <p className="mt-2">
                        Users may submit news, comments, and other content. We reserve the right to moderate or remove content that violates our policies.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">5. Limitation of Liability</h2>
                    <p className="mt-2">
                        We are not responsible for any inaccuracies in news articles or user-generated content. Use the information at your own risk.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">6. Termination of Access</h2>
                    <p className="mt-2">
                        We reserve the right to suspend or terminate accounts that violate these terms or engage in abusive behavior.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">7. Updates to Terms</h2>
                    <p className="mt-2">
                        We may update these terms periodically. Continued use of the platform implies acceptance of the updated terms.
                    </p>
                </div>
            </motion.div>

            {/* Contact & CTA */}
            <div className="mt-16 text-center">
                <p className="text-lg text-gray-700">
                    Have questions? Contact us at <span className="text-blue-600">support@newsplatform.com</span>
                </p>
            </div>
        </section>
    );
};

export default TermsPage;
