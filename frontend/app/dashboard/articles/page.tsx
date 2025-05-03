"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { Eye, ThumbsUp, Edit, Trash2, Clock } from "lucide-react";
import Card from "@/components/common/Card";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  status: string;
  views: number;
  likes: number;
  createdAt: string;
}

export default function ArticlesPage() {
  const { user } = useAuth();
  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      fetchArticles();
    }
  }, [user]);

  const fetchArticles = async () => {
    try {
      const res = await api.articles.getAll();

      // Check if res.data is an array before setting state
      if (Array.isArray(res.data)) {
        setArticles(res.data); // TypeScript will infer the correct type here
      } else {
        console.error("Received data is not an array:", res.data);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Articles</h1>
      {articles.map((article) => (
        <Card key={article.id}>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-sm text-gray-500">{article.excerpt}</p>
              <div className="text-xs text-gray-400 flex items-center space-x-2 mt-1">
                <Clock className="w-3 h-3" />
                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                <span>• {article.status}</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-gray-500 text-sm flex items-center gap-1">
                <Eye className="w-4 h-4" /> {article.views}
              </div>
              <div className="text-gray-500 text-sm flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" /> {article.likes}
              </div>
              <button onClick={() => router.push(`/dashboard/articles/${article.id}/edit`)}>
                <Edit className="w-5 h-5 text-blue-600" />
              </button>
              <button onClick={() => {}}>
                <Trash2 className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
