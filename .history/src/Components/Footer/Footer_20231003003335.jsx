import React from 'react';
import './Footer.css'; // Assumi

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                {/* Replace with your actual logo */}
                <img src="/path-to-your-logo.png" alt="Logo" />
            </div>
            <div className="footer__content">
                <p>© 2023 Your Company Name. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy">Privacy Policy</a> | 
                    <a href="/terms-of-service">Terms of Service</a> | 
                    <a href="/contact-us">Contact Us</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
