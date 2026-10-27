// Single source of truth for every tour page. Text lives in the
// `messages/*.json` namespace given by `ns`; everything here is data.

export const SITE_URL = "https://www.boatrips.eu";
export const WHATSAPP_URL = "https://wa.me/351969184712";
export const PHONE = "+351969184712";
export const PHONE_DISPLAY = "+351 969 184 712";
export const EMAIL = "boatripseu@gmail.com";
export const PROMO_CODE = "SEADAY";

const book = (item: number) =>
  `https://fareharbor.com/embeds/book/boatrips/items/${item}/?full-items=yes&flow=536599`;

export type TourSlug =
  | "catamaran-cruise"
  | "yacht-cruise"
  | "ponta-da-piedade-caves-cruise"
  | "ponta-da-piedade-2-hours-cruise"
  | "benagil-caves-speed-boat-tour"
  | "sunset-cruise";

export type ReviewType = "classic" | "benagil" | "coastline" | "sunset";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface TourOption {
  id: string;
  /** translation keys: `accent` is highlighted, `title` follows it */
  accent: string;
  title: string;
  description: string;
  /** numeric price in EUR; omitted for on-request options */
  price?: number;
  duration?: string;
  bookingUrl?: string;
  images: string[];
}

export interface TourConfig {
  slug: TourSlug;
  ns: string;
  /** short English name used for alt texts & structured data */
  name: string;
  hero: {
    image: string;
    /** translation keys rendered as a small line above the title */
    kicker?: string[];
    title: string;
    accent: string;
    /** shows the free-drinks chip */
    drinks?: boolean;
    promo?: boolean;
  };
  /** single-product tours */
  overview?: {
    title: { lead?: string; accent: string; tail?: string };
    description: string;
    adultPrice: number;
    childPrice: number;
    duration: string;
  };
  /** multi-option charters (catamaran, yacht) */
  options?: TourOption[];
  bookingUrl?: string;
  /** cheapest price, used by cards & structured data */
  fromPrice: number;
  durationLabel: string;
  youtubeId: string;
  highlights: string[];
  languages: string[];
  info: { reminders: string[]; perks: string[]; important: string[] };
  meeting: {
    /** namespace + key pairs; yacht has no own meeting-point copy */
    ns?: string;
    lines: string[];
    embed: string;
    mapsUrl: string;
  };
  reviews?: ReviewType;
  privateAnchor?: string;
  gallery: string[];
}

const MAP_MARINA =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3181.8522247794276!2d-8.673173!3d37.108635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDA2JzMxLjEiTiA4wrA0MCcyMy40Ilc!5e0!3m2!1sen!2spt!4v1747379996172!5m2!1sen!2spt";
const MAP_MEETING_POINT =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198.87397657759033!2d-8.672685023171008!3d37.10550727572992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f75.1!3m3!1m2!1s0xd1b31005de4819f%3A0xcdb47c826c876abf!2sBoatrips%20meeting%20point!5e0!3m2!1sen!2spt!4v1748769174577!5m2!1sen!2spt";
const MAP_PONTOONS =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d795.4491699618382!2d-8.67467273035517!3d37.10995706776316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDA2JzM1LjgiTiA4wrA0MCcyNi41Ilc!5e0!3m2!1sen!2spt!4v1750221048654!5m2!1sen!2spt";
const MAP_YACHT =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d198.86375786939428!2d-8.673742455244422!3d37.10939901485573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f70.1!3m2!1m1!2zMzfCsDA2JzMzLjgiTiA4wrA0MCcyNC44Ilc!5e0!3m2!1sen!2spt!4v1748766594813!5m2!1sen!2spt";

