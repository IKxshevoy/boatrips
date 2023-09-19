import React from "react";
import Image from "next/image";
import styles from "../features.module.scss";

const ImageBanner = () => {
  return (
    <div
      className={`${styles.featuresBanner} ${styles.hasBgImage} ${styles.hasAfter}`}
      style={{ backgroundImage: `url('/slide1.jpg')` }}
    >
      <button
        className={styles.playBtn}
        aria-label="play video: Ponta de Piedade"
      >
        <Image
          src="/play.svg"
          width={60}
          height={60}
          loading="lazy"
          alt="play icon"
        />
      </button>
    </div>
  );
};

export default ImageBanner;
