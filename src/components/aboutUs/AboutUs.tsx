import { AboutUsSection } from "@/components/aboutUs/aboutUsSection/AboutUsSection";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./aboutUs.module.scss";
import { useTranslations } from "next-intl";

export interface Images {
  imageUrl: string;
}

export const AboutUs = () => {
  const t = useTranslations("about_us");

  return (
    <section className={`${styles.about}`} id="about">
      <AboutUsSection
        title={t("welcome_to_boatrips")}
        isVideo={true}
        subtitle={t.rich("welcome_to_boatrips_description", {
          br: () => <br />,
        })}
        reverse={false}
      />
      <AboutUsSection
        title={t("our_background")}
        subtitle={t.rich("our_background_description", {
          br: () => <br />,
        })}
        reverse={true}
      >
        <Image
          src="/3.webp"
          alt=""
          width={500}
          height={100}
          style={{ width: "100%" }}
        />
      </AboutUsSection>
    </section>
  );
};
