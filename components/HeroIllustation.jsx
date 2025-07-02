// ./components/HeroIllustration.jsx
import React from 'react';
import NextImage from 'next/image'; // <-- Import NextImage

const HeroIllustration = () => {
  return (
    <div className="hero-illustration-container">
      <NextImage // <-- Replaced <img> with NextImage
        src="/home1.jpg"
        alt="Stylized illustration for the hero section of the website" // <-- Improved alt text
        width={1000}
        height={400} // <-- Set appropriate width and height
      />
    </div>
  );
};

export default HeroIllustration;