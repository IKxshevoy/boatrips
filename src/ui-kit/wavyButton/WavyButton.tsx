import React from "react";
import styles from "./wavyButton.module.scss";

interface WavyButtonI {
  text: string;
}

const WavyButton: React.FC<WavyButtonI> = ({ text }) => {
  return (
    <button className={styles.button}>
      <span>{text}</span>
      <div className={styles.wave}></div>
    </button>
  );
};

export default WavyButton;
