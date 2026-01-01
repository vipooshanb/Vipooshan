import React, { useState, useEffect } from "react";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Education from "./components/pages/Education";
import Certifications from "./components/pages/Certifications";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import SplashScreen from "./components/pages/SplashScreen";
import "./Dark.css";  // Dark mode styles

function App() {
  const [loading, setLoading] = useState(true);

  // Force dark mode
  useEffect(() => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }, []);

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="App">
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
