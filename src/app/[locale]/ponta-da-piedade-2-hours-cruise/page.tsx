import React from "react";
import styles from "./styles.module.scss";
import ReviewsSlider from "@/components/reviewsSlider/ReviewsSlider";
import TourHeader from "./tourHeader/TourHeader";
import TourDescription from "./tourDescription/TourDescription";
import CalendarFrame from "./calendarFrame/CalendarFrame";
import VirtualTour from "./virtualTour/VirtualTour";
import TourInfo from "./tourInfo/TourInfo";
import TourMap from "./tourMap/TourMap";
import WavyButton from "@/ui-kit/wavyButton/WavyButton";
import { useTranslations } from "next-intl";

const Tour = () => {
  const t = useTranslations("ponta-da-piedade-2-hours-cruise");
  return (
    <section className={styles.tourSection}>
      <TourHeader />
      <div className={styles.descriptionBlock}>
        <TourDescription />
        <CalendarFrame />
      </div>
      <VirtualTour />
      <TourInfo />
      <div className={styles.reviewsBlock}>
        <h2 className={styles.title}>{t("reviews")}</h2>
        <ReviewsSlider />
      </div>
      <TourMap />
      <div className={styles.promotion}>
        <h2 className={styles.promotion__title}>{t("private_tour")}</h2>
        <WavyButton text={t("contact_us")}></WavyButton>
      </div>
    </section>
  );
};

export default Tour;
