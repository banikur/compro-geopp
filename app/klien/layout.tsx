import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Klien Kami',
  description:
    'Klien dan mitra PT. Geo Pilar Persada dari sektor energi, pertambangan, pemerintah, dan pertanian di seluruh Indonesia.',
  alternates: {
    canonical: '/klien',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
