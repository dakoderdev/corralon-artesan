import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from './nav';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corralón Artesan | Materiales de Construcción en Tucumán",
  description:
    "Con más de 30 años de experiencia, Corralón Artesan ofrece materiales de construcción de calidad en Tucumán. Atención personalizada y amplio stock disponible.",
  metadataBase: new URL("https://www.corralonartesan.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Corralón Artesan | Materiales de Construcción en Tucumán",
    description:
      "Con más de 30 años de experiencia, Corralón Artesan ofrece materiales de construcción de calidad en Tucumán. Atención personalizada y amplio stock disponible.",
    url: "https://www.corralonartesan.vercel.app",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary",
    title: "Corralón Artesan | Materiales de Construcción",
    description:
      "Más de 30 años en venta de materiales para la construcción en Tucumán.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    "name": "Corralón Artesan",
    "image": "https://corralonartesan.vercel.app/logo.png",
    "@id": "https://corralonartesan.vercel.app",
    "url": "https://corralonartesan.vercel.app",
    "telephone": "+54 381 424-6952",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Gral. Roca 139",
      "addressLocality": "San Miguel de Tucumán",
      "addressRegion": "Tucumán",
      "postalCode": "4000",
      "addressCountry": "AR"
    },
    "openingHours": [
      "Mo-Fr 08:00-13:00",
      "Mo-Fr 15:30-18:00",
      "Sa 08:00-13:30"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.843938,
      "longitude": -65.202185
    },
    "sameAs": [
      "https://www.facebook.com/CorralonArtesan/"
    ]
  };

  return (
    <html lang="es">
      <body className={`${spaceMono.variable} ${spaceGrotesk.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgJSONLD)
          }}
        />
      </body>
    </html>
  );
}