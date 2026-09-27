import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useScrollReveal, useStaggerReveal } from "../animations/gsapUtils";

const projects = [
  {
    name: "Weather App",
    desc: "Real-time weather application that fetches live weather data using external APIs. Displays current conditions, temperature, and forecasts with a clean, responsive interface.",
    tech: ["React", "API", "CSS"],
    github: "#",
    live: "#",
  },
  {
    name: "Travel Planner",
    desc: "Smart trip planning application that helps users organize and plan their travels efficiently. Features destination search, itinerary management, and interactive maps.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    name: "Chat App",
    desc: "Real-time messaging system with instant message delivery, user authentication, and conversation management. Built with modern web technologies for seamless communication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const headingRef = useScrollReveal();
  const projectsGridRef = useStaggerReveal({
    childSelector: ".stagger-item",
    stagger: 0.15,
    y: 50,
  });

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        {/* Heading */}
        <div
          ref={headingRef}
          style={{ opacity: 0, textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="section-label">Work</span>
          <h1 className="heading-section">Projects</h1>
          <p
            className="text-body"
            style={{
              maxWidth: "500px",
              margin: "1rem auto 0",
            }}
          >
            A selection of projects I've built and maintained.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsGridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="card stagger-item"
      style={{
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
      }}
      onMouseEnter={(e) => {
        const arrow = e.currentTarget.querySelector(".project-arrow");
        if (arrow) {
          arrow.style.transform = "translateX(4px)";
          arrow.style.color = "var(--accent-light)";
        }
      }}
      onMouseLeave={(e) => {
        const arrow = e.currentTarget.querySelector(".project-arrow");
        if (arrow) {
          arrow.style.transform = "translateX(0)";
          arrow.style.color = "var(--text-muted)";
        }
      }}
    >
      {/* Project Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            className="text-meta"
            style={{ marginBottom: "0.5rem" }}
          >
            Project
          </div>
          <h3 className="heading-card">{project.name}</h3>
        </div>
        <FaArrowRight
          className="project-arrow"
          style={{
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            transition: "all 0.3s ease",
            marginTop: "1.5rem",
            flexShrink: 0,
          }}
        />
      </div>

      {/* Description */}
      <p
        className="text-small"
        style={{ flex: 1, lineHeight: "1.65" }}
      >
        {project.desc}
      </p>

      {/* Tech Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
        }}
      >
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          paddingTop: "0.5rem",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.8rem",
            padding: "0.4rem 0",
            color: "var(--text-muted)",
            transition: "color var(--transition-fast)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
          aria-label={`View ${project.name} on GitHub`}
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.8rem",
            padding: "0.4rem 0",
            color: "var(--text-muted)",
            transition: "color var(--transition-fast)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
          aria-label={`View ${project.name} live demo`}
        >
          <FaExternalLinkAlt style={{ fontSize: "0.7rem" }} /> Live
        </a>
      </div>
    </div>
  );
}