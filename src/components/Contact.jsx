import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out to
            me!
          </p>

          <div className="contact-method">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-details">
              <h4>Location</h4>
              <p>Moratuwa - Colombo, Sri Lanka</p>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>vipooshanb27@gmail.com</p>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-details">
              <h4>Phone</h4>
              <p>+94 77 262 0357</p>
            </div>
          </div>

          <div className="contact-social">
            <a href="https://www.linkedin.com/in/balachandran-vipooshan-087b3733b/"><FaLinkedinIn /></a>
            <a href="https://github.com/vipooshanb"><FaGithub /></a>
            <a href="https://www.instagram.com/vipooshanb_27/"><FaInstagram /></a>
            
            
            <a href="#" title="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (You can connect this to backend or email API)");
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="form-control"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
