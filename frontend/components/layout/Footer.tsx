import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 mt-12 text-center text-gray-600">
            <div className="container mx-auto grid md:grid-cols-3 gap-6">
                <div>
                    <h2 className="text-xl font-bold">NewsHub</h2>
                    <p>Stay updated with the latest news from around the world.</p>
                </div>

                <div>
                    <h3 className="font-bold">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/articles">Articles</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold">Follow Us</h3>
                    <div className="flex justify-center space-x-4">
                        <FaFacebook size={24} />
                        <FaTwitter size={24} />
                        <FaLinkedin size={24} />
                        <FaInstagram size={24} />
                    </div>
                </div>
            </div>
            <p className="mt-6">&copy; {new Date().getFullYear()} NewsHub. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
