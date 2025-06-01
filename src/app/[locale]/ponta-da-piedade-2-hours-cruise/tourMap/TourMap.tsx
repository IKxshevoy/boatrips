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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198.87397657759033!2d-8.672685023171008!3d37.10550727572992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f75.1!3m3!1m2!1s0xd1b31005de4819f%3A0xcdb47c826c876abf!2sBoatrips%20meeting%20point!5e0!3m2!1sen!2spt!4v1748769174577!5m2!1sen!2spt"
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
