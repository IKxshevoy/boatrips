"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

const TermsHeader = () => {
  const t = useTranslations("terms-and-conditions");
  return (
    <div className={styles.tourHeader}>
      <div className={styles.content}>
        <h2>{t("title")}</h2>
      </div>
    </div>
  );
};

const TermsAndConditions = () => {
  const t = useTranslations("terms-and-conditions");

  return (
    <section className={styles.tourSection}>
      <TermsHeader />
      <div className={styles.termsContent}>
        <h3>{t("privacyOverviewTitle")}</h3>
        <p>{t("privacyOverviewText")}</p>

        <h3>{t("personalInfoTitle")}</h3>
        <p>{t("personalInfoText")}</p>

        <h3>{t("whenCollectTitle")}</h3>
        <p>{t("whenCollectText")}</p>

        <h3>{t("useInfoTitle")}</h3>
        <ul>
          <li>{t("useInfoItem1")}</li>
          <li>{t("useInfoItem2")}</li>
          <li>{t("useInfoItem3")}</li>
          <li>{t("useInfoItem4")}</li>
          <li>{t("useInfoItem5")}</li>
        </ul>

        <h3>{t("protectInfoTitle")}</h3>
        <p>{t("protectInfoText")}</p>

        <h3>{t("cookiesTitle")}</h3>
        <p>{t("cookiesText")}</p>

        <h3>{t("thirdPartyDisclosureTitle")}</h3>
        <p>{t("thirdPartyDisclosureText")}</p>

        <h3>{t("thirdPartyLinksTitle")}</h3>
        <p>{t("thirdPartyLinksText")}</p>

        <h3>{t("googleTitle")}</h3>
        <p>{t("googleText")}</p>

        <h3>{t("doNotTrackTitle")}</h3>
        <p>{t("doNotTrackText")}</p>

        <h3>{t("behavioralTrackingTitle")}</h3>
        <p>{t("behavioralTrackingText")}</p>

        <h3>{t("childrenTitle")}</h3>
        <p>{t("childrenText")}</p>

        <h3>{t("emailCollectionTitle")}</h3>
        <p>{t("emailCollectionText")}</p>

        <h3>{t("contactTitle")}</h3>
        <p>
          <strong>{t("contactLine1")}</strong>
          <br />
          {t("contactLine2")}
          <br />
          {t("contactLine3")}
          <br />
          {t("contactLine4")}
          <br />
          {t("contactLine5")}
          <a href="mailto:boatripseu@gmail.com">{t("contactEmail")}</a>
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
