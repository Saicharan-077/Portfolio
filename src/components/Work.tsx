import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    name: "Fire & Smoke Detection",
    category: "Industrial AI Safety",
    tools: "YOLOv11, PyTorch, OpenCV, FastAPI, React, ONNX, WebSockets",
    image: "/images/fire-smoke-demo.webp",
    link: "https://github.com/Saicharan-077",
  },
  {
    num: "02",
    name: "VoxScholar",
    category: "AI Learning Companion",
    tools: "React.js, Node.js, FastAPI, MongoDB, TTS, RAG, Web Speech",
    image: "/images/placeholder.webp",
    link: "https://github.com/Saicharan-077/vox-scholar-ai",
  },
  {
    num: "03",
    name: "VNR Parking",
    category: "Campus Management",
    tools: "Spring Boot, React.js, WebSockets, MySQL, REST APIs",
    image: "/images/placeholder.webp",
    link: "https://github.com/Manikanth8910/VNRPARKING",
  },
  {
    num: "04",
    name: "ClearScore AI",
    category: "AI Evaluation System",
    tools: "React.js, FastAPI, Python, LLM APIs, Tailwind CSS",
    image: "/images/placeholder.webp",
    link: "https://github.com/Saicharan-077/clear-score-ai.git",
  },
  {
    num: "05",
    name: "Solar Drone System",
    category: "UAV Avionics & Thermal Vision",
    tools: "ArduPilot, Flight Controllers, Thermal Sensors, Arduino",
    image: "/images/placeholder.webp",
    link: "https://github.com/Saicharan-077",
  },
  {
    num: "06",
    name: "SafeHaven App",
    category: "Security & Incident Platform",
    tools: "React, Vite, Node.js, Express, Tailwind CSS, REST APIs",
    image: "/images/placeholder.webp",
    link: "https://github.com/Saicharan-077",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((proj) => (
            <div className="work-box" key={proj.num}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{proj.num}</h3>

                  <div>
                    <h4>{proj.name}</h4>
                    <p>{proj.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{proj.tools}</p>
              </div>
              <WorkImage image={proj.image} alt={proj.name} link={proj.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
