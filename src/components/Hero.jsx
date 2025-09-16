import React, { useState } from "react";
import "./Hero.css"; // import the CSS
import { FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      

      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <a href="#home" className="logo">
            VB
          </a>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
            <a href="#achievements" onClick={closeMenu}>
              Achievements
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <div className="social-icons">
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <h1>Balachandran Vipooshan</h1>
          <p>
            <span className="highlight">Computer Science Undergraduate</span>
          </p>
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
        </section>

        {/* Scroll Down */}
        <a href="#about" className="scroll-down">
          Scroll Down
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
