import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Type of Insomniac Are You? Free 2-Minute Pattern Assessment",
  description: "Sleep Onset, Sleep Maintenance, Early Morning, or Mixed — your insomnia pattern points to a specific mechanism and a specific recovery path. Seven questions to find yours.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
