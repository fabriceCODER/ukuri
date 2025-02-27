import Layout from "@/components/layout/Layout";
import Heading from "@/components/layout/Heading";
import { FaGlobe, FaUsers, FaBullseye, FaNewspaper } from "react-icons/fa";

export default function AboutPage() {
    return (
        <Layout>
            <Heading title="About Us" subtitle="Learn more about our mission and vision." />

            <section className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
                    <FaNewspaper className="text-blue-500" /> Who We Are
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    We are a modern news platform committed to delivering accurate and real-time news updates
                    across various domains, including technology, business, sports, and world affairs.
                </p>
            </section>

            <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 shadow-lg rounded-lg bg-white">
                    <FaGlobe className="text-4xl text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-700">
                        To become the leading source of trustworthy news, fostering informed communities worldwide.
                    </p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-white">
                    <FaBullseye className="text-4xl text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                        To deliver high-quality, unbiased news that empowers individuals with knowledge and insight.
                    </p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-white">
                    <FaUsers className="text-4xl text-red-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
                    <p className="text-gray-700">
                        A dedicated team of journalists, analysts, and editors committed to excellence in news reporting.
                    </p>
                </div>
            </section>
        </Layout>
    );
}
