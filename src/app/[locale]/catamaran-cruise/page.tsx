"use client";
import React, { useState } from "react";
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
import Images from "./gallery/Images";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Slideshow,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { slides } from "./gallery/data";
import { Title } from "@/ui-kit/title/Title";
import ToursBottom from "./tourDescription/SingleTour";
import Button from "@/ui-kit/button/Button";
import AlternativeButton from "@/ui-kit/alternative-button/Button";

const Tour = () => {
  const t = useTranslations("catamaran-cruise");
  const [index, setIndex] = useState<number>(-1);
  return (
    <section className={styles.tourSection}>
      <TourHeader />
      <div className={styles.descriptionBlock}>
        <ToursBottom />
      </div>

      <VirtualTour />

      <TourInfo />

      <div className={styles.descriptionBlock}>
        <TourDescription />
      </div>

      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails, Slideshow]}
        slideshow={{ autoplay: true, delay: 5000 }}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
      <TourMap />
      <div className={styles.promotion}>
        <h2 className={styles.promotion__title}>{t("private_tour")}</h2>
        <AlternativeButton
          text={t("contact_us")}
          url="https://wa.me/351969184712"
        />
      </div>
    </section>
  );
};

export default Tour;
