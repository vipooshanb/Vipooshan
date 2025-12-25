import React, { useState } from "react";
import "../styles/Hero.css"; // import the CSS
import { FaLinkedinIn, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import AiAssistant from "./AiAssistant";
import CV from "../../assets/Vipooshan Balachandran.pdf";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      
      {/* Animated Background */}
      <div className="hero-background">
        <div className="grid-lines"></div>
      </div>

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
                <a href="https://www.linkedin.com/in/balachandran-vipooshan-087b3733b/"><FaLinkedinIn /></a>
                <a href="https://github.com/vipooshanb"><FaGithub /></a>
                <a href="https://www.instagram.com/vipooshanb_27/"><FaInstagram /></a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <h1>Balachandran Vipooshan</h1>
          <p>
            <span className="highlight">Computer Science Undergraduate</span>
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">
              Contact Me
            </a>
            <a href={CV} download="Vipooshan Balachandran.pdf" className="cta-button secondary">
              <FaDownload style={{ marginRight: '8px' }} /> Download CV
            </a>
          </div>

        {/* Scroll Down */}
        <a href="#about" className="scroll-down">
          <br />
          
          <i className="Fa-chevron-down"><FaChevronDown className="text-xl text-gray-500" /></i>
        </a>
        </section>

      </div>
      <AiAssistant />
    </div>
  );
};

export default Hero;
