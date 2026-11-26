import { NARROW, WIDE } from "./layout";
import { createPaper } from "./paper";
import { createStars } from "./stars";
import { createWater } from "./water";

const FRAME_MS = 30;

const year = document.querySelector(".year");
if (year) year.textContent = String(new Date().getFullYear());

const azoth = document.querySelector<HTMLElement>(".azoth");

// The hover fill in style.css grows from this point.
azoth?.addEventListener("pointerenter", ({ offsetX, offsetY }) => {
  azoth.style.setProperty("--enter-x", `${offsetX}px`);
  azoth.style.setProperty("--enter-y", `${offsetY}px`);
});

const logo = document.querySelector<HTMLElement>(".logo");
const narrow = matchMedia("(max-width: 760px) and (orientation: portrait)");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const paper = createPaper();
const stars = logo ? createStars(logo, paint) : undefined;
const water = logo ? createWater(logo, paint) : undefined;
let layout = WIDE;
let last = 0;

function fit() {
  layout = narrow.matches ? NARROW : WIDE;
  stars?.fit(layout);
  water?.fit(layout);
  paint();
}

function paint() {
  let moonX = innerWidth / 2;
  let moonY = innerHeight / 3;
  if (logo) {
    const place = logo.getBoundingClientRect();
    const scale = place.width / layout.box.width;
    moonX = place.left + layout.moon.x * scale;
    moonY = place.top + (layout.baseline - layout.moon.altitude - layout.box.top) * scale;
  }

  paper?.(moonX, moonY);

  const still = reducedMotion.matches;
  stars?.draw(still ? 0 : last / 1000, !still);
  water?.draw(still ? 0 : last / 1000, !still);
}

function animate(now: number) {
  requestAnimationFrame(animate);
  if (reducedMotion.matches || now - last < FRAME_MS) return;
  last = now;
  stars?.draw(now / 1000);
  water?.draw(now / 1000, true);
}

fit();
narrow.addEventListener("change", fit);
addEventListener("load", paint);
addEventListener("resize", paint);
addEventListener("scroll", paint, { passive: true });
if (stars || water) requestAnimationFrame(animate);
