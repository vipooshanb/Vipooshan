import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./Base.css";

function App() {
  return (
    <div className="App">
      {/* Your other sections like Navbar, About, Projects etc. */}
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
