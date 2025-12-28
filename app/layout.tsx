import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans", // Use --font-sans for your main non-mono font
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hydrodem - Maintenance Hydraulique & Mécanique Maroc",
  description:
    "Expert en réparation hydraulique, maintenance mécanique d'engins miniers et industriels au Maroc. Diagnostic, pièces de rechange et intervention sur site.",
  icons: {
    icon: "/logo/hydraudem-hq.png",
  },
  keywords: [
    "Hydraulique",
    "Mécanique",
    "Maroc",
    "Casablanca",
    "Maintenance",
    "Engins Miniers",
    "Caterpillar",
    "Komatsu",
  ],
  openGraph: {
    title: "Hydrodem - Maintenance Hydraulique & Mécanique Maroc",
    description:
      "Expertise, rapidité et fiabilité au service de votre industrie.",
    url: "https://hydrodem.ma",
    siteName: "Hydrodem",
    images: [
      {
        url: "/logo/hydraudem-hq.png",
        width: 800,
        height: 600,
        alt: "Hydrodem Logo",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
