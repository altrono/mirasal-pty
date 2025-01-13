import type { Metadata } from "next"
import { Oswald } from 'next/font/google'
import "./globals.css"

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirasal Fret | Fret aérien, Fret maritime, Transport de colis en RDC, en Afrique du Sud, au Benin, au Nigeria,  Agence d'envoi, Cape Town, Johannesburg , Lubumbashi, Kinshasa, Lagos",
  description: "Situe a  Belleville, Cape Town, Johannesburg, Lagos , Benin, Kinshasa",
  keywords: "Agence d'Envoi a Cape Town, Kinshasa, Lubumbashi, Johannesburg, Joburg, Transport de colis a KINSHASA , Joburg, Benin, Nigeria, Bellville, Meilleur Agence d'énvoi a Cape Town, Johannesburg, Kinshasa, Lubumbashi, Benenin",
  icons: {
    icon: '/logo.png'
  },
  openGraph: {
    title: "Mirasal Agence | Mirasal Fret, Fret aérien, Fret maritime, Transport de colis  RDC, en Afrique du Sud, Agence d'envoi, Cape TOWN, Johannesburg , Lubumbashi, Nigeria, Lagos, Benin, Kinshasa",
    description: "Meilleur Agence d'énvoi a Cape Town, Johannesburg, Kinshasa, Lubumbashi, Benenin",
    url: "https://mirasal.co.za",
  // Replace with an actual image URL for social media sharing
  },
  twitter: {
    card: "summary_large_image",
    title: "Meilleur Agence d'énvoi a Cape Town, Johannesburg, Kinshasa, Lubumbashi, Benenin | Fret service a Joburg, Johhanesburg,  ",
    description: "Nous offrons de service dénvoi, de fret etc..",
  // Replace with actual image URL for Twitter sharing
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={oswald.className}
      >
        {children}
      </body>
    </html>
  );
}
