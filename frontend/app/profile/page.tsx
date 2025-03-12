"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { api } from '@/utils/api';

interface Profile {
    name: string;
    email: string;
    bio: string;
    avatar: string;
}

export default function ProfilePage() {
    const { user } = useAuth();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await api.users.getProfile();
            if (response.data) {
                setProfile(response.data);
            }
        } catch {
            setError('Failed to fetch profile');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!profile) return null;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-2xl font-bold text-indigo-600">
                                {profile.name.charAt(0)}
                            </div>
                            <div className="ml-6">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    {profile.name}
                                </h1>
                                <p className="text-gray-600">{profile.email}</p>
                            </div>
                        </div>
                        {profile.bio && (
                            <div className="mt-6">
                                <h2 className="text-lg font-medium text-gray-900">Bio</h2>
                                <p className="mt-2 text-gray-600">{profile.bio}</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
