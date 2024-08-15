import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ x: "7rem", opacity: 1 }}
          animate={index === currentIndex ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt="Not Found" />
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
