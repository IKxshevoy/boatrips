import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n";
import Cta from "@/ui-kit/cta/Cta";
import {
  PHONE,
  PHONE_DISPLAY,
  PROMO_CODE,
  SITE_URL,
  WHATSAPP_URL,
  tours,
  type TourConfig,
  type TourOption,
  type TourSlug,
} from "@/data/tours";
import { toParagraphs, formatPrice } from "@/lib/text";
import { JsonLd, localizedUrl } from "@/lib/seo";
import Icon, { type IconName } from "./Icon";
import MediaSlider from "./MediaSlider";
import VideoFacade from "./VideoFacade";
import TourGallery from "./TourGallery";
import Reviews from "./Reviews";
import ExpandableText from "./ExpandableText";
import s from "./tour.module.scss";

// keys come from tour config at runtime, so use a loose translator type
type T = {
  (key: string, values?: Record<string, string | number>): string;
  raw: (key: string) => unknown;
};

const SectionHead = ({
  eyebrow,
  title,
  text,
  center,
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
  id?: string;
}) => (
  <header className={`${s.head} ${center ? s.headCenter : ""}`}>
    {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
    <h2 className={s.h2} id={id}>
      {title}
    </h2>
    {text && <p className={s.lead}>{text}</p>}
  </header>
);

/* ------------------------------------------------------------------ */

const Hero = ({ tour, t, ui }: { tour: TourConfig; t: T; ui: T }) => {
  const { hero } = tour;
  const bookHref = tour.options ? "#options" : tour.bookingUrl!;
  return (
    <section className={s.hero} aria-labelledby="tour-title">
      <Image
        src={hero.image}
        alt={tour.name}
        fill
        priority
        sizes="100vw"
        quality={70}
        className={s.heroImg}
      />
      <div className={s.heroScrim} />

      <div className={`container ${s.heroInner}`}>
        <nav aria-label="Breadcrumb" className={s.crumbs}>
          <ol>
            <li>
              <Link href="/">{ui("home")}</Link>
            </li>
            <li>
              <Link href="/tours">{ui("tours")}</Link>
            </li>
            <li aria-current="page">{tour.name}</li>
          </ol>
        </nav>

        {hero.kicker && (
          <p className={s.kicker}>{hero.kicker.map((k) => t(k)).join(" ")}</p>
        )}
        <h1 className={s.h1} id="tour-title">
          {t(hero.title)} <span className={s.accentText}>{t(hero.accent)}</span>
        </h1>

        <ul className={s.chips}>
          <li>
            <Icon name="clock" size={16} />
            {tour.durationLabel}
          </li>
          <li>
            <Icon name="tag" size={16} />
            {ui("from")} <strong>{formatPrice(tour.fromPrice)}</strong>
          </li>
          {hero.drinks && (
            <li>
              <Icon name="glass" size={16} />
              {ui("free_drinks")}
            </li>
          )}
        </ul>

        {hero.promo && (
          <p className={s.promo}>
            <span className={s.promoBadge}>{t("discount")}</span>
            <span>
              {t("special_offer")} <code>{PROMO_CODE}</code>
            </span>
          </p>
        )}

        <div className={s.heroActions}>
          <Cta
            href={bookHref}
            external={!tour.options}
            size="lg"
            icon={<Icon name="arrowRight" size={18} />}
          >
            {ui("book_now")}
          </Cta>
          <Cta href="#overview" variant="ghost" size="lg">
            {ui("explore")}
          </Cta>
        </div>
      </div>

      <a href="#overview" className={s.scrollCue} aria-label={ui("scroll")}>
        <Icon name="arrowDown" size={18} />
      </a>
      <svg
        className={s.heroWave}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 48c120-26 240-38 360-30s240 40 360 40 240-34 360-42 240 14 360 30v34H0z" />
      </svg>
    </section>
  );
};

/* ------------------------------------------------------------------ */

const TrustList = ({ ui }: { ui: T }) => (
  <ul className={s.trust}>
    <li>
      <Icon name="shield" size={18} />
      {ui("free_cancellation")}
    </li>
    <li>
      <Icon name="bolt" size={18} />
      {ui("instant_confirmation")}
    </li>
    <li>
      <Icon name="lock" size={18} />
      {ui("secure_booking")}
    </li>
  </ul>
);

const Overview = ({ tour, t, ui }: { tour: TourConfig; t: T; ui: T }) => {
  const o = tour.overview!;
  return (
    <section className={s.section} id="overview" aria-labelledby="overview-title">
      <div className={`container ${s.overview}`}>
        <div className={s.overviewText}>
          <SectionHead
            id="overview-title"
            eyebrow={ui("about_tour")}
            title={
              <>
                {o.title.lead && <>{t(o.title.lead)} </>}
                <span className={s.accentText}>{t(o.title.accent)}</span>
                {o.title.tail && <> {t(o.title.tail)}</>}
              </>
            }
          />
          <div className={s.prose}>
            {toParagraphs(t.raw(o.description)).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Highlights tour={tour} t={t} ui={ui} />
        </div>

        <aside className={s.bookCard} aria-label={ui("book_now")}>
          <div className={s.bookCardHead}>
            <span>{ui("from")}</span>
            <strong>{formatPrice(o.adultPrice)}</strong>
            <span>{ui("per_person")}</span>
          </div>
          <dl className={s.priceList}>
            <div>
              <dt>
                {ui("adult")} <small>{ui("adult_age")}</small>
              </dt>
              <dd>{formatPrice(o.adultPrice)}</dd>
            </div>
            <div>
              <dt>
                {ui("child")} <small>{ui("child_age")}</small>
              </dt>
              <dd>{formatPrice(o.childPrice)}</dd>
            </div>
            <div>
              <dt>{ui("duration")}</dt>
              <dd>{o.duration}</dd>
            </div>
          </dl>
          <Cta
            href={tour.bookingUrl!}
            external
            block
            size="lg"
            icon={<Icon name="arrowRight" size={18} />}
          >
            {ui("book_now")}
          </Cta>
          <TrustList ui={ui} />
          <a className={s.bookCardAlt} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} />
            {ui("whatsapp")}
          </a>
        </aside>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */

const OptionCard = ({
  option,
  index,
  tour,
  t,
  ui,
}: {
  option: TourOption;
  index: number;
  tour: TourConfig;
  t: T;
  ui: T;
}) => {
  const title = `${t(option.accent)} ${t(option.title)}`;
  return (
    <article
      className={`${s.option} ${index % 2 ? s.optionReverse : ""}`}
      id={option.id}
      aria-labelledby={`${option.id}-title`}
    >
      <div className={s.optionMedia}>
        <MediaSlider
          images={option.images}
          alt={`${tour.name} — ${title}`}
          interval={5000 + index * 700}
        />
      </div>
      <div className={s.optionBody}>
        <span className={s.optionIndex} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className={s.h3} id={`${option.id}-title`}>
          <span className={s.accentText}>{t(option.accent)}</span>{" "}
          {t(option.title)}
        </h3>
        <dl className={s.optionMeta}>
          <div>
            <dt>
              <Icon name="tag" size={16} />
              {ui("price")}
            </dt>
            <dd>{option.price ? formatPrice(option.price) : ui("on_request")}</dd>
          </div>
          {option.duration && (
            <div>
              <dt>
                <Icon name="clock" size={16} />
                {ui("duration")}
              </dt>
              <dd>{option.duration}</dd>
            </div>
          )}
        </dl>
        <ExpandableText paragraphs={toParagraphs(t.raw(option.description))} />
        <div className={s.optionActions}>
          {option.bookingUrl ? (
            <Cta
              href={option.bookingUrl}
              external
              icon={<Icon name="arrowRight" size={18} />}
            >
              {ui("book_now")}
            </Cta>
          ) : (
            <Cta href={WHATSAPP_URL} external icon={<Icon name="whatsapp" size={18} />}>
              {ui("whatsapp")}
            </Cta>
          )}
          <Cta href={WHATSAPP_URL} external variant="outline">
            {ui("contact")}
          </Cta>
        </div>
      </div>
    </article>
  );
};

const Options = ({ tour, t, ui }: { tour: TourConfig; t: T; ui: T }) => (
  <section
    className={`${s.section} ${s.sectionTint}`}
    id="overview"
    aria-labelledby="options-title"
  >
    <div className="container">
      <SectionHead
        id="options-title"
        eyebrow={t("four_variations")}
        title={ui("choose_experience")}
        text={ui("choose_experience_text")}
        center
      />
      <nav className={s.optionTabs} aria-label={ui("choose_experience")} id="options">
        {tour.options!.map((o) => (
          <a key={o.id} href={`#${o.id}`}>
            <span>
              {t(o.accent)} {t(o.title)}
            </span>
            <small>{o.price ? formatPrice(o.price) : ui("on_request")}</small>
          </a>
        ))}
      </nav>
      <div className={s.options}>
        {tour.options!.map((o, i) => (
          <OptionCard key={o.id} option={o} index={i} tour={tour} t={t} ui={ui} />
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */

const Highlights = ({ tour, t, ui }: { tour: TourConfig; t: T; ui: T }) => (
  <div className={s.highlights}>
    <h3 className={s.h4}>
      <Icon name="sparkle" size={18} />
      {t("highlights")}
    </h3>
    <ul className={s.checkList}>
      {tour.highlights.map((k) => (
        <li key={k}>
          <Icon name="check" size={18} />
          <span>{t(k)}</span>
        </li>
      ))}
    </ul>
    <h3 className={s.h4}>
      <Icon name="globe" size={18} />
      {t("spoken_languages")}
    </h3>
    <ul className={s.langs} aria-label={t("spoken_languages")}>
      {tour.languages.map((k) => (
        <li key={k}>{t(k)}</li>
      ))}
    </ul>
  </div>
);

const VideoSection = ({ tour, t, ui }: { tour: TourConfig; t: T; ui: T }) => (
  <section className={s.section} aria-labelledby="video-title">
    <div className={`container ${tour.options ? s.videoSplit : ""}`}>
      <div>
        <SectionHead id="video-title" title={ui("video")} center={!tour.options} />
        <VideoFacade
          youtubeId={tour.youtubeId}
          poster={tour.gallery[1] ?? tour.hero.image}
          title={`${tour.name} — ${ui("video")}`}
        />
      </div>
      {tour.options && <Highlights tour={tour} t={t} ui={ui} />}
    </div>
  </section>
);

/* ------------------------------------------------------------------ */

const GallerySection = ({ tour, ui }: { tour: TourConfig; ui: T }) => (
  <section className={`${s.section} ${s.sectionTint}`} aria-labelledby="gallery-title">
    <div className="container">
      <SectionHead id="gallery-title" title={ui("gallery")} />
      <TourGallery images={tour.gallery} alt={tour.name} />
    </div>
  </section>
);

const INFO_BLOCKS: { key: keyof TourConfig["info"]; title: string; icon: IconName }[] = [
  { key: "reminders", title: "reminders", icon: "bell" },
  { key: "perks", title: "perks", icon: "gift" },
  { key: "important", title: "important_information", icon: "info" },
];

const InfoSection = ({ tour, t, ui }: { tour: TourConfig; t: T; ui: T }) => (
  <section className={s.section} aria-labelledby="info-title">
    <div className="container">
      <SectionHead id="info-title" title={ui("good_to_know")} />
      <div className={s.infoGrid}>
        {INFO_BLOCKS.map((b) => (
          <div className={s.infoCard} key={b.key}>
            <span className={s.infoIcon}>
              <Icon name={b.icon} size={22} />
            </span>
            <h3 className={s.h4}>{t(b.title)}</h3>
            <ul className={s.checkList}>
              {tour.info[b.key].map((k) => (
                <li key={k}>
                  <Icon name="checkCircle" size={18} />
                  <span>{String(t(k)).replace(/;\s*$/, "")}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReviewsSection = ({ tour, ui }: { tour: TourConfig; ui: T }) =>
  tour.reviews ? (
    <section className={`${s.section} ${s.sectionTint}`} aria-labelledby="reviews-title">
      <div className="container">
        <SectionHead id="reviews-title" title={ui("reviews")} />
        <Reviews type={tour.reviews} />
      </div>
    </section>
  ) : null;

const MeetingSection = ({ tour, ui, mt }: { tour: TourConfig; ui: T; mt: T }) => (
  <section className={s.section} aria-labelledby="meeting-title">
    <div className={`container ${s.meeting}`}>
      <div className={s.meetingCard}>
        <span className={s.infoIcon}>
          <Icon name="pin" size={22} />
        </span>
        <h2 className={s.h3} id="meeting-title">
          {ui("meeting_point")}
        </h2>
        {tour.meeting.lines.map((k) => (
          <p key={k}>{mt(k)}</p>
        ))}
        <div className={s.meetingActions}>
          <Cta href={tour.meeting.mapsUrl} external variant="ocean" icon={<Icon name="pin" size={18} />}>
            {ui("open_maps")}
          </Cta>
          <Cta href={`tel:${PHONE}`} variant="outline" icon={<Icon name="phone" size={18} />}>
            {PHONE_DISPLAY}
          </Cta>
        </div>
      </div>
      <div className={s.map}>
        <iframe
          src={tour.meeting.embed}
          title={`${ui("meeting_point")} — ${tour.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  </section>
);

const PrivateCta = ({ tour, t, ui }: { tour: TourConfig; t: T; ui: T }) => (
  <section className={s.privateCta} id={tour.privateAnchor} aria-labelledby="private-title">
    <Image
      src={tour.gallery[2] ?? tour.hero.image}
      alt=""
      fill
      sizes="100vw"
      quality={60}
      className={s.privateImg}
    />
    <div className={`container ${s.privateInner}`}>
      <div>
        <h2 className={s.h2} id="private-title">
          {t("private_tour")}
        </h2>
        <p className={s.lead}>{ui("private_text")}</p>
      </div>
      <Cta href={WHATSAPP_URL} external size="lg" icon={<Icon name="whatsapp" size={20} />}>
        {ui("whatsapp")}
      </Cta>
    </div>
  </section>
);

const StickyBar = ({ tour, ui }: { tour: TourConfig; ui: T }) => (
  <div className={s.stickyBar}>
    <div>
      <small>{ui("from")}</small>
      <strong>{formatPrice(tour.fromPrice)}</strong>
    </div>
    <Cta
      href={tour.options ? "#options" : tour.bookingUrl!}
      external={!tour.options}
      size="md"
    >
      {ui("book_now")}
    </Cta>
  </div>
);

/* ------------------------------------------------------------------ */

const structuredData = (tour: TourConfig, locale: string, ui: T) => {
  const url = localizedUrl(locale, `/${tour.slug}`);
  const prices = tour.options
    ? tour.options.filter((o) => o.price).map((o) => o.price!)
    : [tour.overview!.childPrice, tour.overview!.adultPrice];
  return [
    {
      "@context": "https://schema.org",
      "@type": ["TouristTrip", "Product"],
      name: tour.name,
      url,
      image: [tour.hero.image, ...tour.gallery.slice(0, 4)].map(
        (p) => `${SITE_URL}${p}`
      ),
      touristType: ["Families", "Couples", "Groups"],
      brand: { "@type": "Brand", name: "Boatrips" },
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: Math.min(...prices),
        highPrice: Math.max(...prices),
        offerCount: prices.length,
        availability: "https://schema.org/InStock",
        url: tour.bookingUrl ?? url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { name: ui("home"), item: localizedUrl(locale) },
        { name: ui("tours"), item: localizedUrl(locale, "/tours") },
        { name: tour.name, item: url },
      ].map((it, i) => ({ "@type": "ListItem", position: i + 1, ...it })),
    },
  ];
};

const TourPage = ({ slug }: { slug: TourSlug }) => {
  const tour = tours[slug];
  const locale = useLocale();
  const t = useTranslations(tour.ns) as unknown as T;
  const ui = useTranslations("tour_ui") as unknown as T;
  const mt = useTranslations(tour.meeting.ns ?? tour.ns) as unknown as T;

  return (
    <div className={s.page}>
      <JsonLd data={structuredData(tour, locale, ui)} />
      <Hero tour={tour} t={t} ui={ui} />
      {tour.options ? (
        <Options tour={tour} t={t} ui={ui} />
      ) : (
        <Overview tour={tour} t={t} ui={ui} />
      )}
      <VideoSection tour={tour} t={t} ui={ui} />
      <GallerySection tour={tour} ui={ui} />
      <InfoSection tour={tour} t={t} ui={ui} />
      <ReviewsSection tour={tour} ui={ui} />
      <MeetingSection tour={tour} ui={ui} mt={mt} />
      <PrivateCta tour={tour} t={t} ui={ui} />
      <StickyBar tour={tour} ui={ui} />
    </div>
  );
};

export default TourPage;
