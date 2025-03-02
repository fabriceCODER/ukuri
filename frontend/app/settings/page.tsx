"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Settings = () => {
    const [settings, setSettings] = useState({
        username: "JohnDoe",
        email: "johndoe@example.com",
        notifications: {
            email: true,
            push: false,
        },
        theme: "light",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleToggle = (field: "email" | "push") => {
        setSettings({
            ...settings,
            notifications: {
                ...settings.notifications,
                [field]: !settings.notifications[field],
            },
        });
    };

    const handleThemeChange = (theme: "light" | "dark") => {
        setSettings({ ...settings, theme });
        document.documentElement.classList.toggle("dark", theme === "dark");
    };

    return (
        <section className="max-w-3xl mx-auto my-20 p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
            >
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Manage your account preferences</p>
            </motion.div>

            {/* Account Settings */}
            <div className="mt-6">
                <label className="block font-medium text-gray-700 dark:text-gray-300">Username</label>
                <input
                    type="text"
                    name="username"
                    value={settings.username}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                />

                <label className="block mt-4 font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                    type="email"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                />
            </div>

            {/* Notification Preferences */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Email Notifications</span>
                    <input
                        type="checkbox"
                        checked={settings.notifications.email}
                        onChange={() => handleToggle("email")}
                        className="w-5 h-5 cursor-pointer"
                    />
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Push Notifications</span>
                    <input
                        type="checkbox"
                        checked={settings.notifications.push}
                        onChange={() => handleToggle("push")}
                        className="w-5 h-5 cursor-pointer"
                    />
                </div>
            </div>

            {/* Theme Settings */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Theme</h2>
                <div className="flex gap-4 mt-3">
                    <button
                        className={`px-4 py-2 rounded-md ${settings.theme === "light" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"}`}
                        onClick={() => handleThemeChange("light")}
                    >
                        Light Mode
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${settings.theme === "dark" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"}`}
                        onClick={() => handleThemeChange("dark")}
                    >
                        Dark Mode
                    </button>
                </div>
            </div>

            {/* Save Changes Button */}
            <div className="flex justify-center mt-8">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
                    Save Changes
                </button>
            </div>
        </section>
    );
};

export default Settings;
