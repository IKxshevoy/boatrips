import React from "react";
import styles from "../styles.module.scss";
import Calendar from "./calendar/Calendar";
import { useTranslations } from "next-intl";

const CalendarFrame = () => {
  const t = useTranslations("ponta-da-piedade-caves-cruise");
  return (
    <>
      <h2 className={styles.calendarFrame__title}>{t("reserve")}:</h2>
      <div className={styles.calendarFrame}>
        <div className={styles.calendarFrame__description}>
          <div className={styles.bookingBlock}>
            <img
              src="/classic/1.webp"
              className={styles.calendarFrame__img}
              alt="Booking image"
            />
            <a
              href="https://fareharbor.com/embeds/book/boatrips/items/292229/?full-items=yes&flow=536599"
              className={styles.calendarFrame__button}
            >
              {t("book_online")}
            </a>
          </div>
          <div className={styles.ages}>
            <div className={styles.ages__wrapper}>
              <span className={styles.text}>
                {t("adult")}
                <br />
                {t("adult_age")}
              </span>
              <span className={styles.price}>20€</span>
            </div>
            <div className={styles.ages__wrapper}>
              <span className={styles.text}>
                {t("child")}
                <br />
                {t("child_age")}
              </span>
              <span className={styles.price}>10€</span>
            </div>
          </div>
        </div>
        <Calendar />
      </div>
    </>
  );
};

export default CalendarFrame;
