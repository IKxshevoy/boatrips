import React from "react";
import styles from "./destinationCards.module.scss";
import DestinationText from "./destinationText/DestinationText";
import DestinationCard from "./destinationCard/DestinationCard";

export const destinations = [
  {
    title: "Ponta de Piedade",
    imageUrl: "/1.jpg",
    id: 0,
  },
  {
    title: "Coastline tour",
    imageUrl: "/4.jpg",
    id: 1,
  },
  {
    title: "Benagil cave",
    imageUrl: "/3.jpg",
    id: 2,
  },
  {
    title: "Sunset cruise",
    imageUrl: "/slide2.jpg",
    id: 3,
  },
];

const DestinationCards = () => {
  return (
    <section className={styles.gallery}>
      <DestinationText />
      <ul className={styles.galleryList}>
        {destinations.map(({ title, imageUrl, id }) => (
          <li key={id}>
            <DestinationCard title={title} imageUrl={imageUrl} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DestinationCards;
