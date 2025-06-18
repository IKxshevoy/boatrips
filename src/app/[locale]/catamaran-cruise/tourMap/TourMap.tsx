import React from "react";
import styles from "../styles.module.scss";
import { useTranslations } from "next-intl";

const TourMap = () => {
  const t = useTranslations("benagil-caves");
  return (
    <div className={styles.location}>
      <h2 className={styles.title}>{t("meeting_point")}</h2>
      <p className={styles.location__description}>{t("cant_find")}</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d795.4491699618382!2d-8.67467273035517!3d37.10995706776316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDA2JzM1LjgiTiA4wrA0MCcyNi41Ilc!5e0!3m2!1sru!2spt!4v1750221048654!5m2!1sru!2spt"
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
