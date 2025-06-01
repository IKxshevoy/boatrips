import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileShield,
  faAnchorCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faBell } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles.module.scss";
import { useTranslations } from "next-intl";

const TourInfo = () => {
  const t = useTranslations("sunset-cruise");
  return (
    <div className={styles.info}>
      <div className={styles.info__block}>
        <div className={styles.info__title}>
          <FontAwesomeIcon icon={faBell} shake />
          <h3>{t("reminders")}</h3>
        </div>
        <ul className={styles.infoList}>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("first_reminder")}</span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("second_reminder")}</span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("third_reminder")}</span>
          </li>
        </ul>
      </div>
      <div className={styles.info__block}>
        <div className={styles.info__title}>
          <FontAwesomeIcon icon={faFileShield} />
          <h3>{t("perks")}</h3>
        </div>
        <ul className={styles.infoList}>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("first_perk")}</span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("second_perk")}</span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("third_perk")}</span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("fourth_perk")}</span>
          </li>
        </ul>
      </div>
      <div className={styles.info__block}>
        <div className={styles.info__title}>
          <FontAwesomeIcon icon={faAnchorCircleExclamation} />
          <h3>{t("important_information")}</h3>
        </div>
        <ul className={styles.infoList}>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("first_info")}</span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("second_info")}</span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{t("third_info")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TourInfo;
