import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/locales";
import { SITE_URL } from "@/data/tours";

const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  pt: "pt_PT",
};

/** `path` without locale, e.g. "" for home or "/tours" */
export const localizedUrl = (locale: string, path = "") =>
  `${SITE_URL}/${locale}${path}`;

export const alternates = (locale: string, path = "") => ({
  canonical: localizedUrl(locale, path),
  languages: {
    ...Object.fromEntries(locales.map((l) => [l, localizedUrl(l, path)])),
    "x-default": localizedUrl("en", path),
  },
});

interface PageMetaInput {
  locale: string;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  imageAlt?: string;
}

export const pageMetadata = ({
  locale,
  path,
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  image = "/Logo.webp",
  imageAlt,
}: PageMetaInput): Metadata => ({
  title,
  description,
  keywords,
  alternates: alternates(locale, path),
  openGraph: {
    title: ogTitle ?? title,
    description: ogDescription ?? description,
    url: localizedUrl(locale, path),
    siteName: "Boatrips",
    type: "website",
    locale: OG_LOCALES[locale as Locale] ?? "en_US",
    images: [{ url: `${SITE_URL}${image}`, alt: imageAlt ?? title }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle ?? title,
    description: ogDescription ?? description,
    images: [`${SITE_URL}${image}`],
  },
});

export const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    // JSON.stringify output is safe apart from "</script>" sequences
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);
