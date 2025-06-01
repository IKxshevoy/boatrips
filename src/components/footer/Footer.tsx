"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { FooterLink } from "@/components/footer/footerLink/FooterLink";
import { ListWrapper } from "@/components/footer/ListWrapper";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";
import livro_reclamacoes from "../../../public/footericons/footerendicon/livro-reclamacoes.webp";

const Footer: React.FC = () => {
  const t = useTranslations("footer");

  // Update the href of terms_conditions to '/terms-and-conditions'
  const translatedLinkItems = [
    { label: t("about_us"), href: "/" },
    { label: t("terms_conditions"), href: "/terms-and-conditions" },
    { label: t("help"), href: "/contact" },
    { label: t("tours"), href: "/" },
  ];

  const translatedContactItems = [
    { label: t("address"), href: "#" },
    { label: t("postal_code"), href: "#" },
    { label: t("phone"), href: "https://wa.me/351969184712" },
    { label: t("email"), href: "mailto:boatripseu@gmail.com" },
  ];

  const translatedFooterBlocks = [
    { [t("support")]: translatedLinkItems },
    { [t("contact_info")]: translatedContactItems },
  ];

  return (
    <section className={styles.contact}>
      <footer className={styles.footer}>
        <div className={styles.main}>
          {translatedFooterBlocks.map((item) =>
            Object.entries(item).map(([title, linkItems], index) => (
              <ListWrapper title={title} key={index}>
                <ul>
                  {linkItems.map((item, itemIndex) => (
                    <FooterLink
                      key={itemIndex}
                      label={item.label}
                      href={item.href}
                    />
                  ))}
                </ul>
              </ListWrapper>
            ))
          )}
          <ListWrapper title={t("connect")}>
            <div className={styles.social}>
              <Link
                href={"https://www.facebook.com/boatrips.eu"}
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link
                href={"https://www.instagram.com/boatrips/?hl=ru"}
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                href={"https://wa.me/351969184712"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </div>
          </ListWrapper>
          <ListWrapper title={t("certificates")}>
            <div className={styles.certificates}>
              <Image
                src="/certificates/certificate1.webp"
                alt="certificate1"
                width={120}
                height={120}
              />
              <Image
                src="/certificates/certificate2.webp"
                alt="certificate2"
                width={120}
                height={120}
              />
            </div>
          </ListWrapper>
        </div>
      </footer>
      <div className={styles.endText}>
        <div className={styles.copyrightWrapper}>
          <span>Registo RNAAT 118/2014 – Turismo de Portugal.</span>
          <p>{t("copyright")}</p>
        </div>
        <div className={styles.endIcon}>
          <img src={livro_reclamacoes.src} alt="Icon1" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
