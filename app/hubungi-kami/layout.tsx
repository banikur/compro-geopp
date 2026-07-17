import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Konsultasikan kebutuhan manajemen cuaca Anda bersama tim PT. Geo Pilar Persada. Respons dalam 1×24 jam kerja.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
