import React from "react";
import styles from "./button.module.scss";

interface AlternativeButtonProps {
  text: string;
  url?: string;
}

const AlternativeButton: React.FC<AlternativeButtonProps> = ({ text, url }) => {
  return (
    <a
      href={url || "#"}
      className={styles.button}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
    >
      <span>{text}</span>
      <div className={styles.wave}></div>
    </a>
  );
};

export default AlternativeButton;
