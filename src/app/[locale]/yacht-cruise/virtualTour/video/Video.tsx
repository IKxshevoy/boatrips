import React from "react";
import styles from "../../styles.module.scss";

const Video = () => {
  return (
    <iframe
      className={styles.video}
      src="https://www.youtube.com/embed/i47_VbLFS_s?si=owwhbhgvyny_BUIY"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
