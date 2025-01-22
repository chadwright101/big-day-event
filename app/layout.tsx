import type { Metadata } from "next";
import { Noto_Serif_Display } from "next/font/google";
import "@/_styles/globals.css";

const notoSerif = Noto_Serif_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Big Day Event",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif} antialiased`}>{children}</body>
    </html>
  );
}
