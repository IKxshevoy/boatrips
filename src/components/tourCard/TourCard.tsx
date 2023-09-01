import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./tourCard.module.scss";

export interface ITourCard {
  imgSrc: string;
  alt: string;
  price: number;
  title: string;
  address: string;
  rating: number;
  reviews: number;
}

const TourCard: React.FC<ITourCard> = ({
  imgSrc,
  alt,
  price,
  title,
  address,
  rating,
  reviews,
}) => {
  return (
    <div className={styles.destinationCard}>
      <div className={`${styles.cardBanner} ${styles.imgHolder}`}>
        <img
          src={imgSrc}
          alt={alt}
          loading="lazy"
          className={styles.imgCover}
        />
        <span className={styles.cardPrice}>${price}</span>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>
          <a href="#" className={styles.cardTitle}>
            {title}
          </a>
        </h3>
        <address className={styles.cardText}>{address}</address>
        <div className={styles.cardRating}>
          <span className={styles.span}>
            <FontAwesomeIcon icon={faStar} />
            {rating}
          </span>
          <p className={styles.ratingText}>({reviews} Review)</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
