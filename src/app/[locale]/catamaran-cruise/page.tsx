import type { Metadata } from "next";
import CatamaranCruiseClient from "./CatamaranCruiseClient";

export const metadata: Metadata = {
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
};

export default function CatamaranCruisePage() {
  return <CatamaranCruiseClient />;
}
