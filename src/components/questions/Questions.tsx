import React from "react";
import styles from "./questions.module.scss";
import Accordion from "./accordion/Accordion";
import ContactForm from "./contactForm/ContactForm";
import { useTranslations } from "next-intl";

const keys = [
  "first_question",
  "second_question",
  "third_question",
  "fourth_question",
  "fifth_question",
] as const;

const Questions = () => {
  const t = useTranslations("questions");

  const questions = keys.map((key, index) => ({
    title: t(`${key}.title`),
    content: t(`${key}.content`),
    id: index,
  }));

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          {t("popular")}{" "}
          <span className={styles.orangeWrapper}>{t("questions")}</span>
        </h2>
        <div className={styles.container}>
          <div className={styles.flexContainer}>
            <div className={styles.accordionContainer}>
              {questions.map(({ title, content, id }) => (
                <Accordion title={title} content={content} key={id} />
              ))}
            </div>
            <div className={styles.contactForm}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
