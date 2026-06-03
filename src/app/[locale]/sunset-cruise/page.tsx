import type { Metadata } from "next";
import SunsetCruiseClient from "./SunsetCruiseClient";

export const metadata: Metadata = {
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
};

export default function SunsetCruisePage() {
  return <SunsetCruiseClient />;
}
