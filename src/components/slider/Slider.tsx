import styles from "./slider.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MediaIconsList from "./mediaIconsList/MediaIconsList";

interface Slide {
  title: string;
  subTitle: string;
  content: string;
  path: string;
}

const slideContent: Slide[] = [
  {
    title: "Tour of",
    subTitle: "Ponta de Piedade",
    content:
      "Etiam maximus nulla eros, id ultrices turpis tempor eu. Ut eu massa tempus, imperdiet mi sed, viverra ex.Etiam maximus nulla eros, id ultrices turpis tempor eu. Ut eu massa tempus, imperdiet mi sed, viverra ex.Etiam maximus nulla eros, id ultrices turpis tempor eu. Ut eu massa tempus, imperdiet mi sed, viverra ex.Etiam maximus nulla eros, id ultrices turpis tempor eu. Ut eu massa tempus, imperdiet mi sed, viverra ex.Etiam maximus nulla eros",
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
          fill
          style={{ objectFit: "cover" }}
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
            <p className={styles.contentText}>
              {slideContent[activeSlide].content}
            </p>
          </>
        )}
        <Link href={"#"} className={styles.button}>
          Read More
        </Link>
      </div>
      <MediaIconsList />
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
