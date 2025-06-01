"use client";
import styles from "../customSelect/custom.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "@/i18n";
import { useLocale, useTranslations } from "next-intl";
import en from "../../../../public/flag/en.webp";
import fr from "../../../../public/flag/fr.webp";
import pt from "../../../../public/flag/pt.webp";
import de from "../../../../public/flag/de.webp";

const flags = { en, fr, pt, de };

interface Choice {
  value: string;
  label: string;
  flag: {
    src: string;
  };
}
interface CustomSelectProps {
  choice: Choice[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ choice }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  // Determine initial selected index based on current locale
  const initialIndex = choice.findIndex((c) => c.value === locale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log("Selected index changed:", selectedIndex);
  }, [selectedIndex]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageClick = (index: number) => {
    setSelectedIndex(index);
    setIsMenuOpen(false);
    handleChangeLocale(choice[index].value);
  };

  return (
    <div ref={wrapperRef} className={styles.customWrapper}>
      <div
        className={`${styles.selectedLanguage} ${
          isMenuOpen ? styles.active : ""
        }`}
        onClick={handleMenuToggle}
      >
        <img src={choice[selectedIndex].flag.src} alt="flag" />
        <p>{choice[selectedIndex].label}</p>
      </div>
      {isMenuOpen && (
        <div
          className={`${styles.languageMenu} ${
            isMenuOpen ? styles.active : ""
          }`}
        >
          {choice.map((lang, index) => (
            <button key={index} onClick={() => handleLanguageClick(index)}>
              <img src={lang.flag.src} alt="Flag" />
              <p className={styles.allLanguage}>{lang.label}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
