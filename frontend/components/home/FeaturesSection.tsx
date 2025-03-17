"use client";

import { motion } from "framer-motion";
import { Globe, RefreshCw, BarChart2 } from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "Global Coverage",
        description: "Access news from every corner of the world."
    },
    {
        icon: RefreshCw,
        title: "Real-time Updates",
        description: "Stay informed with the latest developments."
    },
    {
        icon: BarChart2,
        title: "Expert Analysis",
        description: "Gain insights from industry experts."
    }
];

const FeaturesSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Why Choose <span className="text-indigo-400">UkuriKose?</span>
                </h2>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    Stay ahead with real-time updates, in-depth analysis, and a truly global perspective.
                </p>
            </motion.div>

            {/* Features Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="p-6 rounded-lg bg-white/10 backdrop-blur-md text-center border border-white/10"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                                <feature.icon className="h-6 w-6 text-indigo-400" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                        <p className="mt-2 text-gray-300">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
