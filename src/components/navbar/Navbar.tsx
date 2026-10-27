"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n";
import styles from "./navbar.module.scss";
import CustomSelect from "./customSelect/CustomSelect";
import Logo from "../../../public/Logo.webp";
import en from "../../../public/flag/en.webp";
import fr from "../../../public/flag/fr.webp";
import pt from "../../../public/flag/pt.webp";
import de from "../../../public/flag/de.webp";

const languageOptions = [
  { value: "en", label: "EN", flag: en },
  { value: "fr", label: "FR", flag: fr },
  { value: "pt", label: "PT", flag: pt },
  { value: "de", label: "DE", flag: de },
];

const BOOK_URL = "https://fareharbor.com/embeds/book/boatrips/?full-items=yes";

const Chevron = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.chevron}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const Navbar: React.FC = () => {
  const t = useTranslations("navbar");
  const ui = useTranslations("tour_ui");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toursRef = useRef<HTMLLIElement>(null);

  const tours = [
    { name: t("ponta_da_piedade"), href: "/ponta-da-piedade-caves-cruise" },
    { name: t("catamaran_cruise"), href: "/catamaran-cruise" },
    { name: t("yacht_cruise"), href: "/yacht-cruise" },
    { name: t("coastline_cruise"), href: "/ponta-da-piedade-2-hours-cruise" },
    { name: t("benagil_cave"), href: "/benagil-caves-speed-boat-tour" },
    { name: t("sunset_tour"), href: "/sunset-cruise" },
    {
      name: t("private_ponta_da_piedade"),
      href: "/ponta-da-piedade-caves-cruise#private-classic",
    },
    { name: t("private_sunset"), href: "/sunset-cruise#private-sunset" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything on navigation
  useEffect(() => {
    setMenuOpen(false);
    setToursOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!toursOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!toursRef.current?.contains(e.target as Node)) setToursOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setToursOpen(false);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [toursOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        menuOpen ? styles.open : ""
      }`}
    >
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="Boatrips — home">
          <Image src={Logo} alt="Boatrips" priority sizes="120px" />
        </Link>

        <nav className={styles.nav} id="site-nav" aria-label="Main">
          <ul className={styles.links}>
            <li>
              <Link
                href="/"
                className={styles.link}
                aria-current={isActive("/") ? "page" : undefined}
                onClick={closeMenu}
              >
                {t("home")}
              </Link>
            </li>
            <li
              ref={toursRef}
              className={`${styles.hasMenu} ${toursOpen ? styles.menuOpen : ""}`}
            >
              <div className={styles.linkRow}>
                <Link
                  href="/tours"
                  className={styles.link}
                  aria-current={isActive("/tours") ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {t("tours")}
                </Link>
                <button
                  type="button"
                  className={styles.toggle}
                  aria-expanded={toursOpen}
                  aria-controls="tours-menu"
                  aria-label={t("tours")}
                  onClick={() => setToursOpen((v) => !v)}
                >
                  <Chevron />
                </button>
              </div>
              <ul className={styles.dropdown} id="tours-menu">
                {tours.map((tour) => (
                  <li key={tour.href}>
                    <Link
                      href={tour.href}
                      className={styles.dropdownLink}
                      onClick={closeMenu}
                    >
                      {tour.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/contact"
                className={styles.link}
                aria-current={isActive("/contact") ? "page" : undefined}
                onClick={closeMenu}
              >
                {t("contact_us")}
              </Link>
            </li>
          </ul>

          <div className={styles.actions}>
            <CustomSelect choice={languageOptions} />
            <a
              className={styles.book}
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("book_now")}
            </a>
          </div>
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? ui("close") : ui("menu")}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
    </header>
  );
};

export default Navbar;
