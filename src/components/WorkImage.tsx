import { useState } from "react";
import { MdArrowOutward, MdLaptopMac } from "react-icons/md";
import {
  FaFire,
  FaCar,
  FaGraduationCap,
  FaCube,
  FaCheckDouble,
  FaServer,
} from "react-icons/fa6";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  category?: string;
  accent?: string;
}

const getProjectIcon = (title: string = "") => {
  const t = title.toLowerCase();
  if (t.includes("fire") || t.includes("smoke")) return <FaFire />;
  if (t.includes("park")) return <FaCar />;
  if (t.includes("scholar") || t.includes("vox")) return <FaGraduationCap />;
  if (t.includes("score") || t.includes("clear")) return <FaCheckDouble />;
  if (t.includes("portfolio") || t.includes("3d")) return <FaCube />;
  if (t.includes("server") || t.includes("devops")) return <FaServer />;
  return <MdLaptopMac />;
};

const WorkImage = (props: Props) => {
  const [imageError, setImageError] = useState(false);
  const isPlaceholder = !props.image || props.image.includes("placeholder") || imageError;
  const accent = props.accent || "#a855f7";

  return (
    <div className="work-image">
      <div className="work-image-in">
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
            title="Open Repository"
            data-cursor="disable"
          >
            <MdArrowOutward />
          </a>
        )}

        {!isPlaceholder ? (
          <img
            src={props.image}
            alt={props.alt || "Project showcase"}
            onError={() => setImageError(true)}
            className="work-preview-img"
          />
        ) : (
          <div
            className="work-tech-card"
            style={{
              background: `radial-gradient(circle at 70% 30%, ${accent}22 0%, rgba(15, 12, 24, 0.95) 75%)`,
              border: `1px solid ${accent}33`,
            }}
          >
            <div className="tech-card-glow" style={{ background: accent }}></div>
            <div className="tech-card-icon" style={{ color: accent }}>
              {getProjectIcon(props.alt)}
            </div>
            <div className="tech-card-meta">
              <span className="tech-card-badge" style={{ color: accent, borderColor: `${accent}40` }}>
                {props.category || "Case Study"}
              </span>
              <h5 className="tech-card-title">{props.alt}</h5>
            </div>
            <div className="tech-card-footer">
              <span className="tech-card-hint">Click for Architecture Deep Dive →</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
