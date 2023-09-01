import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from "./mediaIcon.module.scss"
import React from 'react'

export interface IMediaIcon {
    icon: IconDefinition;
}

const MediaIcon = ({ icon }: IMediaIcon) => {
  return (
    <Link href={"/"} className={styles.mediaIcon}>
    <FontAwesomeIcon
      icon={icon}
      style={{ width: "35px", height: "35px" }}
    />
  </Link>
  )
}

export default MediaIcon