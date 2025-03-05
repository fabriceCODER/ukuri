"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Linkedin, Loader2, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                router.push("/login");
            } else {
                setError(data?.message || "Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("Signup error:", error); // ✅ Log error for debugging
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96"
            >
                <div className="text-center mb-6">
                    <User className="w-12 h-12 mx-auto text-blue-500" />
                    <h2 className="text-2xl font-bold mt-2">Create an Account</h2>
                    <p className="text-gray-500 text-sm">Join us and start your journey!</p>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-red-500 text-white text-center p-2 mb-4 rounded"
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    <div className="mb-4 relative">
                        <Lock className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    <div className="mb-6 relative">
                        <Lock className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="pl-10 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                        disabled={isLoading}
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : "Sign Up"}
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">Login</a>
                    </p>

                    <div className="mt-4">
                        <button
                            className="w-full flex items-center justify-center bg-gray-800 text-white p-2 rounded-md hover:bg-gray-900 transition">
                            <Facebook className="mr-2"/>
                            Sign Up with GitHub
                        </button>
                        <button
                            className="w-full my-2 flex items-center justify-center bg-gray-800 text-white p-2 rounded-md hover:bg-gray-900 transition">
                            <Linkedin className="mr-2"/>
                            Sign Up with LinkedIn
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Signup;
