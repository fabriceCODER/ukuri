"use client";

import Image from "next/image";
import Link from "next/link";
import { FaNewspaper, FaGlobe, FaUsers } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="relative w-full h-[80vh] flex items-center my-20 justify-center bg-gray-900 text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/back.jpg"
                    alt="News Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                    priority
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold">Stay Informed, Stay Ahead</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    Get the latest news from around the world, covering all domains.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link href="/articles">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition">
                            Explore Articles
                        </button>
                    </Link>
                    <Link href="/submit">
                        <button className="px-6 py-3 border border-gray-300 text-white hover:bg-gray-700 rounded-lg transition">
                            Submit News
                        </button>
                    </Link>
                </div>

                {/* Feature Icons */}
                <div className="mt-10 flex justify-center gap-6 text-gray-300">
                    <div className="flex flex-col items-center">
                        <FaNewspaper size={40} />
                        <p className="mt-2 text-sm">Latest News</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGlobe size={40} />
                        <p className="mt-2 text-sm">Global Coverage</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaUsers size={40} />
                        <p className="mt-2 text-sm">Community Reporting</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
