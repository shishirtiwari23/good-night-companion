import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Buy The Good Night Companion | Official Hardcover Edition",
  description: "Buy the official hardcover edition of The Good Night Companion. Stop fighting your sleep and start your 90-day clinical recovery journey today.",
  alternates: {
    canonical: '/join-the-program',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
