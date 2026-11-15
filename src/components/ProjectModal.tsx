import { useEffect } from "react";
import { ProjectCaseStudy } from "../data/portfolioData";
import { MdClose, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import "./styles/ProjectModal.css";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close modal"
          data-cursor="disable"
        >
          <MdClose />
        </button>

        {/* Header Hero */}
        <div
          className="project-modal-hero"
          style={{
            background: `linear-gradient(135deg, rgba(20, 15, 35, 0.95), rgba(10, 8, 20, 0.98))`,
            borderColor: `${project.accentColor}40`,
          }}
        >
          <div className="project-modal-badge" style={{ color: project.accentColor }}>
            <span>{project.num}</span> • {project.category}
          </div>
          <h2>{project.title}</h2>
          <p className="project-modal-subtitle">{project.subtitle}</p>

          <div className="project-modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-modal-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="project-modal-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-btn primary"
                data-cursor="disable"
              >
                <FaGithub /> View Source on GitHub <MdArrowOutward />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-btn secondary"
                data-cursor="disable"
              >
                Live Demo <MdArrowOutward />
              </a>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="project-modal-body">
          {/* Media preview */}
          {project.image && project.image !== "/images/placeholder.webp" && (
            <div className="project-modal-media">
              <img src={project.image} alt={project.title} />
            </div>
          )}

          {/* Section: Overview */}
          <section className="modal-section">
            <h3 style={{ color: project.accentColor }}>01. Executive Overview</h3>
            <p className="modal-text">{project.overview}</p>
          </section>

          {/* Section: Problem & Solution */}
          <div className="modal-grid-2">
            <section className="modal-card">
              <h4>⚠️ The Challenge</h4>
              <p>{project.problem}</p>
            </section>
            <section className="modal-card">
              <h4>💡 Engineered Solution</h4>
              <p>{project.solution}</p>
            </section>
          </div>

          {/* Section: Key Metrics / Results */}
          {project.results && project.results.length > 0 && (
            <section className="modal-section">
              <h3 style={{ color: project.accentColor }}>02. Performance Metrics</h3>
              <div className="modal-metrics-grid">
                {project.results.map((res) => (
                  <div key={res.metric} className="modal-metric-card">
                    <span className="metric-val" style={{ color: project.accentColor }}>
                      {res.value}
                    </span>
                    <span className="metric-label">{res.metric}</span>
                    <span className="metric-desc">{res.desc}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Workflow Steps */}
          {project.workflow && project.workflow.length > 0 && (
            <section className="modal-section">
              <h3 style={{ color: project.accentColor }}>03. Execution Workflow</h3>
              <div className="modal-workflow-list">
                {project.workflow.map((item) => (
                  <div key={item.step} className="modal-workflow-item">
                    <span className="workflow-step" style={{ color: project.accentColor }}>
                      {item.step}
                    </span>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: System Architecture */}
          {project.architecture && project.architecture.length > 0 && (
            <section className="modal-section">
              <h3 style={{ color: project.accentColor }}>04. System Architecture</h3>
              <div className="modal-arch-grid">
                {project.architecture.map((arch) => (
                  <div key={arch.layer} className="modal-arch-card">
                    <span className="arch-layer" style={{ color: project.accentColor }}>
                      {arch.layer}
                    </span>
                    <h6>{arch.tech}</h6>
                    <p>{arch.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Training Pipeline if applicable */}
          {project.trainingPipeline && project.trainingPipeline.length > 0 && (
            <section className="modal-section">
              <h3 style={{ color: project.accentColor }}>05. Model Training Pipeline</h3>
              <div className="modal-training-list">
                {project.trainingPipeline.map((tp) => (
                  <div key={tp.phase} className="training-phase-item">
                    <span className="training-dot" style={{ backgroundColor: project.accentColor }} />
                    <div>
                      <strong>{tp.phase}:</strong> {tp.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Key Features */}
          {project.features && project.features.length > 0 && (
            <section className="modal-section">
              <h3 style={{ color: project.accentColor }}>06. Core Features</h3>
              <div className="modal-features-grid">
                {project.features.map((feat) => (
                  <div key={feat.title} className="modal-feature-card">
                    <h5>{feat.title}</h5>
                    <p>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Technical Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="modal-section">
              <h3 style={{ color: project.accentColor }}>07. Challenges & Resolutions</h3>
              <div className="modal-challenges-list">
                {project.challenges.map((ch) => (
                  <div key={ch.title} className="modal-challenge-item">
                    <div className="challenge-q">
                      <span>⚡ Issue:</span> {ch.title}
                    </div>
                    <div className="challenge-a">
                      <span>✓ Engineering Fix:</span> {ch.solution}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Future Scope */}
          {project.futureScope && project.futureScope.length > 0 && (
            <section className="modal-section">
              <h3 style={{ color: project.accentColor }}>08. Future Roadmap</h3>
              <ul className="modal-bullet-list">
                {project.futureScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
