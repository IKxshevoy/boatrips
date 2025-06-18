import React, { useState } from "react";
import Image from "next/image";
import styles from "../features.module.scss";

const ImageBanner: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`${styles.featuresBanner} ${
        !isPlaying ? styles.hasBgImage : ""
      }`}
      style={{
        backgroundImage: !isPlaying ? `url('/classic/19.webp')` : "none",
        position: "relative",
      }}
    >
      {!isPlaying ? (
        <button
          className={styles.playBtn}
          aria-label="play video: Ponta da Piedade"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src="/play.svg"
            width={60}
            height={60}
            loading="lazy"
            alt="play icon"
          />
        </button>
      ) : (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <iframe
            src="https://www.youtube.com/embed/NBvS3qXCZpA?si=RaeMbjTh-yvc6LxY&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ImageBanner;
