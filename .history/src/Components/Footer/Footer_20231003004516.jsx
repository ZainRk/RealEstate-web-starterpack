import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                {/* Replace with your actual logo */}
                <img src="../assets/gg_Logo.jpg" alt="Logo" />
            </div>
            <div className="footer__content">
                <p>© 2023 Gadget. All rights reserved.</p>
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
