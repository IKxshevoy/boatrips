import React from "react";
import styles from "./destinationCards.module.scss";
import DestinationText from "./destinationText/DestinationText";
import DestinationCard from "./destinationCard/DestinationCard";
import { useTranslations } from "next-intl";

const destinations_images = [
  {
    imageUrl: "/1.jpg",
    href: "/ponta-da-piedade-caves-cruise",
    id: 0,
  },
  {
    imageUrl: "/4.jpg",
    href: "/ponta-da-piedade-2-hours-cruise",
    id: 1,
  },
  {
    imageUrl: "/3.jpg",
    href: "/benagil-caves-speed-boat-tour",
    id: 2,
  },
  {
    imageUrl: "/slide2.jpg",
    href: "/sunset-cruise",
    id: 3,
  },
];

const keys = [
  "ponta_da_piedade",
  "coastline_tour",
  "benagil_cave",
  "sunset_cruise",
] as const;

const DestinationCards = () => {
  const t = useTranslations("expiriences");
  const destinations = keys.map((key, index) => ({
    title: t(key),
    imageUrl: destinations_images[index].imageUrl,
    id: destinations_images[index].id,
    href: destinations_images[index].href,
  }));

  return (
    <section className={styles.gallery}>
      <DestinationText />
      <ul className={styles.galleryList}>
        {destinations.map(({ title, imageUrl, id, href }) => (
          <li key={id}>
            <DestinationCard title={title} imageUrl={imageUrl} href={href} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DestinationCards;
