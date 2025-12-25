// Projects.jsx
import React, { useState } from "react";
import "../styles/Projects.css"; // Assuming you have a CSS file for styling
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ScrollReveal from "../utils/ScrollReveal";

const categories = [
  { name: "All", value: "all" },
  { name: "Web & Mobile", value: "web-mobile" },
  { name: "Full Stack", value: "full-stack" },
  { name: "Web Development", value: "web" },
  { name: "Automation Testing", value: "automation" },
  { name: "Machine Learning", value: "machine-learning" },
];

const projects = [
  {
    title: "Task Management System",
    year: "2024 March",
    tech: "Python, Tkinter",
    category: "web",
    bgColor: "#2a3f5d",
    description:
      "This is a desktop-based Task Management System designed using Python and Tkinter for the graphical user interface. It helps users add, view, update, and delete their tasks in an organized manner. All task data is persistently stored in a JSON file using Python dictionaries, ensuring structured and reliable task tracking.",
    github: "https://github.com/vipooshanb/Task-Management-System---GUI",
    live: "https://github.com/vipooshanb/Task-Management-System---GUI",
  },
  {
    title: "Front-End Development",
    year: "2025 June",
    tech: "HTML, CSS, JavaScript",
    category: "full-stack web web-mobile",
    bgColor: "#4d2a4d",
    description:
      "Ticketing system with a React frontend and Spring Boot backend for real-time operations. Features include seat selection, payment processing, and ticket management.",
    github: "https://github.com/vipooshanb/Aqua_verse",
    live: "https://aqua-verse-alpha.vercel.app/",
  },
  {
    title: "My Portfolio Website",
    year: "2025 September",
    tech: "React, Tailwind CSS",
    category: "web full-stack web-mobile",
    bgColor: "#2a4d3f",
    description:
      "Scalable Java-based application for managing flight operations and passenger seating with real-time updates, reservation system, and admin dashboard.",
    github: "https://github.com/vipooshanb/Vipooshan-Portfolio",
    live: "https://vipooshan.vercel.app/",
  },
  {
    title: "Portfolio Website Testing",
    year: "2025 ONGOING",
    tech: "Selenium, Python",
    category: "software automation",
    bgColor: "#2a4d3f",
    description:
      "Automated testing suite for the portfolio website, ensuring functionality and performance across different browsers and devices.",
    github: "#",
    live: "#",
  },
  {
    title: "Mozhii.AI (Tamil LLM)",
    year: "2025 November",
    tech: "Next.js, TypeScript",
    category: "full-stack web web-mobile",
    bgColor: "#2a4d3f",
    description:
      "Landing page for Mozhii.AI, an AI assistant platform, built with Next.js and TypeScript for optimal performance and SEO.",
    github: "https://github.com/Mozhii-LLM/Mozhii",
    live: "https://www.mozhii.online",
  },
  {
    title: "Mozhii.AI - Sri Lanka's Tamil Large Language Model",
    year: "2025 Ongoing...",
    tech: "Python, PyTorch, Transformers, FastAPI, QLoRA",
    category: "full-stack web web-mobile",
    bgColor: "#2a4d3f",
    description:
      "Landing page for Mozhii.AI, an AI assistant platform, built with Next.js and TypeScript for optimal performance and SEO.",
    github: "https://github.com/Mozhii-LLM/Mozhii",
    live: "https://www.mozhii.online",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) =>
          p.category.split(" ").includes(activeCategory)
        );

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">My Projects</h2>

          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={activeCategory === cat.value ? "active" : ""}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="netflix-row">
          {filteredProjects.length === 0 ? (
            <p>No projects found in this category</p>
          ) : (
            filteredProjects.map((project, index) => (
              <ScrollReveal key={index} className="netflix-card-wrapper">
                <div
                  className="netflix-card"
                  data-category={project.category}
                >
                  <div
                    className="card-bg"
                    style={{ backgroundColor: project.bgColor }}
                  ></div>
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span className="year">{project.year}</span>
                    </div>
                    <div>
                      <span className="tech">{project.tech}</span>
                    </div>
                    <p>{project.description}</p>
                  </div>

                  <div className="card-actions">
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      title="View on GitHub"
                    >
                      <FaGithub />
                    </button>
                  </div>

                  <button
                    className="view-project-btn"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <FaExternalLinkAlt /> View Project
                  </button>
                </div>
              </ScrollReveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
