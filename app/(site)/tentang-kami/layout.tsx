import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Kenali PT. Geo Pilar Persada — perusahaan rekayasa cuaca berbasis riset yang menghadirkan solusi modifikasi presipitasi adaptif untuk industri Indonesia.',
  alternates: {
    canonical: '/tentang-kami',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
