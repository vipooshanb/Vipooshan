import React from "react";
import "../styles/Skills.css"; // Assuming you have a CSS file for styling
import { 
  FaJava, 
  FaPython, 
  FaGitAlt, 
  FaGithub, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact,
  FaDocker
} from "react-icons/fa";
import { 
  SiMysql, 
  SiMongodb, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiFlutter, 
  SiFigma, 
  SiPostman 
} from "react-icons/si";
import ScrollReveal from "../utils/ScrollReveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "React", icon: <FaReact /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Figma", icon: <SiFigma /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Postman", icon: <SiPostman /> }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <ScrollReveal>
        <h2 className="skills-title">Technical Skills</h2>
      </ScrollReveal>
      
      <div className="skills-grid">
        {/* First Row: Frontend & Backend */}
        <div className="skills-row">
          <ScrollReveal className="skill-category-wrapper">
            <div className="skill-category">
              <h3 className="category-title">{skillCategories[0].title}</h3>
              <div className="skills-container">
                {skillCategories[0].skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="skill-category-wrapper">
            <div className="skill-category">
              <h3 className="category-title">{skillCategories[1].title}</h3>
              <div className="skills-container">
                {skillCategories[1].skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Second Row: Database & Tools */}
        <div className="skills-row">
          <ScrollReveal className="skill-category-wrapper">
            <div className="skill-category">
              <h3 className="category-title">{skillCategories[2].title}</h3>
              <div className="skills-container">
                {skillCategories[2].skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="skill-category-wrapper">
            <div className="skill-category">
              <h3 className="category-title">{skillCategories[3].title}</h3>
              <div className="skills-container">
                {skillCategories[3].skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;