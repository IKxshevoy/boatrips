import React from "react";
import styles from "../styles.module.scss";
import Video from "./video/Video";

const languages = ["English", "Portuguese", "Spanish", "French", "Russian"];

const VirtualTour = () => {
  return (
    <div className={styles.virtualTour}>
      <h2 className={styles.title}>Watch a virtual tour</h2>
      <div className={styles.virtualTour__wrapper}>
        <Video />
        <div className={styles.virtualTour__text}>
          <div className={styles.highlights}>
            <h3>HIGHLIGHTS:</h3>
            <ul>
              <li>Enjoy the beautiful scenery along the way</li>
              <li>
                See the amazing beaches surrounding Lagos and discover the
                historic and cultural part of the Algarve
              </li>
              <li>Learn from your local, expert skippers</li>
              <li>Marvel at the spectacular rock formations and caves</li>
            </ul>
          </div>
          <div className={styles.languages}>
            <h3>SPOKEN LANGUAGES:</h3>
            <ul>
              {languages.map((language) => (
                <li>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
