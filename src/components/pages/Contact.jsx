import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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
import ScrollReveal from "../utils/ScrollReveal";

const Contact = () => {
  const form = useRef();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    // You can sign up at https://www.emailjs.com/
    const SERVICE_ID = "service_rf8pufc";
    const TEMPLATE_ID = "template_j9ywvha";
    const PUBLIC_KEY = "m9jH94QBzSn5CaMIW";

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        {
          publicKey: PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <ScrollReveal className="contact-info-wrapper">
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
        </ScrollReveal>

        {/* Right Side - Contact Form */}
        <ScrollReveal className="contact-form-wrapper">
          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  name="email"
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
                  name="subject"
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
                  name="message"
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
                  name="phone"
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
