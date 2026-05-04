import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Progressive Muscle Relaxation for Insomnia — Guided PMR Session",
  description: "A guided PMR session designed specifically for insomnia-related physical tension. Release the body's conditioned fight-or-flight response and lower your arousal threshold before sleep.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
