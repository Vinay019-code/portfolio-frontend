import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/learnings", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

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
      icon: <FaInstagram />,
      href: "https://www.linkedin.com/in/vinay-yadav-617363335",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
      label: "Email",
    },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "3rem 0 2rem",
        marginTop: "4rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Nav Links */}
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
          aria-label="Footer navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-underline"
              style={{ fontSize: "0.85rem" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
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
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-muted)",
                fontSize: "1rem",
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

        {/* Copyright */}
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          © {currentYear} Vinay Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;