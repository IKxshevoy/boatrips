import React from "react";
import styles from "./destinationCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IDestinationCard {
  title: string;
  price: string;
  imageUrl: string;
  href: string;
}

const DestinationCard = ({
  title,
  imageUrl,
  href,
  price,
}: IDestinationCard) => {
  const t = useTranslations("experiences");
  const router = useRouter();

  const handleCardClick = () => {
    router.push(href);
  };
  return (
    <div
      className={`${styles.galleryCard} ${styles.hasBgImage} ${styles.hasAfter}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
      onClick={handleCardClick}
    >
      <div className={styles.cardContent}>
        <h3 className={`h3 ${styles.cardTitle}`}>
          {title}
          <br />
          <span className={styles.price}>{price}</span>
        </h3>
        <a href="#" className={styles.btnLink}>
          <span onClick={handleCardClick} className={styles.span}>
            {t("view_tour_button")}
            <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;
