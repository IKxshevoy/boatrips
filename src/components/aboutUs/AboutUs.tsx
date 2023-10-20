import { AboutUsSection } from "@/components/aboutUs/aboutUsSection/AboutUsSection";
import Image from "next/image";
import styles from "./aboutUs.module.scss";

export const AboutUs = () => {

  return (
    <section className={`${styles.about}`}>
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
          src="/aboutUsMobile.jpg"
          alt=""
          width={500}
          height={100}
          style={{ width: "100%" }}
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
