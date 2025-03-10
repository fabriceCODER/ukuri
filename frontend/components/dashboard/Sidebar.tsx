"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/utils/AuthContext";
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    BarChart,
    MessageSquare,
    Bell,
    BookOpen,
    PenTool,
    Flag,
} from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();
    const { user } = useAuth();

    const adminMenuItems = [
        { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
        { label: "Articles", icon: FileText, href: "/dashboard/articles" },
        { label: "Users", icon: Users, href: "/dashboard/users" },
        { label: "Analytics", icon: BarChart, href: "/dashboard/analytics" },
        { label: "Comments", icon: MessageSquare, href: "/dashboard/comments" },
        { label: "Reports", icon: Flag, href: "/dashboard/reports" },
        { label: "Settings", icon: Settings, href: "/dashboard/settings" },
    ];

    const creatorMenuItems = [
        { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
        { label: "My Articles", icon: FileText, href: "/dashboard/articles" },
        { label: "Write Article", icon: PenTool, href: "/dashboard/articles/new" },
        { label: "Analytics", icon: BarChart, href: "/dashboard/analytics" },
        { label: "Comments", icon: MessageSquare, href: "/dashboard/comments" },
        { label: "Notifications", icon: Bell, href: "/dashboard/notifications" },
        { label: "Settings", icon: Settings, href: "/dashboard/settings" },
    ];

    const menuItems = user?.role === "admin" ? adminMenuItems : creatorMenuItems;

    return (
        <aside className="bg-white w-64 min-h-screen border-r border-gray-200 hidden md:block">
            <div className="h-full px-3 py-4">
                <div className="mb-8 px-4">
                    <Link href="/" className="flex items-center">
                        <BookOpen className="h-8 w-8 text-indigo-600" />
                        <span className="ml-2 text-xl font-bold text-gray-900">UkuriKose</span>
                    </Link>
                </div>
                <nav className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                <Icon className={`mr-3 h-5 w-5 ${isActive ? "text-indigo-600" : "text-gray-400"}`} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
