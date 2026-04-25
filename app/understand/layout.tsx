import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Clinical Science | CBT-I & ACT-I Sleep Mechanics",
  description: "Explore the clinical science behind The Good Night Companion. Learn how our dual-therapy system uses CBT-I and ACT-I mechanics to rebuild your sleep drive.",
  alternates: {
    canonical: '/understand',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
