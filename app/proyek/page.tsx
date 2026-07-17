'use client';

import { motion, type Variants } from 'motion/react';
import { FolderOpen, CloudRain, Droplets, ArrowRight, MapPin } from 'lucide-react';
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

import Image from 'next/image';

type ProjectType = 'Penambahan Hujan' | 'Pengurangan Hujan';

interface Project {
  name: string;
  location: string;
  type: ProjectType;
  result: string;
  year: string;
  sector: string;
  image: string;
}

const projects: Project[] = [
  { name: 'PLN NP PLTA Bakaru', location: 'Sulawesi Selatan', type: 'Penambahan Hujan', result: '+25%', year: '2024', sector: 'Energi / PLTA', image: '/images/projects/project-dam.webp' },
  { name: 'Poso Energy', location: 'Poso, Sulawesi Tengah', type: 'Penambahan Hujan', result: '+15%', year: '2024', sector: 'Energi / PLTA', image: '/images/projects/project-dam.webp' },
  { name: 'PLN NP PLTA Brantas', location: 'Jawa Timur', type: 'Penambahan Hujan', result: '+20%', year: '2024', sector: 'Energi / PLTA', image: '/images/projects/project-dam.webp' },
  { name: 'Kementan Jambi', location: 'Jambi, Sumatera', type: 'Penambahan Hujan', result: '+35%', year: '2024', sector: 'Pertanian / Pemerintah', image: '/images/projects/project-agriculture.webp' },
  { name: 'Akademi TNI', location: 'Sentul, Jawa Barat', type: 'Penambahan Hujan', result: 'Trial', year: '2024', sector: 'Instansi Pertahanan', image: '/images/projects/project-agriculture.webp' },
  { name: 'SIS Adaro Maruwai', location: 'Kalimantan Tengah', type: 'Pengurangan Hujan', result: '-70%', year: '2024', sector: 'Pertambangan', image: '/images/projects/project-mining.webp' },
  { name: 'PPA Adaro Tanjung', location: 'Kalimantan Selatan', type: 'Pengurangan Hujan', result: '-70%', year: '2024', sector: 'Pertambangan', image: '/images/projects/project-mining.webp' },
  { name: 'MLP Konawe', location: 'Sulawesi Tenggara', type: 'Pengurangan Hujan', result: '-69%', year: '2025', sector: 'Pertambangan', image: '/images/projects/project-mining.webp' },
  { name: 'PT CNI Kolaka', location: 'Sulawesi Tenggara', type: 'Pengurangan Hujan', result: '-70%', year: '2025', sector: 'Pertambangan', image: '/images/projects/project-mining.webp' },
  { name: 'PT JAS Subaim', location: 'Maluku Utara', type: 'Pengurangan Hujan', result: '-73%', year: '2025', sector: 'Pertambangan', image: '/images/projects/project-mining.webp' },
  { name: 'PT KFM Luwuk', location: 'Sulawesi Tengah', type: 'Pengurangan Hujan', result: '-73%', year: '2025', sector: 'Pertambangan', image: '/images/projects/project-mining.webp' },
];

const typeStyles: Record<ProjectType, string> = {
  'Penambahan Hujan': 'bg-sky-50 text-sky-700 border-sky-200',
  'Pengurangan Hujan': 'bg-amber-50 text-amber-700 border-amber-200',
};

const resultColor = (r: string) =>
  r.startsWith('+') ? 'text-emerald-600' : r.startsWith('-') ? 'text-red-500' : 'text-slate-600';

export default function ProyekPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Proyek & Galeri"
        title="Track Record & Portofolio"
        description="Rekam jejak proyek modifikasi cuaca kami dari 2024 hingga 2025 di berbagai wilayah Indonesia."
      />

      {/* Stats */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '11', label: 'Proyek Selesai' },
              { value: '73%', label: 'Maks. Pengurangan Hujan' },
              { value: '35%', label: 'Maks. Penambahan Hujan' },
              { value: '7', label: 'Provinsi Terjangkau' },
            ].map((s) => (
              <div key={s.value}>
                <div className="font-heading text-5xl font-bold tracking-tighter text-white mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indonesia Map Visual */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 mb-3">Jangkauan Operasi Nasional</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Dari Sumatera hingga Sulawesi, kami telah menyelesaikan operasi modifikasi cuaca di berbagai pulau besar di Indonesia dengan sukses.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="relative max-w-4xl mx-auto h-[400px] bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex items-center justify-center p-8">
            <svg viewBox="0 0 1000 400" className="w-full h-full text-slate-200 drop-shadow-md" fill="currentColor">
              {/* Simplified Abstract Indonesia Map */}
              {/* Sumatra */}
              <path d="M100 100 Q 150 150 200 250 Q 150 200 80 120 Z" />
              {/* Java */}
              <path d="M220 280 Q 300 300 400 300 Q 350 280 250 260 Z" />
              {/* Kalimantan */}
              <path d="M300 150 Q 400 150 450 220 Q 350 250 280 200 Z" />
              {/* Sulawesi */}
              <path d="M500 150 Q 550 180 520 280 Q 480 200 500 150 Z" />
              {/* Papua */}
              <path d="M700 200 Q 800 150 900 250 Q 800 280 750 250 Z" />
              
              {/* Pins */}
              <circle cx="150" cy="180" r="8" className="fill-cyan-500 animate-pulse" /> {/* Sumatra */}
              <circle cx="350" cy="290" r="8" className="fill-cyan-500 animate-pulse" /> {/* Java */}
              <circle cx="380" cy="200" r="8" className="fill-amber-500 animate-pulse" /> {/* Kalimantan */}
              <circle cx="510" cy="220" r="8" className="fill-cyan-500 animate-pulse" /> {/* Sulawesi */}
              <circle cx="530" cy="250" r="8" className="fill-amber-500 animate-pulse" /> {/* Sulawesi */}
            </svg>
            
            <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <span className="w-3 h-3 rounded-full bg-cyan-500 block" /> Penambahan Hujan
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <span className="w-3 h-3 rounded-full bg-amber-500 block" /> Pengurangan Hujan
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-cyan-700 mb-2">2024 – 2025</p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900">Semua Proyek</h2>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200 gap-1.5 py-1.5">
                <Droplets className="w-3.5 h-3.5" /> Penambahan Hujan
              </Badge>
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 gap-1.5 py-1.5">
                <CloudRain className="w-3.5 h-3.5" /> Pengurangan Hujan
              </Badge>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((p) => (
              <motion.div key={p.name} variants={fadeUp}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-cyan-300 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-48 bg-slate-100">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" placeholder="blur" blurDataURL="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full border text-xs font-medium shadow-sm backdrop-blur-md ${typeStyles[p.type]}`}>
                      {p.type}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1 gap-4">
                  <h3 className="font-heading font-semibold text-slate-900 text-lg leading-tight">{p.name}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {p.location}
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Sektor</p>
                    <p className="text-sm text-slate-700 font-medium">{p.sector}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 mb-0.5">Hasil</p>
                    <p className={`text-2xl font-bold font-heading tracking-tighter ${resultColor(p.result)}`}>{p.result}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400">Tahun: {p.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 mb-5">
            Jadikan Proyek Anda Berikutnya
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Kami terbuka untuk proyek di seluruh wilayah Indonesia. Mobilisasi dalam 14 hari kerja.
          </p>
          <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-slate-900 hover:bg-slate-800 text-white gap-2 group')} href="/hubungi-kami">
              Diskusikan Proyek Anda
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
      </section>
    </div>
  );
}
