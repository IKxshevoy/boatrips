"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { reviewsData } from "@/data/reviews";
import type { ReviewType } from "@/data/tours";
import styles from "./tourClient.module.scss";

const Stars = () => (
  <span className={styles.stars} aria-label="5/5">
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z" />
      </svg>
    ))}
  </span>
);

const Reviews = ({ type }: { type: ReviewType }) => {
  const t = useTranslations("reviews-slider");
  const ui = useTranslations("tour_ui");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    update();
    emblaApi.on("select", update).on("reInit", update);
    return () => {
      emblaApi.off("select", update).off("reInit", update);
    };
  }, [emblaApi, update]);

  return (
    <div className={styles.reviews}>
      <div className={styles.reviewsViewport} ref={emblaRef}>
        <ul className={styles.reviewsTrack}>
          {reviewsData[type].map((rev) => (
            <li key={rev.id} className={styles.reviewSlide}>
              <figure className={styles.review}>
                <Stars />
                <blockquote>
                  <p>“{t(`${type}.${rev.id}`)}”</p>
                </blockquote>
                <figcaption>
                  <span className={styles.avatar}>
                    <Image src={rev.imageUrl} alt="" fill sizes="48px" />
                  </span>
                  <span>
                    <strong>{rev.name}</strong>
                    <small>{rev.title}</small>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.reviewsNav}>
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label={ui("prev")}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label={ui("next")}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
