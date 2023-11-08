"use client";
import DestinationCard from "@/components/destinationCards/destinationCard/DestinationCard";
import { destinations } from "@/components/destinationCards/DestinationCards";
import React, { useState } from "react";
import styles from "./page.module.scss";
export interface Tour {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
}

const tours = [
  {
    title: "Ponta de Piedade",
    imageUrl: "/1.jpg",
    id: 0,
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Coastline tour",
    imageUrl: "/4.jpg",
    id: 1,
    price: 80,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Benagil cave",
    imageUrl: "/3.jpg",
    id: 2,
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Sunset cruise",
    imageUrl: "/slide2.jpg",
    id: 3,
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Benagil cave",
    imageUrl: "/3.jpg",
    id: 4,
    price: 70,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Sunset cruise",
    imageUrl: "/slide2.jpg",
    id: 5,
    price: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
];

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<Tour>(tours[0]);
  return (
    <>
      <section className={styles.gallery}>
        <ul className={styles.galleryList}>
          {destinations.map(({ title, imageUrl, id }) => (
            <li key={id}>
              <DestinationCard title={title} imageUrl={imageUrl} />
            </li>
          ))}
        </ul>
      </section>
      <div
        className={styles.toursList}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${selectedTour.imageUrl}')`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={styles.tourSection}
          key={selectedTour.id}
          onClick={() => setSelectedTour(selectedTour)}
        >
          <div className={styles.selectedTour}>
            <span className={styles.title}>
              {selectedTour.title}{" "}
              <span className={styles.orangeWrapper}>.</span>
            </span>
            <span className={styles.price}>
              {selectedTour.price}${" "}
              <span className={styles.orangeWrapper}>/ </span>h
            </span>
            <div className={styles.description}>{selectedTour.description}</div>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>View info</button>
            </div>
          </div>
        </div>
        <div className={styles.tours}>
          {tours.map((tour) => (
            <div
              className={`${styles.galleryCard} ${styles.hasBgImage} ${styles.hasAfter}`}
              style={{ backgroundImage: `url('${tour.imageUrl}')` }}
              key={tour.id}
              onClick={() => setSelectedTour(tour)}
            >
              <div className={styles.cardContent}>
                <h3 className={`h3 ${styles.cardTitle}`}>{tour.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tours;
