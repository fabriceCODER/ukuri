"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Profile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        bio: "News enthusiast and journalist.",
        profilePic: "/images/default-avatar.png", // Placeholder image
    });

    const [editing, setEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({ ...user });
    const [imagePreview, setImagePreview] = useState(user.profilePic);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    const handleSave = () => {
        setUser({ ...updatedUser, profilePic: imagePreview });
        setEditing(false);
    };

    return (
        <section className="max-w-3xl mx-auto my-20 p-6 bg-white shadow-md rounded-lg">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
            >
                <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                <p className="text-gray-600 mt-2">Manage your personal details</p>
            </motion.div>

            {/* Profile Image */}
            <div className="flex flex-col items-center mt-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative w-32 h-32"
                >
                    <Image
                        src={imagePreview}
                        alt="Profile Picture"
                        width={128}
                        height={128}
                        className="rounded-full border"
                    />
                </motion.div>

                {editing && (
                    <input
                        type="file"
                        className="mt-2 text-sm"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                )}
            </div>

            {/* Profile Details */}
            <div className="mt-6">
                <label className="block font-medium text-gray-700">Full Name</label>
                {editing ? (
                    <input
                        type="text"
                        name="name"
                        value={updatedUser.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                ) : (
                    <p className="p-2 bg-gray-100 rounded-md">{user.name}</p>
                )}

                <label className="block mt-4 font-medium text-gray-700">Email</label>
                <p className="p-2 bg-gray-100 rounded-md">{user.email}</p>

                <label className="block mt-4 font-medium text-gray-700">Bio</label>
                {editing ? (
                    <textarea
                        name="bio"
                        value={updatedUser.bio}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        rows={3}
                    />
                ) : (
                    <p className="p-2 bg-gray-100 rounded-md">{user.bio}</p>
                )}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
                {editing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditing(false)}
                            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setEditing(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                    >
                        Edit Profile
                    </button>
                )}
            </div>
        </section>
    );
};

export default Profile;
