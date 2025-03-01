"use client";

import Image from "next/image";
import Link from "next/link";
import { FaNewspaper, FaGlobe, FaUsers } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="w-full h-[80vh] my-32 flex flex-col items-center justify-center text-white px-6 md:px-12 bg-gradient-to-r from-gray-900 to-gray-800">
            {/* Hero Content */}
            <div className="text-center max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Stay Informed, Stay Ahead
                </h1>
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
            </div>

            {/* Home Image */}
            <div className="mt-12">
                <Image
                    src="/images/illustration.jpg"
                    alt="News Illustration"
                    width={500}
                    height={300}
                    priority
                />
            </div>

            {/* Feature Icons */}
            <div className="mt-8 flex justify-center gap-10 text-gray-300">
                <div className="flex flex-col items-center">
                    <FaNewspaper size={40} className="text-blue-400" />
                    <p className="mt-2 text-sm">Latest News</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaGlobe size={40} className="text-green-400" />
                    <p className="mt-2 text-sm">Global Coverage</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaUsers size={40} className="text-orange-400" />
                    <p className="mt-2 text-sm">Community Reporting</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
