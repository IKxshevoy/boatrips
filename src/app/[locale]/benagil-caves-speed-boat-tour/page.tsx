import type { Metadata } from "next";
import TourPage from "@/components/tour/TourPage";
import { tours } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";

const SLUG = "benagil-caves-speed-boat-tour" as const;

const meta = {
  title: "Benagil Cave Speed Boat Tour Lagos | Algarve Cave Tour | Boatrips",
  description:
    "Visit the world-famous Benagil Cave on a thrilling speed boat tour from Lagos. One of the most breathtaking sea caves in the world, on the Algarve coast.",
  keywords: [
    "Benagil cave tour",
    "Benagil cave Lagos",
    "Benagil cave boat tour",
    "Benagil speed boat",
    "Benagil cave Algarve",
    "Benagil grotto tour",
    "speed boat tour Lagos",
    "speed boat Algarve",
    "Benagil cave Portugal",
    "Algarve cave boat tour",
    "Benagil sea cave",
    "boat tour Benagil",
    "Lagos speed boat tour",
    "Benagil cave trip",
    "best Benagil cave tour",
  ],
  openGraph: {
    title: "Benagil Cave Speed Boat Tour from Lagos | Boatrips",
    description:
      "See the iconic Benagil Cave — one of the world's most beautiful sea caves — on a thrilling speed boat tour departing from Lagos, Algarve.",
    url: "https://www.boatrips.eu/benagil-caves-speed-boat-tour",
    siteName: "Boatrips",
    type: "website",
    images: [
      {
        url: "https://www.boatrips.eu/Logo.webp",
        width: 600,
        height: 600,
        alt: "Benagil Cave Speed Boat Tour Lagos Algarve",
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
