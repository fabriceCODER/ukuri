"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");

        if (!email) {
            setError("Please enter your email.");
            return;
        }

        try {
            // Simulate sending password reset request
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Show success message
            setMessage("If this email is registered, you will receive a password reset link.");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="max-w-md mx-auto my-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
            >
                <h1 className="text-3xl font-bold text-gray-900">Forgot Password?</h1>
                <p className="text-gray-600 mt-2">Enter your email to reset your password.</p>
            </motion.div>

            {/* Form */}
            <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Email Address</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Success Message */}
                {message && <p className="text-green-600 text-sm">{message}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition mt-4"
                >
                    Send Reset Link
                </button>
            </motion.form>

            {/* Back to Login */}
            <div className="text-center mt-6">
                <a href="/login" className="text-blue-600 hover:underline">
                    Back to Login
                </a>
            </div>
        </section>
    );
};

export default ForgotPassword;
