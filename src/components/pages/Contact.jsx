import React, { useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [status, setStatus] = useState(""); // success/error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
  // Use Vite environment variable for backend URL (VITE_BACKEND_URL)
  // Fallback to empty string so requests go to the same origin when not set
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";
      const res = await axios.post(`${BACKEND_URL}/send`, formData);

      if (res.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message. Check console for details.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
          </p>

          <div className="contact-method">
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <div className="contact-details">
              <h4>Location</h4>
              <p>Moratuwa - Colombo, Sri Lanka</p>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon"><FaEnvelope /></div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>vipooshanb27@gmail.com</p>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon"><FaPhone /></div>
            <div className="contact-details">
              <h4>Phone</h4>
              <p>+94 77 262 0357</p>
            </div>
          </div>

          <div className="contact-social">
            <a href="https://www.linkedin.com/in/balachandran-vipooshan-087b3733b/"><FaLinkedinIn /></a>
            <a href="https://github.com/vipooshanb"><FaGithub /></a>
            <a href="https://www.instagram.com/vipooshanb_27/"><FaInstagram /></a>
            <a href="#" title="Twitter"><FaTwitter /></a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Your Phone</label>
              <input
                type="text"
                id="phone"
                className="form-control"
                placeholder="Enter phone number with country code, e.g. +94771234567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
