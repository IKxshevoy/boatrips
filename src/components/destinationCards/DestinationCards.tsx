import React from "react";
import styles from "./destinationCards.module.scss";
import DestinationText from "./destinationText/DestinationText";
import DestinationCard from "./destinationCard/DestinationCard";
import { useTranslations } from "next-intl";

const destinations_images = [
  {
    imageUrl: "/1.jpg",
    price: "20€",
    href: "/ponta-da-piedade-caves-cruise",
    id: 0,
  },
  {
    imageUrl: "/4.jpg",
    price: "30€",
    href: "/ponta-da-piedade-2-hours-cruise",
    id: 1,
  },
  {
    imageUrl: "/3.jpg",
    price: "40€",
    href: "/benagil-caves-speed-boat-tour",
    id: 2,
  },
  {
    imageUrl: "/yacht/sunrise/1.webp",
    price: "150€",
    href: "/yacht-cruise",
    id: 3,
  },
];

const keys = [
  "ponta_da_piedade",
  "coastline_tour",
  "benagil_cave",
  "yacht_cruise",
] as const;

const DestinationCards = () => {
  const t = useTranslations("expiriences");
  const destinations = keys.map((key, index) => ({
    title: t(key),
    price: destinations_images[index].price,
    imageUrl: destinations_images[index].imageUrl,
    id: destinations_images[index].id,
    href: destinations_images[index].href,
  }));

  return (
    <section className={styles.gallery}>
      <DestinationText />
      <ul className={styles.galleryList}>
        {destinations.map(({ title, price, imageUrl, id, href }) => (
          <li key={id}>
            <DestinationCard
              title={title}
              imageUrl={imageUrl}
              href={href}
              price={price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DestinationCards;
