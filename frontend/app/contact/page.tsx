import Layout from "@/components/layout/Layout";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
    return (
        <Layout>
            <section className="container my-32 mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

                <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Your Name</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="John Doe" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Your Email</label>
                        <input type="email" className="w-full p-2 border rounded" placeholder="email@example.com" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea className="w-full p-2 border rounded" rows={4} placeholder="Your message here..."></textarea>
                    </div>

                    <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Send Message</button>
                </form>
            </section>

            <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 shadow-lg rounded-lg bg-white">
                    <FaPhone className="text-4xl text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-700">+1 234 567 890</p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-white">
                    <FaEnvelope className="text-4xl text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-700">contact@newsplatform.com</p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-white">
                    <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-700">123 News Street, City, Country</p>
                </div>
            </section>
        </Layout>
    );
}
