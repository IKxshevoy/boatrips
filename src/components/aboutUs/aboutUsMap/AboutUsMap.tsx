import styles from "@/components/aboutUs/aboutUs.module.scss";
import { useTranslations } from "next-intl";
import Icon from "@/components/tour/Icon";
import Cta from "@/ui-kit/cta/Cta";
import { PHONE, PHONE_DISPLAY } from "@/data/tours";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Boatrips+Boat+Trips+and+Tours+Lagos";

export const AboutUsMap = () => {
  const t = useTranslations("about_us");
  const ui = useTranslations("tour_ui");
  return (
    <section className={styles.findUs} aria-labelledby="find-us-title">
      <div className={`container ${styles.findGrid}`}>
        <div className={styles.findCard}>
          <span className={styles.findIcon}>
            <Icon name="pin" size={22} />
          </span>
          <h2 className={styles.title} id="find-us-title">
            {t("how_to_find_us")}
          </h2>
          <p className={styles.text}>
            {t("address_beginning")}{" "}
            <strong className={styles.accent}>{t("boatrips")}</strong>{" "}
            {t("address_finish")}
          </p>
          <div className={styles.findActions}>
            <Cta href={MAPS_URL} external variant="accent" icon={<Icon name="pin" size={18} />}>
              {ui("open_maps")}
            </Cta>
            <Cta href={`tel:${PHONE}`} variant="ghost" icon={<Icon name="phone" size={18} />}>
              {PHONE_DISPLAY}
            </Cta>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.8740420200984!2d-8.674127499999999!3d37.1081157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b317c8dca2f53%3A0xcdb8b3e009b5324e!2sBoatrips-Boat%20Trips%20and%20Tours!5e0!3m2!1sen!2sua!4v1693492808564!5m2!1sen!2sua"
            title={t("how_to_find_us")}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
