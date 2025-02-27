import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth"; // Assume you have a hook to get user info
import Sidebar from "@/components/dashboard/Sidebar";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import CreatorDashboard from "@/components/dashboard/CreatorDashboard"; // Creator dashboard component

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth(); // Fetch user info
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isAuthenticated) {
            setLoading(false);
        }
    }, [isAuthenticated]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex">
            {/* Sidebar for Navigation */}
            <Sidebar />

            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

                {/* Conditional Rendering Based on Role */}
                {user?.role === "admin" ? (
                    <AdminDashboard />
                ) : user?.role === "creator" ? (
                    <CreatorDashboard />
                ) : (
                    <div>You don&#39;t have access to this dashboard.</div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
