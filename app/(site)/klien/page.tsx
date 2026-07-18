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
    color: 'bg-sky/10 border-sky/30 text-sky-text',
    icon: '\u26A1',
    clients: ['PLN Nusantara Power \u2013 PLTA Bakaru', 'PLN NP \u2013 PLTA Brantas', 'Poso Energy \u2013 Poso'],
  },
  {
    title: 'Pertambangan',
    color: 'bg-flare/10 border-flare/30 text-flare-text',
    icon: '\u26CF\uFE0F',
    clients: [
      'SIS Adaro \u2013 Maruwai, Kalteng',
      'PPA Adaro \u2013 Tanjung, Kalsel',
      'MLP \u2013 Konawe, Sultra',
      'PT CNI \u2013 Kolaka, Sultra',
      'PT JAS Subaim \u2013 Maluku Utara',
      'PT KFM \u2013 Luwuk, Sulteng',
    ],
  },
  {
    title: 'Pemerintah & Pertanian',
    color: 'bg-steel/8 border-steel/20 text-ink',
    icon: '\uD83C\uDF3E',
    clients: ['Kementan \u2013 Provinsi Jambi'],
  },
  {
    title: 'Instansi Pertahanan',
    color: 'bg-steel/8 border-steel/20 text-ink',
    icon: '\uD83C\uDF96\uFE0F',
    clients: ['Akademi TNI \u2013 Sentul, Jawa Barat'],
  },
];

const testimonials = [
  {
    quote: 'Operasi pengurangan hujan dari PT. Geo Pilar Persada berhasil menekan downtime hauling kami secara signifikan. Hasilnya melebihi ekspektasi \u2014 70% pengurangan curah hujan di area pit.',
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
        description="Dari perusahaan energi nasional hingga tambang berskala besar \u2014 kami melayani klien yang membutuhkan solusi cuaca yang bisa diandalkan."
      />

      <section className="py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-sky-text mb-3">Berdasarkan Sektor</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">Klien Kami per Sektor</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {sectors.map((sector) => (
              <motion.div key={sector.title} variants={fadeUp}
                className="bg-white border border-steel/20 rounded-3xl p-7 hover:shadow-md transition-all"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6 ${sector.color}`}>
                  <span>{sector.icon}</span> {sector.title}
                </div>
                <ul className="space-y-3">
                  {sector.clients.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-ink">
                      <Building2 className="w-4 h-4 text-steel-text shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-sky-text mb-3">Apa Kata Klien</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight">Testimoni dari Lapangan</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.company} variants={fadeUp}
                className="bg-ink/50 border border-steel/20 rounded-3xl p-8 flex flex-col gap-6"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-flare-text fill-flare" />
                  ))}
                </div>
                <p className="text-steel-text leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-steel/20">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.author}</p>
                    <p className="text-steel-text text-xs">{t.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-sky/20 border border-sky/40 text-sky-text text-xs rounded-full font-medium">
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
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink mb-5">
            Jadilah Bagian dari Klien Kami
          </h2>
          <p className="text-steel-text leading-relaxed mb-8">
            Bergabunglah bersama perusahaan-perusahaan terkemuka yang telah mempercayakan manajemen cuaca operasional mereka kepada kami.
          </p>
          <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-sky hover:bg-sky/90 text-white gap-2 group')} href="/hubungi-kami">
              Mulai Konsultasi
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
      </section>
    </div>
  );
}
