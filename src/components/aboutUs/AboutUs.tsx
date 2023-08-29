import Image from 'next/image';
import styles from './aboutUs.module.scss'
import Fade from 'react-reveal/Fade';

export const AboutUs = () => {
  return(
    <section className={`${styles.about} ${styles.section}`} id="about">
      <div className={`${styles.about__container} ${styles.container} ${styles.grid}`}>
          <Fade left>
              <div className={styles.about__data}>
                  <h2 className={`${styles.section__title} ${styles.about__title}`}>About BOATRIPS</h2>
                  <p className={styles.about__description}>You can find the most beautiful and pleasant places at the best
                      prices with special discounts, you choose the place we will guide you all the way to wait, get your
                      place now.
                  </p>
              </div>
          </Fade>
          <div className={styles.about__img}>
              <div className={styles.about__imgOverlay}>
                  <Image src="/employee.jpg" alt="" className={styles.about__imgOne} width={200} height={300} layout="responsive"/>
              </div>

              <div className={styles.about__imgOverlay}>
                  <Image src="/employee.jpg" alt="" className={styles.about__imgTwo} width={300} height={400} layout="responsive"/>
              </div>
          </div>
      </div>
    </section>
  )
}