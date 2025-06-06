import React from "react";
import styles from "./destinationText.module.scss";
import { Title } from "@/ui-kit/title/Title";
import Link from "next/link";
import { useTranslations } from "next-intl";

const DestinationText = () => {
  const t = useTranslations("experiences");
  return (
    <div className={styles.greeting}>
      <div className={styles.description}>
        <div className={styles.title}>
          <Title title={t("title")} />
        </div>
        <p className={styles.text}>{t("description")}</p>
        <Link href="/tours" className={`${styles.btn} ${styles.btnPrimary}`}>
          {t("view_all_tours_button")}
        </Link>
      </div>
      <blockquote className={styles.blockquote}>
        <p>
          {t.rich("blockquote", {
            br: () => <br />,
          })}
        </p>
        <cite className={styles.cite}>
          <span className={styles.line}></span>
          {t("ceo")}
        </cite>
      </blockquote>
    </div>
  );
};

export default DestinationText;
