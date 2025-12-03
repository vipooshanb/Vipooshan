import React, { useEffect } from "react";
import "../styles/Footer.css"; // Fixed path to the CSS file
import { FaLinkedinIn, FaGithub, FaInstagram, FaCloudSun, FaSearch } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    // Function to update time and date
    const updateDateTime = () => {
      const now = new Date();

      const timeElement = document.querySelector(".footer-time");
      const dateElement = document.querySelector(".footer-date");

      // Format time
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;

      if (timeElement) timeElement.textContent = `${formattedHours}:${minutes} ${ampm}`;

      // Format date
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      if (dateElement) dateElement.textContent = now.toLocaleDateString(undefined, options);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    const input = document.querySelector(".search-box input");
    if (input.value.trim() !== "") {
      alert(`Searching for: ${input.value}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Section 1 */}
        <div className="footer-section">
          <h3 className="footer-heading">Balachandran Vipooshan</h3>
          <p className="footer-text">Computer Science undergraduate</p>
          <div className="footer-social">
                <a href="https://www.linkedin.com/in/balachandran-vipooshan-087b3733b/"><FaLinkedinIn /></a>
                <a href="https://github.com/vipooshanb"><FaGithub /></a>
                <a href="https://www.instagram.com/vipooshanb_27/"><FaInstagram /></a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="footer-section">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="footer-section">
          <h3 className="footer-heading">Search</h3>
          <div className="search-box">
            <input type="text" placeholder="Type here to search" />
            <button onClick={handleSearch}><FaSearch /></button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="copyright">
          © 2025 Balachandran Vipooshan. All rights reserved.
        </div>
        <div className="footer-info">
          <div className="weather-info">
            <FaCloudSun />
            <span>26°C Sunny</span>
          </div>
          <div>EN</div>
          <div className="footer-time">12:01 AM</div>
          <div className="footer-date">9/14/2025</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
