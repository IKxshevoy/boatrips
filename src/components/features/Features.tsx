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
import { useTranslations } from "next-intl";

const benefits_icons = [
  {
    icon: faThumbsUp,
    id: 0,
  },
  {
    icon: faPeopleGroup,
    id: 1,
  },
  {
    icon: faUserPlus,
    id: 2,
  },
  {
    icon: faNotesMedical,
    id: 3,
  },
  {
    icon: faDog,
    id: 4,
  },
];

const keys = [
  "first_feature",
  "second_feature",
  "third_feature",
  "fourth_feature",
  "fifth_feature",
] as const;

const Features = () => {
  const t = useTranslations("features");

  const benefits = keys.map((key, index) => ({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    icon: benefits_icons[index].icon,
    id: benefits_icons[index].id,
  }));
  const [openModal, setModalOpen] = useState<boolean>(false);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://www.youtube.com/watch?v=DE5Ii0DnYo8",
        type: "video/youtube",
      },
    ],
    poster: "/classic/1.jpg",
  };

  return (
    <section
      className={`${styles.features} ${openModal ? styles.featuresModal : ""}`}
      aria-label="features"
    >
      <ImageBanner setModalOpen={setModalOpen} />
      <Modal isOpen={openModal} onClose={() => setModalOpen(false)}>
        <div style={{ width: "60vw" }}>
          <VideoPlayer options={videoJsOptions} />
        </div>
      </Modal>
      <div className={`${styles.section} ${styles.featuresContent}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            {t("why")} <span className={styles.orangeWrapper}>{t("you")}</span>{" "}
            {t("should_go_with")}{" "}
            <span className={styles.orangeWrapper}>{t("us")}</span>?
          </h2>
          <p className={styles.sectionText}>{t("description")}</p>
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
