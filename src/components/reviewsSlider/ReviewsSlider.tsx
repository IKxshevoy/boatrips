"use client";

import React, { useState } from "react";
import styles from "./reviews.module.scss";
import { useTranslations } from "next-intl";

export interface Review {
  id: number;
  title: string;
  imageUrl: string;
  name: string;
  review: string;
}

type ReviewType = "classic" | "benagil" | "coastline" | "sunset";

interface ReviewsSliderProps {
  type: ReviewType;
}

const reviewsData: Record<ReviewType, Review[]> = {
  classic: [
    {
      title: "September 3, 2023",
      imageUrl: "/classic/5.webp",
      id: 0,
      name: "Kelly Calaça",
      review: "",
    },
    {
      title: "July 16, 2023",
      imageUrl: "/classic/19.webp",
      id: 1,
      name: "Neil B",
      review: "",
    },
    {
      title: "June 29, 2023",
      imageUrl: "/classic/11.webp",
      id: 2,
      name: "Fiona A",
      review: "",
    },
    {
      title: "June 29, 2023",
      imageUrl: "/classic/4.webp",
      id: 3,
      name: "Mina M",
      review: "",
    },
    {
      title: "June 19, 2023",
      imageUrl: "/classic/16.webp",
      id: 4,
      name: "Monika Z",
      review: "",
    },
  ],
  coastline: [
    {
      title: "August 16, 2021",
      imageUrl: "/coastline/1.webp",
      id: 0,
      name: "Cary",
      review: "",
    },
    {
      title: "July 6, 2020",
      imageUrl: "/coastline/2.webp",
      id: 1,
      name: "Diana",
      review: "",
    },
    {
      title: "September 2, 2019",
      imageUrl: "/coastline/10.webp",
      id: 2,
      name: "Subhodeep",
      review: "",
    },
    {
      title: "August 4, 2023",
      imageUrl: "/coastline/8.webp",
      id: 3,
      name: "Cathy",
      review: "",
    },
    {
      title: "June 19, 2023",
      imageUrl: "/coastline/6.webp",
      id: 4,
      name: "Tom",
      review: "",
    },
  ],
  benagil: [
    {
      title: "September 5, 2024",
      imageUrl: "/benagil/1.webp",
      id: 0,
      name: "Zara",
      review: "",
    },
    {
      title: "July 6, 2020",
      imageUrl: "/benagil/3.webp",
      id: 1,
      name: "Sebastian",
      review: "",
    },
    {
      title: "April 27, 2024",
      imageUrl: "/benagil/6.webp",
      id: 2,
      name: "Angie",
      review: "",
    },
    {
      title: "July 14, 2023",
      imageUrl: "/benagil/8.webp",
      id: 3,
      name: "Peter",
      review: "",
    },
    {
      title: "July 10, 2023",
      imageUrl: "/benagil/5.webp",
      id: 4,
      name: "Helen",
      review: "",
    },
  ],
  sunset: [
    {
      title: "September 4, 2024",
      imageUrl: "/sunset/11.webp",
      id: 0,
      name: "James",
      review: "",
    },
    {
      title: "September 21, 2024 ",
      imageUrl: "/sunset/2.webp",
      id: 1,
      name: "Shelbi",
      review: "",
    },
    {
      title: "July 30, 2024",
      imageUrl: "/sunset/8.webp",
      id: 2,
      name: "Fawn",
      review: "",
    },
    {
      title: "August 29, 2023",
      imageUrl: "/sunset/9.webp",
      id: 3,
      name: "Sandra",
      review: "",
    },
    {
      title: "July 14, 2019",
      imageUrl: "/sunset/10.webp",
      id: 4,
      name: "Trina",
      review: "",
    },
  ],
};

const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ type }) => {
  const t = useTranslations("reviews-slider");

  const reviews = reviewsData[type].map((rev) => ({
    ...rev,
    review: t(`${type}.${rev.id}`),
  }));

  const [activeReviewId, setActiveReviewId] = useState(reviews[0].id);
  const [activeReview, setActiveReview] = useState(reviews[0].id);

  const handleReviewClick = (rev: Review) => {
    if (rev.id === activeReviewId) return;
    setActiveReviewId(rev.id);
    setActiveReview((prevActiveId) => (prevActiveId === rev.id ? -1 : rev.id));
  };

  return (
    <div className={styles.reviewsList}>
      <div className={styles.revWrapper}>
        {reviews.map((rev) => (
          <div
            className={`${styles.reviewCard} ${
              rev.id === activeReviewId ? styles.active : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${rev.imageUrl}')`,
              backgroundSize: "cover",
            }}
            key={rev.id}
            onClick={() => handleReviewClick(rev)}
          >
            <div className={styles.name}>
              <p>{rev.name}</p>
            </div>
            {rev.id === activeReview && activeReviewId !== -1 && (
              <>
                <p className={styles.review}>{rev.review}</p>
                <div>
                  <p className={styles.place}>{rev.title}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlider;
