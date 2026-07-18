'use client';

import { motion, type Variants } from 'motion/react';
import {
  CloudRain, Droplets, Activity, CheckCircle2,
  Building2, Flame, TreePine, Zap, ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import PageHeader from '@/components/PageHeader';
import { buttonVariants } from '@/components/ui/button';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    id: 'manajemen-hujan',
    icon: <CloudRain className="w-7 h-7" />,
    tag: 'Cloud Dome',
    title: 'Manajemen Hujan',
    headline: 'Kendalikan Intensitas Hujan di Area Operasional Anda',
    desc: 'Teknologi Cloud Dome menggunakan drone Multirotor H10 yang menyemprotkan partikel hidronano ke lapisan bawah awan untuk memecah pertumbuhan awan hujan. Hasilnya: pengurangan curah hujan terukur >60% di area target.',
    benefits: [
      'Mengamankan operasi tambang & jalur hauling',
      'Mitigasi risiko banjir pada area industri',
      'Perlindungan event outdoor berskala besar',
      'Operasi siang & malam tanpa batas cuaca',
    ],
    stats: { value: '73%', label: 'rata-rata pengurangan curah hujan' },
  },
  {
    id: 'penambahan-hujan',
    icon: <Droplets className="w-7 h-7" />,
    tag: 'Cloudbuster',
    title: 'Penambahan Hujan',
    headline: 'Tingkatkan Presipitasi di Area Kritis',
    desc: 'Sistem Cloudbuster menggunakan drone VTOL 320 atau Groundbase Tower Flare untuk menyemai awan dengan partikel CCN (Cloud Condensation Nuclei) yang mendorong pembentukan tetes hujan lebih cepat dan lebih banyak.',
    benefits: [
      'Pengisian waduk PLTA & irigasi pertanian',
      'Mitigasi kekeringan & pencegahan karhutla',
      'Penyiraman perkebunan sawit & reklamasi lahan',
      'Operasi lintas wilayah hingga 15km jangkauan',
    ],
    stats: { value: '20%+', label: 'rata-rata peningkatan curah hujan' },
  },
  {
    id: 'monitoring-cuaca',
    icon: <Activity className="w-7 h-7" />,
    tag: 'Micro Weather Monitoring',
    title: 'Monitoring Cuaca Skala Mikro',
    headline: 'Data Real-time untuk Keputusan yang Tepat',
    desc: 'Sistem AWS (Automatic Weather Station) kami dikombinasikan dengan analitik radar cuaca untuk memantau kondisi atmosfer secara hiperlokal. Data ini menjadi dasar setiap keputusan intervensi operasional di lapangan.',
    benefits: [
      'Monitoring curah hujan aktual real-time',
      'Analitik radar awan & pergerakan sistem cuaca',
      'Dashboard laporan harian & mingguan',
      'Integrasi dengan sistem ERP/OPS klien',
    ],
    stats: { value: '24/7', label: 'monitoring non-stop sepanjang tahun' },
  },
];

const sectors = [
  { icon: <Building2 className="w-5 h-5" />, label: 'Pertambangan & Energi' },
  { icon: <Zap className="w-5 h-5" />, label: 'PLTA & Bendungan' },
  { icon: <Flame className="w-5 h-5" />, label: 'Pencegahan Karhutla' },
  { icon: <TreePine className="w-5 h-5" />, label: 'Perkebunan & Reklamasi' },
];

export default function LayananPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Layanan Kami"
        title="Solusi Lengkap Manajemen Cuaca"
        description="Dari pengurangan hingga penambahan hujan, didukung monitoring real-time — kami menyediakan ekosistem layanan modifikasi cuaca yang komprehensif."
      />

      <section className="py-10 bg-cloud border-b border-steel/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm text-steel font-medium mr-2">Sektor yang dilayani:</span>
            {sectors.map((s) => (
              <div key={s.label} className="flex items-center gap-2 px-4 py-2 bg-white border border-steel/20 rounded-full text-sm text-ink">
                <span className="text-sky">{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div variants={fadeUp} custom={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky/10 border border-sky/30 text-sky text-xs font-medium tracking-wide mb-6 uppercase">
                  {service.tag}
                </div>
                <h2 className="font-display text-4xl font-semibold tracking-tight text-ink mb-3">
                  {service.title}
                </h2>
                <p className="text-lg font-medium text-ink mb-5">{service.headline}</p>
                <p className="text-steel leading-relaxed mb-8">{service.desc}</p>
                <ul className="space-y-3 mb-10">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink">
                      <CheckCircle2 className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/hubungi-kami"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sky hover:text-sky/80 group"
                >
                  Konsultasikan Kebutuhan Anda
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} custom={1}
                className={`${idx % 2 !== 0 ? 'lg:order-first' : ''} bg-cloud rounded-3xl border border-steel/20 p-12 flex flex-col items-center justify-center text-center min-h-[320px]`}
              >
                <div className="w-20 h-20 bg-sky/10 text-sky rounded-3xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <div className="font-display text-7xl font-bold tracking-tighter text-ink mb-3">
                  {service.stats.value}
                </div>
                <p className="text-steel text-lg">{service.stats.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-sky text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight mb-5">
            Butuh Solusi Khusus untuk Proyek Anda?
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Setiap proyek memiliki kondisi atmosfer dan kebutuhan operasional yang berbeda. Tim kami siap merancang strategi yang tepat.
          </p>
          <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-white text-sky hover:bg-white/90 font-semibold gap-2 group')} href="/hubungi-kami">
              Hubungi Tim Kami
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
      </section>
    </div>
  );
}
