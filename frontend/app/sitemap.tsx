"use client";

import Link from "next/link";

const Sitemap = () => {
    const siteLinks = [
        { title: "Home", href: "/" },
        { title: "Articles", href: "/articles" },
        { title: "About Us", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms of Service", href: "/terms-of-service" },
        { title: "Accessibility", href: "/accessibility" },
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-16 py-20">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl font-extrabold text-white text-center mb-6">Sitemap</h1>
                <p className="text-lg text-gray-300 text-center mb-10">
                    Browse all important sections of our website for easy navigation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {siteLinks.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.href} 
                            className="block p-4 bg-gray-800/40 rounded-lg text-white hover:bg-indigo-500/30 transition-colors"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Sitemap;
