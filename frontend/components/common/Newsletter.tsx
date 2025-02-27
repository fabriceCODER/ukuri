"use client";
import React, { useState } from "react";

const NewsletterSubscription = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed with email:", email);
        setEmail("");
    };

    return (
        <section className="bg-blue-600 text-white py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold">📩 Subscribe to Our Newsletter</h2>
                <p className="mt-2">Get the latest news delivered to your inbox.</p>

                <form onSubmit={handleSubscribe} className="mt-4 flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
                        required
                    />
                    <button type="submit" className="bg-gray-900 px-4 py-2 rounded-r-lg hover:bg-gray-800 transition">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSubscription;
