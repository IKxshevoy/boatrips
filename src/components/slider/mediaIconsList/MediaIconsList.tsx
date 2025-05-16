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
  { icon: faFacebook, href: "https://www.facebook.com/boatrips.eu", id: 0 },
  { icon: faInstagram, href: "https://www.instagram.com/boatrips/", id: 1 },
  { icon: faWhatsapp, href: "https://wa.me/351969184712", id: 2 },
];

const MediaIconsList = () => {
  return (
    <div className={styles.mediaIcons}>
      {mediaIconsList.map((mediaIcon) => (
        <MediaIcon
          icon={mediaIcon.icon}
          href={mediaIcon.href}
          key={mediaIcon.id}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </div>
  );
};

export default MediaIconsList;
