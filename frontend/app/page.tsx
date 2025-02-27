import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/common/Newsletter";
import ArticleCard from "@/components/news/ArticleCard";
import Hero from "@/components/home/Hero";


export default function Home() {
    return (
        <Layout>
            {/* Hero Section */}
          <Hero />

            {/* Latest Articles */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-6">Latest Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <ArticleCard title="Breaking News" category="World" image="/images/leaders.jpg" />
                    <ArticleCard title="Tech Innovation" category="Technology" image="/images/ai.jpg" />
                    <ArticleCard title="Sports Update" category="Sports" image="/images/sports.jpg" />
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
