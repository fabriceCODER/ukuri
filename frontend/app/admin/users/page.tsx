"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

const AdminUsers = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1">
                <DashboardHeader title="Manage Users" />
                <div className="container mx-auto px-6 py-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Users List</h2>
                        <p className="text-gray-600 mb-4">View and manage platform users.</p>

                        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
                            <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-t">
                                <td className="p-3">John Doe</td>
                                <td className="p-3">john@example.com</td>
                                <td className="p-3">Admin</td>
                                <td className="p-3">
                                    <button className="text-blue-500 hover:underline">Edit</button> |
                                    <button className="text-red-500 hover:underline ml-2">Delete</button>
                                </td>
                            </tr>
                            {/* Add more users dynamically */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
