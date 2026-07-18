import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-display',
});

const siteUrl = process.env.APP_URL ?? 'https://www.geopilarpersada.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PT. Geo Pilar Persada',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Solusi manajemen hujan, penambahan hujan, dan monitoring cuaca skala mikro berbasis drone untuk industri pertambangan, energi, dan pertanian di Indonesia.',
  foundingDate: '2023',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62-21-1234-5678',
    contactType: 'customer service',
    areaServed: 'ID',
    availableLanguage: ['Indonesian', 'English'],
  },
  sameAs: [],
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PT. Geo Pilar Persada',
  url: siteUrl,
  description:
    'Solusi modifikasi cuaca presisi berbasis drone untuk industri Indonesia.',
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
      addressCountry: 'ID',
    },
  ],
  areaServed: 'Indonesia',
  serviceType: [
    'Manajemen Hujan',
    'Penambahan Hujan',
    'Monitoring Cuaca',
    'Cloud Seeding',
  ],
};

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
    <html lang="id" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Prefetch all route JS chunks on first load so subsequent navigations are instant */}
        {['/tentang-kami', '/layanan', '/teknologi', '/proyek', '/klien', '/blog', '/hubungi-kami', '/admin/help'].map((route) => (
          <link key={route} rel="prefetch" href={route} as="document" />
        ))}
      </head>
      <body
        suppressHydrationWarning
        className="font-body bg-background text-foreground antialiased selection:bg-brand-navy selection:text-cloud"
      >
        <div className="h-[--nav-height]" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
