"use client";

import { FaUsers, FaNewspaper, FaCogs, FaChartBar } from "react-icons/fa";
import Link from "next/link";

const AdminPanel = () => {
    return (
        <div className="bg-white p-8 shadow-md rounded-lg">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
                    <p className="text-lg text-gray-600 mt-1">
                        Manage users, articles, and platform settings efficiently.
                    </p>
                </div>
                <Link href="/settings">
                    <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
                        <FaCogs className="text-gray-500" />
                        <span>Settings</span>
                    </button>
                </Link>
            </div>

            {/* Admin Panel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Recent Articles */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                        <FaNewspaper className="text-blue-500 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold">Recent Articles</h3>
                            <p className="text-sm text-gray-600">Review and manage news articles.</p>
                        </div>
                    </div>
                    <Link href="/admin/articles">
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition">
                            Manage Articles
                        </button>
                    </Link>
                </div>

                {/* User Management */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                        <FaUsers className="text-green-500 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold">User Management</h3>
                            <p className="text-sm text-gray-600">Manage registered users and roles.</p>
                        </div>
                    </div>
                    <Link href="/admin/users">
                        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition">
                            Manage Users
                        </button>
                    </Link>
                </div>

                {/* Site Analytics */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                        <FaChartBar className="text-purple-500 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold">Site Analytics</h3>
                            <p className="text-sm text-gray-600">Track website performance.</p>
                        </div>
                    </div>
                    <Link href="/admin/analytics">
                        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500 transition">
                            View Analytics
                        </button>
                    </Link>
                </div>

                {/* System Settings */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                        <FaCogs className="text-orange-500 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold">System Settings</h3>
                            <p className="text-sm text-gray-600">Configure platform settings.</p>
                        </div>
                    </div>
                    <Link href="/admin/settings">
                        <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-500 transition">
                            Configure Settings
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
