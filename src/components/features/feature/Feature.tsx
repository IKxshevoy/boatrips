import React from "react";
import styles from "../features.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IFeature {
  title: string;
  description: string;
  icon: IconDefinition;
}

const Feature = ({ title, description, icon }: IFeature) => {
  return (
    <div className={styles.featuresListCard}>
      <div className={styles.cardIcon}>
        <FontAwesomeIcon
          icon={icon}
          style={{ width: "45px", height: "45px" }}
        />
      </div>
      <div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
