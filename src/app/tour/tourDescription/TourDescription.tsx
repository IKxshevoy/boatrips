import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles.module.scss";

const descriptionItems = [
  {
    id: 1,
    title: "Adult price:",
    icon: faCreditCard,
    value: "20 €",
  },
  {
    id: 2,
    title: "Child price:",
    icon: faCreditCard,
    value: "10 €",
  },
  {
    id: 3,
    title: "Time duration:",
    icon: faClock,
    value: "1H 15 M",
  },
];

const TourDescription = () => {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>
        Caves Of <span className={styles.orangeWrapper}>Ponta Da Piedade</span>{" "}
        Boat Tour <br />- 75 Minutes
      </h2>
      <p className={styles.description__paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        dignissimos nam corrupti voluptatem, repudiandae ex ipsum quod. Earum
        rerum, voluptas harum fugiat veritatis, sunt consequuntur quod eligendi
        dicta placeat rem quisquam voluptates maiores fuga enim consequatur hic.
        <br />
        <br />
        Veniam, voluptatibus, veritatis corporis aliquid ducimus dolore nisi
        modi, delectus doloribus voluptate ipsam perspiciatis praesentium quam.
        Consequatur, eaque consectetur maxime voluptatum labore odit non ex
        adipisci harum nihil quidem vitae dolorem molestiae. Ducimus a minus,
        necessitatibus perferendis labore neque. Doloribus distinctio cum culpa
        dolorum excepturi eveniet veritatis neque vel a odio, repellat laborum,
        in aperiam possimus cupiditate nemo consequuntur?
        <br />
        <br /> Quis fugit excepturi, ducimus obcaecati libero aliquam? Minus
        architecto, repudiandae neque voluptatibus eos dolore numquam, itaque
        nam, maiores nihil quo laborum modi similique incidunt dignissimos
        reiciendis porro voluptas nesciunt tempora eligendi adipisci?
      </p>
      <div className={styles.description__icons}>
        {descriptionItems.map((item) => (
          <div className={styles.description__item} key={item.id}>
            <h4 className={styles.iconTitle}>{item.title}</h4>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={item.icon} />
              <span className={styles.iconValue}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourDescription;
