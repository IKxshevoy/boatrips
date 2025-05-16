"server-only";

import { notFound } from "next/navigation";
import { type AbstractIntlMessages } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getRequestConfig } from "next-intl/server";

import { locales, type Locale } from "@/lib/locales";

const messageImports = {
  en: () => import("./messages/en.json"),
  de: () => import("./messages/de.json"),
  fr: () => import("./messages/fr.json"),
  pt: () => import("./messages/pt.json"),
} as const satisfies Record<
  Locale,
  () => Promise<{ default: AbstractIntlMessages }>
>;

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale);
}

export default getRequestConfig(async (params) => {
  const baseLocale = new Intl.Locale(params.locale).baseName;
  if (!isValidLocale(baseLocale)) {
    notFound();
  }

  const messages = (await messageImports[baseLocale]()).default;
  return {
    messages,
  };
});

export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
