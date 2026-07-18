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
import { services, clients } from '@/data';

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

const iconMap: Record<string, React.ReactNode> = {
  CloudRain: <CloudRain className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
};

const trustItems = [
  {
    icon: <Target className="w-6 h-6 text-sky" />,
    title: 'Presisi Tinggi',
    desc: 'Teknologi presisi untuk hasil yang efektif dan terukur di area target.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-sky" />,
    title: 'Aman & Terkontrol',
    desc: 'Operasi aman, sesuai standar DKPPU, dan ramah lingkungan.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-sky" />,
    title: 'Data-Driven',
    desc: 'Keputusan berbasis data cuaca real-time AWS dan analitik radar cerdas.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-sky" />,
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
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-sky/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
                <Badge variant="outline" className="mb-8 text-sky border-sky/30 bg-sky/5 uppercase tracking-wide text-xs gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Atmospheric Mikro Engineering untuk Indonesia
                </Badge>
              </motion.div>

              <motion.h1
                custom={1} initial="hidden" animate="visible" variants={fadeUp}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-ink leading-[1.08] mb-8"
              >
                Sistem Pengendali Cuaca{' '}
                <span className="text-steel">Skala Mikro Adaptif.</span>
              </motion.h1>

              <motion.p
                custom={2} initial="hidden" animate="visible" variants={fadeUp}
                className="text-lg md:text-xl text-steel leading-relaxed mb-10"
              >
                PT Geo Pilar Persada melayani jasa manajemen hujan, penambahan hujan, dan
                monitoring cuaca dengan kombinasi hybrid{' '}
                <span className="font-semibold text-ink">Drone Kecil</span> dan{' '}
                <span className="font-semibold text-ink">Groundbase Tower Flare</span>.
                Efisien, presisi, dan terbukti efektif.
              </motion.p>

              <motion.div
                custom={3} initial="hidden" animate="visible" variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-sky hover:bg-sky/90 text-white gap-2 group')} href="/teknologi">
                    Teknologi Cloudbuster
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                <Link className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'rounded-full gap-2')} href="/tentang-kami">Tentang Kami</Link>
              </motion.div>
            </div>

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

              <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-ink/40" />

              <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white text-xs shadow-lg flex items-center gap-2">
                <span className="flex w-2 h-2 rounded-full bg-sky animate-pulse" />
                <span><strong className="text-sky-light">73%</strong> Rain Reduction</span>
              </div>
              <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white text-xs shadow-lg flex items-center gap-2">
                <span className="flex w-2 h-2 rounded-full bg-flare animate-pulse" />
                <span><strong className="text-[#F0C78A]">+35%</strong> Rain Enhancement</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Trust Indicators ────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-steel/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                {item.icon}
                <h4 className="font-display font-semibold text-ink">{item.title}</h4>
                <p className="text-sm text-steel leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ────────────────────────────────────────────── */}
      <section className="py-32 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp} custom={0}
            className="mb-16 max-w-2xl"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-sky mb-3">Layanan Utama</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-4">
              Layanan &amp; Solusi
            </h2>
            <p className="text-lg text-steel leading-relaxed">
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
                className="group p-10 bg-white border border-steel/20 rounded-card hover:border-sky/40 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${s.color}`}>
                  {iconMap[s.icon]}
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-1">{s.title}</h3>
                <p className="text-steel text-sm mb-4">{s.sub}</p>
                <p className="text-steel leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-steel">
                      <CheckCircle2 className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="inline-flex items-center gap-1.5 text-xs font-medium text-sky hover:text-sky/80 group/link">
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
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="font-display text-6xl font-bold tracking-tighter text-white mb-2">{stat.value}</div>
                <div className="font-semibold text-lg text-white mb-1">{stat.label}</div>
                <div className="text-steel text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Logos Strip ──────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-steel/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-steel mb-10">
            Dipercaya oleh
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.filter(c => !['BRIN', 'BMKG', 'DKPPU', 'TNI AU'].includes(c.name)).map((client) => (
              <span
                key={client.name}
                className="px-5 py-2.5 bg-cloud border border-steel/20 rounded-full text-sm text-steel font-medium"
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-cloud">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-sky/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-sky">
            <Plane className="w-8 h-8" />
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink mb-5">
            Siap Mulai Proyek Bersama Kami?
          </h2>
          <p className="text-lg text-steel leading-relaxed mb-10">
            Tim kami siap mendiskusikan solusi manajemen cuaca yang tepat untuk kebutuhan operasional Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-sky hover:bg-sky/90 text-white gap-2 group')} href="/hubungi-kami">
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
