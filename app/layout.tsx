import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.ahujapriyanka.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Priyanka Ahuja — Product Designer who ships code",
    template: "%s — Priyanka Ahuja",
  },
  description:
    "Priyanka Ahuja is a product designer who ships code. 6+ years designing and building across fintech, public-sector, and research-heavy domains.",
  keywords: [
    "Priyanka Ahuja",
    "Product Designer",
    "UX Design",
    "Design Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Priyanka Ahuja" }],
  openGraph: {
    title: "Priyanka Ahuja — Product Designer who ships code",
    description:
      "6+ years designing and building across fintech, public-sector, and research-heavy domains.",
    url: siteUrl,
    siteName: "Priyanka Ahuja",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Ahuja — Product Designer who ships code",
    description:
      "6+ years designing and building across fintech, public-sector, and research-heavy domains.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
