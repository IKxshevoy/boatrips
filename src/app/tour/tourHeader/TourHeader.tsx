import React from "react";
import styles from "../styles.module.scss";

const TourHeader = () => {
  return (
    <div className={styles.tourHeader}>
      <div className={styles.content}>
        <h2>Ponta de Piedade</h2>
        <p className={styles.discount}>
          <span className={styles.orangeWrapper}>10% discount</span> - Special
          offer use promo code{" "}
          <span className={styles.orangeWrapper}>TRIP2023</span>
        </p>
      </div>
      <svg className={styles.wave} viewBox="0 0 1440 390">
        <path
          d="M 0,400 C 0,400 0,266 0,266 C 41.153638742763476,263.498294958894 82.30727748552695,260.99658991778796 132,252 C 181.69272251447305,243.00341008221204 239.92452880065565,227.51193528774218 297,235 C 354.07547119934435,242.48806471225782 409.9946073118507,272.9556689312433 454,281 C 498.0053926881493,289.0443310687567 530.0970419519416,274.66538898728487 569,258 C 607.9029580480584,241.33461101271513 653.6172248803828,222.3827751196172 706,231 C 758.3827751196172,239.6172248803828 817.4340585265272,275.80351053424624 870,292 C 922.5659414734728,308.19648946575376 968.6465410135081,304.4031827433979 1015,280 C 1061.353458986492,255.5968172566021 1107.97977741944,210.58375849216208 1152,219 C 1196.02022258056,227.41624150783792 1237.4343493087313,289.2617832879537 1285,306 C 1332.5656506912687,322.7382167120463 1386.2828253456344,294.36910835602316 1440,266 C 1440,266 1440,400 1440,400 Z"
          fill="#fff"
        ></path>
      </svg>
    </div>
  );
};

export default TourHeader;
