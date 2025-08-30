import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Tomasz Kurek - Twój Doradca",
  description: "Profesjonalne doradztwo Oze - Panele fotowoltaiczne, pompy ciepła, magazyny energii, rekuperacja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="hide-scrollbar">
      <body

      >
        {children}
      </body>
    </html>
  );
}
