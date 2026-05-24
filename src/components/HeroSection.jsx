import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="cloud-animation">
        {/* Creativity-themed cloud animation */}
        <div className="cloud"></div>
        <p className="hero-text">Unleash your creativity with CloudBlurr</p>
      </div>
    </div>
  );
};

export default HeroSection;