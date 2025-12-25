import React, { useEffect, useState } from 'react';
import '../styles/SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState("Initializing...");
  const name = "Vipooshan";
  const duration = 2000; // 2 seconds
  const intervalTime = 20; // Update every 20ms
  const steps = duration / intervalTime;
  const increment = 100 / steps;

  const sysMessages = [
    "Initializing kernel...",
    "Loading modules...",
    "Compiling assets...",
    "Optimizing UI...",
    "Starting system..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        
        // Update boot text based on progress
        const msgIndex = Math.floor((newProgress / 100) * sysMessages.length);
        if (msgIndex < sysMessages.length) {
            setBootText(sysMessages[msgIndex]);
        }

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); 
          return 100;
        }
        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [increment, onComplete]);

  // Calculate how many letters to show based on progress
  const lettersToShow = Math.ceil((progress / 100) * name.length);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="terminal-header">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
        </div>
        
        <h1 className="splash-name">
          <span className="prompt">&gt; </span>
          {name.split('').map((letter, index) => (
            <span
              key={index}
              className={index < lettersToShow ? 'visible' : 'hidden'}
            >
              {letter}
            </span>
          ))}
          <span className="cursor">_</span>
        </h1>
        
        <div className="loading-bar-container">
          <div
            className="loading-bar"
            style={{ width: `${progress}%` }}
          >
            <div className="loading-glare"></div>
          </div>
        </div>

        <div className="boot-text">
            <span className="code-bracket">[</span>
            <span className="status-text">{bootText}</span>
            <span className="code-bracket">]</span> 
            <span className="percentage">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
