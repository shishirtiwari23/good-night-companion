import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Science Behind The Goodnight Companion: CBT-I & ACT-I for Insomnia Explained",
  description: "Skeptical? Good. Here's the clinical evidence behind every technique in the program — Stimulus Control, Sleep Restriction, Cognitive Defusion, and why CBT-I outperforms sleep medication long-term.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
