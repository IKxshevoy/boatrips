import classNames from "classnames";
import styles from "./slider.module.css";
import Button from "@/components/button/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Image from "next/image";

interface Slide {
  title: string;
  subTitle: string;
  content: string;
  path: string;
}

const slideContent: Slide[] = [
  {
    title: "Ponta de Piedade",
    subTitle: "Boatrips",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    path: "/slide1.jpg",
  },
  {
    title: "Sunset",
    subTitle: "Adventure",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    path: "/slide2.jpg",
  },
  {
    title: "Benagil",
    subTitle: "Adventure",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    path: "/slide3.avif",
  },
  // Add more slide content objects as needed
];

const MediaIcon: React.FC<{ icon: any }> = ({ icon }) => (
  <Link href={"/"} className={styles["media-icon"]}>
    <FontAwesomeIcon icon={icon} style={{ width: "35px", height: "35px" }} />
  </Link>
);

const Slider = () => {
  const [activeButton, setActiveButton] = useState<number | null>(0);
  const [activeSlide, setActiveSlide] = useState<number | null>(0);

  const sliderNav = (index: number) => {
    if (index !== activeButton) {
      // Check if clicked button is different from currently active button
      setActiveButton(index);
      setActiveSlide(index);
    }
  };

  return (
    <section className={styles.home}>
      {slideContent.map((slide, index) => (
        <Image
          key={index}
          src={slide.path}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={classNames(styles["image-slide"], {
            [styles["active-slide"]]: activeSlide === index,
          })}
        />
      ))}
      <div className={styles.content}>
        {activeSlide !== null && (
          <>
            <h1 className={styles["content-title"]}>
              {slideContent[activeSlide].title}
              <br />
              <span>{slideContent[activeSlide].subTitle}</span>
            </h1>
            <p className={styles["content-p"]}>
              {slideContent[activeSlide].content}
            </p>
          </>
        )}
        <Button url="/" />
      </div>
      <div className={styles["media-icons"]}>
        <MediaIcon icon={faFacebook} />
        <MediaIcon icon={faInstagram} />
        <MediaIcon icon={faWhatsapp} />
      </div>
      <div className={styles["slider-navigation"]}>
        {slideContent.map((_, index) => (
          <div
            key={index}
            className={classNames(styles["nav-btn"], {
              [styles.active]: activeSlide === index,
            })}
            onClick={() => sliderNav(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
