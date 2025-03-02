"use client";

import Link from "next/link";
import { FaTachometerAlt, FaUser, FaCog, FaPlus, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="w-72 h-screen bg-white shadow-lg p-6 flex flex-col">
            {/* Dashboard Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>

            {/* Navigation Links */}
            <nav className="flex-1">
                <ul className="space-y-3">
                    <li>
                        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100 transition">
                            <FaTachometerAlt className="text-blue-500" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100 transition">
                            <FaUser className="text-green-500" />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100 transition">
                            <FaCog className="text-gray-500" />
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/submit" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100 transition">
                            <FaPlus className="text-purple-500" />
                            <span>Create Article</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Logout Button */}
            <div className="mt-6">
                <button className="flex items-center gap-3 w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
