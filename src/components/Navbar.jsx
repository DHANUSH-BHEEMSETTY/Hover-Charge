import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">HoverCharge ⚡</div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#hero" onClick={toggleMenu}>Home</a>
        <a href="#features" onClick={toggleMenu}>Features</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#team" onClick={toggleMenu}>Team</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
