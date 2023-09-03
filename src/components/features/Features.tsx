import Image from "next/image";
import styles from "./features.module.scss";
import Feature from "./feature/Feature";
import {
  faThumbsUp,
  faPeopleGroup,
  faUserPlus,
  faNotesMedical,
  faDog,
} from "@fortawesome/free-solid-svg-icons";

const benefits = [
  {
    title: "100% Satisfaction Guarantee",
    description:
      "Enjoy peace of mind with our 100% satisfaction guarantee. Cancel your reservation up to 24 hours before your trip, and we'll provide a full refund.",
    icon: faThumbsUp,
    id: 0,
  },
  {
    title: "Experienced and Knowledgeable Guides",
    description:
      "Our guides are experts in local marine life. They'll enhance your tour with valuable insights into the region's natural wonders.",
    icon: faPeopleGroup,
    id: 1,
  },
  {
    title: "Customizable Tour Options",
    description:
      "Tailor your adventure with our customizable tour options. Whether it's a private tour or specific requests, we've got you covered.",
    icon: faUserPlus,
    id: 2,
  },
  {
    title: "Safety First Approach",
    description:
      "Your safety is our priority. Our crew and vessels are dedicated to ensuring a secure journey so you can relax and enjoy your adventure.",
    icon: faNotesMedical,
    id: 3,
  },
  {
    title: "Animal Friendly",
    description:
      "We welcome your pets onboard. Contact us in advance to arrange your furry companion's spot on the trip.",
    icon: faDog,
    id: 4,
  },
];

const Features = () => {
  return (
    <section className={styles.feature} aria-label="features">
      <div
        className={`${styles.featureBanner} ${styles.hasBgImage} ${styles.hasAfter}`}
        style={{ backgroundImage: `url('/slide1.jpg')` }}
      >
        <button
          className={styles.playBtn}
          aria-label="play video: Ponta de Piedade"
        >
          <Image
            src="/play.svg"
            width={60}
            height={60}
            loading="lazy"
            alt="play icon"
          />
        </button>
      </div>
      <div className={`${styles.section} ${styles.featureContent}`}>
        <div className={styles.container}>
          <h2>
            Explore the Wonders of Our Boat Tours
          </h2>
          <p className={styles.sectionText}>
            Embark on an unforgettable journey with Boatrips and experience the
            natural beauty of Lagos like never before. Our boat tours offer a
            perfect blend of adventure, knowledge, and relaxation, ensuring you
            create lasting memories with every trip.
          </p>
          <ul>
            {benefits.map(({ title, description, icon, id }) => (
              <Feature
                title={title}
                description={description}
                icon={icon}
                key={id}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
