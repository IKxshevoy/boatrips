import React from "react";
import styles from "./destinationCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IDestinationCard {
  title: string;
  imageUrl: string;
  href: string;
}

const DestinationCard = ({ title, imageUrl, href }: IDestinationCard) => {
  const t = useTranslations("expiriences");
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
        <h3 className={`h3 ${styles.cardTitle}`}>{title}</h3>
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
