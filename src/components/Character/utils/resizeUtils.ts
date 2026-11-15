import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  let canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;

  if (width < 600) {
    camera.fov = 22;
    camera.position.set(0.2, 9.8, 38.0);
  } else if (width < 960) {
    camera.fov = 18;
    camera.position.set(1.2, 11.2, 32.0);
  } else if (width < 1440) {
    camera.fov = 14.5;
    camera.position.set(0.65, 13.0, 25.5);
  } else {
    camera.fov = 14.0;
    camera.position.set(0.65, 13.0, 25.2);
  }
  camera.zoom = 1.0;
  camera.updateProjectionMatrix();

  const workTrigger = ScrollTrigger.getById("work");
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger != workTrigger) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}
