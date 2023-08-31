import {
  FC,
  ReactNode
} from 'react';
import Fade from 'react-reveal/Fade';
import styles from '@/components/aboutUs/aboutUs.module.scss';

interface IAboutUsSection {
  title: string,
  subtitle: string,
  reverse: boolean,
  children: ReactNode
}

export const AboutUsSection: FC<IAboutUsSection> = ({title, subtitle, reverse, children }) => {
  return <div className={`${styles.about__container} ${reverse && styles.about__container__reverse}`}>
    <Fade>
      <div className={styles.about__data}>
        <h2 className={`${styles.about__title}`}>
          {title}
        </h2>
        <p className={styles.about__description}>
          {subtitle}
        </p>
      </div>
    </Fade>
    <Fade>
      <div className={styles.about__img}>
        <div className={styles.about__imgOverlay}>
          {children }
        </div>
      </div>
    </Fade>
  </div>
}