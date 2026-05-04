import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Racing Thoughts at Night? Free Cognitive Offload Tool for Insomnia",
  description: "A structured exercise to externalise and neutralise anxious nighttime thoughts — so your mind stops processing in bed. Based on cognitive defusion techniques from CBT-I and ACT-I.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
