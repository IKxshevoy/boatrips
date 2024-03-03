import React from 'react';
import Image from "next/image";
import styles from "../features.module.scss";

interface ImageBannerProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ImageBanner: React.FC<ImageBannerProps> = ({setModalOpen}) => {
  return (
    <div
      className={`${styles.featuresBanner} ${styles.hasBgImage} ${styles.hasAfter}`}
      style={{ backgroundImage: `url('/slide1.jpg')` }}
    >
      <button
        className={styles.playBtn}
        aria-label="play video: Ponta da Piedade"
        onClick={() => setModalOpen(true)}
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
