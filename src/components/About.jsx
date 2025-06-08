import React, { useState, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Discovery",
      description: "Smart algorithms find the fastest charging stations near you"
    },
    {
      icon: "🚐",
      title: "On-Demand Mobile Charging",
      description: "Charging vans deliver power directly to your location"
    },
    {
      icon: "🗺️",
      title: "Optimized Route Planning",
      description: "Save 15-20% travel time with intelligent route optimization"
    },
    {
      icon: "⚡",
      title: "Real-Time Updates",
      description: "Live station availability and zero waiting time"
    }
  ];

  const stats = [
    { number: "1:135", label: "Station to EV Ratio in India", highlight: true },
    { number: "58%", label: "Buyers with Range Anxiety", highlight: true },
    { number: "$60B", label: "Global Market Size", highlight: false },
    { number: "50%", label: "Annual Growth Rate", highlight: false }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pdfUrl = 'HoverCharge.pdf';

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">Revolutionizing EV Charging</span>
          </div>
          
          <h2>About HoverCharge</h2>
          
          <p className="hero-subtitle">
            Transforming India's EV landscape with <span className="highlight-orange">AI-powered intelligence</span> and 
            <span className="highlight-yellow"> revolutionary mobile charging solutions</span>
          </p>
        </div>

        {/* Problem Statement */}
        <div className="crisis-section">
          <div className="crisis-content">
            <div className="crisis-text">
              <div className="section-header">
                <div className="icon-container crisis-icon">
                  <span className="icon">🚨</span>
                </div>
                <h3>The Crisis</h3>
              </div>
              <p className="crisis-description">
                India's EV revolution is being held back by a critical infrastructure gap. With just 
                <span className="highlight-red"> 1 charging station for every 135 EVs</span>, 
                millions of potential buyers are trapped by range anxiety.
              </p>
              <p className="crisis-sub">
                This creates a vicious cycle: limited infrastructure discourages adoption, 
                which slows investment in more charging points.
              </p>
            </div>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card ${stat.highlight ? 'highlight' : 'normal'}`}>
                  <div className="stat-number">
                    {stat.number}
                  </div>
                  <div className="stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mission Statement */}
        <div className="mission-section">
          <h3>Our Mission</h3>
          <p>
            We're building a future where EV charging is as <span className="highlight-orange">easy and accessible as refueling</span>—empowering users, 
            reducing emissions, and driving India's transition to sustainable transport. Through AI-driven discovery, 
            on-demand mobile vans, and smart routing, we make charging <span className="highlight-yellow">effortless</span>.
          </p>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-buttons">
            <a
              href={pdfUrl}
              download="HoverCharge.pdf"
              className="download-button primary"
            >
              <span className="button-icon">📄</span>
              Download Complete Venture Report
            </a>
          </div>
          
          <p className="cta-subtitle">
            Join the EV revolution. Make range anxiety a thing of the past.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;