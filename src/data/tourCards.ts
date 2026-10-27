import { tours, type TourSlug } from "./tours";

// Listing cards: key in the `tours` messages namespace + card image.
export const tourCards: { slug: TourSlug; key: string; image: string }[] = [
  { slug: "ponta-da-piedade-caves-cruise", key: "ponta_da_piedade", image: "/1.webp" },
  { slug: "catamaran-cruise", key: "catamaran_cruise", image: "/catamaran/14.webp" },
  { slug: "yacht-cruise", key: "yacht_cruise", image: "/yacht/sunset/2.webp" },
  { slug: "ponta-da-piedade-2-hours-cruise", key: "coastline_tour", image: "/2.webp" },
  { slug: "benagil-caves-speed-boat-tour", key: "benagil_cave", image: "/3.webp" },
  { slug: "sunset-cruise", key: "sunset_cruise", image: "/4.webp" },
].map((c) => ({ ...c, slug: c.slug as TourSlug }));

export const cardMeta = (slug: TourSlug) => ({
  price: `${tours[slug].fromPrice} €`,
  duration: tours[slug].durationLabel,
});
