import { useState } from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { useScrollReveal, useStaggerReveal } from "../animations/gsapUtils";

const skillsData = [
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Backend" },
  { name: "Java", icon: <FaJava />, category: "Core" },
  { name: "Python", icon: <FaPython />, category: "AI" },
  { name: "DSA", icon: "📊", category: "Core" },
];

const certificates = [
  {
    title: "Java Certificate",
    image: "/assets/certificates/java.png",
    link: "#",
  },
  {
    title: "Python Data Science",
    image: "/assets/certificates/python.png",
    link: "#",
  },
  {
    title: "MERN Stack",
    image: "/assets/certificates/mern.png",
    link: "#",
  },
];

const categories = ["All", "Frontend", "Backend", "AI", "Core"];

const Learnings = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const headingRef = useScrollReveal();
  const filtersRef = useScrollReveal({ delay: 0.1 });
  const skillsGridRef = useStaggerReveal({
    childSelector: ".stagger-item",
    stagger: 0.08,
  });
  const certHeadingRef = useScrollReveal();
  const certsGridRef = useStaggerReveal({
    childSelector: ".stagger-item",
    stagger: 0.1,
  });

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        {/* Heading */}
        <div
          ref={headingRef}
          style={{ opacity: 0, textAlign: "center", marginBottom: "1rem" }}
        >
          <span className="section-label">Skills & Learning</span>
          <h1 className="heading-section">My Learnings</h1>
          <p
            className="text-body"
            style={{
              maxWidth: "500px",
              margin: "1rem auto 0",
            }}
          >
            A journey of technologies, problem solving & continuous growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          ref={filtersRef}
          style={{
            opacity: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            margin: "2.5rem 0",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? "btn btn-primary" : "btn btn-ghost"}
              style={{
                padding: "0.45rem 1.1rem",
                fontSize: "0.8rem",
                ...(activeCategory === cat
                  ? {}
                  : {
                      border: "1px solid var(--border-subtle)",
                    }),
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsGridRef}
          key={activeCategory}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "1rem",
            maxWidth: "700px",
            margin: "0 auto 6rem",
          }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="card stagger-item"
              style={{
                opacity: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.5rem 1rem",
                textAlign: "center",
                cursor: "default",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  color: "var(--accent-light)",
                  lineHeight: 1,
                }}
              >
                {skill.icon}
              </div>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div ref={certHeadingRef} style={{ opacity: 0, textAlign: "center", marginBottom: "2rem" }}>
          <span className="section-label">Recognition</span>
          <h2 className="heading-section" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            Certificates
          </h2>
        </div>

        <div
          ref={certsGridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="card stagger-item"
              style={{
                opacity: 0,
                padding: 0,
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.65)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = 1;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = 0;
                  }}
                >
                  <button
                    onClick={() => setSelectedCert(cert.image)}
                    className="btn btn-primary"
                    style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
                  >
                    View
                  </button>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{
                      padding: "0.5rem 1.25rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    Verify <FaExternalLinkAlt style={{ fontSize: "0.65rem" }} />
                  </a>
                </div>
              </div>

              <div
                style={{
                  padding: "1rem 1.25rem",
                  textAlign: "center",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
              >
                {cert.title}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-label="Certificate preview"
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 200,
              cursor: "pointer",
              padding: "2rem",
            }}
          >
            <img
              src={selectedCert}
              alt="Certificate"
              style={{
                maxWidth: "90%",
                maxHeight: "80vh",
                borderRadius: "var(--radius-lg)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Learnings;