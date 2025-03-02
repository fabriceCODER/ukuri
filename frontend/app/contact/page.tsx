import Layout from "@/components/layout/Layout";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";


export default function ContactPage() {
    return (
        <Layout>
            <section className="container my-32 mx-auto px-6 py-12 text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Have any questions or feedback? Fill out the form below, and we’ll get back to you as soon as possible.
                </p>

                {/* Contact Form */}
                <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="email@example.com"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            placeholder="Your message here..."
                        ></textarea>
                    </div>

                    <button
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
                        <FaPaperPlane/> Send Message
                    </button>
                </form>
            </section>

            {/* Contact Information */}
            <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition duration-300">
                    <FaPhone className="text-5xl text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700 text-lg">+1 234 567 890</p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition duration-300">
                    <FaEnvelope className="text-5xl text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700 text-lg">contact@newsplatform.com</p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition duration-300">
                    <FaMapMarkerAlt className="text-5xl text-red-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700 text-lg">123 News Street, City, Country</p>
                </div>
            </section>
        </Layout>
    );
}
