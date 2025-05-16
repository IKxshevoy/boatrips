import React from "react";
import styles from "../styles.module.scss";
import { useTranslations } from "next-intl";

const TourMap = () => {
  const t = useTranslations("ponta-da-piedade-2-hours-cruise");
  return (
    <div className={styles.location}>
      <h2 className={styles.title}>{t("meeting_point")}</h2>
      <p className={styles.location__description}>{t("cant_find")}</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3181.9527129957173!2d-8.675411!3d37.1062431!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDA2JzIyLjEiTiA4wrA0MCcyMy41Ilc!5e0!3m2!1sru!2spt!4v1747380320187!5m2!1sru!2spt"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default TourMap;
