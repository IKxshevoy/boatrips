import { AboutUsSection } from "@/components/aboutUs/aboutUsSection/AboutUsSection";
import VideoPlayer from "@/ui-kit/video/Video";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { AboutUsMap } from "@/components/aboutUs/aboutUsMap/AboutUsMap";
import styles from "./aboutUs.module.scss";

export const AboutUs = () => {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "intro2.mp4",
        type: "video/mp4",
      },
    ],
    poster: "aboutUs2.jpg",
  };

  const [isFadeLoaded, setIsFadeLoaded] = useState(false);

  useLayoutEffect(() => {
    import("react-reveal/Fade").then(() => {
      setIsFadeLoaded(true);
    });
  }, []);

  return (
    <section
      className={`${styles.about} ${!isFadeLoaded && styles.about__notFade}`}
    >
      {isFadeLoaded && (
        <>
          <AboutUsSection
            title="Welcome to Boatrips"
            subtitle={
              <>
                We are genuinely delighted that you've chosen to explore the
                boundless possibilities we offer!
                <br />
                <br />
                Our team is here to ensure that your visit to the enchanting
                shores of Lagos, Portugal, becomes an exceptional and
                unforgettable experience.
                <br />
                <br />
                Our commitment to excellence and passion for the sea have been
                our guiding principles since our establishment. Your adventure
                begins with us, and we can't wait to share the beauty and
                excitement of Lagos with you. Let's embark on this exciting
                voyage together!
              </>
            }
            reverse={false}
          >
            <Image
              src="/aboutUs1.jpg"
              alt=""
              width={500}
              height={100}
              layout="responsive"
            />
          </AboutUsSection>
          <AboutUsSection
            title="Our Background"
            subtitle={
              <>
                Boatrips, a trusted name since the year 2000, has been creating
                unforgettable experiences in the picturesque coastal town of
                Lagos.
                <br />
                <br />
                Located in the heart of this vibrant seaside destination, we
                pride ourselves on crafting unique adventures that have left a
                lasting impression on our guests.
                <br />
                <br />
                Our commitment to excellence and our passion for the sea have
                been the cornerstones of our journey, and we can't wait to share
                the beauty and excitement of Lagos with you.
              </>
            }
            reverse={true}
          >
            <Image
              src="/3.jpg"
              alt=""
              width={500}
              height={100}
              layout="responsive"
            />
          </AboutUsSection>
        </>
      )}
    </section>
  );
};
