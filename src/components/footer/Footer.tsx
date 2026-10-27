import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import Icon from "@/components/tour/Icon";
import { EMAIL, PHONE, WHATSAPP_URL, tourOrder } from "@/data/tours";
import styles from "./footer.module.scss";
import Logo from "../../../public/Logo.webp";
import livro_reclamacoes from "../../../public/footericons/footerendicon/livro-reclamacoes.webp";

const tourNameKey: Record<string, string> = {
  "ponta-da-piedade-caves-cruise": "ponta_da_piedade",
  "catamaran-cruise": "catamaran_cruise",
  "yacht-cruise": "yacht_cruise",
  "ponta-da-piedade-2-hours-cruise": "coastline_cruise",
  "benagil-caves-speed-boat-tour": "benagil_cave",
  "sunset-cruise": "sunset_tour",
};

const Social = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.socialLink}>
    {children}
  </a>
);

const Footer: React.FC = () => {
  const t = useTranslations("footer");
  const nav = useTranslations("navbar");

  return (
    <footer className={styles.footer}>
      <svg className={styles.wave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 30c160-28 320-28 480 0s320 28 480 0 320-28 480 0V60H0z" />
      </svg>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <Link href="/" className={styles.logo} aria-label="Boatrips — home">
            <Image src={Logo} alt="Boatrips" sizes="140px" />
          </Link>
          <p>{t("address")}, {t("postal_code")}</p>
          <div className={styles.social}>
            <Social href="https://www.facebook.com/boatrips.eu" label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z" />
              </svg>
            </Social>
            <Social href="https://www.instagram.com/boatrips/" label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.stroke}>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" />
              </svg>
            </Social>
            <Social href={WHATSAPP_URL} label="WhatsApp">
              <Icon name="whatsapp" size={20} />
            </Social>
          </div>
        </div>

        <nav aria-labelledby="footer-tours">
          <h2 className={styles.title} id="footer-tours">{t("tours")}</h2>
          <ul className={styles.list}>
            {tourOrder.map((slug) => (
              <li key={slug}>
                <Link href={`/${slug}`}>{nav(tourNameKey[slug])}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-support">
          <h2 className={styles.title} id="footer-support">{t("support")}</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/#about">{t("about_us")}</Link>
            </li>
            <li>
              <Link href="/tours">{nav("tours")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("help")}</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">{t("terms_conditions")}</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={styles.title}>{t("contact_info")}</h2>
          <address className={styles.contacts}>
            <a href={`tel:${PHONE}`}>
              <Icon name="phone" size={18} />
              {t("phone")}
            </a>
            <a href={`mailto:${EMAIL}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.stroke} width="18" height="18">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {t("email")}
            </a>
            <span>
              <Icon name="pin" size={18} />
              {t("address")}, {t("postal_code")}
            </span>
          </address>
          <h2 className={`${styles.title} ${styles.certTitle}`}>{t("certificates")}</h2>
          <div className={styles.certificates}>
            <Image src="/certificates/certificate1.webp" alt="Certificate" width={72} height={72} />
            <Image src="/certificates/certificate2.webp" alt="Certificate" width={72} height={72} />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            Boatrips · {t("copyright")}
            <br />
            <span>Registo RNAAT 118/2014 – Turismo de Portugal.</span>
          </p>
          <a
            href="https://www.livroreclamacoes.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.complaints}
          >
            <Image src={livro_reclamacoes} alt="Livro de Reclamações" height={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
