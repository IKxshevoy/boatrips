import React from "react";
import styles from "./destinationCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface IDestinationCard {
  title: string;
  imageUrl: string;
}

const DestinationCard = ({title, imageUrl}: IDestinationCard) => {
  return (
    <div
      className={`${styles.galleryCard} ${styles.hasBgImage} ${styles.hasAfter}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className={styles.cardContent}>
        <h3 className={`h3 ${styles.cardTitle}`}>{title}</h3>
        <a href="#" className={styles.btnLink}>
          <span className={styles.span}>
            View Tour
            <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;
