import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thegoodnightcompanion.com"),
  title: "The Goodnight Companion — A 90-Day CBT-I Program for Chronic Insomnia",
  description: "Stop fighting your sleep. The Goodnight Companion is a structured, science-based journal built on CBT-I — the NHS-endorsed treatment that actually fixes chronic insomnia. Free tools inside.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "The Good Night Companion | The 90-Day Clinical Sleep System",
    description: "Discover The Good Night Companion: a 90-day clinical guided journal. We combine the gold-standard science of CBT-I and ACT-I to end chronic insomnia.",
    url: "https://www.thegoodnightcompanion.com",
    siteName: "The Good Night Companion",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Good Night Companion | The 90-Day Clinical Sleep System",
    description: "Discover The Good Night Companion: a 90-day clinical guided journal. We combine the gold-standard science of CBT-I and ACT-I to end chronic insomnia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // ADDED: scroll-smooth
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased pb-safe">
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YZXNTVG070"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YZXNTVG070');
          `}
        </Script>
      </body>
    </html>
  );
}
