// Education.jsx
import React from "react";
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCode, 
  FaMicrochip, 
  FaCalculator, 
  FaProjectDiagram, 
  FaDatabase, 
  FaLaptopCode, 
  FaChartLine, 
  FaObjectGroup, 
  FaBrain, 
  FaServer, 
  FaUsers 
} from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import ScrollReveal from "../utils/ScrollReveal";

import "../styles/Education.css"; // Keep your existing CSS

const educationData = [
  {
    date: "2025 - Present",
    institution: "Informatics Institute of Technology (UOW)",
    location: "Colombo, Sri Lanka",
    degree: "B.Sc. (Hons) in Computer Science",
    courses: [
      [
        { icon: <FaCode />, text: "Software Development Python" },
        { icon: <FaMicrochip />, text: "Computer Systems Fundamentals" },
        { icon: <FaCalculator />, text: "Mathematics for Computing" },
        { icon: <FaProjectDiagram />, text: "Data Structures & Algorithms" },
        { icon: <FaDatabase />, text: "Database Management Systems" },
        { icon: <FaLaptopCode />, text: "Web Design & Development" },
      ],
      [
        { icon: <FaJava />, text: "Software Development Java" },
        { icon: <FaChartLine />, text: "Trends in Computer Science" },
        { icon: <FaObjectGroup />, text: "Object Oriented Programming" },
        { icon: <FaBrain />, text: "Machine Learning & Data Mining" },
        { icon: <FaServer />, text: "Client Server Architecture" },
        { icon: <FaUsers />, text: "Software Development Group Project" },
      ]
    ]
  },
  {
    date: "2014 - 2022",
    institution: "Jaffna Hindu College",
    location: "Jaffna, Sri Lanka",
    degree: "G.C.E. Advanced Level - Science Stream",
    courses: [
      [
        { icon: <FaCode />, text: "Biology" },
        { icon: <FaCalculator />, text: "Physics" },
        { icon: <FaProjectDiagram />, text: "Chemistry" },
        { icon: <FaLaptopCode />, text: "GIT" },
      ]
    ]
  }
];

const Education = () => {
  return (
    <section className="edu-section-alt" id="education">
      <ScrollReveal>
        <h2 className="edu-section-title">Education</h2>
      </ScrollReveal>
      <div className="edu-cards-container">
        {educationData.map((edu, index) => (
          <ScrollReveal key={index} className="edu-card-wrapper">
            <div className="edu-card">
              <div className="edu-card-header">
                <div className="edu-date">
                  <FaCalendarAlt /> {edu.date}
                </div>
                <h3 className="edu-institution">{edu.institution}</h3>
                <div className="edu-location">
                  <FaMapMarkerAlt /> {edu.location}
                </div>
              </div>
              <div className="edu-card-body">
                <h4 className="edu-degree">{edu.degree}</h4>
                <div className="edu-badge">Key Courses :- </div>
                <div className="edu-courses-wrapper">
                  {edu.courses.map((courseColumn, colIndex) => (
                    <ul key={colIndex} className="edu-features-list">
                      {courseColumn.map((course, idx) => (
                        <li key={idx}>
                          {course.icon} {course.text}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
