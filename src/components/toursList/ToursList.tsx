import { Tour } from '@/types/tours';
import Image from 'next/image';
import { useState } from 'react';
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
      <div className={styles.tourSection}>
        <Image
          src={selectedTour.imageUrl}
          style={{ objectFit: "cover" }}
          fill
          alt={selectedTour.title}
        />
        <div className={styles.selectedTour}>
          <span className={styles.title}>{selectedTour.title}</span>
          <span className={styles.price}>{selectedTour.price}$ / h</span>
          <button className={styles.button}>View info</button>
        </div>
      </div>
      <div className={styles.tours}>
        tours
      </div>
    </div>
  )
}