import { Dancing_Script } from "next/font/google";
import styles from "./loader.module.scss";

const script = Dancing_Script({ weight: "700", subsets: ["latin"] });

// --- ship's wheel geometry (centre inside the viewBox) ---
const CX = 150;
const CY = 130;
const HUB_R = 18;
const SPOKE_OUT = 80; // spoke reaches the rim band
const HANDLE_IN = 92; // handle starts just past the thin outer ring
const HANDLE_OUT = 112; // handle tip / knob

const angles = Array.from({ length: 8 }, (_, i) => (i * 45 * Math.PI) / 180);
const parts = angles.map((a) => {
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  return {
    // inner spoke: hub -> rim
    sx1: CX + HUB_R * cos,
    sy1: CY + HUB_R * sin,
    sx2: CX + SPOKE_OUT * cos,
    sy2: CY + SPOKE_OUT * sin,
    // handle peg: outside the wheel
    hx1: CX + HANDLE_IN * cos,
    hy1: CY + HANDLE_IN * sin,
    hx2: CX + HANDLE_OUT * cos,
    hy2: CY + HANDLE_OUT * sin,
  };
});

// Renders a word as individual letters that fade in one-by-one, left to right.
const typed = (
  word: string,
  className: string,
  start: number,
  stagger: number
) =>
  Array.from(word).map((ch, i) => (
    <tspan
      key={i}
      className={styles.letter}
      style={{ animationDelay: `${(start + i * stagger).toFixed(2)}s` }}
    >
      {ch}
    </tspan>
  ));

const Loader = () => (
  <div className={styles.loader}>
    <svg
      className={styles.art}
      viewBox="0 0 540 260"
      role="img"
      aria-label="Boatrips Lagos"
    >
      {/* seagulls */}
      <g
        stroke="#a9adb1"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className={styles.bird} d="M206 54 q9 -12 17 -3 q8 -10 17 3" />
        <path
          className={`${styles.bird} ${styles.birdB}`}
          d="M252 40 q7 -10 14 -3 q7 -8 14 3"
        />
      </g>

      {/* ship's wheel */}
      <g className={styles.wheel}>
        {/* handles / grip pegs */}
        {parts.map((p, i) => (
          <line
            key={`h-${i}`}
            className={styles.handle}
            x1={p.hx1}
            y1={p.hy1}
            x2={p.hx2}
            y2={p.hy2}
          />
        ))}
        {parts.map((p, i) => (
          <circle
            key={`k-${i}`}
            className={styles.knob}
            cx={p.hx2}
            cy={p.hy2}
            r="6"
          />
        ))}
        {/* spokes */}
        {parts.map((p, i) => (
          <line
            key={`s-${i}`}
            className={styles.spoke}
            x1={p.sx1}
            y1={p.sy1}
            x2={p.sx2}
            y2={p.sy2}
          />
        ))}
        {/* rims */}
        <circle className={styles.rim} cx={CX} cy={CY} r={SPOKE_OUT} />
        <circle className={styles.ring} cx={CX} cy={CY} r="92" />
        {/* hub */}
        <circle className={styles.hub} cx={CX} cy={CY} r={HUB_R} />
        <circle className={styles.hubDot} cx={CX} cy={CY} r="7" />
      </g>

      {/* typed wordmark */}
      <text className={`${styles.ink} ${script.className}`} x="272" y="140">
        {typed("Boatrips", styles.letter, 0.7, 0.06)}
      </text>
      <text className={`${styles.inkSub} ${script.className}`} x="312" y="196">
        {typed("Lagos", styles.letter, 1.28, 0.06)}
      </text>
    </svg>
  </div>
);

export default Loader;
