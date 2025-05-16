// Contact.tsx
"use client";
import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import ContactForm from "./contactForm/ContactForm";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.formWrapper}>
            <div className={styles.contactHeading}>
              <h1>
                {t("work_together")} <span>.</span>
              </h1>
              <p className={styles.text}>
                {t("reach_us")}{" "}
                <a href="mailto:boatripseu@gmail.com">boatripseu@gmail.com</a>
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <img src="/slide3.avif" className={styles.img} alt="Form image" />
            <div className={styles.waveWrapper}>
              <svg
                className={styles.wave}
                viewBox="0 0 783 1536"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id={styles.wave}
                  d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                />
              </svg>
            </div>
            <svg
              className={styles.dashedWave}
              viewBox="0 0 345 877"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id={styles.dashedWave}
                d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
