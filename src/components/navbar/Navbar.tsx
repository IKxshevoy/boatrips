"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import CustomSelect from "./customSelect/CustomSelect";
import en from "../../../public/flag/en.webp";
import fr from "../../../public/flag/fr.webp";
import pt from "../../../public/flag/pt.webp";
import de from "../../../public/flag/de.webp";
import Logo from "../../../public/Logo.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";

const languageOptions = [
  { value: "en", label: "EN", flag: en },
  { value: "fr", label: "FR", flag: fr },
  { value: "pt", label: "PT", flag: pt },
  { value: "de", label: "DE", flag: de },
];

const Navbar: React.FC = () => {
  const t = useTranslations("navbar");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);
  const pathname = usePathname();

  // Define links inside the component to use translations
  const links = [
    {
      id: 0,
      title: t("home"),
      url: "/",
    },
    {
      id: 1,
      title: t("tours"),
      url: "/tours",
      subMenu: [
        { name: t("ponta_da_piedade"), href: "/ponta-da-piedade-caves-cruise" },
        { name: t("catamaran_cruise"), href: "/catamaran-cruise" },
        { name: t("yacht_cruise"), href: "/yacht-cruise" },
        {
          name: t("coastline_cruise"),
          href: "/ponta-da-piedade-2-hours-cruise",
        },
        { name: t("benagil_cave"), href: "/benagil-caves-speed-boat-tour" },
        { name: t("sunset_tour"), href: "/sunset-cruise" },
        {
          name: t("private_ponta_da_piedade"),
          href: "/ponta-da-piedade-caves-cruise#private-classic",
        },
        { name: t("private_sunset"), href: "/sunset-cruise#private-sunset" },
      ],
    },
    {
      id: 2,
      title: t("contact_us"),
      url: "/contact",
    },
  ];

  useEffect(() => {
    setIsSticky(true);
  }, [pathname]);

  useEffect(() => {
    const closeSubMenu = (event: MouseEvent) => {
      const submenu = document.querySelector(`.${styles.listOfTours}`);
      if (submenu && !submenu.contains(event.target as Node)) {
        setIsSubMenuActive(false);
      }
    };
    if (isSubMenuActive) {
      document.addEventListener("click", closeSubMenu);
    } else {
      document.removeEventListener("click", closeSubMenu);
    }
    return () => {
      document.removeEventListener("click", closeSubMenu);
    };
  }, [isSubMenuActive]);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleSubMenu = () => {
    setIsSubMenuActive(!isSubMenuActive);
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <a className={styles.brand} href={"/"}>
        <Image
          src={Logo}
          alt="logo"
          style={{ width: "20%", height: "20%", maxWidth: "400px" }}
        />
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
          className={`${styles.menuBtn} ${isMenuActive ? styles.active : ""} ${
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
              <div className={styles.linkAndBtn}>
                <a key={link.id} href={link.url} className={styles.menuLink}>
                  {link.title}
                </a>
                {link.subMenu ? (
                  <button
                    onClick={toggleSubMenu}
                    className={`${styles.arr} ${
                      isSubMenuActive ? styles.active : ""
                    }`}
                  >
                    &lt;
                  </button>
                ) : null}
              </div>
              {link.subMenu ? (
                <div
                  className={`${styles.listOfTours} ${
                    isSubMenuActive ? styles.active : ""
                  }`}
                >
                  <ul>
                    {link.subMenu.map((tour) => (
                      <li key={tour.name} className={styles.tourWrapper}>
                        <a className={styles.tour} href={tour.href}>
                          {tour.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className={styles.underline}></div>
            </div>
          ))}
          <div className={styles.languageSelector}>
            <CustomSelect choice={languageOptions} />
          </div>
          <div className={styles.bookBtn}>
            <a
              target="_blank"
              href="https://fareharbor.com/embeds/book/boatrips/?full-items=yes"
            >
              {t("book_now")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
