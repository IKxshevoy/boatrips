import React from "react";
import styles from "./destinationCards.module.scss";
import DestinationText from "./destinationText/DestinationText";
import DestinationCard from "./destinationCard/DestinationCard";
import { useTranslations } from "next-intl";

const destinations_images = [
  {
    imageUrl: "/catamaran/14.webp",
    price: "1200€",
    href: "/catamaran-cruise",
    id: 0,
  },
  {
    imageUrl: "/1.webp",
    price: "20€",
    href: "/ponta-da-piedade-caves-cruise",
    id: 1,
  },
  {
    imageUrl: "/2.webp",
    price: "30€",
    href: "/ponta-da-piedade-2-hours-cruise",
    id: 2,
  },
  {
    imageUrl: "/3.webp",
    price: "40€",
    href: "/benagil-caves-speed-boat-tour",
    id: 3,
  },
  {
    imageUrl: "/yacht/sunrise/1.webp",
    price: "150€",
    href: "/yacht-cruise",
    id: 4,
  },
  {
    imageUrl: "/sunset/2.webp",
    price: "40€",
    href: "/sunset-cruise",
    id: 5,
  },
];

const keys = [
  "catamaran_cruise",
  "ponta_da_piedade",
  "coastline_tour",
  "benagil_cave",
  "yacht_cruise",
  "sunset_cruise",
] as const;

const DestinationCards = () => {
  const t = useTranslations("experiences");
  const destinations = keys.map((key, index) => ({
    title: t(key),
    price: destinations_images[index].price,
    imageUrl: destinations_images[index].imageUrl,
    id: destinations_images[index].id,
    href: destinations_images[index].href,
  }));

  const [startIndex, setStartIndex] = React.useState(0);

  const visibleCards = [];
  for (let i = 0; i < 4; i++) {
    visibleCards.push(destinations[(startIndex + i) % destinations.length]);
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % destinations.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <section className={styles.gallery}>
      <DestinationText />
      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrowLeft}
          onClick={handlePrev}
          aria-label="Previous"
        >
          &#8592;
        </button>

        <ul className={styles.mobileList}>
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

        <ul className={styles.desktopList}>
          {visibleCards.map(({ title, price, imageUrl, id, href }) => (
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

        <button
          className={styles.arrowRight}
          onClick={handleNext}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default DestinationCards;
