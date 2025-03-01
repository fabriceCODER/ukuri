"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaSearch, FaEdit, FaGlobe, FaRegNewspaper } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";

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

    return (
        <section className="max-w-5xl mx-auto my-20 px-6">
            <Navbar/>
            {/* Page Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900">How to Use Our Platform</h1>
                <p className="text-lg text-gray-600 mt-2">Learn how to browse, submit, and stay updated with the latest news.</p>
            </div>

            {/* Table of Contents */}
            <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">Table of Contents</h2>
                <ul className="mt-3 space-y-2 text-blue-600">
                    {guideSections.map((section) => (
                        <li key={section.id}>
                            <Link href={`#${section.id}`} className="hover:underline">
                                {section.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Guide Sections */}
            <div className="mt-10 space-y-6">
                {guideSections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        id={section.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border border-gray-300 rounded-lg shadow-md p-6"
                    >
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between text-left text-lg font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-3">
                                {section.icon}
                                {section.title}
                            </div>
                            <span>{openSection === section.id ? "−" : "+"}</span>
                        </button>

                        {openSection === section.id && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                                className="mt-3 text-gray-700"
                            >
                                {section.content}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
                <p className="text-lg text-gray-700">Ready to explore the latest news?</p>
                <Link href="/articles">
                    <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition shadow-md">
                        View Articles
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default GuidePage;
