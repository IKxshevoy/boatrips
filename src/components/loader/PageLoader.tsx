"use client";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Waves from "./Waves";
import styles from "./pageLoader.module.scss";

// Keep the splash on screen at least this long so the branded
// animation (wheel spin + gulls + handwriting) is actually seen.
const MIN_VISIBLE_MS = 2400;
const FADE_MS = 600;

const PageLoader = () => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const start = performance.now();

    const dismiss = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      window.setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
      return () => window.removeEventListener("load", dismiss);
    }
  }, []);

  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setRemoved(true), FADE_MS);
    return () => window.clearTimeout(t);
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      className={`${styles.overlay} ${hidden ? styles.hide : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <Loader />
      <Waves />
    </div>
  );
};

export default PageLoader;
