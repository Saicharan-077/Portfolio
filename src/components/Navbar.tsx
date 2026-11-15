import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { createSmoother, smoother } from "./utils/smoother";
import "./styles/Navbar.css";

export { smoother };

const Navbar = () => {
  useEffect(() => {
    createSmoother();
    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const section = element.getAttribute("data-href");
        if (section) {
          e.preventDefault();
          smoother.scrollTo(section, true);
        }
      });
    });

    const handleResize = () => {
      smoother.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
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
