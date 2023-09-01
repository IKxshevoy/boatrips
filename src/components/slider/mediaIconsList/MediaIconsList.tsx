import React from "react";
import styles from "./mediaIconsList.module.scss";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import MediaIcon, { IMediaIcon } from "../mediaIcon/MediaIcon";

interface IMediaIconList extends IMediaIcon {
  id: number;
}

const mediaIconsList: IMediaIconList[] = [
  { icon: faFacebook, id: 0 },
  { icon: faInstagram, id: 1 },
  { icon: faWhatsapp, id: 2 },
];

const MediaIconsList = () => {
  return (
    <div className={styles.mediaIcons}>
      {mediaIconsList.map((mediaIcon) => (
        <MediaIcon icon={mediaIcon.icon} key={mediaIcon.id} />
      ))}
    </div>
  );
};

export default MediaIconsList;
