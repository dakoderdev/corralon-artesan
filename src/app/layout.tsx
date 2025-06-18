import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from './nav';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

const spaceMono = Space_Mono({
  weight: ['400','700'],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400','500','600','700'],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corralón Artesan | Materiales de Construcción en Tucumán",
  description:
    "Empresa con más de 30 años de experiencia en comercialización de materiales de construcción en Tucumán.",
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
      "Empresa con más de 30 años de experiencia en comercialización de materiales de construcción en Tucumán.",
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

  return (
    <html lang="es">
      <body
        className={`${spaceMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />   
        <SpeedInsights />
      </body>
    </html>
  );
}