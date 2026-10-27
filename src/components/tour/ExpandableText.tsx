"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./tourClient.module.scss";

/** Clamps long copy on small screens; full text stays in the DOM for SEO. */
const ExpandableText = ({ paragraphs }: { paragraphs: string[] }) => {
  const t = useTranslations("slider");
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflowing(el.scrollHeight - el.clientHeight > 4);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={styles.expandable}>
      <div
        ref={ref}
        className={`${styles.expandableBody} ${
          overflowing && !open ? styles.clamped : ""
        } ${open ? styles.expanded : ""}`}
      >
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {!open && overflowing && (
        <button
          type="button"
          className={styles.readMore}
          onClick={() => setOpen(true)}
          aria-expanded={open}
        >
          {t("read_more")}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
