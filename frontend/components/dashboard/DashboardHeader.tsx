"use client";

import { FaHome, FaCog } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface DashboardHeaderProps {
    title: string;
    subtitle?: string;
    showSettings?: boolean;
}

const DashboardHeader = ({ title, subtitle, showSettings = true }: DashboardHeaderProps) => {
    const router = useRouter();

    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
            {/* Left Side: Title & Subtitle */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}

                {/* Breadcrumb Navigation */}
                <div className="flex items-center text-sm text-gray-500 mt-2">
                    <FaHome className="mr-1 text-gray-400" />
                    <span className="cursor-pointer hover:text-gray-700" onClick={() => router.push("/")}>
                        Home
                    </span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-700 font-semibold">{title}</span>
                </div>
            </div>

            {/* Right Side: Settings Icon */}
            {showSettings && (
                <button
                    onClick={() => router.push("/settings")}
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
                >
                    <FaCog className="text-gray-500" />
                    <span>Settings</span>
                </button>
            )}
        </div>
    );
};

export default DashboardHeader;
