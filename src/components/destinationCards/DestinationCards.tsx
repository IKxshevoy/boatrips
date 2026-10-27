import React from "react";
import { useTranslations } from "next-intl";
import TourCard from "@/components/tourCard/TourCard";
import { tourCards, cardMeta } from "@/data/tourCards";
import { Link } from "@/i18n";
import { toParagraphs } from "@/lib/text";
import Icon from "@/components/tour/Icon";
import styles from "./destinationCards.module.scss";

const DestinationCards = () => {
  const t = useTranslations("experiences");
  const tours = useTranslations("tours");
  const ui = useTranslations("tour_ui");
  const quote = toParagraphs(t.raw("blockquote"));

  return (
    <section className={styles.section} aria-labelledby="experiences-title">
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Boatrips · Lagos</p>
            <h2 className={styles.title} id="experiences-title">
              {t("title")}
            </h2>
            <p className={styles.text}>{t("description")}</p>
            <Link href="/tours" className={styles.all}>
              {t("view_all_tours_button")}
              <Icon name="arrowRight" size={18} />
            </Link>
          </div>
          <blockquote className={styles.quote}>
            <p>{quote[0]}</p>
            <cite>— {t("ceo")}</cite>
          </blockquote>
        </div>

        <ul className={styles.cards}>
          {tourCards.map(({ slug, key, image }) => {
            const meta = cardMeta(slug);
            return (
              <li key={slug}>
                <TourCard
                  href={`/${slug}`}
                  image={image}
                  title={tours(`${key}.title` as never)}
                  description={tours(`${key}.description` as never)}
                  duration={meta.duration}
                  price={meta.price}
                  fromLabel={ui("from")}
                  ctaLabel={t("view_tour_button")}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 80vw"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default DestinationCards;
