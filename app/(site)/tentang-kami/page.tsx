'use client';

import { motion, type Variants } from 'motion/react';
import { Leaf, Users, Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
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

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Integritas',
    desc: 'Kami menjalankan setiap operasi dengan transparansi penuh, standar keselamatan tertinggi, dan akuntabilitas terhadap hasil.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Inovasi',
    desc: 'Teknologi paten kami lahir dari riset mendalam bersama BRIN dan BMKG untuk menciptakan solusi modifikasi cuaca yang belum ada sebelumnya.',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Keberlanjutan',
    desc: 'Seluruh bahan semai yang kami gunakan ramah lingkungan dan jauh di bawah ambang batas aman WHO.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Kolaborasi',
    desc: 'Kami bekerja sebagai mitra strategis — bukan sekadar vendor — mendampingi klien dari perencanaan hingga evaluasi hasil.',
  },
];

const milestones = [
  { year: '2018', event: 'Pendirian PT. Geo Pilar Persada di Yogyakarta.' },
  { year: '2019', event: 'Pengembangan teknologi Drone VTOL pertama untuk penyemaian awan selektif.' },
  { year: '2020', event: 'Registrasi pertama ke DKPPU; uji coba lapangan di Kalimantan.' },
  { year: '2021', event: 'Pendaftaran paten teknologi Cloud Dome (Multirotor H10).' },
  { year: '2022', event: 'Proyek pertama berskala nasional bersama PLN Nusantara Power PLTA Bakaru.' },
  { year: '2023', event: 'Ekspansi ke 5 provinsi; penambahan armada Groundbase Tower Flare.' },
  { year: '2024', event: 'Penyelesaian 11 proyek aktif dengan rata-rata hasil 73% pengurangan & 20% penambahan hujan.' },
  { year: '2025', event: 'Pengembangan sistem monitoring AWS generasi baru dan perluasan ke Maluku & Papua.' },
];

export default function TentangKamiPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Tentang Kami"
        title="Siapa PT. Geo Pilar Persada?"
        description="Kami adalah perusahaan teknologi rekayasa cuaca berbasis riset yang berdedikasi untuk menghadirkan solusi presipitasi adaptif demi ketahanan lingkungan dan industri Indonesia."
      />

      <section className="py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p className="text-xs font-medium uppercase tracking-widest text-sky-text mb-4">Latar Belakang</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-ink mb-6">
                Lahir dari Kebutuhan Nyata
              </h2>
              <div className="space-y-4 text-steel-text leading-relaxed">
                <p>
                  PT. Geo Pilar Persada didirikan atas dasar kesadaran bahwa Indonesia — sebagai negara tropis dengan curah hujan tinggi — membutuhkan solusi pengelolaan cuaca yang jauh lebih presisi dibanding metode konvensional.
                </p>
                <p>
                  Operasi pertambangan yang terhenti karena banjir, waduk PLTA yang kekurangan air saat kemarau, dan kebakaran hutan yang tak terkendali adalah masalah nyata yang berbiaya besar. Kami hadir untuk menjawab tantangan itu secara ilmiah dan terukur.
                </p>
                <p>
                  Dengan dukungan tim ahli meteorologi dari BRIN dan BMKG, serta armada drone berteknologi paten, kami membangun sistem modifikasi cuaca skala mikro yang pertama di Indonesia.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="relative h-[420px] rounded-3xl border border-steel/20 overflow-hidden flex flex-col justify-end shadow-xl"
            >
              <Image
                src="/images/team/team-story.webp"
                alt="Tim Operasional PT Geo Pilar Persada di lapangan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

              <div className="relative z-10 p-8 w-full">
                <p className="text-white/80 text-xs font-medium uppercase tracking-widest mb-4">Mitra & Sertifikasi</p>
                <div className="flex flex-wrap gap-3">
                  {['BRIN', 'BMKG', 'DKPPU', 'TNI AU', 'PLN NP', 'Adaro'].map((tag) => (
                    <div key={tag} className="flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-sm">
                      <span className="font-display font-bold text-white tracking-tight">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-16 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-text mb-3">Nilai Kami</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Prinsip yang Menggerakkan Kami
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}
                className="p-8 bg-cloud rounded-3xl border border-steel/20 hover:border-sky/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sky/10 text-sky-text rounded-2xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink mb-3">{v.title}</h3>
                <p className="text-sm text-steel-text leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-16 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-text mb-3">Perjalanan Kami</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">Tonggak Sejarah</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-steel/20 hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <motion.div
                  key={m.year}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={idx % 4}
                  className="flex gap-8 items-start"
                >
                  <div className="shrink-0 w-28 text-right">
                    <span className="font-display font-bold text-sky-text text-lg">{m.year}</span>
                  </div>
                  <div className="hidden md:flex w-px shrink-0 items-center relative">
                    <div className="w-3 h-3 rounded-full bg-sky border-2 border-white ring-2 ring-sky/30 absolute -left-1.5" />
                  </div>
                  <div className="flex-1 pb-6 md:pl-6">
                    <p className="text-steel-text leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight mb-5">Bergabung Bersama Mitra Kami</h2>
          <p className="text-steel-text leading-relaxed mb-8">
            Lebih dari sekadar penyedia jasa — kami adalah partner strategis untuk ketahanan operasional Anda.
          </p>
          <Link className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'rounded-full bg-sky hover:bg-sky/90 text-white gap-2 group')} href="/hubungi-kami">
              Mulai Diskusi
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
      </section>
    </div>
  );
}
