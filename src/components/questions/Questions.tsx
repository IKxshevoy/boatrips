import React from "react";
import { useTranslations } from "next-intl";
import ContactForm from "./contactForm/ContactForm";
import Icon from "@/components/tour/Icon";
import { JsonLd } from "@/lib/seo";
import styles from "./questions.module.scss";

const keys = [
  "first_question",
  "second_question",
  "third_question",
  "fourth_question",
  "fifth_question",
] as const;

const Questions = () => {
  const t = useTranslations("questions");

  const questions = keys.map((key) => ({
    title: t(`${key}.title`),
    content: t(`${key}.content`),
  }));

  return (
    <section className={styles.wrapper} aria-labelledby="faq-title">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: questions.map((q) => ({
            "@type": "Question",
            name: q.title,
            acceptedAnswer: { "@type": "Answer", text: q.content },
          })),
        }}
      />
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 className={styles.title} id="faq-title">
            {t("popular")} <span className={styles.accent}>{t("questions")}</span>
          </h2>
          <div className={styles.list}>
            {questions.map(({ title, content }, i) => (
              <details className={styles.item} key={i} open={i === 0}>
                <summary>
                  <span>{title}</span>
                  <span className={styles.icon}>
                    <Icon name="plus" size={18} />
                  </span>
                </summary>
                <p>{content}</p>
              </details>
            ))}
          </div>
        </div>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Questions;
