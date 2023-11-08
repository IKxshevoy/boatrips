import React from "react";
import styles from "../../styles.module.scss";

const Video = () => {
  return (
    <iframe
      className={styles.video}
      src="https://www.youtube.com/embed/IjuzEQ623Bs?si=SJ77xBafkJ8QY828"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default Video;
