"use client";
import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed with email:", email);
        setEmail("");
    };

    return (
        <section className="relative overflow-hidden py-20 px-4 sm:px-10 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white w-full">
            {/* Animated Blob Backgrounds */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse z-0"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-400 opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse z-0"></div>

            {/* Main Card - Now Full Width */}
            <div className="relative z-10 w-full bg-white/10 backdrop-blur-md px-6 py-12 sm:px-12 text-center rounded-[40%_10%_40%_10%/10%_40%_10%_40%] shadow-2xl">
                <h2 className="text-3xl font-extrabold mb-3">📩 Join Our Newsletter</h2>
                <p className="text-white/90 mb-6 text-lg">Stay updated with our latest content and offers.</p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full sm:w-[300px] px-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
