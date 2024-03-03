import React from "react";
import styles from "./contactForm.module.scss";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("questions");
  return (
    <div className={styles.contactForm}>
      <h2 className={styles.contactForm__title}>{t("specific_questions")}</h2>
      <p className={styles.contactForm__text}>{t("fill_form_text")}</p>
      <form>
        <input
          type="email"
          placeholder="youremail@example.com"
          className={styles.input}
        />
        <textarea
          placeholder={t("message_placeholder")}
          className={styles.textarea}
        ></textarea>
        <button type="submit">{t("submit_button")}</button>
      </form>
    </div>
  );
};

export default ContactForm;
