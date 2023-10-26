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
    title: "Ponta de Piedade",
    imageUrl: "/1.jpg",
    id: 0,
    name: "Adam lorem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Coastline tour",
    imageUrl: "/4.jpg",
    id: 1,
    name: "Joe lorem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Benagil cave",
    imageUrl: "/3.jpg",
    id: 2,
    name: "Marsel lorem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Sunset cruise",
    imageUrl: "/slide2.jpg",
    id: 3,
    name: "Viktor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Benagil cave",
    imageUrl: "/3.jpg",
    id: 4,
    name: "Lyi and Aria",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
  {
    title: "Sunset cruise",
    imageUrl: "/slide2.jpg",
    id: 5,
    name: "Lorem gorte",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus et augue id efficitur. Quisque nec ullamcorper nisl. Curabitur auctor eros id mi bibendum ultricies. Nunc ornare eros nulla, ac consequat mauris lacinia sed. Ut sit amet arcu ex. Duis vitae leo nec lacus aliquam iaculis vitae sed sem. Suspendisse eget tortor sit amet purus mollis vulputate ac venenatis elit. Fusce suscipit, libero nec efficitur mollis, eros lorem iaculis arcu, vel tempus leo tellus blandit ligula.",
  },
];

const Reviews = () => {
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
    <section className={styles.reviewsList}>
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
    </section>
  );
};

export default Reviews;
