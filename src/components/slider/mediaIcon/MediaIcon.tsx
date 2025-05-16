import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./mediaIcon.module.scss";
import React from "react";

export interface IMediaIcon {
  icon: IconDefinition;
  href: string;
  target?: string;
  rel?: string;
}

const MediaIcon: React.FC<IMediaIcon> = ({ icon, href, target, rel }) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} target={target} rel={rel} className={styles.mediaIcon}>
        <FontAwesomeIcon
          icon={icon}
          style={{ width: "35px", height: "35px" }}
        />
      </a>
    );
  }
  return (
    <Link href={href} className={styles.mediaIcon}>
      <FontAwesomeIcon icon={icon} style={{ width: "35px", height: "35px" }} />
    </Link>
  );
};

export default MediaIcon;
