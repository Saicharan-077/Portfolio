import SplitText from "./splitTextImpl";
import gsap from "gsap";
import { smoother } from "./smoother";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  const mainEl =
    document.getElementsByTagName("main")[0] ||
    document.querySelector(".container-main");
  mainEl?.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#08080c",
    duration: 0.5,
    delay: 0.5,
  });

  // Animate left greeting and name directly without wiping nested markup
  gsap.fromTo(
    [".landing-greeting", ".landing-name"],
    { opacity: 0, y: 35, filter: "blur(6px)" },
    {
      opacity: 1,
      duration: 1.0,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.15,
      delay: 0.2,
    }
  );

  // Fade in tagline, badge, and CTA buttons
  gsap.fromTo(
    [".landing-badge", ".landing-tagline", ".landing-cta-group", ".landing-highlights"],
    { opacity: 0, y: 25 },
    {
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      y: 0,
      stagger: 0.12,
      delay: 0.4,
    }
  );

  // Fade in header and social icons
  gsap.fromTo(
    [".navbar-header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.0,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Animate right role card
  gsap.fromTo(
    ".landing-role-card",
    { opacity: 0, y: 30, scale: 0.95 },
    {
      opacity: 1,
      duration: 1.0,
      ease: "power3.out",
      y: 0,
      scale: 1,
      delay: 0.5,
    }
  );

  let textProps = { type: "chars,lines", linesClass: "split-h2" };
  var roleText1 = new SplitText(".landing-h2-1", textProps);
  var roleText2 = new SplitText(".landing-h2-2", textProps);

  if (roleText1.chars.length > 0 && roleText2.chars.length > 0) {
    // Initial display of role 1
    gsap.set(roleText1.chars, { opacity: 1, y: 0 });
    gsap.set(roleText2.chars, { opacity: 0, y: 40 });

    loopRoles(roleText1, roleText2);
  }
}

function loopRoles(text1: SplitText, text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const switchDelay = 3.5;

  // text1 exits up, text2 enters from bottom
  tl.to(
    text1.chars,
    {
      y: -40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.inOut",
      stagger: 0.03,
      delay: switchDelay,
    },
    0
  ).fromTo(
    text2.chars,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.inOut",
      stagger: 0.03,
      delay: switchDelay,
    },
    0.2
  );

  // text2 exits up, text1 enters from bottom
  tl.to(
    text2.chars,
    {
      y: -40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.inOut",
      stagger: 0.03,
      delay: switchDelay * 2 + 0.5,
    },
    1
  ).fromTo(
    text1.chars,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.inOut",
      stagger: 0.03,
      delay: switchDelay * 2 + 0.5,
    },
    1.2
  );
}
