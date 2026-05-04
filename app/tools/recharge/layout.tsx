import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free NSDR Protocol for Insomnia Recovery — 10-Minute Nervous System Reset",
  description: "Non-Sleep Deep Rest (NSDR) lets you recover from sleep deprivation without a nap — protecting your sleep pressure for tonight. A guided 10-minute protocol for daytime fatigue.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
