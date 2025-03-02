"use client";

import { FaPlus, FaFileAlt, FaChartLine, FaCogs } from "react-icons/fa";
import Link from "next/link";

const CreatorPanel = () => {
    return (
        <div className="bg-white p-8 shadow-md rounded-lg">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900">Creator Dashboard</h2>
                    <p className="text-lg text-gray-600 mt-1">
                        Manage your articles, track performance, and customize settings.
                    </p>
                </div>
                <Link href="/creator/settings">
                    <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
                        <FaCogs className="text-gray-500" />
                        <span>Settings</span>
                    </button>
                </Link>
            </div>

            {/* Creator Panel Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Create New Article */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                        <FaPlus className="text-blue-500 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold">Create New Article</h3>
                            <p className="text-sm text-gray-600">
                                Write and publish articles for your audience.
                            </p>
                        </div>
                    </div>
                    <Link href="/submit">
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition">
                            Start Writing
                        </button>
                    </Link>
                </div>

                {/* My Articles */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                        <FaFileAlt className="text-green-500 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold">My Articles</h3>
                            <p className="text-sm text-gray-600">
                                View and manage all your published articles.
                            </p>
                        </div>
                    </div>
                    <Link href="/creator/articles">
                        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition">
                            Manage Articles
                        </button>
                    </Link>
                </div>

                {/* Article Performance */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                        <FaChartLine className="text-purple-500 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold">Article Performance</h3>
                            <p className="text-sm text-gray-600">
                                Track how your articles are performing.
                            </p>
                        </div>
                    </div>
                    <Link href="/creator/analytics">
                        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500 transition">
                            View Insights
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CreatorPanel;
