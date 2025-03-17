"use client";

import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedArticles from "@/components/home/FeaturedArticles";

const HomePage = () => {
    return (
        <main className="flex flex-col w-full min-h-screen space-y-20">
            {/* Hero Section should take full width */}
            <div className="w-full">
                <HeroSection />
            </div>

            {/* Other sections centered with proper padding */}
            <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <FeaturesSection />
            </section>

            <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <FeaturedArticles />
            </section>
        </main>
    );
};

export default HomePage;
