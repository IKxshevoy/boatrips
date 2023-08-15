"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About us",
    url: "/about",
  },
  {
    id: 3,
    title: "Explore",
    url: "/explore",
  },
  {
    id: 4,
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: 5,
    title: "Contact us",
    url: "/contact",
  },
];

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={styles.header}>
      <Link className={styles.brand} href={"/"}>
        Travel
      </Link>
      {isMenuActive ? (
        <FontAwesomeIcon
          icon={faX}
          className={`${styles["menu-btn"]} ${styles.active}`}
          onClick={toggleMenu}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={`${styles["menu-btn"]} ${styles.active}`}
          onClick={toggleMenu}
        />
      )}
      <div
        className={`${styles.navigation} ${isMenuActive ? styles.active : ""}`}
      >
        <div className={styles["navigation-items"]}>
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className={styles["menu-link"]}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
