import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <img src={`${import.meta.env.BASE_URL}charging-station.jpeg`} alt="demo charging station" className="hero-image" />

        <div className="hero-content">
          <h1>Drive the Future with <br /><span style={{ color: '#fca311' }}>HoverCharge ⚡</span></h1>
          <p>AI-powered EV charging station discovery, smart route planning & mobile charging vans.</p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
