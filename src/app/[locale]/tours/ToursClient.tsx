import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TourCard from "@/components/tourCard/TourCard";
import { tourCards, cardMeta } from "@/data/tourCards";
import { Link } from "@/i18n";
import styles from "./page.module.scss";

// Server component — kept the file name so imports stay stable.
const ToursClient = () => {
  const t = useTranslations("tours");
  const ui = useTranslations("tour_ui");
  const exp = useTranslations("experiences");

  return (
    <>
      <section className={styles.hero} aria-labelledby="tours-title">
        <Image
          src="/classic/19.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={65}
          className={styles.heroImg}
        />
        <div className={`container ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">{ui("home")}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{ui("tours")}</span>
          </nav>
          <h1 id="tours-title">{ui("our_tours")}</h1>
          <p>{ui("tours_intro")}</p>
        </div>
      </section>

      <section className={styles.listing} aria-label={ui("all_tours")}>
        <div className="container">
          <p className={styles.intro}>{exp("description")}</p>
          <ul className={styles.grid}>
            {tourCards.map(({ slug, key, image }, i) => {
              const meta = cardMeta(slug);
              return (
                <li key={slug}>
                  <TourCard
                    href={`/${slug}`}
                    image={image}
                    title={t(`${key}.title` as never)}
                    description={t(`${key}.description` as never)}
                    duration={meta.duration}
                    price={meta.price}
                    fromLabel={ui("from")}
                    ctaLabel={ui("view_tour")}
                    priority={i < 3}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ToursClient;
