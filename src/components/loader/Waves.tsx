import styles from "./loader.module.scss";

// Full-viewport-width water line rendered at the bottom of the loader overlay.
// preserveAspectRatio="none" lets the wave stretch across the whole screen.
const Waves = () => (
  <svg
    className={styles.waves}
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      className={`${styles.wave} ${styles.waveBack}`}
      d="M0 54 q 60 -26 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 V120 H0 Z"
    />
    <path
      className={styles.wave}
      d="M0 42 q 60 -32 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 V120 H0 Z"
    />
  </svg>
);

export default Waves;
