import "./styles/Career.css";

const Career = () => {
  return (
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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Innovision Limited</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed an industrial fire & smoke detection system using YOLOv11 and PyTorch. Built real-time inference pipelines, curated custom datasets, and engineered live streaming dashboards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Intern</h4>
                <h5>Aarna Connect</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Orchestrated cloud infrastructure and deployment automation. Configured Docker containers, streamlined CI/CD pipelines, and monitored production environment reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Server Management Intern</h4>
                <h5>Innovation & Incubation Cell</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Administered 10+ Linux production servers under Mr. M Krishna Prasad with 99.9% uptime. Configured Nginx reverse proxies, SSL/TLS, Google Cloud VMs, and performed load testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UAV Systems Intern</h4>
                <h5>Flydronics</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Assembled 5+ UAV airframes with propulsion and avionics integration. Calibrated flight controllers and programmed automated flight missions using ArduPilot for thermal analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
