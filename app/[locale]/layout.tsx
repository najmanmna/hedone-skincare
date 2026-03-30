import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr
      ? "HEDONE Soins Naturels — La Promesse de la Nature pour Votre Peau"
      : "HEDONE Natural Skincare — Nature's Promise to Your Skin",
    description: isFr
      ? "Soins naturels 100% vegan formulés au Sri Lanka. Rigoureusement étudiés, qualité garantie, et testés pour chaque type de peau."
      : "100% natural and vegan skincare crafted in Sri Lanka. Extensively researched, quality assured, and thoroughly tested for every skin type.",
    keywords: isFr
      ? ["soins naturels", "vegan", "Sri Lanka", "HEDONE", "beauté naturelle", "phytocosmétique"]
      : ["natural skincare", "vegan skincare", "Sri Lanka skincare", "HEDONE", "organic beauty", "plant-based skincare"],
    openGraph: {
      title: "HEDONE Natural Skincare",
      description: isFr
        ? "Soins naturels 100% vegan formulés au Sri Lanka avec des ingrédients d'approvisionnement mondial."
        : "100% natural and vegan skincare crafted in Sri Lanka with globally sourced ingredients.",
      type: "website",
      url: "https://www.hedoneskincare.com",
      siteName: "HEDONE Natural Skincare",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
      <WhatsAppFloat />
    </NextIntlClientProvider>
  );
}
