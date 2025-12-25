import React from "react";
import "../styles/About.css"; 
import team1 from "../../assets/team1.jpg"; 
import { FaGraduationCap, FaMapMarkerAlt, FaUniversity, FaFlag } from "react-icons/fa";
import ScrollReveal from "../utils/ScrollReveal";


const About = () => {
  return (
    <section className="about-section" id="about">
      <ScrollReveal>
      {/* Profile Circle */}
      <div className="profile-circle">
        <div className="circle">
          <div className="circle-content">
            <img
              src={team1}
              alt="Vipooshan"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* About Content */}
      <ScrollReveal className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I'm a passionate Computer Science undergraduate with expertise in
          full-stack development, software engineering, and UI/UX design. I
          thrive on transforming complex problems into elegant, user-friendly
          solutions.
        </p>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat">
            <div className="stat-icon">
                <FaGraduationCap size={24} color="#0066ff" />
            </div>
            <div className="stat-number">B.Sc. in Computer Science</div>
            <div className="stat-text">Degree</div>
          </div>

          <div className="stat">
            <div className="stat-icon">
                <FaMapMarkerAlt size={24} color="#0066ff" />
            </div>
            <div className="stat-number">Moratuwa-Colombo</div>
            <div className="stat-text">Residence</div>
          </div>

          <div className="stat">
            <div className="stat-icon">
                <FaUniversity size={24} color="#0066ff" />
            </div>
            <div className="stat-number">
              University Of Westminster
            </div>
            <div className="stat-text">University</div>
          </div>

          <div className="stat">
            <div className="stat-icon">
                <FaFlag size={24} color="#0066ff" />
            </div>
            <div className="stat-number">
              Sri Lanka <span className="flag">🇱🇰</span>
            </div>
            <div className="stat-text">Country</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="about-buttons">
          <a href="#projects" className="about-btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="about-btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default About;
