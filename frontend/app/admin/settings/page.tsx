"use client";

import { motion } from 'framer-motion';
import { Shield, Users, Key, Bell, Globe, Database, Mail, Lock } from 'lucide-react';
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

const AdminSettings = () => {
    const settingsSections = [
        {
            title: 'Security Settings',
            icon: Shield,
            description: 'Manage security configurations and access controls',
            items: [
                {
                    title: 'Two-Factor Authentication',
                    description: 'Enable 2FA for enhanced account security',
                    icon: Key
                },
                {
                    title: 'Password Policy',
                    description: 'Configure password requirements and expiration',
                    icon: Lock
                },
                {
                    title: 'Session Management',
                    description: 'Control user session timeouts and limits',
                    icon: Users
                }
            ]
        },
        {
            title: 'Notification Settings',
            icon: Bell,
            description: 'Configure system notifications and alerts',
            items: [
                {
                    title: 'Email Notifications',
                    description: 'Set up email notification preferences',
                    icon: Mail
                },
                {
                    title: 'System Alerts',
                    description: 'Configure system-wide alert settings',
                    icon: Bell
                }
            ]
        },
        {
            title: 'System Settings',
            icon: Database,
            description: 'Manage system-wide configurations',
            items: [
                {
                    title: 'Backup Settings',
                    description: 'Configure automated backup schedules',
                    icon: Database
                },
                {
                    title: 'Language & Region',
                    description: 'Set default language and regional settings',
                    icon: Globe
                }
            ]
        }
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1">
                <DashboardHeader title="Admin Settings" />
                <div className="container mx-auto px-6 py-8">
                    <div className="space-y-8">
                        {settingsSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm p-6"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
                                        <section.icon className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                                        <p className="text-sm text-gray-600">{section.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {section.items.map((item) => (
                                        <motion.div
                                            key={item.title}
                                            whileHover={{ scale: 1.02 }}
                                            className="p-4 rounded-lg border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-200"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100">
                                                    <item.icon className="h-5 w-5 text-indigo-600" />
                                                </div>
                                                <h3 className="font-medium text-gray-900">{item.title}</h3>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                                            <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                                                Configure →
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Save Changes Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex justify-end"
                    >
                        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                            Save Changes
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
