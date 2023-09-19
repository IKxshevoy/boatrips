import React from "react";
import styles from "./styles.module.scss";
import { Title } from "@/ui-kit/title/Title";

const Gallery = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Title title="Image Gallery" />
        </div>
        <h2 className={styles.headingText}>
          Made by <span>Our Clients</span>
        </h2>
        <ul className={styles.imageGallery}>
          <li>
            <img src="/gallery/1.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Benagil Caves</span>
            </div>
          </li>
          <li>
            <img src="/gallery/2.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Coastline Tour</span>
            </div>
          </li>
          <li>
            <img src="/gallery/3.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Ponta de Piedade</span>
            </div>
          </li>
          <li>
            <img src="/gallery/4.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Ponta de Piedade</span>
            </div>
          </li>
          <li>
            <img src="/gallery/5.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Ponta de Piedade</span>
            </div>
          </li>
          <li>
            <img src="/gallery/6.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Ponta de Piedade</span>
            </div>
          </li>
          <li>
            <img src="/gallery/7.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src="/gallery/8.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src="/gallery/15.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src="/gallery/16.jpg" alt="" />
            <div className={styles.overlay}>
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src="/gallery/18.jpg" alt="" />
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
