"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

const AdminSettings = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1">
                <DashboardHeader title="Admin Settings" />
                <div className="container mx-auto px-6 py-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">General Settings</h2>
                        <p className="text-gray-600 mb-4">Manage system configurations, security, and roles.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <h3 className="text-lg font-semibold">Security Settings</h3>
                                <p className="text-gray-600">Update passwords, enable 2FA, and manage sessions.</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <h3 className="text-lg font-semibold">User Roles</h3>
                                <p className="text-gray-600">Manage admin, editor, and user access levels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
