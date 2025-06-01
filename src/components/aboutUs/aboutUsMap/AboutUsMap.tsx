import { Title } from "@/ui-kit/title/Title";
import styles from "@/components/aboutUs/aboutUs.module.scss";
import { useTranslations } from "next-intl";

export const AboutUsMap = () => {
  const t = useTranslations("about_us");
  return (
    <div
      className={`${styles.about__container} ${styles.about__container__directionColumnMap}`}
    >
      <div className={styles.about__data}>
        <Title title={t("how_to_find_us")} />
        <p
          className={`${styles.about__description} ${styles.about__MapDescription}`}
        >
          {t("address_beginning")}
          <span className={styles.orangeWrapper}> {t("boatrips")} </span>{" "}
          {t("address_finish")}
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.8740420200984!2d-8.674127499999999!3d37.1081157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b317c8dca2f53%3A0xcdb8b3e009b5324e!2sBoatrips-Boat%20Trips%20and%20Tours!5e0!3m2!1sen!2sua!4v1693492808564!5m2!1sen!2sua"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