const mapsLink = (lat: number, lng: number) =>
  `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

const LANGUAGES = ["english", "portuguese", "spanish", "french"];
const HIGHLIGHTS = [
  "first_highlight",
  "second_highlight",
  "third_highlight",
  "fourth_highlight",
];
const range = (prefix: string, names: string[]) =>
  names.map((n) => `${n}_${prefix}`);
const FOUR = ["first", "second", "third", "fourth"];
const THREE = ["first", "second", "third"];

export const tours: Record<TourSlug, TourConfig> = {
  "catamaran-cruise": {
    slug: "catamaran-cruise",
    ns: "catamaran-cruise",
    name: "Catamaran Cruise",
    hero: {
      image: "/catamaran/14.webp",
      kicker: ["sail", "coast"],
      title: "on_unforgettable",
      accent: "catamaran_cruise",
      drinks: true,
    },
    options: [
      {
        id: "daytime-sailing",
        accent: "daytime",
        title: "sailing",
        description: "daytime_desc",
        price: 1200,
        duration: "3H",
        bookingUrl: book(644811),
        images: [
          "/catamaran/7.webp",
          "/catamaran/14.webp",
          "/catamaran/10.webp",
          "/catamaran/17.webp",
          "/catamaran/6.webp",
          "/catamaran/25.webp",
        ],
      },
      {
        id: "private-full-day",
        accent: "private",
        title: "full_Day",
        description: "full_day",
        price: 1900,
        duration: "7H",
        bookingUrl: book(645533),
        images: [
          "/catamaran/5.webp",
          "/catamaran/21.webp",
          "/catamaran/8.webp",
          "/catamaran/24.webp",
          "/catamaran/1.webp",
          "/catamaran/4.webp",
          "/catamaran/11.webp",
        ],
      },
      {
        id: "sunset",
        accent: "sunset",
        title: "tour",
        description: "sunset_desc",
        price: 150,
        duration: "2H 30M",
        bookingUrl: book(645536),
        images: [
          "/catamaran/3.webp",
          "/catamaran/9.webp",
          "/catamaran/15.webp",
          "/catamaran/13.webp",
        ],
      },
      {
        id: "custom",
        accent: "custom",
        title: "tour",
        description: "sunrise_desc",
        images: [
          "/catamaran/23.webp",
          "/catamaran/12.webp",
          "/catamaran/18.webp",
          "/catamaran/19.webp",
          "/catamaran/20.webp",
          "/catamaran/2.webp",
        ],
      },
    ],
    fromPrice: 150,
    durationLabel: "2H 30M – 7H",
    youtubeId: "HJbHHY5JX1s",
    highlights: HIGHLIGHTS,
    languages: LANGUAGES,
    info: {
      reminders: range("reminder", FOUR),
      perks: range("perk", FOUR),
      important: range("info", THREE),
    },
    meeting: {
      lines: ["meet_at", "cant_find"],
      embed: MAP_PONTOONS,
      mapsUrl: mapsLink(37.109944, -8.674028),
    },
    gallery: [
      "/catamaran/7.webp",
      "/catamaran/1.webp",
      "/catamaran/10.webp",
      "/catamaran/11.webp",
      "/catamaran/23.webp",
      "/catamaran/13.webp",
      "/catamaran/2.webp",
      "/catamaran/25.webp",
      "/catamaran/24.webp",
      "/catamaran/8.webp",
    ],
  },

  "yacht-cruise": {
    slug: "yacht-cruise",
    ns: "yacht-cruise",
    name: "Yacht Cruise",
    hero: {
      image: "/yacht/7.webp",
      kicker: ["explore", "beauty"],
      title: "on_unforgettable",
      accent: "yacht_cruise",
      drinks: true,
    },
    options: [
      {
        id: "golden-hour",
        accent: "golden",
        title: "hour",
        description: "golden_hour_desc",
        price: 150,
        duration: "3H",
        bookingUrl: book(560967),
        images: [
          "/yacht/1.webp",
          "/yacht/4.webp",
          "/yacht/5.webp",
          "/yacht/8.webp",
          "/yacht/12.webp",
          "/yacht/6.webp",
        ],
      },
      {
        id: "sunrise",
        accent: "sunrise",
        title: "tour",
        description: "sunrise_desc",
        price: 500,
        duration: "2H 30M",
        bookingUrl: book(559013),
        images: [
          "/yacht/sunrise/1.webp",
          "/yacht/sunrise/4.webp",
          "/yacht/sunrise/2.webp",
          "/yacht/sunrise/5.webp",
          "/yacht/sunrise/3.webp",
        ],
      },
      {
        id: "sunset",
        accent: "sunset",
        title: "tour",
        description: "sunset_desc",
        price: 450,
        duration: "2H 30M",
        bookingUrl: book(560665),
        images: [
          "/yacht/sunset/9.webp",
          "/yacht/sunset/1.webp",
          "/yacht/sunset/7.webp",
          "/yacht/sunset/8.webp",
          "/yacht/sunset/6.webp",
          "/yacht/sunset/3.webp",
        ],
      },
      {
        id: "private-full-day",
        accent: "private",
        title: "full_Day",
        description: "full_day",
        price: 900,
        duration: "7H",
        bookingUrl: book(560962),
        images: [
          "/yacht/sunset/5.webp",
          "/yacht/sunset/2.webp",
          "/yacht/3.webp",
          "/yacht/2.webp",
          "/yacht/11.webp",
          "/yacht/sunset/4.webp",
        ],
      },
    ],
    fromPrice: 150,
    durationLabel: "2H 30M – 7H",
    youtubeId: "i47_VbLFS_s",
    highlights: HIGHLIGHTS,
    languages: LANGUAGES,
    info: {
      reminders: range("reminder", FOUR),
      perks: range("perk", FOUR),
      important: range("info", THREE),
    },
    meeting: {
      ns: "benagil-caves",
      lines: ["cant_find"],
      embed: MAP_YACHT,
      mapsUrl: mapsLink(37.109389, -8.673556),
    },
    gallery: [
      "/yacht/1.webp",
      "/yacht/sunset/7.webp",
      "/yacht/sunset/9.webp",
      "/yacht/7.webp",
      "/yacht/2.webp",
      "/yacht/5.webp",
      "/yacht/6.webp",
      "/yacht/8.webp",
      "/yacht/9.webp",
      "/yacht/sunrise/3.webp",
    ],
  },

  "ponta-da-piedade-caves-cruise": {
    slug: "ponta-da-piedade-caves-cruise",
    ns: "ponta-da-piedade-caves-cruise",
    name: "Ponta da Piedade Caves Cruise",
    hero: {
      image: "/main.webp",
      title: "caves_of",
      accent: "ponta_da_piedade",
      promo: true,
    },
    overview: {
      title: { lead: "caves_of", accent: "ponta_da_piedade", tail: "boat_tour" },
      description: "tour_description",
      adultPrice: 20,
      childPrice: 10,
      duration: "1H 15M",
    },
    bookingUrl: book(292229),
    fromPrice: 20,
    durationLabel: "1H 15M",
    youtubeId: "DE5Ii0DnYo8",
    highlights: HIGHLIGHTS,
    languages: LANGUAGES,
    info: {
      reminders: range("reminder", FOUR),
      perks: range("perk", THREE),
      important: range("info", FOUR),
    },
    meeting: {
      lines: ["cant_find"],
      embed: MAP_MARINA,
      mapsUrl: mapsLink(37.108635, -8.673173),
    },
    reviews: "classic",
    privateAnchor: "private-classic",
    gallery: [
      "/classic/19.webp",
      "/classic/2.webp",
      "/classic/3.webp",
      "/classic/4.webp",
      "/classic/5.webp",
      "/classic/6.webp",
      "/classic/12.webp",
      "/classic/8.webp",
      "/classic/9.webp",
      "/classic/10.webp",
    ],
  },

  "ponta-da-piedade-2-hours-cruise": {
    slug: "ponta-da-piedade-2-hours-cruise",
    ns: "ponta-da-piedade-2-hours-cruise",
    name: "Ponta da Piedade Cave & Coastal Tour",
    hero: {
      image: "/coastline/4.webp",
      title: "title",
      accent: "boat_tour",
      promo: true,
    },
    overview: {
      title: { accent: "title", tail: "boat_tour" },
      description: "tour_description",
      adultPrice: 30,
      childPrice: 15,
      duration: "2H",
    },
    bookingUrl: book(292221),
    fromPrice: 30,
    durationLabel: "2H",
    youtubeId: "NBvS3qXCZpA",
    highlights: HIGHLIGHTS,
    languages: LANGUAGES,
    info: {
      reminders: range("reminder", FOUR),
      perks: range("perk", FOUR),
      important: range("info", FOUR),
    },
    meeting: {
      lines: ["cant_find"],
      embed: MAP_MEETING_POINT,
      mapsUrl: mapsLink(37.105507, -8.672685),
    },
    reviews: "coastline",
    gallery: Array.from({ length: 10 }, (_, i) => `/coastline/${i + 1}.webp`),
  },

  "benagil-caves-speed-boat-tour": {
    slug: "benagil-caves-speed-boat-tour",
    ns: "benagil-caves",
    name: "Benagil Caves Speed Boat Tour",
    hero: {
      image: "/benagil/bgg.webp",
      title: "benagil-caves",
      accent: "boat_tour",
      promo: true,
    },
    overview: {
      title: { accent: "benagil-caves", tail: "boat_tour" },
      description: "tour_description",
      adultPrice: 40,
      childPrice: 25,
      duration: "1H 45M",
    },
    bookingUrl: book(375985),
    fromPrice: 40,
    durationLabel: "1H 45M",
    youtubeId: "RPDbY7EheN8",
    highlights: HIGHLIGHTS,
    languages: LANGUAGES,
    info: {
      reminders: range("reminder", FOUR),
      perks: range("perk", THREE),
      important: range("info", FOUR),
    },
    meeting: {
      ns: "ponta-da-piedade-caves-cruise",
      lines: ["cant_find"],
      embed: MAP_MARINA,
      mapsUrl: mapsLink(37.108635, -8.673173),
    },
    reviews: "benagil",
    gallery: [
      "/sunset/1.webp",
      ...Array.from({ length: 9 }, (_, i) => `/benagil/${i + 2}.webp`),
    ],
  },

  "sunset-cruise": {
    slug: "sunset-cruise",
    ns: "sunset-cruise",
    name: "Ponta da Piedade Sunset Cruise",
    hero: {
      image: "/sunset/7.webp",
      title: "ponta_da_piedade",
      accent: "sunset_cruise",
      promo: true,
      drinks: true,
    },
    overview: {
      title: { accent: "sunset_cruise" },
      description: "tour_description",
      adultPrice: 40,
      childPrice: 20,
      duration: "1H 30M",
    },
    bookingUrl: book(292233),
    fromPrice: 40,
    durationLabel: "1H 30M",
    youtubeId: "CoAXzUaSiFE",
    highlights: HIGHLIGHTS,
    languages: LANGUAGES,
    info: {
      reminders: range("reminder", THREE),
      perks: range("perk", FOUR),
      important: range("info", THREE),
    },
    meeting: {
      lines: ["cant_find"],
      embed: MAP_MEETING_POINT,
      mapsUrl: mapsLink(37.105507, -8.672685),
    },
    reviews: "sunset",
    privateAnchor: "private-sunset",
    gallery: [
      "/sunset/1.webp",
      "/sunset/2.webp",
      "/sunset/3.webp",
      "/sunset/4.webp",
      "/sunset/5.webp",
      "/sunset/6.webp",
      "/sunset/8.webp",
      "/sunset/9.webp",
      "/sunset/10.webp",
      "/sunset/11.webp",
    ],
  },
};

/** order used by listings & navigation */
export const tourOrder: TourSlug[] = [
  "ponta-da-piedade-caves-cruise",
  "catamaran-cruise",
  "yacht-cruise",
  "ponta-da-piedade-2-hours-cruise",
  "benagil-caves-speed-boat-tour",
  "sunset-cruise",
];
