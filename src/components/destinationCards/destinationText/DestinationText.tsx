import React from "react";
import styles from "./destinationText.module.scss";
import { Title } from "@/ui-kit/title/Title";
import Link from "next/link";

const DestinationText = () => {
  return (
    <div className={styles.greeting}>
      <div className={styles.description}>
        <div className={styles.title}>
          <Title title="OUR EXPIRIENCES" />
        </div>
        <p className={styles.text}>
          "Welcome aboard! Dive into a world of endless possibilities as you
          explore our extensive array of captivating boat tours below, promising
          unforgettable experiences along the stunning coast of Lagos."
        </p>
        <Link href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
          View All Destinations
        </Link>
      </div>
      <blockquote className={styles.blockquote}>
        <p>
          "At Boatrips, we're not just in the business of boat tours. We're in
          the business of creating unforgettable memories. We put our heart and
          soul into every voyage, ensuring that each one is a unique and
          thrilling adventure.
          <br />
          <br />
          We meticulously plan routes, curate exciting activities, and pay
          attention to every detail to make your experience exceptional. Our
          goal is to enchant every person who joins us on board with the beauty
          of the sea. We believe that every journey with us is a testament to
          the magic of exploration, a chance to create cherished memories.
          <br />
          <br />
          From sunrise to sunset, under clear blue skies or a starry night,
          every tour we offer is a fresh chapter in the book of your adventures.
          We invite you to set sail with us and discover the hidden gems of the
          stunning coast of Lagos. With us, every tour is a new story waiting to
          be written."
        </p>
        <cite className={styles.cite}>
          <span className={styles.line}></span> Denys Guzeyev, CEO of Boatrips
        </cite>
      </blockquote>
    </div>
  );
};

export default DestinationText;
