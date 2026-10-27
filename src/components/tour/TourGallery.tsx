"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./tourClient.module.scss";

const LazyLightbox = dynamic(
  () => import("@/components/lightbox/LazyLightbox"),
  { ssr: false }
);

const VISIBLE = 5;

interface TourGalleryProps {
  images: string[];
  alt: string;
}

/**
 * Bento grid on tablet/desktop, swipeable scroll-snap strip on phones.
 * Same markup for both — layout is pure CSS.
 */
const TourGallery = ({ images, alt }: TourGalleryProps) => {
  const t = useTranslations("tour_ui");
  const [index, setIndex] = useState(-1);
  const rest = images.length - VISIBLE;

  return (
    <>
      <ul className={styles.gallery}>
        {images.map((src, i) => (
          <li
            key={src}
            className={`${styles.galleryItem} ${i >= VISIBLE ? styles.galleryExtra : ""}`}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={t("open_photo", { n: i + 1 })}
            >
              <Image
                src={src}
                alt={`${alt} — ${i + 1}`}
                fill
                sizes={
                  i === 0
                    ? "(min-width: 768px) 50vw, 85vw"
                    : "(min-width: 768px) 25vw, 85vw"
                }
                className={styles.cover}
              />
              {i === VISIBLE - 1 && rest > 0 && (
                <span className={styles.galleryMore}>
                  +{rest}
                  <small>{t("view_all")}</small>
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {index >= 0 && (
        <LazyLightbox
          index={index}
          slides={images.map((src, i) => ({ src, alt: `${alt} — ${i + 1}` }))}
          onClose={() => setIndex(-1)}
        />
      )}
    </>
  );
};

export default TourGallery;
