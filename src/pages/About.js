import { FaCode, FaDatabase, FaBrain } from "react-icons/fa";
import { useScrollReveal, useStaggerReveal } from "../animations/gsapUtils";

const About = () => {
  const headingRef = useScrollReveal();
  const introRef = useScrollReveal({ delay: 0.1 });
  const cardsContainerRef = useStaggerReveal({ childSelector: '.stagger-item', stagger: 0.12 });
  const journeyRef = useScrollReveal();
  const goalsRef = useScrollReveal();

  const skillCards = [
    {
      icon: <FaCode />,
      title: "Frontend",
      desc: "React, JavaScript, HTML, CSS, Tailwind — building responsive and modern UI.",
    },
    {
      icon: <FaDatabase />,
      title: "Backend",
      desc: "Node.js, Express, Java, MongoDB — creating scalable APIs and systems.",
    },
    {
      icon: <FaBrain />,
      title: "Data Science",
      desc: "Python, data analysis, and problem-solving with real-world datasets.",
    },
  ];

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        {/* Heading */}
        <div ref={headingRef} style={{ opacity: 0, textAlign: "center", marginBottom: "1rem" }}>
          <span className="section-label">About</span>
          <h1 className="heading-section">About Me</h1>
        </div>

        {/* Intro */}
        <p
          ref={introRef}
          className="text-body"
          style={{
            opacity: 0,
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 4rem",
          }}
        >
          I'm Vinay Yadav, a passionate Full Stack Developer and Data Science
          enthusiast. I love building scalable web applications and solving
          real-world problems using modern technologies like MERN, Java, and
          Python.
        </p>

        {/* Skills Summary Cards */}
        <div
          ref={cardsContainerRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "5rem",
          }}
        >
          {skillCards.map((card, i) => (
            <div key={i} className="card stagger-item" style={{ opacity: 0 }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-glow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-light)",
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                }}
              >
                {card.icon}
              </div>
              <h3 className="heading-card" style={{ marginBottom: "0.5rem" }}>
                {card.title}
              </h3>
              <p className="text-small">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Journey */}
        <div
          ref={journeyRef}
          style={{
            opacity: 0,
            marginBottom: "4rem",
            maxWidth: "800px",
          }}
        >
          <span className="section-label">Journey</span>
          <h2
            className="heading-card"
            style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
          >
            My Journey
          </h2>
          <div
            className="text-body"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p>
              My journey started with curiosity about how websites and
              applications work. Over time, I developed strong skills in full
              stack development using the MERN stack, along with backend
              development in Java and Python.
            </p>
            <p>
              I also explored Data Structures & Algorithms to strengthen my
              problem-solving abilities and stepped into Data Science to build
              intelligent, data-driven solutions.
            </p>
            <p>
              I continuously learn and improve, focusing on writing clean,
              efficient, and scalable code.
            </p>
          </div>
        </div>

        {/* Goals */}
        <div ref={goalsRef} style={{ opacity: 0, maxWidth: "800px" }}>
          <span className="section-label">Goals</span>
          <h2
            className="heading-card"
            style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
          >
            My Goals
          </h2>
          <div
            className="text-body"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p>
              My goal is to become a highly skilled Full Stack Developer and
              Data Scientist, building impactful digital products that solve
              real-world problems.
            </p>
            <p>
              I aim to work on innovative projects, contribute to open source,
              and continuously grow in the field of software development and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;