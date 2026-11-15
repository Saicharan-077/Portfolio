import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import { createSmoother, smoother } from "./utils/smoother";
import { FaBars, FaTimes, FaFileAlt } from "react-icons/fa";
import "./styles/Navbar.css";

export { smoother };

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    createSmoother();
    smoother.scrollTop(0);
    smoother.paused(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      smoother.refresh();
      if (window.innerWidth > 960) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoother.scrollTo(target, true);
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Left: Brand / Logo */}
          <a
            href="/#"
            className="navbar-brand"
            data-cursor="disable"
            onClick={(e) => handleNavClick(e, "#landingDiv")}
          >
            <span className="navbar-logo-text">SAI CHARAN</span>
            <span className="navbar-logo-dot"></span>
          </a>

          {/* Center: Navigation Links */}
          <nav className="navbar-nav desktop-nav">
            <ul className="navbar-links">
              <li>
                <a
                  data-href="#about"
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                >
                  <HoverLinks text="ABOUT" />
                </a>
              </li>
              <li>
                <a
                  data-href="#techstack"
                  href="#techstack"
                  onClick={(e) => handleNavClick(e, "#techstack")}
                >
                  <HoverLinks text="SKILLS" />
                </a>
              </li>
              <li>
                <a
                  data-href="#career"
                  href="#career"
                  onClick={(e) => handleNavClick(e, "#career")}
                >
                  <HoverLinks text="CAREER" />
                </a>
              </li>
              <li>
                <a
                  data-href="#work"
                  href="#work"
                  onClick={(e) => handleNavClick(e, "#work")}
                >
                  <HoverLinks text="WORK" />
                </a>
              </li>
              <li>
                <a
                  data-href="#achievements"
                  href="#achievements"
                  onClick={(e) => handleNavClick(e, "#achievements")}
                >
                  <HoverLinks text="HONORS" />
                </a>
              </li>
              <li>
                <a
                  data-href="#contact"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  <HoverLinks text="CONTACT" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Action: Clean Resume Button & Hamburger for Mobile */}
          <div className="navbar-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume-btn"
              data-cursor="disable"
              title="Download Sai Charan's Resume"
            >
              <FaFileAlt className="resume-icon" />
              <span>RESUME</span>
            </a>

            <button
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              data-cursor="disable"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-nav-content">
            <ul className="mobile-nav-links">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#techstack"
                  onClick={(e) => handleNavClick(e, "#techstack")}
                >
                  SKILLS
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  onClick={(e) => handleNavClick(e, "#career")}
                >
                  CAREER
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleNavClick(e, "#work")}
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  onClick={(e) => handleNavClick(e, "#achievements")}
                >
                  HONORS
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-resume-btn"
                >
                  <FaFileAlt /> VIEW RESUME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
