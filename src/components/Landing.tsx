import { PropsWithChildren } from "react";
import { FaArrowRight, FaEnvelope, FaTerminal } from "react-icons/fa6";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        {/* Left Column: Greeting, Name, Intro, CTAs, Highlights */}
        <div className="landing-left">
          <div className="landing-badge">
            <span className="landing-badge-dot"></span>
            <span className="landing-badge-text">Available for High-Impact Opportunities</span>
          </div>

          <h2 className="landing-greeting">Hello, I'm</h2>
          <h1 className="landing-name">
            SAI <span className="landing-name-accent">CHARAN</span>
          </h1>

          <p className="landing-tagline">
            AI/ML Engineer & Full-Stack Developer building production-grade deep learning systems, real-time computer vision inference engines, and scalable distributed cloud architectures.
          </p>

          <div className="landing-cta-group">
            <a href="#work" className="landing-btn-primary" data-cursor="disable">
              <span>View Projects</span>
              <FaArrowRight className="btn-arrow" />
            </a>
            <a href="#contact" className="landing-btn-secondary" data-cursor="disable">
              <FaEnvelope className="btn-icon" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="landing-highlights">
            <div className="landing-hl-item">
              <span className="hl-val">8.79</span>
              <span className="hl-lbl">CGPA • BVRIT</span>
            </div>
            <div className="landing-hl-divider"></div>
            <div className="landing-hl-item">
              <span className="hl-val">Top 5</span>
              <span className="hl-lbl">Smart India Hackathon</span>
            </div>
            <div className="landing-hl-divider"></div>
            <div className="landing-hl-item">
              <span className="hl-val">4+</span>
              <span className="hl-lbl">Internships</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dedicated Professional Role Showcase (Positioned safely above 3D character) */}
        <div className="landing-right">
          <div className="landing-role-card">
            <div className="role-card-header">
              <div className="role-card-indicator">
                <FaTerminal className="role-card-icon" />
                <span>EXPERTISE</span>
              </div>
              <span className="role-card-status">ACTIVE</span>
            </div>
            <h3 className="role-card-title">A PASSIONATE</h3>
            <div className="role-card-body">
              <h2 className="landing-info-h2">
                <div className="landing-h2-1">AI/ML ENGINEER</div>
                <div className="landing-h2-2">FULL-STACK DEV</div>
              </h2>
            </div>
            <p className="role-card-note">
              Engineering intelligence from neural weights to responsive interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* 3D Character Canvas */}
      {children}
    </div>
  );
};

export default Landing;
