import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className={styles.button}>
      <span>{text}</span>
      <div className={styles.wave}></div>
    </button>
  );
};

export default Button;
