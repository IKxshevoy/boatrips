"use client";
import React, { useState, useEffect } from "react";
import styles from "./reviews.module.scss";

export interface Review {
  id: number;
  title: string;
  imageUrl: string;
  name: string;
  review: string;
}

const reviews: Review[] = [
  {
    title: "September 3, 2023",
    imageUrl: "/reviews/1.jpg",
    id: 0,
    name: "Kelly Calaça",
    review:
      "The team, Pedro and Daniel were fantastic. Very friendly and with great sea expertise.It was a trip full of laughter and well being.Definitely worth every penny.To repeat in an near future.",
  },
  {
    title: "July 16, 2023",
    imageUrl: "/reviews/2.jpg",
    id: 1,
    name: "Neil B",
    review:
      "From initially meeting Renato on the marina who sold us our tickets to the trip around the Grotto with Carlos and Lewis who were great company and very knowledgable. Highly recommend this dream team!!",
  },
  {
    title: "June 29, 2023",
    imageUrl: "/reviews/3.jpg",
    id: 2,
    name: "Fiona A",
    review:
      "Great trip around the caves of Lagos. Pierre and Miguel are excellent tour guides and explain the sites and caves. They are very funny and have good banter with everyone on the boat. Highly recommend this trip.",
  },
  {
    title: "June 29, 2023",
    imageUrl: "/reviews/4.jpg",
    id: 3,
    name: "Mina M",
    review:
      "Miguel was very informative and explained very well. captain Pedro took us close to the caves and did fantastic! my friend and i happened to be the only ones on board so the experience felt very sentimental.",
  },
  {
    title: "June 19, 2023",
    imageUrl: "/reviews/5.jpg",
    id: 4,
    name: "Monika Z",
    review:
      "We had a great time. The views are awesome and the guides are funny, so it makes it all the better experience. Plus the boat is very comfortable. I can 100% recommend :)",
  },
  {
    title: "March 13, 2023",
    imageUrl: "/reviews/6.jpg",
    id: 5,
    name: "Anna P",
    review:
      "Jeorge did a great job directing our tour on windy afternoon. He was very safe, but still showed us all the formations he could. ",
  },
];

const ReviewsSlider = () => {
  const [activeReviewId, setActiveReviewId] = useState(reviews[0].id);
  const [activeReview, setActiveReview] = useState(reviews[0].id);

  const handleReviewClick = (rev: Review) => {
    if (rev.id === activeReviewId) {
      return;
    }
    setActiveReviewId(rev.id);
    setActiveReview((prevActiveId) => (prevActiveId === rev.id ? -1 : rev.id));
  };

  return (
    <div className={styles.reviewsList}>
      <div className={styles.revWrapper}>
        {reviews.map((rev: Review) => (
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
