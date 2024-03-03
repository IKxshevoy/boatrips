import "./globals.scss";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Locale } from "@/lib/locales";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

const RootLayout: React.FC<Props> = async (props) => {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={rubik.className}>
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

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default RootLayout;
