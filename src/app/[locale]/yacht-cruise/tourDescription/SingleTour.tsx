"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/ui-kit/button/Button";
import WavyButton from "@/ui-kit/wavyButton/WavyButton";

export interface Images {
  imageUrl: string;
}

const sunrise_images: Images[] = [
  {
    imageUrl: "/yacht/sunrise/1.jpg",
  },
  {
    imageUrl: "/yacht/sunrise/2.jpg",
  },
  {
    imageUrl: "/yacht/sunrise/3.jpg",
  },
  {
    imageUrl: "/yacht/sunrise/4.jpg",
  },
  {
    imageUrl: "/yacht/sunrise/5.jpg",
  },
];

const sunset_images: Images[] = [
  {
    imageUrl: "/yacht/sunset/1.jpg",
  },
  {
    imageUrl: "/yacht/sunset/2.png",
  },
  {
    imageUrl: "/yacht/sunset/3.png",
  },
  {
    imageUrl: "/yacht/sunset/4.png",
  },
  {
    imageUrl: "/yacht/sunset/5.png",
  },
];

const descriptionSunrise = [
  {
    id: 1,
    icon: faCreditCard,
    value: "80 €",
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
    value: "900 €",
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
  const t = useTranslations("yacht-cruise");
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
    <div className={styles.column}>
      <div
        className={`${styles.description__wrapper} ${
          isReversed ? styles.reversed : ""
        }`}
      >
        <div className={styles.description}>
          <h2 className={styles.title}>
            <span className={styles.orangeWrapper}>Golden </span> Hour
          </h2>
          <p className={styles.description__paragraph}>
            {t.rich("golden_hour_desc", {
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
            <button className={styles.button}>
              <a href="https://fareharbor.com/embeds/book/boatrips/items/560967/?full-items=yes&flow=536599">
                Book now
              </a>
            </button>
          </div>
        </div>
        <div className={styles.descImgWrapper}>
          <Image
            width={500}
            height={100}
            className={styles.descImg}
            style={{ borderRadius: "20px" }}
            src={sunrise_images[currentIndex].imageUrl}
            alt="slider photo"
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
            width={500}
            height={100}
            className={styles.descImg}
            style={{ borderRadius: "20px" }}
            src={sunrise_images[currentIndex].imageUrl}
            alt="slider photo"
          />
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>
            <span className={styles.orangeWrapper}>Private </span> Full Day
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
            <button className={styles.button}>
              <a href="https://fareharbor.com/embeds/book/boatrips/items/560962/?full-items=yes&flow=536599">
                Book now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursBottom;