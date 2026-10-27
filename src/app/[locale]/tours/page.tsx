import type { Metadata } from "next";
import ToursClient from "./ToursClient";
import { pageMetadata } from "@/lib/seo";

const meta = {
  title: "All Boat Tours Lagos Portugal | Boatrips",
  description:
    "Browse all boat tours in Lagos, Portugal. Cave tours, sunset cruises, catamaran sailing, yacht charters & more along the stunning Algarve coastline.",
  keywords: [
    "boat tours Lagos Portugal",
    "all tours Lagos",
    "Lagos boat trips",
    "Algarve tours",
    "boat tours Algarve",
    "Lagos tours list",
    "sea tours Lagos",
    "boat excursions Lagos",
    "Lagos tour packages",
    "Algarve boat excursions",
    "best boat tours Lagos",
    "ocean tours Lagos Portugal",
  ],
  openGraph: {
    title: "All Boat Tours in Lagos, Algarve | Boatrips",
    description:
      "Explore our full range of boat tours in Lagos, Portugal — from cave tours and sunset cruises to catamaran and yacht charters along the Algarve coast.",
    url: "https://www.boatrips.eu/tours",
    siteName: "Boatrips",
    type: "website",
    images: [
      {
        url: "https://www.boatrips.eu/Logo.webp",
        width: 600,
        height: 600,
        alt: "Boat Tours Lagos Portugal",
      },
    ],
  },
} as const;

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  return pageMetadata({
    locale,
    path: "/tours",
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    ogTitle: meta.openGraph.title,
    ogDescription: meta.openGraph.description,
    image: "/classic/19.webp",
    imageAlt: meta.openGraph.images[0].alt,
  });
}

export default function Page() {
  return <ToursClient />;
}
