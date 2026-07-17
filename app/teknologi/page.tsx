'use client';

import { motion, type Variants } from 'motion/react';
import {
  Plane, RadioTower, Zap, CloudRain, Activity,
  CheckCircle2, ArrowRight, Cpu, Shield,
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

// Pre-computed particle data — avoids Math.random() during render
const PARTICLES = [
  { left: '22%', duration: '2.4s', delay: '0s' },
  { left: '38%', duration: '3.1s', delay: '0.7s' },
  { left: '55%', duration: '2.8s', delay: '1.3s' },
  { left: '70%', duration: '2.1s', delay: '0.3s' },
  { left: '45%', duration: '3.5s', delay: '1.8s' },
  { left: '30%', duration: '2.6s', delay: '0.9s' },
];

const drones = [
  {
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    name: 'VTOL 320',
    purpose: 'Penambah Hujan',
    desc: 'Drone Fixed Wing dengan kemampuan Vertical Take-Off & Landing. Dirancang untuk misi penyemaian awan di dataran tinggi dengan jangkauan luas.',
    specs: [
      { label: 'Ketinggian Operasi', value: 'hingga 3.000 m' },
      { label: 'Jangkauan', value: '15 km dari base' },
      { label: 'Durasi Terbang', value: '50 menit' },
      { label: 'Payload', value: '4 Flare / 4 kg Garam' },
    ],
    illustration: (
      <svg viewBox="0 0 200 100" className="w-full h-auto text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M100 20 L100 80 M20 50 L180 50 M90 50 L100 30 L110 50" className="stroke-cyan-600" strokeWidth="4" />
        <circle cx="20" cy="50" r="10" className="fill-slate-100 stroke-slate-400" />
        <circle cx="180" cy="50" r="10" className="fill-slate-100 stroke-slate-400" />
        <path d="M10 50 Q 20 20 30 50 M170 50 Q 180 20 190 50" className="stroke-slate-300" strokeDasharray="4 4" />
        <rect x="85" y="40" width="30" height="20" rx="4" className="fill-white stroke-cyan-700" strokeWidth="2" />
        <path d="M100 60 L100 70 M90 70 L110 70" className="stroke-cyan-700" />
      </svg>
    ),
  },
  {
    icon: <CloudRain className="w-5 h-5 text-blue-500" />,
    name: 'Multirotor H10',
    purpose: 'Pengurang Hujan (Cloud Dome)',
    desc: 'Drone multirotor dengan sistem penyemprot hidronano presisi. Mampu membentuk "kubah penghalang" awan di atas area target secara efektif.',
    specs: [
      { label: 'Ketinggian Operasi', value: 'hingga 1.000 m' },
      { label: 'Misi', value: 'Cloud Dome / Rain Suppression' },
      { label: 'Payload Total', value: '10 kg' },
      { label: 'Muatan Aktif', value: '4 kg Hidronano Cair' },
    ],
    illustration: (
      <svg viewBox="0 0 200 100" className="w-full h-auto" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 40 L160 40 M70 70 L130 70 M100 20 L100 80" className="stroke-slate-300" strokeWidth="3" />
        <ellipse cx="40" cy="40" rx="20" ry="6" className="fill-white stroke-cyan-500" strokeWidth="2" />
        <ellipse cx="160" cy="40" rx="20" ry="6" className="fill-white stroke-cyan-500" strokeWidth="2" />
        <ellipse cx="70" cy="70" rx="20" ry="6" className="fill-white stroke-cyan-500" strokeWidth="2" />
        <ellipse cx="130" cy="70" rx="20" ry="6" className="fill-white stroke-cyan-500" strokeWidth="2" />
        <ellipse cx="100" cy="20" rx="20" ry="6" className="fill-white stroke-cyan-500" strokeWidth="2" />
        <circle cx="100" cy="50" r="15" className="fill-white stroke-cyan-700" strokeWidth="3" />
        <path d="M90 75 L80 95 M100 75 L100 100 M110 75 L120 95" className="stroke-blue-400" strokeWidth="2" strokeDasharray="3 3" />
      </svg>
    ),
  },
];

const groundFeatures = [
  'Operasi 24 jam non-stop tanpa batasan visibilitas',
  'Efektif untuk awan orografis (pegunungan)',
  'Bahan semai ramah lingkungan — jauh di bawah ambang WHO',
  'Sangat ekonomis dibanding pesawat konvensional',
  'Memanfaatkan updraft angin monsun alami',
  'Kapasitas: 1–5 kg/hari per 10.000 Ha area semai',
];

const credentials = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Teknologi Terdaftar Paten',
    desc: 'Drone VTOL dan sistem Cloud Dome telah melalui proses pendaftaran paten nasional sebagai inovasi teknologi rekayasa cuaca.',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Registrasi DKPPU',
    desc: 'Seluruh armada drone operasional terdaftar resmi di Direktorat Kelaikudaraan dan Pengoperasian Pesawat Udara.',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Kolaborasi BRIN & BMKG',
    desc: 'Setiap operasi didukung kepakaran ahli awan dan meteorologi dari Badan Riset dan Inovasi Nasional serta BMKG.',
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: 'Pilot Bersertifikat RPC',
    desc: 'Semua pilot drone memiliki sertifikat Remote Pilot Certificate (RPC) sesuai regulasi penerbangan sipil Indonesia.',
  },
];

