import { useState } from "react";
import { FaPaperPlane, FaTimes, FaCommentDots } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const getReply = (message) => {
    message = message.toLowerCase();

    if (message.includes("project")) {
      return "I have built Weather App, Travel Planner and Chat App 🚀";
    }
    if (message.includes("skills") || message.includes("tech")) {
      return "React, Node, Express, MongoDB, Java, Spring Boot 💻";
    }
    if (message.includes("contact") || message.includes("email")) {
      return "You can reach me through the Contact page or LinkedIn!";
    }
    if (message.includes("hello") || message.includes("hi")) {
      return "Hey there! 👋 Ask me about my projects or skills.";
    }
    return "Ask me about my projects, skills, or how to contact me 😊";
  };

  const send = () => {
    if (!msg.trim()) return;
    const reply = getReply(msg);
    setChat([...chat, { user: msg, bot: reply }]);
    setMsg("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") send();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          width: "52px",
          height: "52px",
          borderRadius: "var(--radius-full)",
          background: "var(--accent)",
          color: "white",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          boxShadow: "0 4px 20px var(--accent-glow-strong)",
          transition: "all var(--transition-base)",
          zIndex: 90,
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = open
            ? "rotate(90deg) scale(1.05)"
            : "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = open
            ? "rotate(90deg)"
            : "scale(1)";
        }}
      >
        {open ? <FaTimes /> : <FaCommentDots />}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "5.5rem",
            right: "1.5rem",
            width: "320px",
            maxWidth: "calc(100vw - 2rem)",
            background: "var(--surface-1)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            zIndex: 89,
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            animation: "chatSlideUp 0.3s ease",
          }}
          role="dialog"
          aria-label="Chat assistant"
        >
          {/* Header */}
          <div
            style={{
              padding: "1rem 1.25rem",
              borderBottom: "1px solid var(--border-subtle)",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Ask Me
          </div>

          {/* Messages */}
          <div
            style={{
              height: "240px",
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {chat.length === 0 && (
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.8rem",
                  textAlign: "center",
                  marginTop: "3rem",
                }}
              >
                Ask about my projects or skills
              </p>
            )}
            {chat.map((c, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <div style={{ alignSelf: "flex-end" }}>
                  <span
                    style={{
                      background: "var(--accent)",
                      color: "white",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "var(--radius-md) var(--radius-md) 2px var(--radius-md)",
                      fontSize: "0.8rem",
                      display: "inline-block",
                      maxWidth: "220px",
                      wordBreak: "break-word",
                    }}
                  >
                    {c.user}
                  </span>
                </div>
                <div style={{ alignSelf: "flex-start" }}>
                  <span
                    style={{
                      background: "var(--surface-3)",
                      color: "var(--text-secondary)",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "var(--radius-md) var(--radius-md) var(--radius-md) 2px",
                      fontSize: "0.8rem",
                      display: "inline-block",
                      maxWidth: "220px",
                      wordBreak: "break-word",
                    }}
                  >
                    {c.bot}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={handleKeyDown}
              className="input"
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: "0.6rem 0.75rem",
                fontSize: "0.8rem",
              }}
              aria-label="Chat message input"
            />
            <button
              onClick={send}
              className="btn btn-primary"
              style={{
                padding: "0.6rem 0.8rem",
                fontSize: "0.8rem",
                borderRadius: "var(--radius-md)",
              }}
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}