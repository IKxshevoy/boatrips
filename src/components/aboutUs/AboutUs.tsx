import { AboutUsSection } from "@/components/aboutUs/aboutUsSection/AboutUsSection";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./aboutUs.module.scss";

export interface Images {
  imageUrl: string;
}

const images: Images[] = [
  {
    imageUrl: "/aboutUs1.jpg",
  },
  {
    imageUrl: "/3.jpg",
  },
  {
    imageUrl: "/slide2.jpg",
  },
];

export const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <section className={`${styles.about}`} id="about">
      <AboutUsSection
        title="Welcome to Boatrips"
        subtitle={
          <>
            We are genuinely delighted that you've chosen to explore the
            boundless possibilities we offer!
            <br />
            <br />
            Our team is here to ensure that your visit to the enchanting shores
            of Lagos, Portugal, becomes an exceptional and unforgettable
            experience.
            <br />
            <br />
            Our commitment to excellence and passion for the sea have been our
            guiding principles since our establishment. Your adventure begins
            with us, and we can't wait to share the beauty and excitement of
            Lagos with you. Let's embark on this exciting voyage together!
          </>
        }
        reverse={false}
      >
        <Image
          width={500}
          height={100}
          style={{ width: "100%" }}
          src={images[currentIndex].imageUrl}
          alt="slider photo"
        />
      </AboutUsSection>
      <AboutUsSection
        title="Our Background"
        subtitle={
          <>
            Boatrips, a trusted name since the year 2000, has been creating
            unforgettable experiences in the picturesque coastal town of Lagos.
            <br />
            <br />
            Located in the heart of this vibrant seaside destination, we pride
            ourselves on crafting unique adventures that have left a lasting
            impression on our guests.
            <br />
            <br />
            Our commitment to excellence and our passion for the sea have been
            the cornerstones of our journey, and we can't wait to share the
            beauty and excitement of Lagos with you.
          </>
        }
        reverse={true}
      >
        <Image
          src="/3.jpg"
          alt=""
          width={500}
          height={100}
          style={{ width: "100%" }}
        />
      </AboutUsSection>
    </section>
  );
};
