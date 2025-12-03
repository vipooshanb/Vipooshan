import React, { useEffect, useRef, useState } from "react";
import "../styles/AiAssistant.css";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

const AiAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your assistant. Ask me anything (demo)." },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    if (open && endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const toggleOpen = () => setOpen((v) => !v);

  const send = (e) => {
    e && e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const userMsg = { from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // Demo bot reply (replace with real API calls later)
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Sorry Bro Now I'm Busy" },
      ]);
    }, 600);
  };

  return (
    <div className={`ai-assistant ${open ? "open" : ""}`}>
      <button
        className="ai-toggle"
        onClick={toggleOpen}
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      <div className="ai-panel" role="dialog" aria-hidden={!open}>
        <div className="ai-header">
          <div className="ai-title">
            <FaRobot /> <span>Assistant</span>
          </div>
          <button className="ai-close" onClick={toggleOpen} aria-label="Close">
            <FaTimes />
          </button>
        </div>

        <div className="ai-messages">
          {messages.map((m, i) => (
            <div key={i} className={`ai-message ${m.from}`}>
              <div className="ai-msg-text">{m.text}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <form className="ai-input" onSubmit={send}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            aria-label="Message"
          />
          <button type="submit" aria-label="Send"><FaPaperPlane /></button>
        </form>
      </div>
    </div>
  );
};

export default AiAssistant;
