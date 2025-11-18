import React from 'react';
// Import the specific icons you need from Font Awesome package within react-icons
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './FloatingSocialIcons.css'; // We'll create this CSS file next

const FloatingSocialIcons = () => {
    // 1. WhatsApp Link (including the professional pre-filled message)
    // Your number is 7338816479. Assuming Indian country code +91.
    const whatsappNumber = '917338816479';
    const preFilledMessage = "Hi, I came across your website and would like to know more about your portraits/ paintings. Could you please guide me through your services and pricing??";
    
    // URL-encode the message and construct the final WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preFilledMessage)}`;

    // 2. Instagram Link
    const instagramLink = 'https://www.instagram.com/siteoraofficial';

    return (
        <div className="floating-icons-container">
            {/* WhatsApp Icon */}
            <a 
                href={whatsappLink}
                className="social-icon whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with us on WhatsApp"
            >
                <FaWhatsapp />
            </a>
            
            {/* Instagram Icon */}
            <a 
                href={instagramLink}
                className="social-icon instagram"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
            >
                <FaInstagram />
            </a>
        </div>
    );
};

export default FloatingSocialIcons;