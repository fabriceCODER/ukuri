"use client";

import { useState, useEffect } from 'react';
import { api } from '@/utils/api';
import DataTable from '@/components/dashboard/DataTable';

interface Article {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    status: string;
}

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await api.articles.getAll();
            if (response.data) {
                setArticles(response.data as Article[]);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch articles');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await api.articles.delete(id);
            setArticles(articles.filter(article => article.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete article');
        }
    };

    const handleEdit = async (id: string, data: Partial<Article>) => {
        try {
            const response = await api.articles.update(id, data);
            if (response.data) {
                setArticles(articles.map(article =>
                    article.id === id ? { ...article, ...data } : article
                ));
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update article');
        }
    };

    const columns = [
        { key: 'title', label: 'Title' },
        { key: 'author', label: 'Author' },
        { key: 'status', label: 'Status' },
        { key: 'createdAt', label: 'Created At' },
    ];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Articles Management</h1>
            <DataTable
                data={articles}
                columns={columns}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
        </div>
    );
}
