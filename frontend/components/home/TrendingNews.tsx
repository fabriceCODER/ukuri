"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const trendingNews = [
    { id: 1, title: "Stock Market Hits Record High", link: "/stock-market.jpg" },
    { id: 2, title: "Tech Giants Release New AI Models", link: "/newai.jpg" },
    { id: 3, title: "Sports Championships Begin This Weekend", link: "/sports.jpg" },
];

const TrendingNews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % trendingNews.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-800 text-white py-3">
            <div className="container mx-auto flex items-center">
                <span className="mr-4 font-bold text-lg">🔥 Trending:</span>
                <AnimatePresence>
                    <motion.div
                        key={trendingNews[currentIndex].id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg font-semibold"
                    >
                        <Link href={trendingNews[currentIndex].link}>
                            {trendingNews[currentIndex].title}
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TrendingNews;
