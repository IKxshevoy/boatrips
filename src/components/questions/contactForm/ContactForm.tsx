import React from "react";
import styles from "./contactForm.module.scss"

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <h2 className={styles.contactForm__title}>
        Do you have any specific question?
      </h2>
      <p className={styles.contactForm__text}>
        Please fill the form below and our dedicated team will get intouch with
        you as soon as possible
      </p>
      <form>
        <input type="email" placeholder="Enter email address" />
        <textarea placeholder="Enter question here"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
