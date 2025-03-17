"use client";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedArticles from "@/components/home/FeaturedArticles";

const HomePage = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <HeroSection />
                <FeaturesSection />
                <FeaturedArticles />
            </div>
        </div>
    );
};

export default HomePage;
