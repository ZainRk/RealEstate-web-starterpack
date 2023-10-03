import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
               
                <img src="src\assets\gg_Logo.PNG" alt="Logo" />
                <span className="logo-text">Gadget Galaxy</span> {/* Logo text */}
            </div>
            <div className="footer__content">
                <p>© 2023 Gadget Galaxy. All rights reserved.</p>
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

