"use client";

import { motion } from 'framer-motion';
import { FileText, Clock, Eye, ThumbsUp } from 'lucide-react';
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import DataTable from "@/components/dashboard/DataTable";

const AdminArticles = () => {
    const columns = [
        {
            key: 'title',
            label: 'Title',
            render: (item: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.category}</div>
                    </div>
                </div>
            )
        },
        {
            key: 'author',
            label: 'Author',
            render: (item: any) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                        {item.author.charAt(0)}
                    </div>
                    <span className="text-gray-900">{item.author}</span>
                </div>
            )
        },
        {
            key: 'status',
            label: 'Status',
            render: (item: any) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Published'
                        ? 'bg-green-100 text-green-800'
                        : item.status === 'Draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                    }`}>
                    {item.status}
                </span>
            )
        },
        {
            key: 'stats',
            label: 'Stats',
            render: (item: any) => (
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{item.likes}</span>
                    </div>
                </div>
            )
        }
    ];

    const data = [
        {
            id: 1,
            title: 'How to Learn Next.js',
            category: 'Technology',
            author: 'John Doe',
            status: 'Published',
            views: 1234,
            likes: 89,
            createdAt: '2024-02-15'
        },
        {
            id: 2,
            title: 'The Future of AI',
            category: 'Science',
            author: 'Jane Smith',
            status: 'Draft',
            views: 0,
            likes: 0,
            createdAt: '2024-02-14'
        },
        {
            id: 3,
            title: 'Sustainable Living',
            category: 'Environment',
            author: 'Mike Johnson',
            status: 'Published',
            views: 856,
            likes: 45,
            createdAt: '2024-02-13'
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
                <DashboardHeader title="Manage Articles" />
                <div className="container mx-auto px-6 py-8">
                    <DataTable
                        columns={columns}
                        data={data}
                        title="Articles Overview"
                        description="Manage and monitor all published and draft articles"
                        searchPlaceholder="Search articles..."
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminArticles;
