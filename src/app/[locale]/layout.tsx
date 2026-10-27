import "./globals.scss";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Locale } from "@/lib/locales";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import PageLoader from "@/components/loader/PageLoader";
import { JsonLd, alternates } from "@/lib/seo";
import { EMAIL, PHONE, SITE_URL } from "@/data/tours";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

const GTM_ID = "GTM-M4B5CSKV";

const organization = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Boatrips",
  url: SITE_URL,
  logo: `${SITE_URL}/Logo.webp`,
  image: `${SITE_URL}/main.webp`,
  telephone: PHONE,
  email: EMAIL,
  foundingDate: "2000",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Passeio dos Descobrimentos",
    postalCode: "8600-315",
    addressLocality: "Lagos",
    addressRegion: "Algarve",
    addressCountry: "PT",
  },
  geo: { "@type": "GeoCoordinates", latitude: 37.1081, longitude: -8.6741 },
  areaServed: "Algarve, Portugal",
  sameAs: [
    "https://www.instagram.com/boatrips/",
    "https://www.facebook.com/boatrips.eu",
  ],
};

const RootLayout: React.FC<Props> = async ({ children, params }) => {
  const messages = await getMessages();

  return (
    <html
      lang={params.locale}
      className={`${manrope.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <JsonLd data={organization} />

        <PageLoader />

        <NextIntlClientProvider messages={messages}>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  const keywords = [
    "Benagil cave tours",
    "grotto tours Lagos",
    "family boat cruises",
    "private boat tours Lagos",
    "Lagos boat tours",
    "Ponta da Piedade boat tour",
    "dolphin watching Lagos",
    "swimming boat tours",
    "yacht cruises Lagos",
    "yacht tour Lagos",
    "yacht cruise Algarve",
    "yacht charter Lagos",
    "private yacht tour Lagos",
    "sailing yacht Lagos",
    "catamaran cruises Algarve",
    "catamaran cruise Lagos",
    "catamaran tour Lagos",
    "catamaran tour Algarve",
    "sailing catamaran Lagos",
    "private catamaran Lagos",
    "private yacht tours Lagos",
    "private catamaran tours",
    "sailing tour Lagos",
    "sailing tour Algarve",
    "sunset boat tour Lagos",
    "sunset catamaran Lagos",
    "sunset yacht Lagos",
    "sunrise tour Lagos",
    "Algarve boat tours",
    "Lagos Portugal boat trips",
    "boat trips Lagos Portugal",
    "sea tours Lagos",
  ];

  return {
    title: t("root.metadata.title"),
    description: t("root.metadata.description"),
    keywords,
    alternates: alternates(locale),
    themeColor: "#0a2a43",
    formatDetection: { telephone: true, email: true, address: false },
    robots: {
      index: true,
      follow: true,
      googleBot: { "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title: t("root.metadata.ogTitle"),
      description: t("root.metadata.ogDescription"),
      url: `${SITE_URL}/${locale}`,
      siteName: "Boatrips",
      locale:
        locale === "pt"
          ? "pt_PT"
          : locale === "fr"
            ? "fr_FR"
            : locale === "de"
              ? "de_DE"
              : "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/main.webp`,
          width: 1920,
          height: 1080,
          alt: "Boat Tours in Lagos, Algarve",
        },
      ],
    },
    twitter: { card: "summary_large_image" },
    metadataBase: new URL(SITE_URL),
    other: {
      instagram: "https://www.instagram.com/boatrips/",
      facebook: "https://www.facebook.com/boatrips.eu",
    },
  };
}

export default RootLayout;
