import React from "react";
import styles from "./button.module.scss";

interface ButtonI {
  text: string;
  onClick?: () => void; // add optional onClick prop
}

const Button: React.FC<ButtonI> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>{text}</span>
      <div className={styles.wave}></div>
    </button>
  );
};

export default Button;
