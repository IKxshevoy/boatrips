import { Title } from "@/ui-kit/title/Title";
import { FC, ReactNode } from "react";
import styles from "@/components/aboutUs/aboutUs.module.scss";

interface IAboutUsSection {
  title: string;
  subtitle: ReactNode;
  reverse: boolean;
  children: ReactNode;
}

export const AboutUsSection: FC<IAboutUsSection> = ({
  title,
  subtitle,
  reverse,
  children,
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
        <div className={styles.about__imgOverlay}>{children}</div>
      </div>
    </div>
  );
};
