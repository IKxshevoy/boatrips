import styles from "./footerLink.module.scss";
import Link from "next/link.js";
import React from "react";

export const FooterLink: React.FC<any> = ({ label, href }) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <li>
        <a
          href={href}
          className={styles.listItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </li>
    );
  }

  // Internal link
  return (
    <li>
      <Link href={href} className={styles.listItem}>
        {label}
      </Link>
    </li>
  );
};
