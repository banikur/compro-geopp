'use client';

import { motion, type Variants } from 'motion/react';
import { FolderOpen, CloudRain, Droplets, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import PageHeader from '@/components/PageHeader';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { projects } from '@/data';

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

const typeStyles: Record<string, string> = {
  'Penambahan Hujan': 'bg-sky/10 text-sky border-sky/30',
  'Pengurangan Hujan': 'bg-flare/10 text-flare border-flare/30',
};

const resultColor = (r: string) =>
  r.startsWith('+') ? 'text-sky' : r.startsWith('-') ? 'text-flare' : 'text-steel';

export default function ProyekPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Proyek & Galeri"
        title="Track Record & Portofolio"
        description="Rekam jejak proyek modifikasi cuaca kami dari 2024 hingga 2025 di berbagai wilayah Indonesia."
      />

      <section className="py-14 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '11', label: 'Proyek Selesai' },
              { value: '73%', label: 'Maks. Pengurangan Hujan' },
              { value: '35%', label: 'Maks. Penambahan Hujan' },
              { value: '7', label: 'Provinsi Terjangkau' },
            ].map((s) => (
              <div key={s.value}>
                <div className="font-display text-5xl font-bold tracking-tighter text-white mb-1">{s.value}</div>
                <div className="text-steel text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-steel/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-10 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink mb-3">Jangkauan Operasi Nasional</h2>
            <p className="text-steel max-w-2xl mx-auto">Dari Sumatera hingga Sulawesi, kami telah menyelesaikan operasi modifikasi cuaca di berbagai pulau besar di Indonesia dengan sukses.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="relative max-w-4xl mx-auto h-[400px] bg-cloud rounded-3xl border border-steel/20 overflow-hidden flex items-center justify-center p-8">
            <svg viewBox="0 0 1000 400" className="w-full h-full text-steel/30 drop-shadow-md" fill="currentColor">
              <path d="M100 100 Q 150 150 200 250 Q 150 200 80 120 Z" />
              <path d="M220 280 Q 300 300 400 300 Q 350 280 250 260 Z" />
              <path d="M300 150 Q 400 150 450 220 Q 350 250 280 200 Z" />
              <path d="M500 150 Q 550 180 520 280 Q 480 200 500 150 Z" />
              <path d="M700 200 Q 800 150 900 250 Q 800 280 750 250 Z" />

              <circle cx="150" cy="180" r="8" className="fill-sky animate-pulse" />
              <circle cx="350" cy="290" r="8" className="fill-sky animate-pulse" />
              <circle cx="380" cy="200" r="8" className="fill-flare animate-pulse" />
              <circle cx="510" cy="220" r="8" className="fill-sky animate-pulse" />
              <circle cx="530" cy="250" r="8" className="fill-flare animate-pulse" />
            </svg>

            <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-steel/20 shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="w-3 h-3 rounded-full bg-sky block" /> Penambahan Hujan
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="w-3 h-3 rounded-full bg-flare block" /> Pengurangan Hujan
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-sky mb-2">2024 – 2025</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Semua Proyek</h2>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Badge variant="outline" className="bg-sky/10 text-sky border-sky/30 gap-1.5 py-1.5">
                <Droplets className="w-3.5 h-3.5" /> Penambahan Hujan
              </Badge>
              <Badge variant="outline" className="bg-flare/10 text-flare border-flare/30 gap-1.5 py-1.5">
                <CloudRain className="w-3.5 h-3.5" /> Pengurangan Hujan
              </Badge>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((p) => (
              <motion.div key={p.name} variants={fadeUp}
                className="bg-white border border-steel/20 rounded-3xl overflow-hidden hover:border-sky/40 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-48 bg-cloud">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" placeholder="blur" blurDataURL="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full border text-xs font-medium shadow-sm backdrop-blur-md ${typeStyles[p.type]}`}>
                      {p.type}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1 gap-4">
                  <h3 className="font-display font-semibold text-ink text-lg leading-tight">{p.name}</h3>
                <div className="flex items-center gap-2 text-sm text-steel">
                  <MapPin className="w-3.5 h-3.5 text-steel" /> {p.location}
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-steel/20">
                  <div>
                    <p className="text-xs text-steel mb-0.5">Sektor</p>
                    <p className="text-sm text-ink font-medium">{p.sector}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-steel mb-0.5">Hasil</p>
                    <p className={`text-2xl font-bold font-display tracking-tighter ${resultColor(p.result)}`}>{p.result}</p>
                  </div>
                </div>
                <p className="text-xs text-steel">Tahun: {p.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-steel/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink mb-5">
            Jadikan Proyek Anda Berikutnya
          </h2>
          <p className="text-steel leading-relaxed mb-8">
            Kami terbuka untuk proyek di seluruh wilayah Indonesia. Mobilisasi dalam 14 hari kerja.
          </p>
          <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-navy hover:bg-navy/90 text-white gap-2 group')} href="/hubungi-kami">
              Diskusikan Proyek Anda
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
      </section>
    </div>
  );
}
