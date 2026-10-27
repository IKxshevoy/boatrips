import type { Metadata } from "next";
import TourPage from "@/components/tour/TourPage";
import { tours } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";

const SLUG = "ponta-da-piedade-2-hours-cruise" as const;

const meta = {
  title: "Ponta da Piedade 2 Hour Coastline Cruise Lagos | Boatrips",
  description:
    "2-hour coastline boat cruise along Ponta da Piedade in Lagos, Portugal. See golden cliffs, hidden grottoes and swim in crystal-clear Atlantic waters.",
  keywords: [
    "Ponta da Piedade 2 hour cruise",
    "coastline cruise Lagos",
    "Lagos coastline tour",
    "2 hour boat tour Lagos",
    "Algarve coastline cruise",
    "Ponta da Piedade boat trip",
    "Lagos boat cruise 2 hours",
    "cliff tour Lagos Portugal",
    "coastline boat trip Algarve",
    "swimming tour Lagos",
    "boat tour Lagos Portugal",
    "scenic cruise Algarve",
    "Lagos scenic boat tour",
    "Algarve cliff boat tour",
  ],
  openGraph: {
    title: "2 Hour Coastline Cruise at Ponta da Piedade | Lagos | Boatrips",
    description:
      "Cruise along the stunning Ponta da Piedade coastline in Lagos. See dramatic cliffs, hidden grottoes and enjoy a swim in the crystal-clear Atlantic.",
    url: "https://www.boatrips.eu/ponta-da-piedade-2-hours-cruise",
    siteName: "Boatrips",
    type: "website",
    images: [
      {
        url: "https://www.boatrips.eu/Logo.webp",
        width: 600,
        height: 600,
        alt: "Ponta da Piedade Coastline Cruise Lagos",
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
