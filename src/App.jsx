import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./Dark.css";  // Dark mode styles
import "./Light.css"; // Light mode styles
import LanguageSelector from "./components/LanguageSelector"; // adjust path if needed


function App() {
  const [darkMode, setDarkMode] = useState(true); // Default: dark mode

  // Add or remove body classes when mode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className="App">
      {/* Light/Dark mode button */}
        <button
          onClick={toggleMode}
          style={{
            position: "fixed",
            top: "95%",
            right: "20px",
            transform: "translateY(-50%)",
            padding: "12px",
            borderRadius: "50%",
            background: darkMode ? "#222" : "#fff",
            color: darkMode ? "#fff" : "#222",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            border: "none",
            zIndex: 1000,
            cursor: "pointer",
            fontSize: "1.7rem",
            transition: "background 0.3s, color 0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            // Sun SVG
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Light Mode">
              <circle cx="12" cy="12" r="5" fill="#FFD600" />
              <g stroke="#FFD600" strokeWidth="2">
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
              </g>
            </svg>
          ) : (
            // Moon SVG
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Dark Mode">
              <path d="M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79z" fill="#FFC107" />
            </svg>
          )}
        </button>

      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
      <LanguageSelector />

    </div>
  );
}

export default App;
