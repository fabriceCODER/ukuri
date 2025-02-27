import Layout from "@/components/layout/Layout";
import { FaFileAlt, FaTags, FaPen, FaImage, FaPaperPlane } from "react-icons/fa";

export default function SubmitPage() {
    return (
        <Layout>
            <section className="container mx-auto px-6 my-32 py-12 text-center">
                <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-2">
                    <FaFileAlt className="text-blue-500" /> Submit Your Article
                </h2>

                <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md text-left">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 flex items-center gap-2">
                            <FaFileAlt className="text-blue-500" /> Title
                        </label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="Enter article title" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 flex items-center gap-2">
                            <FaTags className="text-green-500" /> Category
                        </label>
                        <select className="w-full p-2 border rounded">
                            <option>World</option>
                            <option>Technology</option>
                            <option>Business</option>
                            <option>Sports</option>
                            <option>Politics</option>
                            <option>Crypto</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 flex items-center gap-2">
                            <FaPen className="text-red-500" /> Content
                        </label>
                        <textarea className="w-full p-2 border rounded" rows={5} placeholder="Write your article here..."></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 flex items-center gap-2">
                            <FaImage className="text-purple-500" /> Upload Image
                        </label>
                        <input type="file" className="w-full p-2 border rounded" />
                    </div>

                    <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
                        <FaPaperPlane /> Submit Article
                    </button>
                </form>
            </section>
        </Layout>
    );
}
