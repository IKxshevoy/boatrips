"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
    title: "Tours",
    url: "/tours",
    subMenu: [
      { name: "Ponta de Piedade" },
      { name: "Coastline Cruise" },
      { name: "Benagil Cave" },
      { name: "Sunset Tour" },
      { name: "Private tour" },
      { name: "Private sunset" },
    ],
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

const Navbar: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    setIsSticky(pathname === "/contact");
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        pathname !== "/contact" && setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <a className={styles.brand} href={"/"}>
        BOA<span className={styles.orangeWrapper}>T</span>RIPS
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
            <div className={styles.wrapperMenuLink} key={link.title}>
              <a key={link.id} href={link.url} className={styles.menuLink}>
                {link.title}
              </a>
              {link.subMenu ? (
                <div className={styles.listOfTours}>
                  <ul>
                    {link.subMenu.map((tour) => (
                      <li key={tour.name} className={styles.tourWrapper}>
                        <a className={styles.tour} href={tour.name}>
                          {tour.name}
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
