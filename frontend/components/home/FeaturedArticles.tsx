import Link from "next/link";
import { Clock, ThumbsUp, ArrowRight } from "lucide-react";

const featuredArticles = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence",
        excerpt: "Exploring the latest developments in AI and their impact on society.",
        author: "John Doe",
        readTime: "5 min read",
        likes: 234,
    },
    {
        id: 2,
        title: "Sustainable Business Practices",
        excerpt: "How companies are adapting to environmental challenges.",
        author: "Jane Smith",
        readTime: "7 min read",
        likes: 189,
    },
    {
        id: 3,
        title: "Digital Transformation",
        excerpt: "The role of technology in modern business operations.",
        author: "Mike Johnson",
        readTime: "6 min read",
        likes: 156,
    },
];

const FeaturedArticles = () => {
    return (
        <div className="mt-24 w-full max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {featuredArticles.map((article) => (
                    <div
                        key={article.id}
                        className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                    >
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                                <Clock className="h-4 w-4" />
                                <span>{article.readTime}</span>
                                <span className="mx-2">•</span>
                                <ThumbsUp className="h-4 w-4" />
                                <span>{article.likes}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                            <p className="text-gray-400 mb-4">{article.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">By {article.author}</span>
                                <Link
                                    href={`/articles/${article.id}`}
                                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200"
                                >
                                    Read more
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedArticles;
