import Link from "next/link";
import Layout from "@/components/layout/Layout";
import TrendingNews from "@/components/home/TrendingNews";
import Newsletter from "@/components/common/Newsletter";
import ArticleCard from "@/components/news/ArticleCard";


export default function Home() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-[url('/news-banner.jpg')] bg-cover bg-center text-white">
                <div className="text-center bg-black bg-opacity-50 p-6 rounded-lg">
                    <h1 className="text-4xl md:text-6xl font-bold">Stay Informed, Stay Ahead</h1>
                    <p className="mt-4 text-lg">Get the latest news, articles, and updates from around the world.</p>
                    <Link href="/articles">
                        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                            Explore Articles
                        </button>
                    </Link>
                </div>
            </section>

            {/* Trending News Section */}
            <TrendingNews />

            {/* Latest Articles */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-6">Latest Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <ArticleCard title="Breaking News" category="World" image="/leaders.jpg" />
                    <ArticleCard title="Tech Innovation" category="Technology" image="/newsai.jpg" />
                    <ArticleCard title="Sports Update" category="Sports" image="/sports.jpg" />
                </div>
                <div className="flex justify-center mt-8">
                    <Link href="/articles">
                        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                            View All Articles
                        </button>
                    </Link>
                </div>
            </section>

            {/* Newsletter Subscription */}
            <Newsletter />
        </Layout>
    );
}
