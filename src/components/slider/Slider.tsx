import styles from "./slider.module.scss";
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
  <Link href={"/"} className={styles.mediaIcon}>
    <FontAwesomeIcon
      icon={icon}
      style={{ width: "35px", height: "35px" }}
    />
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
          className={`${styles.imageSlide} ${
            activeSlide === index ? styles.activeSlide : ""
          }`}
        />
      ))}
      <div className={styles.content}>
        {activeSlide !== null && (
          <>
            <h1 className={styles.contentTitle}>
              {slideContent[activeSlide].title}
              <br />
              <span>{slideContent[activeSlide].subTitle}</span>
            </h1>
            <p className={styles.contentP}>
              {slideContent[activeSlide].content}
            </p>
          </>
        )}
        <Link href={"#"} className={styles.button}>
          Read More
        </Link>
      </div>
      <div className={styles.mediaIcons}>
        <MediaIcon icon={faFacebook} />
        <MediaIcon icon={faInstagram} />
        <MediaIcon icon={faWhatsapp} />
      </div>
      <div className={styles.sliderNavigation}>
        {slideContent.map((_, index) => (
          <div
            key={index}
            className={`${styles.navBtn} ${
              activeSlide === index ? styles.active : ""
            }`}
            onClick={() => sliderNav(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
