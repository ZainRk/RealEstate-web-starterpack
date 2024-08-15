import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <span className="big-circle" />
      <img src="./shape.png" className="square" alt="" />
      <div className="form">
        <ContactInfo />
        <ContactFormComponent />
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2 className="title">Get in Touch</h2>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
        adipisci recusandae praesentium dicta!
      </p>

      <div className="info">
        <Information
          icon="./location.png"
          text="5, Camp Davis Road, Sabo Ayobo Lagos."
        />
        <Information icon="./email.png" text="info@awahomsproperties.com.ng" />
        <Information icon="./phone.png" text="+234-8132071192" />
      </div>

      <SocialMedia />
    </div>
  );
};

const Information = ({ icon, text }) => {
  return (
    <div className="information">
      <img src={icon} className="icon" alt="" />
      <p>{text}</p>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="social-media">
      <p>Visit Our Socials :</p>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

const ContactFormComponent = () => {
  return (
    <div className="contact-form">
      <span className="circle one" />
      <span className="circle two" />

      <form action="index.html" autoComplete="off">
        <h3 className="title">Contact us</h3>
        <InputContainer label="Username" type="text" name="name" />
        <InputContainer label="Email" type="email" name="email" />
        <InputContainer label="Phone" type="tel" name="phone" />
        <InputContainer label="Message" type="textarea" name="message" />
        <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
};

const InputContainer = ({ label, type, name }) => {
  return (
    <div className={`input-container ${type === "textarea" ? "textarea" : ""}`}>
      {type === "textarea" ? (
        <textarea name={name} className="input"></textarea>
      ) : (
        <input type={type} name={name} className="input" />
      )}
      <label htmlFor="">{label}</label>
      <span>{label}</span>
    </div>
  );
};

export default ContactUs;
