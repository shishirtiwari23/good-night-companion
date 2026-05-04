import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get The Goodnight Companion — The 90-Day CBT-I Journal for Chronic Insomnia",
  description: "A guided journal built on the gold-standard clinical protocol for insomnia — without the cost of a therapist. Three phases. 90 days. Available on Amazon worldwide.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
