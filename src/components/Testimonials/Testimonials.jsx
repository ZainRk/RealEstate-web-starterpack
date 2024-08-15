import React, { useState } from "react";
import "./Testimonials.css";

// Sample testimonial data
const testimonialData = [
  {
    id: 1,
    image: "./r1.png",
    quote:
      "The team at this real estate company made the process of buying my dream home seamless and stress-free. Highly recommended!",
    author: "John Doe",
  },
  {
    id: 2,
    image: "./r2.png",
    quote:
      "Their expertise and professionalism were outstanding. They helped me sell my property quickly and at a great price.",
    author: "Jane Smith",
  },
  {
    id: 3,
    image: "./r1.png",
    quote:
      "I was impressed by their attention to detail and commitment to finding the perfect home for my family. Excellent service!",
    author: "Bob Johnson",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonialData.length);
  };

  const currentTestimonial = testimonialData[currentIndex];

  return (
    <div className="testimonials-container">
      <h2 className="testimonial-h2">What Our Clients Say</h2>
      <div className="testimonial-card">
        <img
          src={currentTestimonial.image}
          alt={currentTestimonial.author}
          className="testimonial-image"
        />
        <p className="testimonial-quote">{currentTestimonial.quote}</p>
        <p className="testimonial-author">- {currentTestimonial.author}</p>
      </div>
      <div className="testimonial-controls">
        <button className="testimonial-control" onClick={handlePrevious}>
          &larr;
        </button>
        <button className="testimonial-control" onClick={handleNext}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
