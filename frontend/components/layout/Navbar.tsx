"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/">
                    <span className="text-xl font-bold text-blue-600">NewsHub</span>
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                    <Link href="/articles" className="hover:text-blue-500">Articles</Link>
                    <Link href="/map" className="hover:text-blue-500">World Map</Link>
                    <Link href="/submit" className="hover:text-blue-500">Submit News</Link>
                    <Link href="/about" className="hover:text-blue-500">About</Link>
                    <Link href="/contact" className="hover:text-blue-500">Contact</Link>
                    <Link href="/gallery" className="hover:text-blue-500">Gallery</Link>
                </div>

                <Link href="/dashboard">
                    <button className="ml-4 hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-lg">
                        Get Started
                    </button>
                </Link>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-md absolute w-full">
                    <Link href="/" className="block px-6 py-3 hover:bg-gray-100">Home</Link>
                    <Link href="/articles" className="block px-6 py-3 hover:bg-gray-100">Articles</Link>
                    <Link href="/map" className="block px-6 py-3 hover:bg-gray-100">World Map</Link>
                    <Link href="/submit" className="block px-6 py-3 hover:bg-gray-100">Submit News</Link>
                    <Link href="/about" className="block px-6 py-3 hover:bg-gray-100">About</Link>
                    <Link href="/contact" className="block px-6 py-3 hover:bg-gray-100">Contact</Link>
                    <Link href="/gallery" className="block px-6 py-3 hover:bg-gray-100">Gallery</Link>
                </div>
            )}
        </nav>
    );
}
