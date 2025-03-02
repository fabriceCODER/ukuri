"use client";

import useAuth from "@/hooks/useAuth";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AdminPanel from "@/components/dashboard/AdminPanel";
import CreatorPanel from "@/components/dashboard/CreatorPanel";
import StatsWidget from "@/components/dashboard/StatsWidget";
import Spinner from "@/components/common/Spinner";
import React from "react";

const Dashboard = () => {
    const { user, isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <Spinner />
            </div>
        );
    }

    if (!isAuthenticated || !user) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <p className="text-xl font-semibold text-gray-600">🚫 Unauthorized Access</p>
                <p className="text-md text-gray-500">Please log in to continue.</p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* Header */}
                <DashboardHeader title="Dashboard Overview" />

                <div className="px-8 py-10">
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                        <StatsWidget title="📑 Total Articles" value={user.totalArticles} />
                        <StatsWidget title="💬 Total Comments" value={user.totalComments} />
                        <StatsWidget title="👀 Total Views" value={user.totalViews} />
                        <StatsWidget title="❤️ Total Likes" value={user.totalLikes} />
                    </div>

                    {/* Role-Based Dashboard Panel */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        {user.role === "admin" ? <AdminPanel /> : <CreatorPanel />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
