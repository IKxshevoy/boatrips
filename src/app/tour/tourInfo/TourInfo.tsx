import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileShield,
  faAnchorCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faBell } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles.module.scss";

const TourInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__block}>
        <div className={styles.info__title}>
          <FontAwesomeIcon icon={faBell} shake />
          <h3>Reminders</h3>
        </div>
        <ul className={styles.infoList}>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              This experience does not include food and drinks so feel free to
              bring your own;
            </span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              We recommend bringing sunscreen, swimming gear, a hat and a towel;
            </span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              Please check-in 20 minutes before the start of the experience;
            </span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              This experience does not include food and drinks so feel free to
              bring your own;
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.info__block}>
        <div className={styles.info__title}>
          <FontAwesomeIcon icon={faFileShield} />
          <h3>Perks</h3>
        </div>
        <ul className={styles.infoList}>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              A safety briefing by a multilingual guide, insurance and
              life-jackets are included;
            </span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              A local captain will give you onboard commentary about the sights;
            </span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>See the amazing beaches surrounding Lagos</span>
          </li>
        </ul>
      </div>
      <div className={styles.info__block}>
        <div className={styles.info__title}>
          <FontAwesomeIcon icon={faAnchorCircleExclamation} />
          <h3>IMPORTANT INFORMATION</h3>
        </div>
        <ul className={styles.infoList}>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              For cancellations of customers with more than 24 hours before
              departure, we refund the amount in full.
            </span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              Every journey will be different and a true adventure depending on
              the tides and sea conditions.
            </span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              We advise our customers to bring their hat or cap, sunglasses and
              sunscreen.
            </span>
          </li>
          <li className={styles.infoList__item}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>
              Boatrips is not responsible for lost or damaged personal items on
              board.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TourInfo;
