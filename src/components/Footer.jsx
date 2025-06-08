import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2025 <strong>HOVER CHARGE ⚡</strong> by <strong>DHANUSH-BHEEMSETTY</strong> | All rights reserved
      </div>
      <div className="footer-right">
        📧 <a href="mailto:dhanushbheemisetty0@gmail.com">dhanushbheemisetty0@gmail.com</a>
        <a href="https://www.linkedin.com/in/dhanush-bheemisetty-931ba0305/" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://instagram.com/dhanu_bheemisetty" target="_blank" rel="noreferrer">
          <FaInstagram /> Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
