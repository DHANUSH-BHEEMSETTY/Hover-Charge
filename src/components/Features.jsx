import React from 'react';
import '../styles/Features.css'; 

function Features() {
  return (
    <section className="features" id="Features">
      <div className="features-content">
        <h2 className="features-title">Powerful Features</h2>
        <p className="features-subtitle">
          AI-driven solutions that eliminate range anxiety and make EV charging as convenient as refueling
        </p>

        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-highlight">AI Powered</div>
            <div className="feature-icon">🧠</div>
            <h3>Smart Route Optimization</h3>
            <p>
              AI-powered route planning that finds the fastest charging stations along your journey,
              saving 15-20% travel time with real-time traffic analysis.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Real-Time Station Discovery</h3>
            <p>
              Instantly locate available charging stations with live availability status, pricing,
              and user ratings to make informed charging decisions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-highlight">Popular</div>
            <div className="feature-icon">🚐</div>
            <h3>On-Demand Mobile Charging</h3>
            <p>
              Revolutionary mobile charging vans that come to you anywhere, anytime.
              Perfect for emergencies or when you can't reach a station.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Seamless Digital Payments</h3>
            <p>
              Integrated payment system with multiple options including UPI, cards, and digital wallets.
              No more fumbling with cash or cards at stations.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>IoT Monitoring & Analytics</h3>
            <p>
              Advanced IoT sensors provide real-time charging data, station health monitoring,
              and personalized usage analytics for optimal charging habits.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-highlight">New</div>
            <div className="feature-icon">⭐</div>
            <h3>Community Reviews & Ratings</h3>
            <p>
              Make informed decisions with authentic user reviews and ratings for each charging station,
              ensuring reliable and quality charging experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;