// Certifications.jsx
import React from "react";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import "../styles/Certifications.css"; // Keep your existing CSS




import Python from "../../assets/UOM.png";
import Figma from "../../assets/Figma.png";
import Project from "../../assets/Project-Managment.png";
import Testing from "../../assets/Testing.png";
import Web from "../../assets/UOM-2.png";
import Hack from "../../assets/Hack.png";


const certificationsData = [
  {
    id: "python",
    title: "Python for Beginners",
    image: Python,
    issuer: "University Of Moratuwa",
    date: "December 2024",
  },
  {
    id: "webdev",
    title: "Figma Essential Training",
    image: Figma,
    issuer: "LinkedIn Learning",
    date: "June 2025",
  },
  {
    id: "aws",
    title: "Project Management Foundation",
    image: Project,
    issuer: "LinkedIn Learning (PMI)",
    date: "August 2025",
  },
  {
    id: "java",
    title: "Software Testing Foundation",
    image: Testing,
    issuer: "LinkedIn Learning",
    date: "August 2025",
  },
  {
    id: "react",
    title: "Web Development Beginners",
    image: Web,
    issuer: "University of Moratuwa",
    date: "Feb 2025",
  },
  {
    id: "sql",
    title: "Problem Solving Basic",
    image: Hack,
    issuer: "Hacker Rank",
    date: "February 2035",
  },
];

const Certifications = ({ viewCertificate }) => {
  return (
    <section className="certifications-section" id="certifications">
      <h2 className="cer-section-title">Certifications</h2>
      <div className="certifications-container">
        {certificationsData.map((cert, index) => (
          <div
            key={cert.id}
            className="certification-card"
            onClick={() => viewCertificate(cert.id)}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="certificate-image">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <div className="certificate-details">
                <div className="certificate-issuer">
                  <FaBuilding /> <span>Issued By {cert.issuer}</span>
                </div>
                <div className="certificate-date">
                  <FaCalendarAlt /> <span>{cert.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
