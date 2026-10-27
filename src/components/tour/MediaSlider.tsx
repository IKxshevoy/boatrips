"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import styles from "./mediaSlider.module.scss";

const LazyLightbox = dynamic(
  () => import("@/components/lightbox/LazyLightbox"),
  { ssr: false }
);

interface MediaSliderProps {
  images: string[];
  alt: string;
  /** autoplay interval, 0 disables */
  interval?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

const MediaSlider = ({
  images,
  alt,
  interval = 5000,
  sizes = "(min-width: 1024px) 55vw, 100vw",
  priority = false,
  className,
}: MediaSliderProps) => {
  const t = useTranslations("tour_ui");
  const rootRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(-1);
  // once a slide was due to show we keep it eager so it never re-flashes
  const [warm, setWarm] = useState(1);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const i = emblaApi.selectedScrollSnap();
      setSelected(i);
      setWarm((w) => Math.max(w, i + 1));
    };
    // any manual drag stops autoplay for good — the user is in control now
    const onPointer = () => setPaused(true);
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    emblaApi.on("pointerDown", onPointer);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
      emblaApi.off("pointerDown", onPointer);
    };
  }, [emblaApi]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi || !interval || paused || !inView || lightbox >= 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), interval);
    return () => window.clearInterval(id);
  }, [emblaApi, interval, paused, inView, lightbox]);

  const go = useCallback(
    (dir: "prev" | "next") => {
      setPaused(true);
      if (dir === "prev") emblaApi?.scrollPrev();
      else emblaApi?.scrollNext();
    },
    [emblaApi]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") go("prev");
    if (e.key === "ArrowRight") go("next");
  };

  const total = images.length;

  return (
    <div
      ref={rootRef}
      className={`${styles.slider} ${className ?? ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {images.map((src, i) => (
            <div
              className={styles.slide}
              key={src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${total}`}
            >
              <button
                type="button"
                className={styles.zoom}
                onClick={() => setLightbox(i)}
                aria-label={t("open_photo", { n: i + 1 })}
              >
                <Image
                  src={src}
                  alt={`${alt} — ${i + 1}`}
                  fill
                  sizes={sizes}
                  priority={priority && i === 0}
                  loading={
                    priority && i === 0
                      ? undefined
                      : i <= warm || i === total - 1
                        ? "eager"
                        : "lazy"
                  }
                  className={styles.img}
                  draggable={false}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            onClick={() => go("prev")}
            aria-label={t("prev")}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            onClick={() => go("next")}
            aria-label={t("next")}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className={styles.bottom}>
            <div className={styles.dots}>
              {images.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  className={`${styles.dot} ${i === selected ? styles.dotActive : ""}`}
                  onClick={() => {
                    setPaused(true);
                    emblaApi?.scrollTo(i);
                  }}
                  aria-label={t("go_to", { n: i + 1 })}
                  aria-current={i === selected}
                >
                  {i === selected && !paused && inView && interval > 0 ? (
                    <span
                      className={styles.progress}
                      style={{ animationDuration: `${interval}ms` }}
                    />
                  ) : null}
                </button>
              ))}
            </div>
            <span className={styles.counter} aria-live="polite">
              {selected + 1} / {total}
            </span>
          </div>
        </>
      )}

      {lightbox >= 0 && (
        <LazyLightbox
          index={lightbox}
          slides={images.map((src, i) => ({ src, alt: `${alt} — ${i + 1}` }))}
          onClose={() => setLightbox(-1)}
        />
      )}
    </div>
  );
};

export default MediaSlider;
