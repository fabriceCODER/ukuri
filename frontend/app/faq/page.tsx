"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const faqData = [
    {
        question: "What kind of news does this platform cover?",
        answer: "We cover news from all domains, including politics, technology, business, health, sports, and more. Our goal is to provide well-rounded, fact-based journalism."
    },
    {
        question: "Can I contribute my own news articles?",
        answer: "Yes! We encourage community-driven reporting. You can submit your news articles through the 'Submit News' section, and our editorial team will review them before publishing."
    },
    {
        question: "Is the news verified before publishing?",
        answer: "Absolutely. Our team ensures that all submitted articles go through a strict verification process to maintain credibility and accuracy."
    },
    {
        question: "How often is the platform updated?",
        answer: "Our platform is updated in real-time, ensuring that you get the latest and most relevant news as soon as it happens."
    },
    {
        question: "Is there a mobile app available?",
        answer: "Currently, we are working on a mobile app for iOS and Android to enhance your experience. Stay tuned for updates!"
    }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-fit mx-auto my-28 px-6">
            <Navbar/>
            <h1 className="text-4xl font-bold text-center text-gray-900">Frequently Asked Questions</h1>
            <p className="text-lg text-center text-gray-600 mt-2">Find answers to the most common questions about our platform.</p>

            <div className="mt-10 space-y-4">
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border border-gray-300 rounded-lg shadow-md"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
                        >
                            <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                            {openIndex === index ? <FaMinus className="text-gray-700" /> : <FaPlus className="text-gray-700" />}
                        </button>

                        {openIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                                className="px-5 py-3 bg-white"
                            >
                                <p className="text-gray-700">{faq.answer}</p>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FAQPage;
