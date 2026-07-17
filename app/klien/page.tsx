'use client';

import { motion, type Variants } from 'motion/react';
import { Star, Users, ArrowRight, Building2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import PageHeader from '@/components/PageHeader';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const sectors = [
  {
    title: 'Energi & PLTA',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    icon: '⚡',
    clients: ['PLN Nusantara Power – PLTA Bakaru', 'PLN NP – PLTA Brantas', 'Poso Energy – Poso'],
  },
  {
    title: 'Pertambangan',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    icon: '⛏️',
    clients: [
      'SIS Adaro – Maruwai, Kalteng',
      'PPA Adaro – Tanjung, Kalsel',
      'MLP – Konawe, Sultra',
      'PT CNI – Kolaka, Sultra',
      'PT JAS Subaim – Maluku Utara',
      'PT KFM – Luwuk, Sulteng',
    ],
  },
  {
    title: 'Pemerintah & Pertanian',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    icon: '🌾',
    clients: ['Kementan – Provinsi Jambi'],
  },
  {
    title: 'Instansi Pertahanan',
    color: 'bg-slate-100 border-slate-300 text-slate-700',
    icon: '🎖️',
    clients: ['Akademi TNI – Sentul, Jawa Barat'],
  },
];

const testimonials = [
  {
    quote: 'Operasi pengurangan hujan dari PT. Geo Pilar Persada berhasil menekan downtime hauling kami secara signifikan. Hasilnya melebihi ekspektasi — 70% pengurangan curah hujan di area pit.',
    author: 'Tim Operasional',
    company: 'SIS Adaro, Maruwai',
    result: '-70% curah hujan',
  },
  {
    quote: 'Pengisian waduk PLTA Bakaru meningkat secara terukur setelah operasi penyemaian awan. Teknologi drone mereka terbukti lebih presisi dan hemat biaya dibanding metode konvensional.',
    author: 'Tim Operasional',
    company: 'PLN NP PLTA Bakaru',
    result: '+25% curah hujan',
  },
  {
    quote: 'Respons tim sangat cepat. Dari pengurusan izin hingga mobilisasi armada hanya membutuhkan waktu kurang dari dua minggu. Proses operasional juga transparan dan berbasis data.',
    author: 'Tim Operasional',
    company: 'PT KFM Luwuk',
    result: '-73% curah hujan',
  },
];

export default function KlienPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Klien Kami"
        title="Dipercaya oleh Industri Terkemuka"
        description="Dari perusahaan energi nasional hingga tambang berskala besar — kami melayani klien yang membutuhkan solusi cuaca yang bisa diandalkan."
      />

      {/* Sectors */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-cyan-700 mb-3">Berdasarkan Sektor</p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">Klien Kami per Sektor</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {sectors.map((sector) => (
              <motion.div key={sector.title} variants={fadeUp}
                className="bg-white border border-slate-200 rounded-3xl p-7 hover:shadow-md transition-all"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6 ${sector.color}`}>
                  <span>{sector.icon}</span> {sector.title}
                </div>
                <ul className="space-y-3">
                  {sector.clients.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                      <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-cyan-400 mb-3">Apa Kata Klien</p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight">Testimoni dari Lapangan</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.company} variants={fadeUp}
                className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 flex flex-col gap-6"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.author}</p>
                    <p className="text-slate-400 text-xs">{t.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-cyan-900/50 border border-cyan-700 text-cyan-300 text-xs rounded-full font-medium">
                    {t.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 mb-5">
            Jadilah Bagian dari Klien Kami
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Bergabunglah bersama perusahaan-perusahaan terkemuka yang telah mempercayakan manajemen cuaca operasional mereka kepada kami.
          </p>
          <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-cyan-700 hover:bg-cyan-800 text-white gap-2 group')} href="/hubungi-kami">
              Mulai Konsultasi
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
      </section>
    </div>
  );
}
