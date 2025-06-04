"server-only";

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
  const locale = typeof params.locale === "string" ? params.locale : "";

  // Reject locale if it contains a dot (likely a filename like favicon.ico) or invalid pattern
  if (
    !locale ||
    locale.includes(".") ||
    !/^[a-z]{2}(-[A-Z]{2})?$/.test(locale)
  ) {
    console.warn("Invalid locale detected, falling back to default:", locale);
    return { messages: (await messageImports["en"]()).default };
  }

  try {
    const baseLocale = new Intl.Locale(locale).baseName;
    if (!isValidLocale(baseLocale)) {
      console.warn(
        "Unsupported locale detected, falling back to default:",
        baseLocale
      );
      return { messages: (await messageImports["en"]()).default };
    }
    const messages = (await messageImports[baseLocale]()).default;
    return { messages };
  } catch (err) {
    console.error(
      "Error loading locale messages, falling back to default:",
      err
    );
    return { messages: (await messageImports["en"]()).default };
  }
});

export const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
