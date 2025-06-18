"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/ui-kit/button/Button";
import WavyButton from "@/ui-kit/wavyButton/WavyButton";
import AlternativeButton from "@/ui-kit/alternative-button/Button";

export interface Images {
  imageUrl: string;
}

const sunrise_images: Images[] = [
  {
    imageUrl: "/catamaran/7.webp",
  },
  {
    imageUrl: "/catamaran/8.webp",
  },
  {
    imageUrl: "/catamaran/1.webp",
  },
  {
    imageUrl: "/catamaran/9.webp",
  },
  {
    imageUrl: "/catamaran/4.webp",
  },
];

const sunset_images: Images[] = [
  {
    imageUrl: "/catamaran/10.webp",
  },
  {
    imageUrl: "/catamaran/11.webp",
  },
  {
    imageUrl: "/catamaran/12.webp",
  },
  {
    imageUrl: "/catamaran/2.webp",
  },
  {
    imageUrl: "/catamaran/19.webp",
  },
];

const descriptionSunrise = [
  {
    id: 1,
    icon: faCreditCard,
    value: "1200 €",
  },
  {
    id: 3,
    icon: faClock,
    value: "3H",
  },
];

const descriptionSunset = [
  {
    id: 1,
    icon: faCreditCard,
    value: "1900 €",
  },
  {
    id: 3,
    icon: faClock,
    value: "7H",
  },
];

interface ITourDescription {
  isReversed?: boolean;
}

const keys = ["price", "duration"] as const;

const ToursBottom: React.FC<ITourDescription> = ({ isReversed }) => {
  const t = useTranslations("catamaran-cruise");
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % 5);
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
    <div className={styles.column} id="tour-description">
      <div
        className={`${styles.description__wrapper} ${
          isReversed ? styles.reversed : ""
        }`}
      >
        <div className={styles.description}>
          <h2 className={styles.title}>
            <span className={styles.orangeWrapper}>{t("daytime")} </span>{" "}
            {t("sailing")}
          </h2>
          <p className={styles.description__paragraph}>
            {t.rich("daytime_desc", {
              br: () => <br />,
            })}
          </p>
          <div className={styles.description__icons}>
            {descriptionItemsSunrise.map((item) => (
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
              url="https://fareharbor.com/embeds/book/boatrips/items/644811/?full-items=yes&flow=536599"
            />
          </div>
        </div>
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
      </div>
      <div
        className={`${styles.description__wrapper} ${
          isReversed ? styles.reversed : ""
        }`}
      >
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
        <div className={styles.description}>
          <h2 className={styles.title}>
            <span className={styles.orangeWrapper}>{t("private")} </span>{" "}
            {t("full_Day")}
          </h2>
          <p className={styles.description__paragraph}>
            {t.rich("full_day", {
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
              url="https://fareharbor.com/embeds/book/boatrips/items/645533/?full-items=yes&flow=536599"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursBottom;
