"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const newsItems = [
    {id: 1, title: "World Leaders Meet for Global Summit", image: "/images/ai.jpg"},
    {id: 2, title: "New AI Model Revolutionizes Job Market", image: "/images/leaders.jpg"},
    {id: 3, title: "Tech Stocks See Unprecedented Growth", image: "/images/stock.jpg"},
];

interface HeadingProps {
    title?: string,
    subtitle?: string
}

const Heading = ({title, subtitle}: HeadingProps) => {
    return (
        <header className="relative w-full h-[400px] overflow-hidden">
            <motion.div
                className="absolute inset-0 flex"
                animate={{x: ["0%", "-100%"]}}
                transition={{ease: "linear", duration: 10, repeat: Infinity}}
            >
                {[...newsItems, ...newsItems].map((item, index) => (
                    <div key={index} className="relative w-screen h-full flex-shrink-0">
                        <Image src={item.image} alt={item.title} layout="fill" className="object-cover"/>
                        <div className="absolute bottom-0 left-0 bg-blue-950 bg-opacity-50 text-white p-4">
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </motion.div>
        </header>
    );
};

export default Heading;
