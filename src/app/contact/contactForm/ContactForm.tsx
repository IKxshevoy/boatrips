import React from "react";
import styles from "../page.module.scss";
import {
  faAddressCard,
  faEnvelope,
  faInbox,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomInput from "../formInput/Input";

const ContactForm = () => {
  return (
    <form method="post" className={styles.contactForm}>
      <CustomInput
        id={"firstName"}
        label={"First Name"}
        name={"First Name"}
        type={"text"}
        icon={faAddressCard}
      />
      <CustomInput
        id={"lastName"}
        label={"Last Name"}
        name={"Last Name"}
        type={"text"}
        icon={faAddressCard}
      />
      <CustomInput
        id={"email"}
        label={"Email"}
        name={"Email"}
        type={"email"}
        icon={faEnvelope}
        className={styles.w100}
      />
      <CustomInput
        id={"message"}
        label={"Message"}
        name={"Message"}
        icon={faInbox}
        className={`${styles.w100} ${styles.textarea}`}
      />
      <div className={styles.contactButtons}>
        <button className={`${styles.btn} ${styles.upload}`}>
          <span>
            <FontAwesomeIcon icon={faPaperclip} />
            Add attachment
          </span>
          <input type="file" name="attachment" />
        </button>
        <input type="submit" value={"Send message"} className={styles.btn} />
      </div>
    </form>
  );
};

export default ContactForm;
