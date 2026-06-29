import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { ContactCta } from "@/components/contact-cta";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Lo Que No Me Atreví A Decir — Serie web transmedia",
    template: "%s · Lo Que No Me Atreví A Decir",
  },
  description:
    "Una historia sobre dos personas que se quisieron y no supieron decírselo a tiempo. Serie web, e-book, podcast y más.",
};

export const viewport: Viewport = {
  themeColor: "#08141a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${instrument.variable}`}>
      <body className="flex min-h-svh flex-col overflow-x-hidden">
        <div className="grain" aria-hidden="true" />
        <ScrollProgress />
        <SiteNav />
        {children}
        <ContactCta />
        <SiteFooter />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
