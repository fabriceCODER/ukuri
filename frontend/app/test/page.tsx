"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AdminPanel from "@/components/dashboard/AdminPanel";
import CreatorPanel from "@/components/dashboard/CreatorPanel";
import StatsWidget from "@/components/dashboard/StatsWidget";
import Spinner from "@/components/common/Spinner";
import React from "react";

const Dashboard = () => {
    // Temporary hard-coded values for testing
    const isLoading = false;
    const isAuthenticated = true;
    const user = {
        totalArticles: 10,
        totalComments: 20,
        totalViews: 100,
        totalLikes: 50,
        role: "admin" // or "creator"
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        );
    }

    if (!isAuthenticated || !user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold text-gray-600">Unauthorized. Please log in.</p>
            </div>
        );
    }

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 bg-gray-100">
                {/* Header */}
                <DashboardHeader title="Dashboard" />

                <div className="container mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-3 gap-6">
                        <StatsWidget title="Total Articles" value={user.totalArticles} />
                        <StatsWidget title="Total Comments" value={user.totalComments} />
                        <StatsWidget title="Total Views" value={user.totalViews} />
                        <StatsWidget title="Total Likes" value={user.totalLikes} />
                    </div>
                    {/* Role-based Panels */}
                    {user.role === "admin" ? <AdminPanel /> : <CreatorPanel />}
                   <CreatorPanel />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
