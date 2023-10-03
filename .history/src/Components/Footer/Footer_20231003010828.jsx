import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                {/* Replace with your actual logo */}
                <img src="src\assets\gg_Logo.JPG" alt="Logo" />
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


//border-image-source sets the image to be used as the border. The linear-gradient(to right, blue, purple) function creates a linear gradient that starts from blue and transitions to purple from left to right. The border-image-slice property specifies where to slice the border image.