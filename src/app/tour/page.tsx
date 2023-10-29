"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileShield,
  faAnchorCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleCheck,
  faBell,
  faCreditCard,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import Script from "next/script";
import ReviewsSlider from "@/components/reviewsSlider/ReviewsSlider";

const Tour = () => {
  return (
    <>
      <section className={styles.tourSection}>
        <div className={styles.tourHeader}>
          <div className={styles.content}>
            <h2>Ponta de Piedade</h2>
            <p className={styles.discount}>
              <span className={styles.orangeWrapper}>10% discount</span> -
              Special offer use promo code{" "}
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
        <div className={styles.descriptionBlock}>
          <div className={styles.description}>
            <h2 className={styles.title}>
              Caves Of{" "}
              <span className={styles.orangeWrapper}>Ponta Da Piedade</span>{" "}
              Boat Tour - 75 Minutes
            </h2>
            <p className={styles.description__paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum dignissimos nam corrupti voluptatem, repudiandae ex
              ipsum quod. Earum rerum, voluptas harum fugiat veritatis, sunt
              consequuntur quod eligendi dicta placeat rem quisquam voluptates
              maiores fuga enim consequatur hic.
              <br />
              <br />
              Veniam, voluptatibus, veritatis corporis aliquid ducimus dolore
              nisi modi, delectus doloribus voluptate ipsam perspiciatis
              praesentium quam. Consequatur, eaque consectetur maxime voluptatum
              labore odit non ex adipisci harum nihil quidem vitae dolorem
              molestiae. Ducimus a minus, necessitatibus perferendis labore
              neque. Doloribus distinctio cum culpa dolorum excepturi eveniet
              veritatis neque vel a odio, repellat laborum, in aperiam possimus
              cupiditate nemo consequuntur?
              <br />
              <br /> Quis fugit excepturi, ducimus obcaecati libero aliquam?
              Minus architecto, repudiandae neque voluptatibus eos dolore
              numquam, itaque nam, maiores nihil quo laborum modi similique
              incidunt dignissimos reiciendis porro voluptas nesciunt tempora
              eligendi adipisci?
            </p>
            <div className={styles.description__icons}>
              <div className={styles.description__item}>
                <h4 className={styles.iconTitle}>Adult price:</h4>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faCreditCard} />
                  <span className={styles.iconPrice}>20 €</span>
                </div>
              </div>
              <div className={styles.description__item}>
                <h4 className={styles.iconTitle}>Child price:</h4>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faCreditCard} />
                  <span className={styles.iconPrice}>10 €</span>
                </div>
              </div>
              <div className={styles.description__item}>
                <h4 className={styles.iconTitle}>Time duration:</h4>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faClock} />
                  <span className={styles.iconPrice}>1H 15 M</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.calendarFrame}></div>
        </div>
        <div className={styles.virtualTour}>
          <h2 className={styles.title}>Watch a virtual tour</h2>
          <div className={styles.virtualTour__wrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/IjuzEQ623Bs?si=SJ77xBafkJ8QY828"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
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
                  <li>English</li>
                  <li>Portuguese</li>
                  <li>Spanish</li>
                  <li>French</li>
                  <li>Russian</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
                  This experience does not include food and drinks so feel free
                  to bring your own;
                </span>
              </li>
              <li className={styles.infoList__item}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>
                  We recommend bringing sunscreen, swimming gear, a hat and a
                  towel;
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
                  This experience does not include food and drinks so feel free
                  to bring your own;
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
                  A local captain will give you onboard commentary about the
                  sights;
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
                  Every journey will be different and a true adventure depending
                  on the tides and sea conditions.
                </span>
              </li>
              <li className={styles.infoList__item}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>
                  We advise our customers to bring their hat or cap, sunglasses
                  and sunscreen.
                </span>
              </li>
              <li className={styles.infoList__item}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>
                  Boatrips is not responsible for lost or damaged personal items
                  on board.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.reviewsBlock}>
          <h2 className={styles.title}>Reviews from our Clients</h2>
          <ReviewsSlider />
        </div>
        <div className={styles.location}>
          <h2 className={styles.title}>Meeting point</h2>
          <p className={styles.location__description}>
            In case you can't find the place, please contact us +351969184712
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.8740420200984!2d-8.674127499999999!3d37.1081157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b317c8dca2f53%3A0xcdb8b3e009b5324e!2sBoatrips-Boat%20Trips%20and%20Tours!5e0!3m2!1sru!2sua!4v1693492808564!5m2!1sru!2sua"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.promotion}>
          <h2 className={styles.promotion__title}>
            Want to go on a private tour ?
          </h2>
          <button className={styles.promotion__button}>Contact us</button>
        </div>
      </section>
    </>
  );
};

export default Tour;
