import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export interface SmootherInstance {
  scrollTop: (top?: number) => number;
  paused: (isPaused?: boolean) => boolean | void;
  scrollTo: (target: string | number | HTMLElement | null, smooth?: boolean, position?: string) => void;
  kill: () => void;
  refresh: () => void;
}

let lenis: Lenis | null = null;
let isPaused = false;
let rafId: number | null = null;

export const smoother: SmootherInstance = {
  scrollTop: (top?: number) => {
    if (typeof top === "number") {
      if (lenis) {
        lenis.scrollTo(top, { immediate: true });
      } else {
        window.scrollTo(0, top);
      }
      return top;
    }
    return lenis ? lenis.scroll : window.scrollY;
  },

  paused: (pauseState?: boolean) => {
    if (typeof pauseState === "boolean") {
      isPaused = pauseState;
      if (lenis) {
        if (pauseState) {
          lenis.stop();
        } else {
          lenis.start();
        }
      }
      return;
    }
    return isPaused;
  },

  scrollTo: (target: string | number | HTMLElement | null, smooth = true) => {
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target as any, {
        immediate: !smooth,
        duration: smooth ? 1.5 : 0,
      });
    } else {
      if (typeof target === "string") {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: smooth ? "smooth" : "auto" });
      }
    }
  },

  kill: () => {
    if (rafId) cancelAnimationFrame(rafId);
    if (lenis) {
      lenis.destroy();
      lenis = null;
    }
  },

  refresh: () => {
    ScrollTrigger.refresh();
  },
};

export function createSmoother(): SmootherInstance {
  if (typeof window === "undefined") return smoother;

  if (!lenis) {
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const raf = (time: number) => {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    gsap.ticker.lagSmoothing(0);
  }

  return smoother;
}

export default smoother;

