"use client";

import { motion } from 'framer-motion';
import { User, Shield, Mail, Calendar } from 'lucide-react';
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import DataTable from "@/components/dashboard/DataTable";

const AdminUsers = () => {
    const columns = [
        {
            key: 'name',
            label: 'User',
            render: (item: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.email}</div>
                    </div>
                </div>
            )
        },
        {
            key: 'role',
            label: 'Role',
            render: (item: any) => (
                <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-gray-400" />
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.role === 'Admin'
                            ? 'bg-purple-100 text-purple-800'
                            : item.role === 'Editor'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                        }`}>
                        {item.role}
                    </span>
                </div>
            )
        },
        {
            key: 'status',
            label: 'Status',
            render: (item: any) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                    {item.status}
                </span>
            )
        },
        {
            key: 'joined',
            label: 'Joined',
            render: (item: any) => (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{item.joined}</span>
                </div>
            )
        }
    ];

    const data = [
        {
            id: 1,
            name: 'Fabrice Ishimwe',
            email: 'fab@ukuri.com',
            role: 'Admin',
            status: 'Active',
            joined: 'Jan 15, 2024'
        },
        {
            id: 2,
            name: 'John Doe',
            email: 'john@ukuri.com',
            role: 'Editor',
            status: 'Active',
            joined: 'Feb 1, 2024'
        },
        {
            id: 3,
            name: 'Jane Smith',
            email: 'jane@ukuri.com',
            role: 'User',
            status: 'Inactive',
            joined: 'Feb 10, 2024'
        }
    ];

    const handleEdit = (item: any) => {
        console.log('Edit:', item);
    };

    const handleDelete = (item: any) => {
        console.log('Delete:', item);
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1">
                <DashboardHeader title="Manage Users" />
                <div className="container mx-auto px-6 py-8">
                    <DataTable
                        columns={columns}
                        data={data}
                        title="Users Overview"
                        description="Manage user accounts and permissions"
                        searchPlaceholder="Search users..."
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
