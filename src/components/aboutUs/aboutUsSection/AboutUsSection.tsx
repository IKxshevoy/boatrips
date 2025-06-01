import { Title } from "@/ui-kit/title/Title";
import { FC, ReactNode } from "react";
import styles from "@/components/aboutUs/aboutUs.module.scss";

interface IAboutUsSection {
  title: string;
  subtitle: ReactNode;
  reverse: boolean;
  children?: ReactNode;
  isVideo?: boolean;
  videoUrl?: string; // Add YouTube video URL
}

export const AboutUsSection: FC<IAboutUsSection> = ({
  title,
  subtitle,
  reverse,
  children,
  isVideo = false,
  videoUrl,
}) => {
  return (
    <div
      className={`${styles.about__container} ${
        reverse && styles.about__container__reverse
      }`}
    >
      <div className={styles.about__data}>
        <Title title={title} />
        <p className={styles.about__description}>{subtitle}</p>
      </div>
      <div className={styles.about__img}>
        <div className={styles.about__imgOverlay}>
          {isVideo ? (
            <iframe
              width="100%"
              height="397px"
              src="https://www.youtube.com/embed/DE5Ii0DnYo8?autoplay=1&mute=1&loop=1&playlist=DE5Ii0DnYo8"
              title="YouTube video player"
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};
