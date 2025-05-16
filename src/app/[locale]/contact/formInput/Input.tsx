import React, { useState, useEffect } from "react";
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
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  name,
  type,
  className,
  icon,
  value,
  onChange,
  error,
}) => {
  const [focusActive, setFocusActive] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  const handleFocus = () => {
    setFocusActive(true);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocusActive(false);
    setHasValue(!!event.currentTarget.value);
  };

  // Add error class if error exists
  const inputClasses = [
    styles.inputWrap,
    className,
    focusActive && `${styles.focus} ${styles.notEmpty}`,
    hasValue && styles.notEmpty,
    error && styles.error, // define this class in your SCSS for red border etc.
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={inputClasses}>
      {name.toLowerCase() === "message" ? (
        <textarea
          autoComplete="off"
          name={name}
          id={id}
          className={styles.contactInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={`${id}-error`}
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
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={`${id}-error`}
        />
      )}
      <label htmlFor={id}>{label}</label>
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
        style={{ width: "20px", height: "20px" }}
      />
      {error && (
        <p
          id={`${id}-error`}
          style={{ color: "red", marginTop: "4px", fontSize: "0.9em" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
