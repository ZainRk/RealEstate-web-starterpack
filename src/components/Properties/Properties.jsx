import React, { useState } from "react";
import "./Properties.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider">
      <div className="slider-controls">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <img src={images[currentIndex]} alt="Slider" />
    </div>
  );
};

const Properties = () => {
  const imagesSet1 = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
    "https://via.placeholder.com/800x400?text=Image+4",
  ];
  return (
    <div>
      <ImageSlider images={imagesSet1} />
    </div>
  );
};

export default Properties;
