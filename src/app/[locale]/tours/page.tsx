"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import WavyButton from "@/ui-kit/wavyButton-2/WavyButton";
import Button from "@/ui-kit/button/Button";
export interface Tour {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
  href: string;
}

const tours_info = [
  {
    imageUrl: "/1.jpg",
    id: 0,
    price: 20,
    href: "/ponta-da-piedade-caves-cruise",
  },
  {
    imageUrl: "/4.jpg",
    id: 1,
    price: 30,
    href: "/ponta-da-piedade-2-hours-cruise",
  },
  {
    imageUrl: "/3.jpg",
    id: 2,
    price: 40,
    href: "/benagil-caves-speed-boat-tour",
  },
  {
    imageUrl: "/slide2.jpg",
    id: 3,
    price: 35,
    href: "/sunset-cruise",
  },
  {
    imageUrl: "/yacht/4.png",
    id: 4,
    price: 80,
    href: "/yacht-cruise",
  },
];

const keys = [
  "ponta_da_piedade",
  "coastline_tour",
  "benagil_cave",
  "sunset_cruise",
  "yacht_cruise",
] as const;

const Tours = () => {
  const t = useTranslations("tours");

  const tours = keys.map((key, index) => ({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    imageUrl: tours_info[index].imageUrl,
    id: tours_info[index].id,
    price: tours_info[index].price,
    href: tours_info[index].href,
  }));

  const [selectedTour, setSelectedTour] = useState<Tour>(tours[0]);

  const router = useRouter();
  const handleButtonClick = () => {
    router.push(selectedTour.href);
  };
  return (
    <div
      className={styles.toursList}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${selectedTour.imageUrl}')`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className={styles.tourSection}
        key={selectedTour.id}
        onClick={() => setSelectedTour(selectedTour)}
      >
        <div className={styles.selectedTour}>
          <span className={styles.title}>
            {selectedTour.title} <span className={styles.orangeWrapper}>.</span>
          </span>
          <span className={styles.price}>
            {selectedTour.price}${" "}
            <span className={styles.orangeWrapper}>/ </span>h
          </span>
          <div className={styles.description}>{selectedTour.description}</div>
          <div className={styles.buttonWrapper}>
            <Button text={t("read_more")} />
          </div>
        </div>
      </div>
      <div className={styles.tours}>
        {tours.map((tour) => (
          <div
            className={`${styles.galleryCard} ${styles.hasBgImage} ${styles.hasAfter}`}
            style={{ backgroundImage: `url('${tour.imageUrl}')` }}
            key={tour.id}
            onClick={() => setSelectedTour(tour)}
          >
            <div className={styles.cardContent}>
              <h3 className={`h3 ${styles.cardTitle}`}>{tour.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
