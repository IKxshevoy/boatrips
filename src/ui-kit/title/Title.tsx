import styles from "./title.module.scss";
import { FC } from "react";

export interface ITitle {
  title: string;
  bgPicture?: string;
  fontSize?: string;
}

export const Title: FC<ITitle> = ({ title, bgPicture, fontSize }) => {
  return (
    <h2
      className={styles.title}
      style={{
        backgroundImage: `url(${bgPicture || "bg_title.webp"})`,
        fontSize: fontSize || undefined,
      }}
    >
      {title}
    </h2>
  );
};
