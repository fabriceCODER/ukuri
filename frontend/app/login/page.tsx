"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, LinkedinIcon, Facebook, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                router.push("/dashboard");
            } else {
                setError(data?.message || "Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Login 404:", error); // ✅ Log the 404
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500 p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md"
            >
                <div className="text-center mb-6">
                    <Lock className="w-12 h-12 mx-auto text-indigo-600" />
                    <h2 className="text-2xl font-bold mt-2">Welcome Back!</h2>
                    <p className="text-gray-500 text-sm">Log in to your account</p>
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
                            className="pl-10 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
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
                            className="pl-10 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                            required
                        />
                    </div>

                    <div className="mt-4 my-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link href="/forgot" className="text-sm text-indigo-500 hover:underline">
                            Forgot Password?
                        </Link>
                        <Link href="/" className="text-sm mx-12 text-gray-900 hover:underline text-right">
                            Back to Home
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition"
                        disabled={isLoading}
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : "Log In"}
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <Link href="/signup" className="text-indigo-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>

                    {/* OAuth Buttons - Improved for mobile */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button className="flex items-center justify-center bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800 transition">
                            <LinkedinIcon className="mr-2" />
                            LinkedIn
                        </button>
                        <button className="flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
                            <Facebook className="mr-2" />
                            Facebook
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
