import type { MetadataRoute } from "next";
import { locales } from "@/lib/locales";
import { SITE_URL, tourOrder } from "@/data/tours";

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/tours", priority: 0.9 },
  ...tourOrder.map((slug) => ({ path: `/${slug}`, priority: 0.9 })),
  { path: "/contact", priority: 0.6 },
  { path: "/terms-and-conditions", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority,
    }))
  );
}
