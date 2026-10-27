import React from "react";
import { useTranslations } from "next-intl";
import Icon, { type IconName } from "@/components/tour/Icon";
import VideoFacade from "@/components/tour/VideoFacade";
import styles from "./features.module.scss";

const items: { key: string; icon: IconName }[] = [
  { key: "first_feature", icon: "shield" },
  { key: "second_feature", icon: "users" },
  { key: "third_feature", icon: "sparkle" },
  { key: "fourth_feature", icon: "checkCircle" },
  { key: "fifth_feature", icon: "paw" },
];

const Features = () => {
  const t = useTranslations("features");

  return (
    <section className={styles.features} aria-labelledby="features-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2 className={styles.title} id="features-title">
            {t("why")} <span className={styles.accent}>{t("you")}</span>{" "}
            {t("should_go_with")} <span className={styles.accent}>{t("us")}</span>?
          </h2>
          <p className={styles.text}>{t("description")}</p>
          <VideoFacade
            youtubeId="NBvS3qXCZpA"
            poster="/coastline/4.webp"
            title="Ponta da Piedade"
          />
        </div>
        <ul className={styles.list}>
          {items.map(({ key, icon }) => (
            <li key={key} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={icon} size={24} />
              </span>
              <div>
                <h3 className={styles.cardTitle}>{t(`${key}.title` as never)}</h3>
                <p className={styles.cardText}>{t(`${key}.description` as never)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
