import { useState } from "react";
import PORTFOLIO_DATA from "../data/portfolioData";
import { FaTrophy, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import {
  FaDatabase,
  FaAtom,
  FaMicrochip,
  FaCloud,
  FaRocket,
  FaCertificate,
} from "react-icons/fa6";
import "./styles/Achievements.css";

const renderCertIcon = (iconName: string) => {
  switch (iconName) {
    case "database":
      return <FaDatabase />;
    case "atom":
      return <FaAtom />;
    case "hardware":
      return <FaMicrochip />;
    case "cloud":
      return <FaCloud />;
    case "rocket":
      return <FaRocket />;
    default:
      return <FaCertificate />;
  }
};

const Achievements = () => {
  const [activeTab, setActiveTab] = useState<"achievements" | "certifications">("achievements");

  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <div className="achievements-header">
          <h2>
            Honors <span>&</span> Credentials
          </h2>
          <p className="achievements-subtitle">
            Competitive hackathon victories, executive leadership roles, and verified academic credentials.
          </p>

          <div className="achievements-tabs">
            <button
              className={`ach-tab-btn ${activeTab === "achievements" ? "active" : ""}`}
              onClick={() => setActiveTab("achievements")}
              data-cursor="disable"
            >
              <FaTrophy /> Honors & Hackathons ({PORTFOLIO_DATA.achievements.length})
            </button>
            <button
              className={`ach-tab-btn ${activeTab === "certifications" ? "active" : ""}`}
              onClick={() => setActiveTab("certifications")}
              data-cursor="disable"
            >
              <FaAward /> Verified Certifications ({PORTFOLIO_DATA.certifications.length})
            </button>
          </div>
        </div>

        {activeTab === "achievements" ? (
          <div className="achievements-grid">
            {PORTFOLIO_DATA.achievements.map((item) => (
              <div
                key={item.id}
                className="achievement-card"
                style={{
                  borderTop: `3px solid ${item.accent}`,
                }}
              >
                <div className="ach-card-top">
                  <div className="ach-position" style={{ color: item.accent }}>
                    {item.position}
                  </div>
                  <span className="ach-year">{item.year}</span>
                </div>
                <h3>{item.title}</h3>
                <h5 className="ach-event">{item.event}</h5>
                <p className="ach-desc">{item.desc}</p>

                <div className="ach-tags">
                  {item.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                {item.learnings && item.learnings.length > 0 && (
                  <div className="ach-learnings">
                    <strong>Key Impact:</strong>
                    <ul>
                      {item.learnings.map((l, i) => (
                        <li key={i}>{l}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="certifications-grid">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div
                key={cert.id}
                className="cert-card"
                style={{
                  borderTop: `3px solid ${cert.accent}`,
                }}
              >
                <div className="cert-card-icon">{renderCertIcon(cert.icon)}</div>
                <div className="cert-card-body">
                  <span className="cert-verified" style={{ color: cert.accent }}>
                    <FaAward /> Verified Credential
                  </span>
                  <h3>{cert.title}</h3>
                  <h5 className="cert-org">{cert.org}</h5>
                  <p className="cert-desc">{cert.desc}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link-btn"
                    style={{ borderColor: `${cert.accent}40` }}
                    data-cursor="disable"
                  >
                    View Verified Certificate <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
