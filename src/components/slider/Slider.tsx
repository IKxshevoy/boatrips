import styles from "./slider.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MediaIconsList from "./mediaIconsList/MediaIconsList";
import Button from "@/ui-kit/button/Button";
import { useRouter } from "next/navigation";

interface Slide {
  title: string;
  subTitle: string;
  content: string;
  contentHidden: string;
  path: string;
  href: string;
}

const slideContent: Slide[] = [
  {
    title: "Tour of",
    subTitle: "Ponta de Piedade",
    content:
      "Sail the seas of the Algarve in true Portuguese style on a boat cruise in a traditional Portuguese boat. Visit to the rugged sea caves and get up close to the dramatic Ponta da Piedade rock formation. Learn more about the area from your local skipper. For an unforgettable experience, you will board your unique vessel complete with a traditional Portuguese design. These special boats are designed to get you to sail to the smallest grotto.",
    contentHidden:
      "Sail the seas of the Algarve in true Portuguese style on a boat cruise in a traditional Portuguese boat. Visit to the rugged sea caves and get up close to the dramatic Ponta da Piedade rock formation.",
    path: "/main.jpg",
    href: "ponta-da-piedade-caves-cruise",
  },
  {
    title: "Sunset",
    subTitle: "Adventure",
    content:
      "Discover one of the most beautiful spots on the coast of the Algarve on a romantic boat cruise to Ponta da Piedade. Climb aboard at Lagos Harbor and set sail to see amazing rock formations, sea caves and golden beaches from the water. Drop anchor at the idyllic rock formations of Ponta da Piedade, and marvel at the contrast between the brown-red rocks and the green-blues waters of the Atlantic Ocean. At your request, stop for a swim break. Complete your evening in paradise as you watch the sun set over the horizon.",
    contentHidden:
      "Discover one of the most beautiful spots on the coast of the Algarve on a romantic boat cruise to Ponta da Piedade. Climb aboard at Lagos Harbor and set sail to see amazing rock formations, sea caves and golden beaches from the water.",
    path: "/slide2.jpg",
    href: "sunset-cruise",
  },
  {
    title: "Benagil",
    subTitle: "Adventure",
    content:
      "Hop onboard one of our specifically designed speed boats for a unique adventure to Benagil. Despite the distance of 12 nautical miles from Lagos to the coast of Carvoeiro and Benagil. Enter the various caves in the area that are not accessible from larger vessels. Listen as the guide tells stories about the Algarve region along the way. Visit amazing caves and hidden grottos from the inside, and see natural wonders that can't be reached in any other way.",
    contentHidden:
      "Hop onboard one of our specifically designed speed boats for a unique adventure to Benagil. Despite the distance of 12 nautical miles from Lagos to the coast of Carvoeiro and Benagil.",
    path: "/slide3.avif",
    href: "benagil-caves-speed-boat-tour",
  },
  // Add more slide content objects as needed
];

const Slider = () => {
  const router = useRouter();
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
              {slideContent[activeSlide].contentHidden}
            </p>
            <p className={styles.contentTextHidden}>
              {slideContent[activeSlide].contentHidden}
            </p>
          </>
        )}
        <div
          className={styles.readMoreBtn}
          onClick={() => router.push(slideContent[activeSlide!].href)}
        >
          <Button text="Read More"></Button>
        </div>
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
