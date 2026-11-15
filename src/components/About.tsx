import "./styles/About.css";
import PORTFOLIO_DATA from "../data/portfolioData";
import { FaUniversity } from "react-icons/fa";
import {
  FaGraduationCap,
  FaAward,
  FaBullseye,
  FaLightbulb,
  FaBookOpen,
  FaRocket,
  FaEye,
  FaBolt,
  FaServer,
  FaMicrochip,
  FaBrain,
  FaGlobe,
  FaCompass,
} from "react-icons/fa6";

const renderPhilosophyIcon = (name: string) => {
  switch (name) {
    case "target":
      return <FaBullseye />;
    case "bulb":
      return <FaLightbulb />;
    case "book":
      return <FaBookOpen />;
    case "rocket":
      return <FaRocket />;
    default:
      return <FaBullseye />;
  }
};

const renderInterestIcon = (name: string) => {
  switch (name) {
    case "eye":
      return <FaEye />;
    case "bolt":
      return <FaBolt />;
    case "server":
      return <FaServer />;
    case "hardware":
      return <FaMicrochip />;
    case "brain":
      return <FaBrain />;
    case "globe":
      return <FaGlobe />;
    default:
      return <FaCompass />;
  }
};

const About = () => {
  return (
    <div className="about-section" id="about">
      {/* 3D Character Transition Anchor */}
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am an AI/ML engineer and full-stack developer dedicated to building production-grade computer vision systems, resilient cloud infrastructure, and intelligent software that make a tangible real-world impact.
        </p>
      </div>

      {/* Extended Narrative & Credentials */}
      <div className="about-extended">
        {/* Stats Row */}
        <div className="about-stats-grid">
          {PORTFOLIO_DATA.stats.map((s) => (
            <div key={s.label} className="about-stat-card">
              <div className="about-stat-val">
                {s.value}
                <span>{s.suffix}</span>
              </div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Narrative & Profile */}
        <div className="about-narrative-card">
          <h4>The Engineer Behind the Code</h4>
          <p>
            My engineering journey began with algorithmic problem solving in C++, mastering data structures and competitive programming. That discipline quickly evolved into building full-stack platforms connecting people and devices in real time.
          </p>
          <p>
            The pivotal breakthrough occurred when I immersed myself in computer vision — teaching computers to perceive and reason about the physical world. Training custom YOLOv11 models to detect early fire and smoke signatures demonstrated how artificial intelligence can save lives and prevent industrial disasters.
          </p>
          <p>
            Today, whether managing campus-scale Linux server infrastructure with 99.9% uptime, deploying containerized cloud workflows, or calibrating UAV avionics for thermal inspection, I approach software from first principles: clean architecture, reliable performance, and human impact.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="about-subblock">
          <div className="about-subblock-title">
            <FaGraduationCap /> Education & Academic Distinction
          </div>
          <div className="about-edu-grid">
            {PORTFOLIO_DATA.education.map((edu) => (
              <div key={edu.degree} className="about-edu-card">
                <div className="edu-top">
                  <span className="edu-score">{edu.score}</span>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <h5>{edu.degree}</h5>
                <h6 className="edu-inst">
                  <FaUniversity /> {edu.institute}
                </h6>
                <p className="edu-spec">{edu.specialization}</p>
                <ul className="edu-highlights">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy */}
        <div className="about-subblock">
          <div className="about-subblock-title">
            <FaAward /> Engineering Philosophy
          </div>
          <div className="about-philo-grid">
            {PORTFOLIO_DATA.philosophy.map((ph) => (
              <div key={ph.title} className="about-philo-card">
                <span className="philo-icon">{renderPhilosophyIcon(ph.icon)}</span>
                <h5>{ph.title}</h5>
                <p>{ph.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="about-subblock">
          <div className="about-subblock-title">
            <FaCompass /> Core Domains of Focus
          </div>
          <div className="about-interests-grid">
            {PORTFOLIO_DATA.interests.map((it) => (
              <div key={it.title} className="about-interest-card">
                <span className="interest-icon">{renderInterestIcon(it.icon)}</span>
                <div>
                  <h6>{it.title}</h6>
                  <p>{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
