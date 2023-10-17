import styles from "../customSelect/custom.module.scss";
import React, { useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageClick = (index: number) => {
    setSelectedIndex(index);
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.customWrapper}>
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
