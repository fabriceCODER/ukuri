
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Home() {
    return (
        <Layout>
            <section className="relative h-[60vh] flex items-center justify-center bg-[url('/news-banner.jpg')] bg-cover bg-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Stay Informed, Stay Ahead</h1>
                    <p className="mt-4 text-lg">Get the latest news, articles, and updates from around the world.</p>
                    <Link href="/articles">
                        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
                            Explore Articles
                        </button>
                    </Link>
                </div>
            </section>

            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-6">Latest Articles</h2>
                {/* Articles preview */}
                <div className="grid md:grid-cols-3 gap-6">
                    <ArticleCard title="Breaking News" category="World" />
                    <ArticleCard title="Tech Innovation" category="Technology" />
                    <ArticleCard title="Sports Update" category="Sports" />
                </div>
            </section>
        </Layout>
    );
}

// Reusable Article Card Component
const ArticleCard = ({ title, category }: { title: string; category: string }) => {
    return (
        <Link href="/articles">
            <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{category}</p>
            </div>
        </Link>
    );
};
