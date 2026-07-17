import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teknologi',
  description: 'Infrastruktur teknologi hibrida PT. Geo Pilar Persada — Drone Base VTOL, Multirotor H10, dan Groundbase Tower Flare untuk modifikasi cuaca presisi.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
