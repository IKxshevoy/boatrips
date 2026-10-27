import React from "react";
import Image from "next/image";
import { Link } from "@/i18n";
import Icon from "@/components/tour/Icon";
import styles from "./tourCard.module.scss";

export interface TourCardProps {
  href: string;
  image: string;
  title: string;
  description?: string;
  duration: string;
  price: string;
  fromLabel: string;
  ctaLabel: string;
  sizes?: string;
  priority?: boolean;
}

/** Whole card is clickable via a stretched link; markup stays a single <a>. */
const TourCard: React.FC<TourCardProps> = ({
  href,
  image,
  title,
  description,
  duration,
  price,
  fromLabel,
  ctaLabel,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority,
}) => (
  <article className={styles.card}>
    <div className={styles.media}>
      <Image
        src={image}
        alt={title}
        fill
        sizes={sizes}
        priority={priority}
        className={styles.img}
      />
      <span className={styles.duration}>
        <Icon name="clock" size={14} />
        {duration}
      </span>
    </div>
    <div className={styles.body}>
      <h3 className={styles.title}>
        <Link href={href} className={styles.stretched}>
          {title}
        </Link>
      </h3>
      {description && <p className={styles.text}>{description}</p>}
      <div className={styles.footer}>
        <span className={styles.price}>
          <small>{fromLabel}</small>
          {price}
        </span>
        <span className={styles.cta} aria-hidden="true">
          {ctaLabel}
          <Icon name="arrowRight" size={16} />
        </span>
      </div>
    </div>
  </article>
);

export default TourCard;
