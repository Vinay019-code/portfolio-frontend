import axios from "axios";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { useScrollReveal } from "../animations/gsapUtils";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 0.15 });

  const submit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill all fields." });
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const apiUrl = process.env.REACT_APP_API_URL || "https://portfolio-backend-dlkc.onrender.com";
      const res = await axios.post(`${apiUrl}/api/contact`, form);

      setStatus({
        type: "success",
        text: res.data.message || "Message sent successfully!",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Vinay019-code",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/vinay-yadav-617363335",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
      label: "Email",
    },
  ];

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        {/* Heading */}
        <div
          ref={headingRef}
          style={{ opacity: 0, textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="section-label">Contact</span>
          <h1 className="heading-section">Let's Build Something</h1>
          <p
            className="text-body"
            style={{
              maxWidth: "500px",
              margin: "1rem auto 0",
            }}
          >
            Have a project in mind or just want to say hello? Reach out.
          </p>
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          style={{
            opacity: 0,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {/* Contact Form */}
          <form
            onSubmit={submit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <input
              className="input"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-label="Your name"
            />
            <input
              className="input"
              placeholder="Your Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-label="Your email"
            />
            <textarea
              className="input"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ resize: "vertical", minHeight: "120px" }}
              aria-label="Your message"
            />

            {/* Status Message */}
            {status && (
              <p
                style={{
                  fontSize: "0.85rem",
                  color:
                    status.type === "success"
                      ? "#34D399"
                      : "#F87171",
                }}
              >
                {status.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{
                alignSelf: "flex-start",
                padding: "0.8rem 2rem",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Sending..." : "Send Message"}{" "}
              <FaArrowRight style={{ fontSize: "0.75rem" }} />
            </button>
          </form>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              paddingTop: "1rem",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <span className="text-small">Find me on</span>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontSize: "1.1rem",
                  transition: "all var(--transition-base)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent-light)";
                  e.currentTarget.style.background = "var(--accent-glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
