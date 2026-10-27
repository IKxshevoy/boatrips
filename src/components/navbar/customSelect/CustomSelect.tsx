"use client";
import styles from "./custom.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "@/i18n";
import { useLocale, useTranslations } from "next-intl";
import type { StaticImageData } from "next/image";

interface Choice {
  value: string;
  label: string;
  flag: StaticImageData;
}
interface CustomSelectProps {
  choice: Choice[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ choice }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const current = choice.find((c) => c.value === locale) ?? choice[0];

  useEffect(() => {
    if (!isMenuOpen) return;
    const onClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const handleLanguageClick = (value: string) => {
    setIsMenuOpen(false);
    if (value !== locale) {
      // keep the hash (e.g. #private-sunset) when switching language
      router.replace(`${pathname}${window.location.hash}`, { locale: value });
    }
  };

  return (
    <div ref={wrapperRef} className={styles.customWrapper}>
      <button
        type="button"
        className={`${styles.selectedLanguage} ${isMenuOpen ? styles.active : ""}`}
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={isMenuOpen}
        aria-label={`${t("language")}: ${current.label}`}
      >
        <img src={current.flag.src} alt="" width={20} height={14} />
        <span>{current.label}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isMenuOpen && (
        <ul className={styles.languageMenu} role="listbox" aria-label={t("language")}>
          {choice.map((lang) => (
            <li key={lang.value}>
              <button
                type="button"
                role="option"
                aria-selected={lang.value === locale}
                onClick={() => handleLanguageClick(lang.value)}
              >
                <img src={lang.flag.src} alt="" width={20} height={14} />
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
