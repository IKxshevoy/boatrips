import { FooterLink } from "@/components/footer/footerLink/FooterLink";
import { ListWrapper } from "@/components/footer/ListWrapper";
import { footerBlocks } from "@/constants/footer";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lastimg1 from "../../../public/footericons/footerendicon/img1.png";
import lastimg2 from "../../../public/footericons/footerendicon/img2.png";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

export interface LinkItem {
  label: string;
  href: string;
}

const Footer: React.FC = () => {
  return (
    <section className={styles.contact}>
      <footer className={styles.footer}>
        <div className={styles.main}>
          {footerBlocks.map((item) =>
            Object.entries(item).map(([title, linkItems], index) => (
              <ListWrapper title={title} key={index}>
                <ul>
                  {linkItems.map((item: LinkItem, itemIndex: number) => (
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
          <ListWrapper title="Connect">
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
              <Link href={"/"} className={styles.socialLink}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </div>
          </ListWrapper>
          <ListWrapper title="Certificates">
            <div className={styles.certificates}>
              <Image
                src="/certificates/certificate1.png"
                alt="certificate1"
                width={120}
                height={120}
              />
              <Image
                src="/certificates/certificate2.png"
                alt="certificate2"
                width={120}
                height={120}
              />
            </div>
          </ListWrapper>
        </div>
      </footer>
      <div className={styles.endText}>
        <p>Copyright 2023 All rights reserved </p>
        <div className={styles.endIcon}>
          <img src={lastimg1.src} alt="Icon1" />
          <img src={lastimg2.src} alt="Icon2" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
