import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Good Night Companion",
  description: "A 90-Day CBT-I Program & Toolkit",
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
      <body className="font-sans antialiased pb-safe">{children}</body>
    </html>
  );
}
