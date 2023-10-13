import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "../page.module.scss";

interface CustomInputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  className?: string;
  icon: IconDefinition;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  name,
  type,
  className,
  icon,
}) => {
  const [focusActive, setFocusActive] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => {
    setFocusActive(true);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocusActive(false);
    setHasValue(!!event.currentTarget.value);
  };

  const inputClasses = [
    styles.inputWrap,
    className,
    focusActive && `${styles.focus} ${styles.notEmpty}`,
    hasValue && styles.notEmpty,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={inputClasses}>
      {name === "Message" ? (
        <textarea
          autoComplete="off"
          name={name}
          id={id}
          className={styles.contactInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
      ) : (
        <input
          type={type}
          autoComplete="off"
          name={name}
          id={id}
          className={styles.contactInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
      )}
      <label htmlFor={id}>{label}</label>
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  );
};

export default CustomInput;
