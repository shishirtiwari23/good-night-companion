import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Efficiency Calculator — The CBT-I Formula for Insomnia Recovery",
  description: "Calculate your Sleep Efficiency score, understand what it means, and get the exact CBT-I titration protocol to improve it. The one metric that actually tracks insomnia recovery.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