export default function TeknologiPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Teknologi"
        title="Infrastruktur Teknologi Hibrida"
        description="Kombinasi sistem udara (Drone Base) dan darat (Ground Base) untuk menjangkau setiap jenis awan target dengan efisiensi biaya dan operasional penuh 24 jam."
      />

      {/* Drone Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-700">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-cyan-700">Sistem Udara</p>
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900">Drone Base (Airborne)</h2>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-2xl ml-16">
              Penargetan awan selektif pada ketinggian dasar awan 500–2.000m. Berbeda dari pesawat berawak konvensional yang terbang di atas awan, drone kami melakukan penetrasi presisi langsung di bawah awan target.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid lg:grid-cols-2 gap-8"
          >
            {drones.map((drone) => (
              <motion.div key={drone.name} variants={fadeUp}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  {drone.icon}
                  <h3 className="font-heading text-xl font-semibold text-slate-900">{drone.name}</h3>
                </div>
                <p className="text-cyan-700 text-sm font-medium mb-5">{drone.purpose}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{drone.desc}</p>
                <div className="mb-8 w-full max-w-[200px] mx-auto opacity-80 mix-blend-multiply">
                  {drone.illustration}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {drone.specs.map((spec) => (
                    <div key={spec.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">{spec.label}</p>
                      <p className="font-semibold text-slate-900 text-sm">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ground Base */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-300">
                  <RadioTower className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-cyan-400">Sistem Darat</p>
                  <h2 className="font-heading text-3xl font-semibold tracking-tight">Ground Base (Permukaan)</h2>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-10">
                Groundbase Tower Flare adalah generator seeding darat berkapasitas tinggi yang memanfaatkan updraft alami angin monsun dan daratan untuk mendistribusikan partikel penyemai (CCN) langsung ke dalam awan. Fokus utama pada awan lokal dan orografis di area pegunungan.
              </p>
              <ul className="space-y-4">
                {groundFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Visual Groundbase Animated */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="relative h-[400px] bg-slate-800/40 rounded-3xl border border-slate-700 overflow-hidden flex items-center justify-center"
            >
              <style>{`
                @keyframes rise {
                  0% { transform: translateY(0) scale(1); opacity: 0; }
                  20% { opacity: 1; }
                  80% { opacity: 0.8; transform: translateY(-150px) scale(2); }
                  100% { transform: translateY(-200px) scale(3); opacity: 0; }
                }
              `}</style>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.15)_0%,transparent_70%)]" />

              {/* Clouds at top */}
              <div className="absolute top-10 left-10 w-32 h-12 bg-white/5 rounded-full blur-xl animate-pulse" />
              <div className="absolute top-16 right-16 w-40 h-16 bg-white/10 rounded-full blur-2xl" />

              {/* Tower */}
              <div className="relative z-10 w-24 h-48 border-x-4 border-slate-600 border-b-4 rounded-b flex flex-col items-center justify-end pb-2">
                <RadioTower className="w-16 h-16 text-cyan-400 -mt-10" />
                <div className="w-1 h-full bg-slate-700 mt-2" />
              </div>

              {/* Rising Particles — using pre-computed values */}
              <div className="absolute inset-x-0 bottom-40 top-20 flex justify-center overflow-hidden">
                <div className="relative w-32 h-full">
                  {PARTICLES.map((p, i) => (
                    <div
                      key={i}
                      className="absolute bottom-0 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      style={{
                        left: p.left,
                        animation: `rise ${p.duration} linear infinite`,
                        animationDelay: p.delay,
                        opacity: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16 max-w-xl"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-cyan-700 mb-3">Kepatuhan & Sertifikasi</p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">
              Beroperasi dengan Standar Tertinggi
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {credentials.map((c) => (
              <motion.div key={c.title} variants={fadeUp}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-cyan-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-cyan-50 text-cyan-700 rounded-2xl flex items-center justify-center mb-6">
                  {c.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 mb-5">
            Ingin Tahu Lebih Lanjut tentang Teknologi Kami?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Tim teknis kami siap menjelaskan cara kerja sistem dan kesesuaiannya dengan kondisi lapangan Anda.
          </p>
          <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-cyan-700 hover:bg-cyan-800 text-white gap-2 group')} href="/hubungi-kami">
            Konsultasi Teknis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
