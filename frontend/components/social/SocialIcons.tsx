import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div className="flex space-x-4 mt-4">
            <a href="https://twitter.com" target="_blank"><FaTwitter size={24} /></a>
            <a href="https://facebook.com" target="_blank"><FaFacebook size={24} /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram size={24} /></a>
        </div>
    );
};

export default SocialIcons;
