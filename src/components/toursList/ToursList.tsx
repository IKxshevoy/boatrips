import { Tour } from '@/types/tours';
import React, { useState } from 'react';
import styles from './toursList.module.scss';

const tours = [
  {
    title: "Ponta de Piedade",
    imageUrl: "/1.jpg",
    id: 0,
    price: 40
  },
  {
    title: "Coastline tour",
    imageUrl: "/4.jpg",
    id: 1,
    price: 80
  },
  {
    title: "Benagil cave",
    imageUrl: "/3.jpg",
    id: 2,
    price: 20
  },
  {
    title: "Sunset cruise",
    imageUrl: "/slide2.jpg",
    id: 3,
    price: 40
  },
  {
    title: "Benagil cave",
    imageUrl: "/3.jpg",
    id: 4,
    price: 70
  },
  {
    title: "Sunset cruise",
    imageUrl: "/slide2.jpg",
    id: 5,
    price: 30
  }
];

export const ToursList = () => {
  const [selectedTour, setSelectedTour] = useState<Tour>(tours[0]);

  return (
    <div className={styles.toursList}>
      <div
        className={`${styles.tourSection} ${styles.hasBgImage} ${styles.hasAfter}`}
        style={{ backgroundImage: `url('${selectedTour.imageUrl}')` }}
        key={selectedTour.id}
        onClick={() => setSelectedTour(selectedTour)}
      >
        <div className={styles.selectedTour}>
          <span className={styles.title}>{selectedTour.title}</span>
          <span className={styles.price}>{selectedTour.price}$ / h</span>
          <div className={styles.buttonWrapper}><button className={styles.button}>View info</button></div>
        </div>
      </div>
      <div className={styles.tours}>
        {tours.map((tour) => (
          <div
            className={`${styles.galleryCard} ${styles.hasBgImage}`}
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
  )
}