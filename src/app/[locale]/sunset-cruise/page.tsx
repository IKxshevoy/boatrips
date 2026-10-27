import type { Metadata } from "next";
import TourPage from "@/components/tour/TourPage";
import { tours } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";

const SLUG = "sunset-cruise" as const;

const meta = {
  title: "Sunset Cruise Lagos | Algarve Sunset Boat Tour | Boatrips",
  description:
    "Watch the golden Algarve sunset from the sea on a romantic boat cruise in Lagos, Portugal. Perfect for couples, families and groups. Book your sunset tour today.",
  keywords: [
    "sunset cruise Lagos",
    "sunset boat tour Lagos",
    "sunset cruise Algarve",
    "sunset tour Portugal",
    "romantic sunset cruise Lagos",
    "evening boat tour Lagos",
    "sunset sailing Lagos",
    "golden hour cruise Algarve",
    "Lagos sunset boat trip",
    "sunset boat tour Algarve",
    "sunset cruise Portugal",
    "sunset tour Lagos Portugal",
    "evening cruise Algarve",
    "sunset boat ride Lagos",
  ],
  openGraph: {
    title: "Sunset Cruise in Lagos, Algarve | Boatrips",
    description:
      "Watch a spectacular Algarve sunset from the sea. Join our sunset boat cruise in Lagos, Portugal — perfect for couples and groups.",
    url: "https://www.boatrips.eu/sunset-cruise",
    siteName: "Boatrips",
    type: "website",
    images: [
      {
        url: "https://www.boatrips.eu/Logo.webp",
        width: 600,
        height: 600,
        alt: "Sunset Cruise Lagos Algarve",
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
    path: `/${SLUG}`,
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    ogTitle: meta.openGraph.title,
    ogDescription: meta.openGraph.description,
    image: tours[SLUG].hero.image,
    imageAlt: meta.openGraph.images[0].alt,
  });
}

export default function Page() {
  return <TourPage slug={SLUG} />;
}
