import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PORTFOLIO_DATA, { ProjectCaseStudy } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward, MdInfoOutline } from "react-icons/md";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!boxes.length || !container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0]).padding) / 2 || 40;
      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${Math.max(translateX, 1200)}`,
        scrub: 1,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            Featured <span>Work</span>
          </h2>
          <div className="work-flex">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <div className="work-box" key={proj.id}>
                <div className="work-info">
                  <div className="work-title">
                    <h3 style={{ color: proj.accentColor }}>{proj.num}</h3>
                    <div>
                      <h4>{proj.title}</h4>
                      <p>{proj.category}</p>
                    </div>
                  </div>
                  <p className="work-pitch">{proj.desc}</p>
                  <div className="work-tags-row">
                    {proj.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="work-tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="work-card-actions">
                    <button
                      className="work-explore-btn"
                      onClick={() => setSelectedProject(proj)}
                      data-cursor="disable"
                    >
                      <MdInfoOutline /> Deep Dive Case Study
                    </button>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-gh-icon"
                        title="View GitHub Repository"
                        data-cursor="disable"
                      >
                        <FaGithub /> <MdArrowOutward />
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className="work-image-wrapper"
                  onClick={() => setSelectedProject(proj)}
                  title="Click to view full case study"
                  data-cursor="disable"
                >
                  <WorkImage
                    image={proj.image}
                    alt={proj.title}
                    link={proj.github}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Work;
