import { gsap } from "gsap";
import { lerp, getMousePos } from "./utils";

// Track the mouse position
let mouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", ev => (mouse = getMousePos(ev)));
}

export default class ClipCursor {
  constructor(el) {
    this.viewCase = el
    this.viewCase.style.opacity = 0;

    this.bounds = this.viewCase.getBoundingClientRect();

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.1 },
      ty: { previous: 0, current: 0, amt: 0.1 },
      scale: { previous: 1, current: 1, amt: 0.1 },
      opacity: { previous: 0, current: 1, amt: 0.1 }
    };

    this.onMouseMoveEv = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
        mouse.x - this.bounds.width / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
        mouse.y - this.bounds.height / 2;
      gsap.to(this.viewCase, {
        duration: 0.9,
        ease: "Power3.easeOut",
        opacity: 1
      });
      requestAnimationFrame(() => this.render());
      window.removeEventListener("mousemove", this.onMouseMoveEv);
    };
    window.addEventListener("mousemove", this.onMouseMoveEv);
  }
  enter() {
    this.renderedStyles["scale"].current = 0;
    this.renderedStyles["opacity"].current = 0;
  }
  leave() {
    this.renderedStyles["scale"].current = 1;
    this.renderedStyles["opacity"].current = 0;
  }
  render() {
    this.renderedStyles["tx"].current = mouse.x - this.bounds.width / 2;
    this.renderedStyles["ty"].current = mouse.y - this.bounds.height / 2;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      );
    }

    this.viewCase.style.transform = `translateX(${this.renderedStyles["tx"].previous}px) translateY(${this.renderedStyles["ty"].previous}px) scale(${this.renderedStyles["scale"].previous})`;
    this.viewCase.style.opacity = this.renderedStyles["opacity"].previous;

    requestAnimationFrame(() => this.render());
  }
}