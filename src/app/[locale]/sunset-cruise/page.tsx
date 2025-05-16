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
import AlternativeButton from "@/ui-kit/alternative-button/Button";

const Tour = () => {
  const t = useTranslations("sunset-cruise");
  const [index, setIndex] = useState<number>(-1);
  return (
    <section className={styles.tourSection}>
      <TourHeader />
      <div className={styles.descriptionBlock}>
        <TourDescription />
        <CalendarFrame />
      </div>
      <VirtualTour />
      <TourInfo />
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
      <div className={styles.reviewsBlock}>
        <h2 className={styles.title}>{t("reviews")}</h2>
        <ReviewsSlider />
      </div>
      <TourMap />
      <div className={styles.promotion}>
        <h2 className={styles.promotion__title} id="private-sunset">
          {t("private_tour")}
        </h2>
        <AlternativeButton
          url="https://fareharbor.com/embeds/book/boatrips/items/478706/?full-items=yes&flow=536599"
          text={t("book_it")}
        />
      </div>
    </section>
  );
};

export default Tour;
