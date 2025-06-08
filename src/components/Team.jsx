import React from 'react';
import '../styles/Team.css';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="team-image">
          <img src={`${import.meta.env.BASE_URL}AB2.jpg`} alt="B. Dhanush - CEO of HoverCharge" />
        </div>
        <div className="team-content">
          <h2>Meet the Founder</h2>

          <p className="name"><strong>B. Dhanush</strong> — CEO & Visionary behind HoverCharge</p>

          <p>
            I’m a passionate tech entrepreneur with a background in AI & Machine Learning, focused on solving real-world
            challenges through innovation. HoverCharge was born from a simple idea — to eliminate EV range anxiety in India by making charging faster, smarter, and more accessible.
          </p>

          <p>
            From smart route planning to on-demand mobile charging vans, I aim to create clean, scalable tech that accelerates sustainable mobility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
