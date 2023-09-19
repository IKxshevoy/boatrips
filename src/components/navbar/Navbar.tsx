"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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

const Navbar: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <a className={styles.brand} href={"/"}>
        Travel
      </a>
      {isMenuActive ? (
        <FontAwesomeIcon
          icon={faTimes}
          className={`${styles.menuBtn} ${styles.active}`}
          onClick={toggleMenu}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={`${styles.menuBtn} ${styles.active}`}
          onClick={toggleMenu}
        />
      )}
      <div
        className={`${styles.navigation} ${isMenuActive ? styles.active : ""}`}
      >
        <div className={styles.navigationItems}>
          {links.map((link) => (
            <a key={link.id} href={link.url} className={styles.menuLink}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
