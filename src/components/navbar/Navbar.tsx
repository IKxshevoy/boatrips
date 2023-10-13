"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

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

const languageOptions = [
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
  { value: "pt", label: "PT" },
  { value: "de", label: "DE" },
];

const Navbar: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleLanguageChange = (selectedOption: any) => {
    setSelectedLanguage(selectedOption);
    // Implement your language change logic here
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
          className={`${styles.menuBtn} ${styles.closeBtn} ${styles.active} ${
            isSticky ? styles.sticky : ""
          }`}
          onClick={toggleMenu}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={`${styles.menuBtn} ${styles.active} ${
            isSticky ? styles.sticky : ""
          }`}
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
        <div className={styles.languageSelector}>
          <Select
            value={selectedLanguage}
            options={languageOptions}
            onChange={handleLanguageChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
