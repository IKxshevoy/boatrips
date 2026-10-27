import type { Metadata } from "next";
import TourPage from "@/components/tour/TourPage";
import { tours } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";

const SLUG = "yacht-cruise" as const;

const meta = {
  title: "Yacht Cruise Lagos | Private Sailing Tours Algarve | Boatrips",
  description:
    "Luxury yacht cruises in Lagos, Portugal. Sunset, sunrise, golden hour & full-day private yacht tours along the stunning Algarve coastline.",
  keywords: [
    "yacht cruise Lagos",
    "yacht tour Lagos",
    "private yacht tour Lagos",
    "luxury yacht Algarve",
    "yacht tour Portugal",
    "sailing yacht Lagos",
    "private yacht rental Lagos",
    "yacht trip Lagos",
    "yacht sailing Algarve",
    "luxury yacht cruise Lagos Portugal",
    "sunset yacht cruise Lagos",
    "sunrise yacht Lagos",
    "golden hour yacht cruise",
    "private sailing tour Lagos",
    "yacht charter Lagos",
    "yacht charter Algarve",
    "boat sailing tour Lagos",
    "yacht cruise Portugal",
    "full day yacht tour Algarve",
  ],
  openGraph: {
    title: "Yacht Cruise in Lagos, Algarve | Boatrips",
    description:
      "Experience a luxury yacht cruise in Lagos, Portugal. Private sunset, sunrise & full-day yacht tours along the breathtaking Algarve coast.",
    url: "https://www.boatrips.eu/yacht-cruise",
    siteName: "Boatrips",
    type: "website",
    images: [
      {
        url: "https://www.boatrips.eu/Logo.webp",
        width: 600,
        height: 600,
        alt: "Yacht Cruise Lagos Algarve",
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
