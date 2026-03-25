import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/cookies/CookieBanner";

export const metadata: Metadata = {
  title: "Tomasz Kurek - Twój Doradca",
  description:
    "Profesjonalne doradztwo OZE - panele fotowoltaiczne, pompy ciepła, magazyny energii, rekuperacja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="hide-scrollbar">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}