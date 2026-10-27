"use client";
import styles from "./slider.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import Cta from "@/ui-kit/cta/Cta";
import Icon from "@/components/tour/Icon";
import { PROMO_CODE } from "@/data/tours";

interface SlideMeta {
  path: string;
  href: string;
}

const slideContent: SlideMeta[] = [
  { path: "/catamaran/14.webp", href: "/catamaran-cruise" },
  { path: "/main.webp", href: "/ponta-da-piedade-caves-cruise" },
  { path: "/yacht/1.webp", href: "/yacht-cruise" },
  { path: "/sunset/6.webp", href: "/sunset-cruise" },
  { path: "/slide3.avif", href: "/benagil-caves-speed-boat-tour" },
];

const INTERVAL = 7000;
const BOOK_URL = "https://fareharbor.com/embeds/book/boatrips/?full-items=yes";

const Slider = () => {
  const t = useTranslations("slider");
  const ui = useTranslations("tour_ui");
  const root = useTranslations("root.metadata");
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // only mount images that were (or are about to be) shown
  const [mounted, setMounted] = useState(1);

  useEffect(() => {
    setMounted((m) => Math.max(m, Math.min(active + 2, slideContent.length)));
  }, [active]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % slideContent.length),
      INTERVAL
    );
    return () => window.clearTimeout(id);
  }, [active, paused]);

  const slide = slideContent[active];

  return (
    <>
      <section
        className={styles.home}
        aria-roledescription="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {slideContent.slice(0, mounted).map((s, index) => (
          <Image
            key={s.path}
            src={s.path}
            alt=""
            fill
            sizes="100vw"
            quality={70}
            priority={index === 0}
            className={`${styles.imageSlide} ${
              active === index ? styles.activeSlide : ""
            }`}
          />
        ))}
        <div className={styles.scrim} />

        <div className={`container ${styles.content}`}>
          <h1 className="visually-hidden">{root("title")}</h1>
          <div key={active} className={styles.copy} aria-live="polite">
            <p className={styles.eyebrow}>{t(`slide_${active}_title`)}</p>
            <h2 className={styles.contentTitle}>{t(`slide_${active}_subTitle`)}</h2>
            <p className={styles.contentText}>
              {t(`slide_${active}_contentHidden`)}
            </p>
          </div>
          <div className={styles.actions}>
            <Cta
              href={BOOK_URL}
              external
              size="lg"
              icon={<Icon name="arrowRight" size={18} />}
            >
              {ui("book_now")}
            </Cta>
            <Link href={slide.href} className={styles.more}>
              {t("read_more")}
            </Link>
          </div>
        </div>

        <div className={`container ${styles.controls}`}>
          <div className={styles.dots} role="tablist">
            {slideContent.map((_, index) => (
              <button
                type="button"
                key={index}
                role="tab"
                aria-selected={active === index}
                aria-label={ui("go_to", { n: index + 1 })}
                className={`${styles.navBtn} ${active === index ? styles.active : ""}`}
                onClick={() => setActive(index)}
              >
                <span className={styles.navLabel}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.track}>
                  {active === index && (
                    <span
                      className={`${styles.fill} ${paused ? styles.fillPaused : ""}`}
                      style={{ animationDuration: `${INTERVAL}ms` }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <div className={styles.social}>
            <a href="https://www.facebook.com/boatrips.eu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/boatrips/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </a>
            <a href="https://wa.me/351969184712" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Icon name="whatsapp" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.promo} aria-label="Promo">
        <p>
          {t("enjoy")} <span className={styles.discount}>{t("discount")}</span>{" "}
          {t("with_promo")} <code>{PROMO_CODE}</code>
        </p>
        <Cta href={BOOK_URL} external variant="light" size="sm">
          {t("book_now")}
        </Cta>
      </section>
    </>
  );
};

export default Slider;
