import type { Metadata } from "next";
import PontaDaPiedadeCavesClient from "./PontaDaPiedadeCavesClient";

export const metadata: Metadata = {
  title: "Ponta da Piedade Caves Cruise Lagos | Sea Cave Tour Algarve | Boatrips",
  description:
    "Explore the stunning sea caves and golden rock formations of Ponta da Piedade on a boat tour from Lagos. One of the most beautiful coastlines in the Algarve.",
  keywords: [
    "Ponta da Piedade tour",
    "Ponta da Piedade caves",
    "Ponta da Piedade boat tour",
    "sea caves Lagos",
    "cave tour Lagos Portugal",
    "Algarve cave tour",
    "Lagos caves boat trip",
    "rock formations Lagos",
    "grotto tour Lagos",
    "Ponta da Piedade Lagos",
    "boat tour Lagos caves",
    "sea grotto Algarve",
    "coastal cave tour Portugal",
    "Lagos rock arch tour",
    "Algarve sea caves",
  ],
  openGraph: {
    title: "Ponta da Piedade Caves Cruise | Lagos, Algarve | Boatrips",
    description:
      "Discover the iconic sea caves and dramatic cliffs of Ponta da Piedade on a guided boat tour from Lagos, Portugal.",
    url: "https://www.boatrips.eu/ponta-da-piedade-caves-cruise",
    siteName: "Boatrips",
    type: "website",
    images: [
      {
        url: "https://www.boatrips.eu/Logo.webp",
        width: 600,
        height: 600,
        alt: "Ponta da Piedade Caves Cruise Lagos",
      },
    ],
  },
};

export default function PontaDaPiedadeCavesPage() {
  return <PontaDaPiedadeCavesClient />;
}
