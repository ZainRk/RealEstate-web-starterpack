import React from "react";
import { FaCheck } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="background-image" />
      <div className="about-content">
        <div className="about-text">
          <h2>About Our Company</h2>
          <p>
            We are a team of passionate professionals dedicated to providing
            exceptional services. Our mission is to deliver innovative solutions
            that exceed our clients' expectations.
          </p>
          <p>
            With years of experience and a commitment to excellence, we strive
            to create a lasting impact in the industry We are a team of
            passionate professionals dedicated to providing exceptional
            services.
          </p>
          <ul className="custom-list">
            <li>
              <FaCheck color="blue" /> Reliable
            </li>
            <li>
              <FaCheck color="blue" /> Trust Worthy
            </li>
            <li>
              <FaCheck color="blue" /> Transparency
            </li>
            <li>
              <FaCheck color="blue" /> Flexible Services
            </li>
          </ul>
        </div>
        <div className="about-images">
          <img src="./r2.png" alt="Image 1" className="about-image-1" />
          <img src="./r3.png" alt="Image 2" className="about-image-2" />
        </div>
      </div>
    </section>
  );
};

export default About;
