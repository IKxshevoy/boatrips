import styles from "./slider.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MediaIconsList from "./mediaIconsList/MediaIconsList";
import Button from "@/ui-kit/button/Button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface SlideMeta {
  path: string;
  href: string;
}

const slideContent: SlideMeta[] = [
  { path: "/main.webp", href: "/ponta-da-piedade-caves-cruise" },
  { path: "/yacht/1.webp", href: "/yacht-cruise" },
  { path: "/sunset/6.webp", href: "/sunset-cruise" },
  { path: "/slide3.avif", href: "/benagil-caves-speed-boat-tour" },
];

const Slider = () => {
  const t = useTranslations("slider");
  const router = useRouter();
  const [activeButton, setActiveButton] = useState<number | null>(0);
  const [activeSlide, setActiveSlide] = useState<number | null>(0);

  const sliderNav = (index: number) => {
    if (index !== activeButton) {
      setActiveButton(index);
      setActiveSlide(index);
    }
  };
  return (
    <>
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
                {t(`slide_${activeSlide}_title`)}
                <br />
                <span>{t(`slide_${activeSlide}_subTitle`)}</span>
              </h1>
              <p className={styles.contentText}>
                {t.rich(`slide_${activeSlide}_content`, {
                  br: () => <br />,
                })}
              </p>
              <p className={styles.contentTextHidden}>
                {t(`slide_${activeSlide}_contentHidden`)}
              </p>
            </>
          )}
          <Link
            className={styles.readMoreBtn}
            href={slideContent[activeSlide!].href}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = slideContent[activeSlide!].href;
            }}
          >
            <Button text={t("read_more")} />
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
      <section className={styles.promo}>
        <h1>
          {t("enjoy")} <span className={styles.discount}>{t("discount")}</span>{" "}
          {t("with_promo")} <span className={styles.discount}>SEADAY</span>.{" "}
          {t("book_now")}
        </h1>
      </section>
    </>
  );
};

export default Slider;
