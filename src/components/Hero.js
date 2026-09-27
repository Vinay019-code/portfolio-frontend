import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { createHeroTimeline, useMagneticButton } from "../animations/gsapUtils";

export default function Hero() {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const techRef = useRef(null);
  const primaryBtnRef = useMagneticButton(0.25);

  useEffect(() => {
    const tl = createHeroTimeline({
      heading: headingRef.current,
      subtitle: subtitleRef.current,
      description: descRef.current,
      buttons: buttonsRef.current,
      tech: techRef.current,
    });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  const techStack = [
    "React", "Java", "Python", "Node.js", "MongoDB", "Spring Boot"
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingTop: "6rem",
        paddingBottom: "4rem",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        {/* Subtitle / Label */}
        <div
          ref={subtitleRef}
          style={{
            opacity: 0,
            marginBottom: "1.5rem",
          }}
        >
          <span className="tag" style={{ fontSize: "0.8rem" }}>
            Full Stack Developer &amp; Data Scientist
          </span>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="heading-hero"
          style={{
            opacity: 0,
            marginBottom: "1.5rem",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Vinay Yadav
          </span>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="text-body"
          style={{
            opacity: 0,
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
          }}
        >
          I craft high-performance web applications and intelligent systems
          that solve real-world problems using MERN, Java, and Python.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          style={{
            opacity: 0,
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3.5rem",
          }}
        >
          <Link
            to="/projects"
            ref={primaryBtnRef}
            className="btn btn-primary"
            style={{ padding: "0.85rem 2rem" }}
          >
            View Projects <FaArrowRight style={{ fontSize: "0.8rem" }} />
          </Link>
          <Link
            to="/contact"
            className="btn btn-secondary"
            style={{ padding: "0.85rem 2rem" }}
          >
            Contact Me
          </Link>
        </div>

        {/* Tech Highlights */}
        <div
          ref={techRef}
          style={{
            opacity: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <span
            className="text-small"
            style={{ marginRight: "0.5rem" }}
          >
            Tech I work with
          </span>
          {techStack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "0.3rem 0.75rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                background: "var(--surface-1)",
                transition: "all var(--transition-base)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}