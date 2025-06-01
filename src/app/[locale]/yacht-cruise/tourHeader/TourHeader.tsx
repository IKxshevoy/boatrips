import React from "react";
import styles from "../styles.module.scss";
import { useTranslations } from "next-intl";
import WavyButton from "@/ui-kit/wavyButton/WavyButton";
import Button from "@/ui-kit/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlassEmpty } from "@fortawesome/free-solid-svg-icons";

const TourHeader = () => {
  const t = useTranslations("yacht-cruise");

  const handleClick = () => {
    const element = document.getElementById("tour-description");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.tourHeader}>
      <div className={styles.content}>
        <div className={styles.drinks__wrapper}>
          <h4 className={styles.tiny__title}>{t("free_drinks")}</h4>
          <span className={styles.orangeWrapper}>
            <FontAwesomeIcon icon={faMartiniGlassEmpty} />
          </span>
        </div>
        <h2>
          {t("explore")}
          <br /> {t("beauty")}
        </h2>
        <h1 className={styles.bold__title}>
          {t("on_unforgettable")}{" "}
          <span className={styles.orangeWrapper}>{t("yacht_cruise")}</span>
        </h1>
        <div className={styles.title__button}>
          <Button text={t("explore_btn")} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default TourHeader;
