import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Artikel',
  description:
    'Artikel riset, studi kasus, dan panduan teknis seputar teknologi modifikasi cuaca dari PT. Geo Pilar Persada.',
  alternates: {
    canonical: '/blog',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
