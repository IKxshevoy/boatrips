import "./globals.scss";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Locale } from "@/lib/locales";
import { getMessages, getTranslations } from "next-intl/server";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

const GTM_ID = "GTM-MLJR4KCD";

const RootLayout: React.FC<Props> = async (props) => {
  const messages = await getMessages();

  return (
    <html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </Head>
      <body className={rubik.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {props.children}
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
  const t = await getTranslations({ locale, namespace: "root" });

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
    "catamaran cruises Algarve",
    "private yacht tours Lagos",
    "private catamaran tours",
    "sunset boat tour Lagos",
    "sunrise tour Lagos",
    "Algarve boat tours",
    "Lagos Portugal boat trips",
  ];

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords,
    openGraph: {
      title: t("metadata.ogTitle"),
      description: t("metadata.ogDescription"),
      url: "https://www.boatrips.eu",
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
          url: "https://www.boatrips.eu/Logo.webp",
          width: 600,
          height: 600,
          alt: "Boat Tours in Lagos, Algarve",
        },
      ],
    },
    metadataBase: new URL("https://www.boatrips.eu"),
    other: {
      instagram: "https://www.instagram.com/boatrips/",
      facebook: "https://www.facebook.com/boatrips.eu",
    },
  };
}

export default RootLayout;
