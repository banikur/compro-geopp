import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyek & Galeri',
  description: 'Track record dan portofolio proyek modifikasi cuaca PT. Geo Pilar Persada 2024–2025 di seluruh Indonesia.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
