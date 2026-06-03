import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Boatrips | Boat Tours Lagos Portugal",
  description:
    "Get in touch with Boatrips to book a boat tour, private charter, or custom excursion in Lagos, Algarve, Portugal. We speak English, Portuguese, Spanish, French & Russian.",
  keywords: [
    "contact Boatrips",
    "book boat tour Lagos",
    "private charter Lagos",
    "boat tour inquiry Lagos",
    "Lagos boat tour booking",
    "custom boat tour Algarve",
  ],
  openGraph: {
    title: "Contact Boatrips | Lagos, Algarve",
    description:
      "Contact us to book a boat tour or private charter in Lagos, Portugal. We're happy to help you plan your perfect Algarve experience.",
    url: "https://www.boatrips.eu/contact",
    siteName: "Boatrips",
    type: "website",
    images: [
      {
        url: "https://www.boatrips.eu/Logo.webp",
        width: 600,
        height: 600,
        alt: "Contact Boatrips Lagos",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
