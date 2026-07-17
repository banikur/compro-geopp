import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

const siteUrl = process.env.APP_URL ?? 'https://www.geopilarpersada.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | PT. Geo Pilar Persada',
    default: 'PT. Geo Pilar Persada — Rekayasa Cuaca Presisi',
  },
  description:
    'Solusi manajemen hujan, penambahan hujan, dan monitoring cuaca skala mikro berbasis drone untuk industri pertambangan, energi, dan pertanian di Indonesia.',
  keywords: [
    'cloud seeding Indonesia',
    'modifikasi cuaca',
    'manajemen hujan',
    'penambahan hujan',
    'drone cloud seeding',
    'rekayasa cuaca',
    'PT Geo Pilar Persada',
    'PLTA hujan',
    'karhutla mitigasi',
  ],
  authors: [{ name: 'PT. Geo Pilar Persada', url: siteUrl }],
  creator: 'PT. Geo Pilar Persada',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: 'PT. Geo Pilar Persada',
    title: 'PT. Geo Pilar Persada — Rekayasa Cuaca Presisi',
    description:
      'Solusi manajemen hujan, penambahan hujan, dan monitoring cuaca skala mikro berbasis drone untuk industri di Indonesia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Geo Pilar Persada — Rekayasa Cuaca Presisi',
    description:
      'Solusi manajemen hujan dan penambahan hujan berbasis drone untuk industri pertambangan, energi & pertanian Indonesia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        {/* Prefetch all route JS chunks on first load so subsequent navigations are instant */}
        {['/tentang-kami', '/layanan', '/teknologi', '/proyek', '/klien', '/blog', '/hubungi-kami'].map((route) => (
          <link key={route} rel="prefetch" href={route} as="document" />
        ))}
      </head>
      <body
        suppressHydrationWarning
        className="font-sans bg-background text-foreground antialiased selection:bg-cyan-900 selection:text-cyan-50"
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
