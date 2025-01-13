import type { Metadata } from "next"
import { Oswald } from 'next/font/google'
import "./globals.css"

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirasal Fret | Fret aérien, Fret maritime, Transport de colis en RDC, en Afrique du Sud, au Benin, Au Nigeria,  Agence d'envoi, Cape TOWN, Johannesburg , Lubumbashi, Kinshasa, Lagos",
  description: "Located on Long Street in Cape Town, we provide premium beauty services such as manicures, pedicures, haircuts, trimming, and foot therapy. Book your appointment now!",
  keywords: "Cape Town salon, manicure, pedicure, haircut, trimming, foot therapy, beauty services, Long Street salon, spa treatments, best salon in Cape Town, hair, nails",
  icons: {
    icon: '/logo.jpg'
  },
  openGraph: {
    title: "Best Salon in Cape Town | Manicures, Pedicures, Haircuts & More",
    description: "Top-tier beauty services in Cape Town. Manicures, pedicures, haircuts, trimming, foot therapy, and more. Experience the best salon on Long Street.",
    url: "https://mirasal.co.za",
  // Replace with an actual image URL for social media sharing
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Salon in Cape Town | Manicures, Pedicures, Haircuts & More",
    description: "We offer top beauty services like manicures, pedicures, haircuts, trimming, and foot therapy in the heart of Cape Town's Long Street.",
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