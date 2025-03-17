"use client";

import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedArticles from "@/components/home/FeaturedArticles";

const HomePage = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen space-y-20 px-6 sm:px-12 lg:px-16">
            <HeroSection />
            <FeaturesSection />
            <FeaturedArticles />
        </main>
    );
};

export default HomePage;
