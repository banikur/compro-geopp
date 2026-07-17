import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Kami',
  description: 'Layanan manajemen hujan, penambahan hujan, dan monitoring cuaca skala mikro dari PT. Geo Pilar Persada.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
