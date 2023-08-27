import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./tourCard.module.css";

export interface ITourCard {
  imgSrc: string;
  alt: string;
  price: number;
  title: string;
  address: string;
  rating: number;
  reviews: number;
}

const TourCard = ({
  imgSrc,
  alt,
  price,
  title,
  address,
  rating,
  reviews,
}: ITourCard) => {
  return (
    <div className={styles["desti-card"]}>
      <div className={`${styles["card-banner"]} ${styles["img-holder"]}`}>
        <img
          src={imgSrc}
          alt={alt}
          loading="lazy"
          className={styles["img-cover"]}
        />
        <span className={styles["card-price"]}>${price}</span>
      </div>

      <div className={styles["card-content"]}>
        <h3 className={styles["title"]}>
          <a href="#" className={styles["card-title"]}>
            {title}
          </a>
        </h3>

        <address className={styles["card-text"]}>{address}</address>
        <div className={styles["card-rating"]}>
          <span className={styles["span"]}>
            <FontAwesomeIcon icon={faStar} />
            {rating}
          </span>
          <p className={styles["rating-text"]}>({reviews} Review)</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
