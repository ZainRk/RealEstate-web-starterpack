import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "r5.jpg",
      title: "Image 1",
      description: "This is the description for Image 1.",
    },
    {
      id: 2,
      image: "r1.png",
      title: "Image 2",
      description: "This is the description for Image 2.",
    },
    {
      id: 3,
      image: "r3.jpg",
      title: "Image 3",
      description: "This is the description for Image 3.",
    },
    {
      id: 4,
      image: "r5.jpg",
      title: "Image 4",
      description: "This is the description for Image 4.",
    },
    {
      id: 5,
      image: "r3.jpg",
      title: "Image 1",
      description: "This is the description for Image 1.",
    },
    {
      id: 6,
      image: "r5.jpg",
      title: "Image 2",
      description: "This is the description for Image 2.",
    },
    {
      id: 7,
      image: "./r1.png",
      title: "Image 3",
      description: "This is the description for Image 3.",
    },
    {
      id: 8,
      image: "./r2.png",
      title: "Image 4",
      description: "This is the description for Image 4.",
    },
    {
      id: 9,
      image: "./r4.png",
      title: "Image 1",
      description: "This is the description for Image 1.",
    },
    {
      id: 10,
      image: "./r5.jpg",
      title: "Image 2",
      description: "This is the description for Image 2.",
    },
    {
      id: 11,
      image: "./r3.jpg",
      title: "Image 3",
      description: "This is the description for Image 3.",
    },
    {
      id: 12,
      image: "./r3.jpg",
      title: "Image 4",
      description: "This is the description for Image 4.",
    },
  ];

  return (
    <div className="paddings">
      <h2 className="gallery-h2">Available Properties</h2>
      <div className="gallery">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} />
            <h6 className="primaryText">{item.title}</h6>
            <span className="secondaryText">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
