import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Carousel from "../Carousel/Carousel";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*Left Side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              WELCOME
              <br />
              TO AWAHOLM
              <br />
              PROPERTIES.
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a Variety Of Properties that suits you so easily
            </span>
            <span className="secondaryText">
              Find a variety of properties taht suits you so perfectly
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">
                Premium
                <br /> Products
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">
                Happy
                <br /> Customer
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={100} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">
                Awards
                <br /> Winnings
              </span>
            </div>
          </div>
        </div>
        {/*Right Side*/}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <Carousel images={["./r3.jpg", "./r5.jpg", "./r2.png"]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
