"use client";

import Image from "next/image";
import Link from "next/link";
import { FaNewspaper, FaGlobe, FaUsers } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="w-full h-[80vh] my-28 flex flex-col md:flex-row items-center justify-between text-gray-900 px-6 md:px-12">
            {/* Hero Content */}
            <div className="text-center md:text-left max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Stay Informed, Stay Ahead
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600">
                    Get the latest news from around the world, covering all domains.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col md:flex-row items-center md:items-start gap-4">
                    <Link href="/articles">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition shadow-md">
                            Explore Articles
                        </button>
                    </Link>
                    <Link href="/submit">
                        <button className="px-6 py-3 border border-gray-400 text-gray-900 rounded-lg hover:bg-gray-100 transition shadow-md">
                            Submit News
                        </button>
                    </Link>
                </div>

                {/* Feature Icons */}
                <div className="mt-8 flex justify-center md:justify-start gap-10 text-gray-700">
                    <div className="flex flex-col items-center">
                        <FaNewspaper size={40} className="text-blue-500" />
                        <p className="mt-2 text-sm">Latest News</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGlobe size={40} className="text-green-500" />
                        <p className="mt-2 text-sm">Global Coverage</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaUsers size={40} className="text-orange-500" />
                        <p className="mt-2 text-sm">Community Reporting</p>
                    </div>
                </div>
            </div>

            {/* Home Image (Moved to the right side) */}
            <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
                <Image
                    src="/images/illustraton.jpg"
                    alt="News Illustration"
                    width={400}
                    height={500}
                    priority
                    className="max-w-full h-auto"
                />
            </div>
        </section>
    );
};

export default Hero;
