import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/tools/worry-dump',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
