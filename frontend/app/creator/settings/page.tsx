"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation

type SettingsState = {
    username: string;
    email: string;
    notifications: { email: boolean; push: boolean };
    privacy: { showProfile: boolean; searchEngine: boolean };
    theme: string;
};

const Settings = () => {
    const [settings, setSettings] = useState<SettingsState>({
        username: "JohnDoe",
        email: "johndoe@example.com",
        notifications: { email: true, push: false },
        privacy: { showProfile: true, searchEngine: false },
        theme: "light",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSettings((prev) => ({ ...prev, [name]: value }));
    };

    const handleToggle = <T extends keyof SettingsState>(
        section: T,
        field: keyof SettingsState[T] & string
    ) => {

        // setSettings((prev) => ({
        //     ...prev,
        //     [section]: { ...prev[section], [field]: !prev[section][field] },
        // }));
    };

    return (
        <section className="max-w-4xl mx-auto my-20 p-8 bg-white shadow-lg rounded-lg">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
            >
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-2">Manage your account preferences and privacy</p>
                <Link href="/" legacyBehavior>
                    <a className="mt-2 inline-block text-blue-500 hover:underline">Back to Home</a>
                </Link>
            </motion.div>

            {/* Account Information */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Account Information</h2>
                <div className="mt-4 space-y-4">
                    <div>
                        <label className="block font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={settings.username}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md bg-gray-100"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={settings.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md bg-gray-100"
                        />
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
                <div className="mt-4 space-y-3">
                    <label className="flex items-center justify-between">
                        <span className="text-gray-700">Email Notifications</span>
                        <input
                            type="checkbox"
                            checked={settings.notifications.email}
                            onChange={() => handleToggle("notifications", "email")}
                            className="w-5 h-5 cursor-pointer"
                        />
                    </label>
                    <label className="flex items-center justify-between">
                        <span className="text-gray-700">Push Notifications</span>
                        <input
                            type="checkbox"
                            checked={settings.notifications.push}
                            onChange={() => handleToggle("notifications", "push")}
                            className="w-5 h-5 cursor-pointer"
                        />
                    </label>
                </div>
            </div>

            {/* Privacy Settings */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Privacy Settings</h2>
                <div className="mt-4 space-y-3">
                    <label className="flex items-center justify-between">
                        <span className="text-gray-700">Show Profile Publicly</span>
                        <input
                            type="checkbox"
                            checked={settings.privacy.showProfile}
                            onChange={() => handleToggle("privacy", "showProfile")}
                            className="w-5 h-5 cursor-pointer"
                        />
                    </label>
                    <label className="flex items-center justify-between">
                        <span className="text-gray-700">Allow Search Engines to Index Profile</span>
                        <input
                            type="checkbox"
                            checked={settings.privacy.searchEngine}
                            onChange={() => handleToggle("privacy", "searchEngine")}
                            className="w-5 h-5 cursor-pointer"
                        />
                    </label>
                </div>
            </div>

            {/* Security */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Security</h2>
                <div className="mt-4 space-y-4">
                    <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
                        Change Password
                    </button>
                    <button className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition">
                        Delete Account
                    </button>
                </div>
            </div>

            {/* Save Changes */}
            <div className="flex justify-center mt-10">
                <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition">
                    Save Changes
                </button>
            </div>
        </section>
    );
};

export default Settings;
