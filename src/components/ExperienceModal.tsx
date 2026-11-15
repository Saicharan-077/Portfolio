import { useEffect } from "react";
import { ExperienceItem } from "../data/portfolioData";
import { MdClose } from "react-icons/md";
import { FaBuilding, FaCalendarAlt, FaUserTie } from "react-icons/fa";
import "./styles/ExperienceModal.css";

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

const ExperienceModal = ({ experience, onClose }: ExperienceModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (experience) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  return (
    <div className="exp-modal-overlay" onClick={onClose}>
      <div
        className="exp-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="exp-modal-close"
          onClick={onClose}
          aria-label="Close modal"
          data-cursor="disable"
        >
          <MdClose />
        </button>

        {/* Hero Header */}
        <div
          className="exp-modal-hero"
          style={{
            borderColor: `${experience.accent}40`,
          }}
        >
          <span className="exp-badge" style={{ color: experience.accent }}>
            {experience.type} • {experience.year}
          </span>
          <h2>{experience.role}</h2>
          <div className="exp-meta">
            <span>
              <FaBuilding /> {experience.company}
            </span>
            <span>
              <FaCalendarAlt /> {experience.period}
            </span>
            {experience.mentor && (
              <span>
                <FaUserTie /> Mentor: {experience.mentor}
              </span>
            )}
          </div>
          <div className="exp-tags">
            {experience.tags.map((tag) => (
              <span key={tag} className="exp-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="exp-modal-body">
          {/* Overview */}
          <section className="exp-section">
            <h4 style={{ color: experience.accent }}>01. Role Summary</h4>
            <p className="exp-text">{experience.summary}</p>
          </section>

          {/* Responsibilities */}
          <section className="exp-section">
            <h4 style={{ color: experience.accent }}>02. Key Responsibilities & Contributions</h4>
            <ul className="exp-list">
              {experience.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </section>

          {/* Tech Learned */}
          <section className="exp-section">
            <h4 style={{ color: experience.accent }}>03. Core Technologies & Competencies</h4>
            <div className="exp-tech-grid">
              {experience.techLearned.map((tl) => (
                <div key={tl.category} className="exp-tech-card">
                  <h6>{tl.category}</h6>
                  <div className="exp-tech-pills">
                    {tl.items.map((it) => (
                      <span key={it}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          {experience.challenges && experience.challenges.length > 0 && (
            <section className="exp-section">
              <h4 style={{ color: experience.accent }}>04. Engineering Challenges Solved</h4>
              <div className="exp-challenges-grid">
                {experience.challenges.map((c, i) => (
                  <div key={i} className="exp-challenge-card">
                    <div className="exp-ch-issue">⚡ Problem: {c.title}</div>
                    <div className="exp-ch-sol">✓ Solution: {c.solution}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Reflection */}
          <section className="exp-section">
            <h4 style={{ color: experience.accent }}>05. Professional Reflection</h4>
            <blockquote className="exp-quote">
              &ldquo;{experience.reflection}&rdquo;
            </blockquote>
          </section>

          {/* Measurable Outcomes */}
          <section className="exp-section">
            <h4 style={{ color: experience.accent }}>06. Measurable Outcomes</h4>
            <ul className="exp-outcomes-list">
              {experience.outcomes.map((o, i) => (
                <li key={i}>
                  <span className="exp-check">✓</span> {o}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
