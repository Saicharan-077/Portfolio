import { useState } from "react";
import "./styles/Career.css";
import PORTFOLIO_DATA, { ExperienceItem } from "../data/portfolioData";
import ExperienceModal from "./ExperienceModal";
import { MdInfoOutline } from "react-icons/md";

const Career = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <>
      <div className="career-section section-container" id="career">
        <div className="career-container">
          <h2>
            My career <span>&</span>
            <br /> experience
          </h2>
          <div className="career-info">
            <div className="career-timeline">
              <div className="career-dot"></div>
            </div>

            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div className="career-info-box" key={exp.id}>
                <div className="career-info-in">
                  <div className="career-role">
                    <h4 style={{ color: "#ffffff" }}>{exp.role}</h4>
                    <h5 style={{ color: exp.accent }}>{exp.company}</h5>
                    {exp.mentor && (
                      <span className="career-mentor">Mentor: {exp.mentor}</span>
                    )}
                  </div>
                  <h3 style={{ color: exp.accent }}>{exp.year}</h3>
                </div>
                <div className="career-desc-wrap">
                  <p>{exp.summary}</p>
                  <div className="career-tags-row">
                    {exp.tags.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <button
                    className="career-detail-btn"
                    onClick={() => setSelectedExp(exp)}
                    data-cursor="disable"
                  >
                    <MdInfoOutline /> View Detailed Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ExperienceModal
        experience={selectedExp}
        onClose={() => setSelectedExp(null)}
      />
    </>
  );
};

export default Career;
