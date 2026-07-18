import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Kami',
  description:
    'Layanan manajemen hujan, penambahan hujan, dan monitoring cuaca skala mikro dari PT. Geo Pilar Persada.',
  alternates: {
    canonical: '/layanan',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apa itu manajemen hujan berbasis drone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manajemen hujan berbasis drone adalah teknologi modifikasi cuaca yang menggunakan drone untuk menyemai awan dengan partikel CCN (Cloud Condensation Nuclei) guna mengurangi atau meningkatkan curah hujan di area target secara presisi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara kerja Cloud Dome untuk pengurangan hujan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cloud Dome menggunakan drone Multirotor H10 yang terbang ke lapisan bawah awan dan menyemprotkan partikel hidronano untuk memecah pertumbuhan awan hujan. Hasilnya: pengurangan curah hujan terukur hingga 73% di area target.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa lama waktu pengerjaan proyek modifikasi cuaca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Durasi proyek bervariasi tergantung cakupan dan jenis layanan. Untuk operasi pertambangan (pengurangan hujan), biasanya berlangsung 3-6 bulan. Untuk penambahan hujan (PLTA/irigasi), durasi mengikuti musim hujan atau kemarau.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah modifikasi cuaca aman untuk lingkungan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Partikel CCN yang digunakan (seperti NaCl dan KCl) adalah bahan alami yang aman untuk lingkungan. Teknologi ini telah mendapat izin dari instansi terkait dan dioperasikan sesuai standar Penerbangan Sipil Indonesia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wilayah mana saja yang dilayani PT. Geo Pilar Persada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PT. Geo Pilar Persada melayani proyek di seluruh Indonesia, dengan pengalaman proyek di Kalimantan, Sulawesi, Sumatera, Jawa, Maluku, dan Nusa Tenggara.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
