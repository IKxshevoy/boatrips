import React from "react";
import styles from "./WavyButton2.module.scss";

const WavyButton = () => {
  return (
    <button className={styles.btn}>
      <div className={styles.text}>HOVER ME!</div>
      <div className={styles.wave}></div>
    </button>
  );
};

export default WavyButton;
