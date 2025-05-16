import { AboutUsSection } from "@/components/aboutUs/aboutUsSection/AboutUsSection";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./aboutUs.module.scss";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("about_us");
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
        title={t("welcome_to_boatrips")}
        isVideo={true}
        subtitle={t.rich("welcome_to_boatrips_description", {
          br: () => <br />,
        })}
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
        title={t("our_background")}
        subtitle={t.rich("our_background_description", {
          br: () => <br />,
        })}
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
