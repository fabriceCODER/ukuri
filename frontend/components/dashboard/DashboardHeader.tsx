"use client";

import { useAuth } from '@/utils/AuthContext';
import { Bell, Search, Menu } from 'lucide-react';
import { useState } from 'react';

interface DashboardHeaderProps {
    onMenuClick?: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
    const { user } = useAuth();
    const [notifications] = useState([
        { id: 1, text: 'New comment on your article' },
        { id: 2, text: 'Your article was approved' },
    ]);

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            onClick={onMenuClick}
                            className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Search Bar */}
                        <div className="hidden md:flex items-center ml-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Notifications */}
                        <div className="relative">
                            <button className="text-gray-500 hover:text-gray-600">
                                <Bell className="h-6 w-6" />
                                {notifications.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                        {notifications.length}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* User Profile */}
                        <div className="flex items-center">
                            <div className="mr-3 text-right hidden sm:block">
                                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                                {user?.name?.charAt(0)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
