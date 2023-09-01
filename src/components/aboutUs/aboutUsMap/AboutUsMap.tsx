import Fade from 'react-reveal/Fade';
import styles from '@/components/aboutUs/aboutUs.module.scss';

export const AboutUsMap = () => <div className={`${styles.about__container} ${styles.about__container__directionColumnMap}`}>
  <Fade top>
    <div className={styles.about__data}>
      <h2>
        How to find us ?
      </h2>
      <p className={styles.about__description}>
        You can find the most beautiful and pleasant places at the best
        prices with special discounts, you choose the place we will guide you all the way to wait, get your
        place now.
      </p>
    </div>
  </Fade>
  <Fade bottom>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.8740420200984!2d-8.674127499999999!3d37.1081157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b317c8dca2f53%3A0xcdb8b3e009b5324e!2sBoatrips-Boat%20Trips%20and%20Tours!5e0!3m2!1sru!2sua!4v1693492808564!5m2!1sru!2sua"
      width="80%" height="450" style={{border:0}} allowFullScreen loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  </Fade>
</div>