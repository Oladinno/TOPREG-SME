// HeroIllustration.js or similar
import React from 'react';

const HeroIllustration = () => {
  return (
    <div className="hero-illustration-container">
      <img
        src="/home1.jpg" // Path to your image in the public folder
        alt="Hero Image" // Provide a meaningful alt text for accessibility
        className="hero-image" // Add any necessary styling classes
      />
    </div>
  );
};

export default HeroIllustration;