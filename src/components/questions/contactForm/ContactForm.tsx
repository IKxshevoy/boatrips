import React, { useState } from "react";
import styles from "./contactForm.module.scss";
import { useTranslations } from "next-intl";
import { sendEmail } from "../../../../lib/resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const t = useTranslations("questions");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; message?: string }>(
    {}
  );

  const validateForm = () => {
    const newErrors: { email?: string; message?: string } = {};

    if (!emailRegex.test(email)) {
      newErrors.email = t("validation.email_invalid");
    }

    if (message.length < 10) {
      newErrors.message = t("validation.message_too_short");
    } else if (message.length > 1000) {
      newErrors.message = t("validation.message_too_long");
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await sendEmail({ email, message });
      setMessageSent(true);
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (error) {
      console.error("Failed to send email:", error);
      setMessageSent(false);
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.contactForm__title}>{t("specific_questions")}</h2>
      <p className={styles.contactForm__text}>{t("fill_form_text")}</p>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="youremail@example.com"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        {errors.email && (
          <p id="email-error" style={{ color: "red", marginTop: 4 }}>
            {errors.email}
          </p>
        )}

        <textarea
          placeholder={t("message_placeholder")}
          className={styles.textarea}
          value={message}
          onChange={(e) => {
            if (e.target.value.length <= 1000) {
              setMessage(e.target.value);
            }
          }}
          required
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        ></textarea>
        {errors.message && (
          <p id="message-error" style={{ color: "red", marginTop: 4 }}>
            {errors.message}
          </p>
        )}

        <button type="submit">{t("submit_button")}</button>
      </form>
      {messageSent && (
        <p className={styles.contactForm__success}>
          {t("message_sent_success")}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
