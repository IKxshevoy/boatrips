import { Modal } from "@/ui-kit/modal/Modal";
import VideoPlayer from "@/ui-kit/video/Video";
import React, { useState } from "react";
import styles from "./features.module.scss";
import Feature from "./feature/Feature";
import {
  faThumbsUp,
  faPeopleGroup,
  faUserPlus,
  faNotesMedical,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import ImageBanner from "./banner/ImageBanner";

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
  const [openModal, setModalOpen] = useState<boolean>(false);

  const videoOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "intro.mp4",
        type: "video/mp4",
      },
    ],
    poster: "aboutUs2.jpg",
  };

  return (
    <section
      className={`${styles.features} ${openModal ? styles.featuresModal : ""}`}
      aria-label="features"
    >
      <ImageBanner setModalOpen={setModalOpen} />
      <Modal isOpen={openModal} onClose={() => setModalOpen(false)}>
        <div style={{ width: "60vw" }}>
          <VideoPlayer options={videoOptions} />
        </div>
      </Modal>
      <div className={`${styles.section} ${styles.featuresContent}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>Why <span className={styles.orangeWrapper}>you</span> should go with <span className={styles.orangeWrapper}>us</span>?</h2>
          <p className={styles.sectionText}>
            Embark on an unforgettable journey with Boatrips and experience the
            natural beauty of Lagos like never before. Our boat tours offer a
            perfect blend of adventure, knowledge, and relaxation, ensuring you
            create lasting memories with every trip.
          </p>
          <ul>
            {benefits.map(({ title, description, icon, id }) => (
              <li key={id}>
                <Feature title={title} description={description} icon={icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
