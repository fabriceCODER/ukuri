import Layout from "@/components/layout/Layout";

import { articles } from "@/utils/articles";
import ArticleCard from "@/components/news/ArticleCard";

export default function ArticlesPage() {
    return (
        <Layout>
            {/* Articles Section */}
            <section className="container mx-auto px-6 py-12 my-20">
                <h2 className="text-3xl font-bold text-center mb-6">All Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} title={""} category={""} image={""}/>
                    ))}
                </div>
            </section>
        </Layout>
    );
}
