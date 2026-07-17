'use client';

import { motion, type Variants } from 'motion/react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  CloudRain, Activity, Droplets, ArrowRight,
  Target, ShieldCheck, BarChart3, Cpu, CheckCircle2, Plane,
} from 'lucide-react';
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
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: <CloudRain className="w-6 h-6" />,
    title: 'Manajemen Hujan',
    sub: 'Cloud Dome',
    desc: 'Mengurangi intensitas hujan secara terukur menggunakan lapisan pengurai awan hidronano hingga >60%.',
    items: ['Operasi Tambang & Hauling', 'Mitigasi Risiko Banjir'],
    color: 'bg-slate-100 text-slate-700 group-hover:bg-cyan-50 group-hover:text-cyan-700',
    href: '/layanan#manajemen-hujan',
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Penambahan Hujan',
    sub: 'Cloudbuster',
    desc: 'Meningkatkan potensi hujan >20% dengan penyemaian awan selektif menggunakan drone VTOL atau Groundbase Flare.',
    items: ['Pengisian Waduk PLTA', 'Mitigasi Kekeringan & Karhutla', 'Reklamasi & Perkebunan'],
    color: 'bg-cyan-50 text-cyan-700 group-hover:bg-cyan-100',
    href: '/layanan#penambahan-hujan',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Monitoring Cuaca',
    sub: 'Skala Mikro',
    desc: 'Pemantauan data cuaca real-time menggunakan AWS dan Radar Cuaca untuk keputusan intervensi yang presisi.',
    items: ['Data Hujan Aktual (AWS)', 'Flight Monitoring Real-time'],
    color: 'bg-slate-100 text-slate-700 group-hover:bg-cyan-50 group-hover:text-cyan-700',
    href: '/layanan#monitoring-cuaca',
  },
];

const trustItems = [
  {
    icon: <Target className="w-6 h-6 text-cyan-600" />,
    title: 'Presisi Tinggi',
    desc: 'Teknologi presisi untuk hasil yang efektif dan terukur di area target.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
    title: 'Aman & Terkontrol',
    desc: 'Operasi aman, sesuai standar DKPPU, dan ramah lingkungan.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-600" />,
    title: 'Data-Driven',
    desc: 'Keputusan berbasis data cuaca real-time AWS dan analitik radar cerdas.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-600" />,
    title: 'Adaptif & Fleksibel',
    desc: 'Solusi 24 jam disesuaikan dengan kondisi mikro dan kebutuhan lapangan.',
  },
];

const stats = [
  { value: '73%', label: 'Rata-rata Pengurangan Hujan', sub: 'di area operasi pertambangan' },
  { value: '20%+', label: 'Peningkatan Curah Hujan', sub: 'optimalisasi waduk & kebun' },
  { value: '11+', label: 'Proyek Selesai', sub: '2024–2025 di seluruh Indonesia' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* decorative blob */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="max-w-xl">
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
                <Badge variant="outline" className="mb-8 text-cyan-700 border-cyan-200 bg-cyan-50 uppercase tracking-wide text-xs gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Atmospheric Mikro Engineering untuk Indonesia
                </Badge>
              </motion.div>

              <motion.h1
                custom={1} initial="hidden" animate="visible" variants={fadeUp}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.08] mb-8"
              >
                Sistem Pengendali Cuaca{' '}
                <span className="text-slate-400">Skala Mikro Adaptif.</span>
              </motion.h1>

              <motion.p
                custom={2} initial="hidden" animate="visible" variants={fadeUp}
                className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10"
              >
                PT Geo Pilar Persada melayani jasa manajemen hujan, penambahan hujan, dan
                monitoring cuaca dengan kombinasi hybrid{' '}
                <span className="font-semibold text-slate-800">Drone Kecil</span> dan{' '}
                <span className="font-semibold text-slate-800">Groundbase Tower Flare</span>.
                Efisien, presisi, dan terbukti efektif.
              </motion.p>

              <motion.div
                custom={3} initial="hidden" animate="visible" variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-cyan-700 hover:bg-cyan-800 text-white gap-2 group')} href="/teknologi">
                    Teknologi Cloudbuster
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                <Link className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'rounded-full gap-2')} href="/tentang-kami">Tentang Kami</Link>
              </motion.div>
            </div>

            {/* Right — Hero Image */}
            <motion.div
              custom={4} initial="hidden" animate="visible" variants={fadeUp}
              className="hidden lg:flex relative h-[480px] w-full items-center justify-center rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/hero/hero-bg.webp"
                alt="Operasi modifikasi cuaca menggunakan drone PT Geo Pilar Persada"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="
              />
              
              {/* Gradient Overlay for readability of chips */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-slate-900/40" />

              {/* Floating stat chips */}
              <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white text-xs shadow-lg flex items-center gap-2">
                <span className="flex w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span><strong className="text-cyan-300">73%</strong> Rain Reduction</span>
              </div>
              <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white text-xs shadow-lg flex items-center gap-2">
                <span className="flex w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span><strong className="text-emerald-300">+35%</strong> Rain Enhancement</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Trust Indicators ────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                {item.icon}
                <h4 className="font-heading font-semibold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp} custom={0}
            className="mb-16 max-w-2xl"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-cyan-700 mb-3">Layanan Utama</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Layanan &amp; Solusi
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Mengendalikan iklim mikro untuk mendukung ketahanan infrastruktur,
              keberlanjutan ekosistem, dan kelancaran operasional industri.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {services.map((s) => (
              <motion.div
                key={s.title} variants={fadeUp}
                className="group p-10 bg-white border border-slate-200 rounded-3xl hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${s.color}`}>
                  {s.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{s.sub}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-700 hover:text-cyan-800 group/link">
                  Selengkapnya
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link className={cn(buttonVariants({ size: 'default', variant: 'outline' }), 'rounded-full gap-2 group')} href="/layanan">
                Lihat Semua Layanan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Banner ────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="font-heading text-6xl font-bold tracking-tighter text-white mb-2">{stat.value}</div>
                <div className="font-semibold text-lg text-white mb-1">{stat.label}</div>
                <div className="text-slate-400 text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Logos Strip ──────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-slate-400 mb-10">
            Dipercaya oleh
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['PLN Nusantara Power', 'Poso Energy', 'Adaro', 'Kementan', 'MLP', 'PT CNI', 'PT JAS', 'PT KFM'].map((name) => (
              <span
                key={name}
                className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-600 font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-cyan-700">
            <Plane className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-slate-900 mb-5">
            Siap Mulai Proyek Bersama Kami?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Tim kami siap mendiskusikan solusi manajemen cuaca yang tepat untuk kebutuhan operasional Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-cyan-700 hover:bg-cyan-800 text-white gap-2 group')} href="/hubungi-kami">
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            <Link className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'rounded-full')} href="/proyek">Lihat Portofolio</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
