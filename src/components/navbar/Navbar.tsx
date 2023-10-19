"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import CustomSelect from "./customSelect/CustomSelect";
import en from "../../../public/flag/en.png";
import fr from "../../../public/flag/fr.png";
import pt from "../../../public/flag/pt.jpg";
import de from "../../../public/flag/de.png";

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
  { value: "en", label: "EN", flag: en },
  { value: "fr", label: "FR", flag: fr },
  { value: "pt", label: "PT", flag: pt },
  { value: "de", label: "DE", flag: de },
];
const tours = [
  { name: "Place 1" },
  { name: "Place 2" },
  { name: "Place 3" },
  { name: "Place 4" },
  { name: "Place 5" },
  { name: "Place 6" },
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
            <div className={styles.wrapperMenuLink}>
              <a key={link.id} href={link.url} className={styles.menuLink}>
                {link.title}
              </a>
              {link.title === "Explore" ? (
                <div className={styles.listOfTours}>
                  <ul>
                    {tours.map((place, index) => (
                      <li key={index}>
                        <a className={styles.place} href={place.name}>
                          {place.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
          <div className={styles.languageSelector}>
            <CustomSelect choice={languageOptions} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
