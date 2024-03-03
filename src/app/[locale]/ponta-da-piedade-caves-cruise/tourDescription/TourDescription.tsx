import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles.module.scss";
import { useTranslations } from "next-intl";

const descriptionItems_info = [
  {
    id: 1,
    icon: faCreditCard,
    value: "20 €",
  },
  {
    id: 2,
    icon: faCreditCard,
    value: "10 €",
  },
  {
    id: 3,
    icon: faClock,
    value: "1H 15 M",
  },
];

const keys = ["adult_price", "child_price", "time_duration"] as const;

const TourDescription = () => {
  const t = useTranslations("ponta-da-piedade-caves-cruise");

  const descriptionItems = keys.map((key, index) => ({
    title: t(key),
    icon: descriptionItems_info[index].icon,
    id: descriptionItems_info[index].id,
    value: descriptionItems_info[index].value,
  }));

  return (
    <div className={styles.description}>
      <h2 className={styles.title}>
        {t("caves_of")}{" "}
        <span className={styles.orangeWrapper}>{t("ponta_da_piedade")}</span>{" "}
        {t("boat_tour")}
      </h2>
      <span className={styles.duration}>- {t("tour_duration")}</span>
      <p className={styles.description__paragraph}>
        {t.rich("tour_description", {
          br: () => <br />,
        })}
      </p>
      <div className={styles.description__icons}>
        {descriptionItems.map((item) => (
          <div className={styles.description__item} key={item.id}>
            <h4 className={styles.iconTitle}>{item.title}</h4>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={item.icon} />
              <span className={styles.iconValue}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourDescription;
