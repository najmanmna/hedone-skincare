import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "HEDONE Natural Skincare — Nature's Promise to Your Skin",
  description:
    "100% natural and vegan skincare crafted in Sri Lanka. Extensively researched, quality assured, and thoroughly tested for every skin type.",
  keywords: [
    "natural skincare",
    "vegan skincare",
    "Sri Lanka skincare",
    "HEDONE",
    "organic beauty",
    "plant-based skincare",
  ],
  openGraph: {
    title: "HEDONE Natural Skincare",
    description:
      "100% natural and vegan skincare crafted in Sri Lanka with globally sourced ingredients.",
    type: "website",
    url: "https://www.hedoneskincare.com",
    siteName: "HEDONE Natural Skincare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-charcoal antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}