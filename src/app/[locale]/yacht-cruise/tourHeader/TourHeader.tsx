import React from "react";
import styles from "../styles.module.scss";
import { useTranslations } from "next-intl";
import WavyButton from "@/ui-kit/wavyButton/WavyButton";

const TourHeader = () => {
  const t = useTranslations("benagil-caves");
  return (
    <div className={styles.tourHeader}>
      <div className={styles.content}>
        <h4 className={styles.tiny__title}>Four different variations!</h4>
        <h2>
          Explore The<br></br> Beauty of Lagos
        </h2>
        <h1 className={styles.bold__title}>
          On unforgettable{" "}
          <span className={styles.orangeWrapper}>Yacht Cruise</span>
        </h1>
        <div className={styles.title__button}>
        <a href="#tour-description">
          <WavyButton text="Explore"></WavyButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourHeader;
