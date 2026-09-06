import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./mobile.css";
import "./local-tailors.css";
import "./donation-journey.css";

const manrope = Manrope({
  subsets: ["latin"],

  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Make A Child Smile Initiative | School Uniforms for Nigerian Children",
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
    description:
      "Providing school uniforms for children in public primary schools across Nigeria.",
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
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full">{children}</div>
      </body>
    </html>
  );
}
