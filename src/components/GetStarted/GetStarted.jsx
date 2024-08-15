import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Ready to Own a Property?</span>
          <span className="secondaryText">
            We are here to guide you
            <br />
            Click on the link below to Mail us.
          </span>
          <button className="button">
            <a href="mailto:emekav233@gmail.com">Learn More</a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
