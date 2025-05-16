import React from "react";
import styles from "../styles.module.scss";
import Video from "./video/Video";
import { useTranslations } from "next-intl";

const keys = ["english", "portuguese", "spanish", "french"] as const;

const VirtualTour = () => {
  const t = useTranslations("ponta-da-piedade-caves-cruise");
  const languages = keys.map((key) => t(key));
  return (
    <div className={styles.virtualTour}>
      <h2 className={styles.title}>{t("watch_a_virtual_tour")}</h2>
      <div className={styles.virtualTour__wrapper}>
        <Video />
        <div className={styles.virtualTour__text}>
          <div className={styles.highlights}>
            <h3>{t("highlights")}:</h3>
            <ul>
              <li>{t("first_highlight")}</li>
              <li>{t("second_highlight")}</li>
              <li>{t("third_highlight")}</li>
              <li>{t("fourth_highlight")}</li>
            </ul>
          </div>
          <div className={styles.languages}>
            <h3>{t("spoken_languages")}:</h3>
            <ul>
              {languages.map((language) => (
                <li>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
