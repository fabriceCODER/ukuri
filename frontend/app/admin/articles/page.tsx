"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

const AdminArticles = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1">
                <DashboardHeader title="Manage Articles" />
                <div className="container mx-auto px-6 py-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Articles Overview</h2>
                        <p className="text-gray-600 mb-4">Manage published and pending articles.</p>

                        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
                            <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3">Title</th>
                                <th className="p-3">Author</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-t">
                                <td className="p-3">How to Learn Next.js</td>
                                <td className="p-3">John Doe</td>
                                <td className="p-3"><span className="text-green-500">Published</span></td>
                                <td className="p-3">
                                    <button className="text-blue-500 hover:underline">Edit</button> |
                                    <button className="text-red-500 hover:underline ml-2">Delete</button>
                                </td>
                            </tr>
                            {/* Add more articles dynamically */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminArticles;
