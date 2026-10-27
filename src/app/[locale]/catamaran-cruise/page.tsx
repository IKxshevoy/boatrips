import type { Metadata } from "next";
import TourPage from "@/components/tour/TourPage";
import { tours } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";

const SLUG = "catamaran-cruise" as const;

const meta = {
  title: "Catamaran Cruise Lagos | Sailing Tours Algarve | Boatrips",
  description:
    "Book a catamaran cruise in Lagos, Portugal. Sunset, sunrise, daytime & full-day catamaran tours along the Algarve coast. Perfect for families, groups & couples.",
  keywords: [
    "catamaran cruise Lagos",
    "catamaran tour Lagos",
    "catamaran tour Algarve",
    "sailing catamaran Lagos",
    "catamaran trip Portugal",
    "catamaran boat tour Lagos",
    "private catamaran Lagos",
    "catamaran rental Lagos",
    "catamaran sunset cruise Lagos",
    "catamaran sunrise cruise Lagos",
    "sailing tour Lagos",
    "sailing tour Algarve",
    "catamaran Lagos Portugal",
    "group catamaran tour Lagos",
    "catamaran cruise Algarve",
    "catamaran holiday Portugal",
    "best catamaran tours Lagos",
    "shared catamaran tour Lagos",
    "full day catamaran Algarve",
  ],
  openGraph: {
    title: "Catamaran Cruise in Lagos, Algarve | Boatrips",
    description:
      "Sail the stunning Algarve coast on a catamaran. Choose from sunset, sunrise, daytime, or full-day tours departing from Lagos, Portugal.",
    url: "https://www.boatrips.eu/catamaran-cruise",
    siteName: "Boatrips",
    type: "website",
    images: [
      {
        url: "https://www.boatrips.eu/Logo.webp",
        width: 600,
        height: 600,
        alt: "Catamaran Cruise Lagos Algarve",
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
