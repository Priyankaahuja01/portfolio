import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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

// Runs before first paint: apply the saved theme so there's no flash.
// Default is light (no attribute); only an explicit "dark" choice is set.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-on-accent"
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
