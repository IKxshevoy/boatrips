import React from "react";
import styles from "./styles.module.scss";
import { Title } from "@/ui-kit/title/Title";

const Gallery = () => {
  return (
    <>
      <div className={styles.container} id="gallery">
        <div className={styles.title}>
          <Title title="Image Gallery" />
        </div>
        <h2 className={styles.headingText}>
          Made by <span>Our Clients</span>
        </h2>
        <ul className={styles.imageGallery}>
          <li>
            <img src="/gallery/4.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Ponta da Piedade</span>
            </div>
          </li>
          <li>
            <img src="/gallery/5.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Ponta da Piedade</span>
            </div>
          </li>
          <li>
            <img src="/gallery/6.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Ponta da Piedade</span>
            </div>
          </li>
          <li>
            <img src="/gallery/7.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src="/gallery/5.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Ponta da Piedade</span>
            </div>
          </li>
          <li>
            <img src="/gallery/6.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Ponta da Piedade</span>
            </div>
          </li>
          <li>
            <img src="/gallery/7.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src="/gallery/19.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Image title</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Gallery;
