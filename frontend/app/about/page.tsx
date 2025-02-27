import Layout from "@/components/layout/Layout";
import { FaGlobe, FaUsers, FaBullseye, FaNewspaper } from "react-icons/fa";

export default function AboutPage() {
    return (
        <Layout>
            <section className="container mx-auto my-32 px-6 py-12 text-center">
                <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
                    <FaNewspaper className="text-blue-500" /> Who We Are
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    We are a cutting-edge news platform dedicated to delivering accurate, real-time updates across a diverse range of industries, including technology, business, sports, and global affairs. With a commitment to journalistic integrity and innovation, we strive to keep our audience informed with reliable, insightful, and timely news that empowers decision-making in an ever-evolving world.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Our platform leverages advanced technology and data analytics to ensure our reporting is not only accurate but also relevant and engaging. We believe in the power of storytelling to shed light on critical issues, inspire action, and connect communities across the globe. By maintaining transparency and credibility, we uphold the highest standards of journalism in a rapidly changing media landscape.
                </p>
            </section>

            <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 shadow-lg rounded-lg bg-white">
                    <FaGlobe className="text-4xl text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-700">
                        To become the leading source of trustworthy news, fostering informed communities worldwide. We envision a world where access to reliable information empowers individuals to make better decisions and contribute positively to society.
                    </p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-white">
                    <FaBullseye className="text-4xl text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                        To deliver high-quality, unbiased news that empowers individuals with knowledge and insight. Our mission is to provide a balanced perspective on global events, ensuring every story is told with accuracy, fairness, and depth.
                    </p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-white">
                    <FaUsers className="text-4xl text-red-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
                    <p className="text-gray-700">
                        A dedicated team of journalists, analysts, and editors committed to excellence in news reporting. Our diverse team brings together industry experts, investigative reporters, and digital strategists to deliver high-quality content that informs and inspires.
                    </p>
                </div>
            </section>
        </Layout>
    );
}
