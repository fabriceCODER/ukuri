'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, AlertCircle, Loader2, CheckCircle, Image as ImageIcon } from 'lucide-react';

export default function SubmitPage() {
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        content: '',
        category: '',
        tags: '',
        coverImage: null as File | null,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const categories = [
        'Technology',
        'Business',
        'Science',
        'Health',
        'Education',
        'Lifestyle',
        'Culture',
        'Politics',
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, coverImage: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSuccess(true);
            setFormData({
                title: '',
                summary: '',
                content: '',
                category: '',
                tags: '',
                coverImage: null,
            });
        } catch (err) {
            setError('Failed to submit article. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-24 sm:py-32"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center mb-6"
                        >
                            <FileText className="h-16 w-16 text-indigo-200" />
                        </motion.div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                        >
                            Submit Your Article
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                        >
                            Share your knowledge and expertise with our global community
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Form Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-xl p-8 lg:p-12"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                Article Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                                placeholder="Enter a compelling title"
                            />
                        </div>

                        <div>
                            <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
                                Summary
                            </label>
                            <textarea
                                name="summary"
                                id="summary"
                                required
                                value={formData.summary}
                                onChange={handleChange}
                                rows={3}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
                                placeholder="Write a brief summary of your article"
                            />
                        </div>

                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                                Content
                            </label>
                            <textarea
                                name="content"
                                id="content"
                                required
                                value={formData.content}
                                onChange={handleChange}
                                rows={10}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                                placeholder="Write your article content here"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    id="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category.toLowerCase()}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                                    Tags
                                </label>
                                <input
                                    type="text"
                                    name="tags"
                                    id="tags"
                                    value={formData.tags}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                                    placeholder="Enter tags separated by commas"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-2">
                                Cover Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                <div className="space-y-1 text-center">
                                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="coverImage"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="coverImage"
                                                name="coverImage"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center"
                            >
                                <AlertCircle className="h-5 w-5 mr-2" />
                                <span>{error}</span>
                            </motion.div>
                        )}

                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center"
                            >
                                <CheckCircle className="h-5 w-5 mr-2" />
                                <span>Article submitted successfully! Our team will review it shortly.</span>
                            </motion.div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                            >
                                {isLoading ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <>
                                        <Send className="h-5 w-5 mr-2" />
                                        Submit Article
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
