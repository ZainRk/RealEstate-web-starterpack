import React from "react";
import "./Services.css";
import {
  FaHome,
  FaKey,
  FaBuilding,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const ServiceSection = () => {
  const services = [
    {
      icon: <FaHome size={32} />,
      title: "Home Buying",
      description:
        "We help you find your dream home with our expert guidance and personalized approach.",
      rating: 4.5,
    },
    {
      icon: <FaKey size={32} />,
      title: "Property Management",
      description:
        "Let us take care of your investment property with our professional management services.",
      rating: 4.8,
    },
    {
      icon: <FaBuilding size={32} />,
      title: "Commercial Real Estate",
      description:
        "Explore lucrative commercial real estate opportunities with our experienced team.",
      rating: 4.2,
    },
  ];

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} color="gold" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="gold" />);
    }

    return stars;
  };

  return (
    <div className="service-section">
      <h1 className="services-h2">Our Services</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-rating">{renderRating(service.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
