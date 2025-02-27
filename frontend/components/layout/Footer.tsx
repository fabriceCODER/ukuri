import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-600 py-12 mt-12 text-center text-white">
            <div className="container mx-auto grid md:grid-cols-3 gap-6 text-left">
                <div className="mx-4">
                    <h2 className="text-2xl font-bold">NewsHub</h2>
                    <p className="mt-2 text-white">
                        Your trusted source for real-time, reliable news across technology, business, sports, and world affairs.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-lg">Quick Links</h3>
                    <ul className="space-y-2 mt-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/guide">Guide</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg">Contact Us</h3>
                    <p className="mt-2 flex items-center gap-2 text-white">
                        <FaMapMarkerAlt /> 123 NewsHub Street
                    </p>
                    <p className="flex items-center gap-2 text-white">
                        <FaPhoneAlt /> +1 (234) 567-8900
                    </p>
                    <p className="flex items-center gap-2 text-white">
                        <FaEnvelope /> contact@newshub.com
                    </p>
                    <h3 className="font-bold text-lg mt-4">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://www.facebook.com/NewsHub" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                        <a href="https://www.twitter.com/NewsHub" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
                        <a href="https://www.linkedin.com/company/NewsHub" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                        <a href="https://www.instagram.com/NewsHub" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                    </div>
                </div>
            </div>
            <p className="mt-8 text-white">&copy; {new Date().getFullYear()} NewsHub. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
