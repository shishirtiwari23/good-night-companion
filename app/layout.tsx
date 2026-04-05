import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thegoodnightcompanion.com"),
  title: "The Good Night Companion",
  description: "A 90-Day CBT-I Program & Toolkit",
  openGraph: {
    title: "The Good Night Companion",
    description: "A 90-Day CBT-I Program & Toolkit",
    url: "https://www.thegoodnightcompanion.com",
    siteName: "The Good Night Companion",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Good Night Companion",
    description: "A 90-Day CBT-I Program & Toolkit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // ADDED: scroll-smooth
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} scroll-smooth`}
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
