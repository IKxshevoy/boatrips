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
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d198.86375786939428!2d-8.673742455244422!3d37.10939901485573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f70.1!3m2!1m1!2zMzfCsDA2JzMzLjgiTiA4wrA0MCcyNC44Ilc!5e0!3m2!1sen!2spt!4v1748766594813!5m2!1sen!2spt"
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
