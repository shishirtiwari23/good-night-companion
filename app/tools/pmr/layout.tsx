import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/tools/pmr',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
