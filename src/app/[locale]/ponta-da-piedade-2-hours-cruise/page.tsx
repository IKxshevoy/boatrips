import type { Metadata } from "next";
import PontaDaPiedade2HoursClient from "./PontaDaPiedade2HoursClient";

export const metadata: Metadata = {
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
};

export default function PontaDaPiedade2HoursPage() {
  return <PontaDaPiedade2HoursClient />;
}
