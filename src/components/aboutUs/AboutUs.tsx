import Image from "next/image";
import { useTranslations } from "next-intl";
import VideoFacade from "@/components/tour/VideoFacade";
import { toParagraphs } from "@/lib/text";
import styles from "./aboutUs.module.scss";

export const AboutUs = () => {
  const t = useTranslations("about_us");

  return (
    <section className={styles.about} id="about" aria-label={t("boatrips")}>
      <div className={`container ${styles.row}`}>
        <div className={styles.data}>
          <p className={styles.eyebrow}>{t("boatrips")}</p>
          <h2 className={styles.title}>{t("welcome_to_boatrips")}</h2>
          {toParagraphs(t.raw("welcome_to_boatrips_description")).map((p, i) => (
            <p className={styles.text} key={i}>
              {p}
            </p>
          ))}
        </div>
        <div className={styles.media}>
          <VideoFacade
            youtubeId="DE5Ii0DnYo8"
            poster="/classic/19.webp"
            title={t("welcome_to_boatrips")}
          />
        </div>
      </div>

      <div className={`container ${styles.row} ${styles.reverse}`}>
        <div className={styles.data}>
          <p className={styles.eyebrow}>{t("boatrips")} · 2000</p>
          <h2 className={styles.title}>{t("our_background")}</h2>
          {toParagraphs(t.raw("our_background_description")).map((p, i) => (
            <p className={styles.text} key={i}>
              {p}
            </p>
          ))}
        </div>
        <div className={`${styles.media} ${styles.photo}`}>
          <Image
            src="/3.webp"
            alt={t("our_background")}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
};
