import React from "react";
import { useTranslations } from "next-intl";
import TourGallery from "@/components/tour/TourGallery";
import { slides } from "./data";
import styles from "./styles.module.scss";

const Gallery = () => {
  const t = useTranslations("gallery");
  return (
    <section className={styles.section} aria-labelledby="gallery-title">
      <div className="container">
        <h2 className={styles.title} id="gallery-title">
          {t("image_gallery")}
        </h2>
        <TourGallery images={slides.map((s) => s.src)} alt="Boatrips Lagos" />
      </div>
    </section>
  );
};

export default Gallery;
