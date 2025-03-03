"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

const AdminAnalytics = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1">
                <DashboardHeader title="Analytics Dashboard" />
                <div className="container mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Total Users</h3>
                            <p className="text-3xl font-bold">12,345</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Total Articles</h3>
                            <p className="text-3xl font-bold">876</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Total Views</h3>
                            <p className="text-3xl font-bold">1.2M</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Traffic Overview</h2>
                        <p className="text-gray-600 mb-4">Analyze user engagement and trends.</p>
                        {/* Add Chart Component Here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalytics;
