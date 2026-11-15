import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import { createSmoother, smoother } from "./utils/smoother";
import { FaBars, FaTimes, FaFileAlt } from "react-icons/fa";
import "./styles/Navbar.css";

export { smoother };

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    createSmoother();
    smoother.scrollTop(0);
    smoother.paused(true);

    const handleResize = () => {
      smoother.refresh();
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoother.scrollTo(target, true);
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SAI CHARAN
        </a>
        <a
          href="mailto:saicharangodavarthi7@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          saicharangodavarthi7@gmail.com
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          data-cursor="disable"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-links ${mobileMenuOpen ? "open" : ""}`}>
          <li>
            <a data-href="#about" href="#about" onClick={(e) => handleNavClick(e, "#about")}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#techstack" href="#techstack" onClick={(e) => handleNavClick(e, "#techstack")}>
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career" onClick={(e) => handleNavClick(e, "#career")}>
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={(e) => handleNavClick(e, "#work")}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#achievements" href="#achievements" onClick={(e) => handleNavClick(e, "#achievements")}>
              <HoverLinks text="HONORS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li className="navbar-resume-li">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume-btn"
              data-cursor="disable"
            >
              <FaFileAlt /> RESUME
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
