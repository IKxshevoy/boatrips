import Image from 'next/image';
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

interface LinkItem {
  label: string;
  href: string;
}

const FooterLink: React.FC<LinkItem> = ({ label, href }) => (
  <li>
    <Link href={href} className={styles.listItem}>
      {label}
    </Link>
  </li>
);

const Footer: React.FC = () => {
  const linkItems: LinkItem[] = [
    { label: "About Us", href: "/" },
    { label: "Terms & Conditions", href: "/" },
    { label: "Privacy Policy", href: "/" },
    { label: "Help", href: "/" },
    { label: "Tours", href: "/" },
  ];

  const contactItems: LinkItem[] = [
    { label: "Passeio dos Descobrimentos", href: "/" },
    { label: "8600-315 Lagos", href: "/" },
    { label: "+999 9999 999 999", href: "/" },
    { label: "boatripseu@gmail.com", href: "/" },
  ];

  return (
    <section className={styles.contact}>
      <footer className={styles.footer}>
        <div className={styles.main}>
          {["Quick links", "Support", "Contact info", "Connect", "Certificates"].map((title, index) => (
            <div key={index} className={styles.list}>
              <h4>{title}</h4>
              <ul>
                {title === "Connect"
                  ? (
                    <div className={styles.social}>
                      <Link href={"https://www.facebook.com/boatrips.eu"} className={styles.socialLink}>
                        <FontAwesomeIcon icon={faFacebook} />
                      </Link>
                      <Link href={"https://www.instagram.com/boatrips/?hl=ru"} className={styles.socialLink}>
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                      <Link href={"/"} className={styles.socialLink}>
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </Link>
                    </div>
                  )
                  : title === "Contact info"
                  ? (
                    contactItems.map((item, itemIndex) => (
                      <FooterLink key={itemIndex} label={item.label} href={item.href} />
                    ))
                  )
                  : title === "Quick links" || title === "Support" ? (
                    linkItems.map((item, itemIndex) => (
                      <FooterLink key={itemIndex} label={item.label} href={item.href} />
                    ))
                  ) : (
                    <div>
                      <Image src="/certificates/certificate1.png" alt="certificate1" width={100} height={100} className={styles.listItem}/>
                      <Image src="/certificates/certificate2.png" alt="certificate2" width={100} height={100} className={styles.listItem}/>
                    </div>
                    )}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className={styles.endText}>
        <p>Copyright 2023 All rights reserved </p>
      </div>
    </section>
  );
};

export default Footer;
