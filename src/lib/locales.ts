export const locales = ["en", "de", "fr", "pt"] as const;
export type Locale = (typeof locales)[number];
