import React from "react";
import styles from "./tourCardsList.module.scss";
import TourCard, { ITourCard } from "../tourCard/TourCard";

const cards: ITourCard[] = [
  {
    imgSrc: "/slide1.jpg",
    alt: "Ponta de Piedade",
    price: 20,
    title: "Explore the Ponta de Piedade caves",
    address: "Algarve, Lagos",
    rating: 4.7,
    reviews: 1400,
  },
  {
    imgSrc: "/slide2.jpg",
    alt: "Sunset cruise",
    price: 40,
    title: "Watch the beautiful sunset",
    address: "Algarve, Lagos",
    rating: 4.6,
    reviews: 300,
  },
  {
    imgSrc: "/slide3.avif",
    alt: "Benagil",
    price: 40,
    title: "Explore the Benagil caves",
    address: "Algarve, Benagil",
    rating: 4.6,
    reviews: 400,
  },
];

const TourCardsList = () => {
  return (
    <section
      className={`${styles.section} ${styles.destinations}`}
      aria-label="destinations"
    >
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.sectionTitle}`}>
          Explore Top Destinations
        </h2>
        <ul className={styles.destinationsList}>
          {cards.map((card, index) => (
            <li key={index}>
              <TourCard
                imgSrc={card.imgSrc}
                alt={card.alt}
                price={card.price}
                title={card.title}
                address={card.address}
                rating={card.rating}
                reviews={card.reviews}
              />
            </li>
          ))}
        </ul>
        <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
          View All Destinations
        </a>
      </div>
    </section>
  );
};

export default TourCardsList;