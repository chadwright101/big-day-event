import type { Metadata } from "next";
import { Noto_Serif_Display, Noto_Serif } from "next/font/google";
import "@/_styles/globals.css";
import { Header } from "@/_components/navigation/header/header";
import { Footer } from "@/_components/navigation/footer/footer";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bigdayevent.co.za"),
  title: "Contact - Big Day Event",
  description:
    "Big Day Event - Crafting weddings of your dreams by bringing decades of experience in event planning, floral design, and client coordination",
  keywords:
    "Garden Route wedding planner, Garden Route wedding venues, Wedding venues Garden Route, South Africa destination wedding, Garden Route weddings, Knysna wedding planner, Plettenberg Bay wedding planner, George wedding planner, Luxury weddings Garden Route, Bespoke wedding planning Garden Route, Coastal weddings South Africa, Forest weddings Garden Route, Beach weddings Garden Route, Wedding coordination Garden Route, Garden Route wedding packages, Outdoor weddings Garden Route, Intimate weddings Garden Route, Elopement packages Garden Route, Wedding stylist Garden Route, Wedding flowers Garden Route",
  openGraph: {
    description:
      "Big Day Event - Crafting weddings of your dreams by bringing decades of experience in event planning, floral design, and client coordination",
    type: "website",
    locale: "en_ZA",
    siteName: "Big Day Event",
    images: [
      {
        url: "/images/hero-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerifDisplay} ${notoSerif} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
