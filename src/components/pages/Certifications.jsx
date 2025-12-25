// Certifications.jsx
import React from "react";
import { FaLinkedin, FaHackerrank } from "react-icons/fa";
import "../styles/Certifications.css"; 
import ScrollReveal from "../utils/ScrollReveal";

// Import UOM logo (assuming UOM.png is suitable, otherwise we might need a different one)
import UOM from "../../assets/UOM.png";

const certificationsData = [
  {
    id: "python",
    title: "Python for Beginners",
    provider: "uom",
    issuer: "University Of Moratuwa",
    date: "2024",
  },
  {
    id: "webdev",
    title: "Figma Essential Training",
    provider: "linkedin",
    issuer: "LinkedIn Learning",
    date: "2025",
  },
  {
    id: "aws",
    title: "Project Management Foundation",
    provider: "linkedin",
    issuer: "LinkedIn Learning",
    date: "2025",
  },
  {
    id: "java",
    title: "Software Testing Foundation",
    provider: "linkedin",
    issuer: "LinkedIn Learning",
    date: "2025",
  },
  {
    id: "react",
    title: "Web Development Beginners",
    provider: "uom",
    issuer: "University of Moratuwa",
    date: "2025",
  },
  {
    id: "sql",
    title: "Problem Solving Basic",
    provider: "hackerrank",
    issuer: "Hacker Rank",
    date: "2035",
  },
];

const Certifications = () => {
  const getLogo = (provider) => {
    switch (provider) {
      case "linkedin":
        return <FaLinkedin className="cert-icon linkedin" />;
      case "hackerrank":
        return <FaHackerrank className="cert-icon hackerrank" />;
      case "uom":
        return <img src={UOM} alt="UOM" className="cert-img-logo" />;
      default:
        return null;
    }
  };

  return (
    <section className="certifications-section" id="certifications">
      <ScrollReveal>
        <h2 className="cer-section-title">Certifications</h2>
      </ScrollReveal>
      <div className="certifications-container">
        {certificationsData.map((cert, index) => (
          <ScrollReveal key={cert.id} className="certification-card-wrapper">
            <div
              className="certification-card"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="cert-body">
                <div className="cert-logo-wrapper">
                  {getLogo(cert.provider)}
                </div>
                <div className="cert-info">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <span className="certificate-date">{cert.date}</span>
                </div>
              </div>
              <div className="cert-footer">
                <span>Issued by: {cert.issuer}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
