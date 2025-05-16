import React, { useState } from "react";
import styles from "../page.module.scss";
import {
  faAddressCard,
  faEnvelope,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../formInput/Input";
import { sendEmail } from "../../../../../lib/resend";
import { useTranslations } from "next-intl";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const t = useTranslations("contact_form");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
  }>({});

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t("validation.first_name_required");
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t("validation.last_name_required");
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = t("validation.email_invalid");
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = t("validation.message_too_short");
    } else if (formData.message.length > 1000) {
      newErrors.message = t("validation.message_too_long");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await sendEmail({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      });

      setMessageSent(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Failed to send email:", error);
      setMessageSent(false);
    }
  };

  return (
    <>
      <form
        method="post"
        className={styles.contactForm}
        onSubmit={handleSubmit}
        noValidate
      >
        <CustomInput
          id="firstName"
          label={t("first_name")}
          name="firstName"
          type="text"
          icon={faAddressCard}
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          error={errors.firstName}
        />

        <CustomInput
          id="lastName"
          label={t("last_name")}
          name="lastName"
          type="text"
          icon={faAddressCard}
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          error={errors.lastName}
        />

        <CustomInput
          id="email"
          label={t("email")}
          name="email"
          type="text"
          icon={faEnvelope}
          className={styles.w100}
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
        />

        <CustomInput
          id="message"
          label={t("message")}
          name="message"
          icon={faInbox}
          className={`${styles.w100} ${styles.textarea}`}
          value={formData.message}
          onChange={(e) => {
            if (e.target.value.length <= 1000) {
              handleChange("message", e.target.value);
            }
          }}
          error={errors.message}
        />

        <div className={styles.contactButtons}>
          <input
            type="submit"
            value={t("send_message")}
            className={styles.btn}
          />
        </div>
      </form>

      {messageSent && (
        <p className={styles.successMessage}>{t("message_success")}</p>
      )}
    </>
  );
};

export default ContactForm;
