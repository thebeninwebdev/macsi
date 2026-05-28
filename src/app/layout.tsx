import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Make A Child Smile Initiative | School Uniforms for Nigerian Children",
  description:
    "Make A Child Smile Initiative provides school uniforms for children in public primary schools across Nigeria. Join us in giving every child the dignity to learn.",
  keywords: [
    "school uniforms Nigeria",
    "charity Nigeria",
    "education support",
    "public primary schools",
    "child welfare",
    "Make A Child Smile",
  ],
  openGraph: {
    title: "Make A Child Smile Initiative",
    description: "Providing school uniforms for children in public primary schools across Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-cream-50 text-black">
        {children}
      </body>
    </html>
  );
}
