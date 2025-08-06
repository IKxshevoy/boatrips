"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AlternativeButton from "@/ui-kit/alternative-button/Button";

export interface Images {
  imageUrl: string;
}

const sunrise_images: Images[] = [
  {
    imageUrl: "/catamaran/19.webp",
  },
  {
    imageUrl: "/catamaran/21.webp",
  },
  {
    imageUrl: "/catamaran/17.webp",
  },
  {
    imageUrl: "/catamaran/18.webp",
  },
  {
    imageUrl: "/catamaran/20.webp",
  },
];

const sunset_images: Images[] = [
  {
    imageUrl: "/catamaran/3.webp",
  },
  {
    imageUrl: "/catamaran/15.webp",
  },
  {
    imageUrl: "/catamaran/13.webp",
  },
  {
    imageUrl: "/catamaran/5.webp",
  },
  {
    imageUrl: "/catamaran/16.webp",
  },
];

const descriptionSunrise = [
  {
    id: 1,
    icon: faCreditCard,
    value: "500 €",
  },
  {
    id: 3,
    icon: faClock,
    value: "2H 30 M",
  },
];

const descriptionSunset = [
  {
    id: 1,
    icon: faCreditCard,
    value: "150€",
  },
  {
    id: 3,
    icon: faClock,
    value: "2H 30 M",
  },
];

interface ITourDescription {
  isReversed?: boolean;
}

const keys = ["price", "duration"] as const;

const TourDescription: React.FC<ITourDescription> = ({ isReversed }) => {
  const t = useTranslations("catamaran-cruise");
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % 4);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const descriptionItemsSunrise = keys.map((key, index) => ({
    title: t(key),
    icon: descriptionSunrise[index].icon,
    id: descriptionSunrise[index].id,
    value: descriptionSunrise[index].value,
  }));
  const descriptionItemsSunset = keys.map((key, index) => ({
    title: t(key),
    icon: descriptionSunset[index].icon,
    id: descriptionSunset[index].id,
    value: descriptionSunset[index].value,
  }));

  return (
    <div className={styles.column}>
      <div
        className={`${styles.description__wrapper} ${
          isReversed ? styles.reversed : ""
        }`}
      >
        <div className={styles.description}>
          <h2 className={styles.title}>
            <span className={styles.orangeWrapper}>{t("sunset")} </span>{" "}
            {t("tour")}
          </h2>
          <p className={styles.description__paragraph}>
            {t.rich("sunset_desc", {
              br: () => <br />,
            })}
          </p>
          <div className={styles.description__icons}>
            {descriptionItemsSunset.map((item) => (
              <div className={styles.description__item} key={item.id}>
                <h4 className={styles.iconTitle}>{item.title}</h4>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={item.icon} />
                  <span className={styles.iconValue}>{item.value}</span>
                </div>
              </div>
            ))}
            <AlternativeButton
              text={t("book_now")}
              url="https://fareharbor.com/embeds/book/boatrips/items/645536/?full-items=yes&flow=536599"
            />
          </div>
        </div>
        <div className={styles.descImgWrapper}>
          <Image
            src={sunset_images[currentIndex].imageUrl}
            alt="slider photo"
            className={styles.descImg}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
      <div
        className={`${styles.description__wrapper} ${
          isReversed ? styles.reversed : ""
        }`}
      >
        <div className={styles.descImgWrapper}>
          <Image
            src={sunrise_images[currentIndex].imageUrl}
            alt="slider photo"
            className={styles.descImg}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>
            <span className={styles.orangeWrapper}>{t("custom")} </span>{" "}
            {t("tour")}
          </h2>
          <p className={styles.description__paragraph}>
            {t.rich("sunrise_desc", {
              br: () => <br />,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourDescription;
