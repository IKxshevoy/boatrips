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
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { slides } from "./gallery/data";
import { Title } from "@/ui-kit/title/Title";
import ToursBottom from "./tourDescription/SingleTour";

const Tour = () => {
  const t = useTranslations("benagil-caves");
  const [index, setIndex] = useState<number>(-1);
  return (
    <section className={styles.tourSection}>
      <TourHeader />
      <div className={styles.descriptionBlock}>
        <TourDescription />
      </div>

      <VirtualTour />

      <TourInfo />

      <div className={styles.descriptionBlock}>
        <ToursBottom></ToursBottom>
      </div>

      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        // open={open}
        // close={() => setOpen(false)}

        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
      <TourMap />
      <div className={styles.promotion}>
        <h2 className={styles.promotion__title}>{t("private_tour")}</h2>
        <WavyButton text={t("contact_us")}></WavyButton>
      </div>
    </section>
  );
};

export default Tour;
