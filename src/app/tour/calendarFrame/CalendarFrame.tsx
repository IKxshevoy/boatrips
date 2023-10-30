import React from "react";
import styles from "../styles.module.scss";
import Calendar from "./calendar/Calendar";

const CalendarFrame = () => {
  return (
    <div className={styles.calendarFrame}>
      <div className={styles.calendarFrame__description}>
        <div className={styles.bookingBlock}>
          <img
            src="/aboutUs1.jpg"
            className={styles.calendarFrame__img}
            alt="Booking image"
          />
          <button className={styles.calendarFrame__button}>Book now</button>
        </div>
        <div className={styles.ages}>
          <div className={styles.ages__wrapper}>
            <span className={styles.text}>
              Adult
              <br />
              11+ years old
            </span>
            <span className={styles.price}>20€</span>
          </div>
          <div className={styles.ages__wrapper}>
            <span className={styles.text}>
              Child
              <br />
              0-10 years old
            </span>
            <span className={styles.price}>10€</span>
          </div>
        </div>
      </div>
      <Calendar />
    </div>
  );
};

export default CalendarFrame;
