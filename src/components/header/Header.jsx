import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section class="h-wrapper">
      <div class="h-container">
        <img src="./logo.png" alt="Logo" width={100} />

        <div class="h-menu">
          <a href="" class="">
            Residencies
          </a>
          <a href="" class="">
            Our Value
          </a>
          <a href="" class="">
            Contact Us
          </a>
          <a href="" class="">
            Get Started
          </a>
          <button className="button">
            <a href="" class="">
              Contact
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
