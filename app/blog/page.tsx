'use client';

import { motion, type Variants } from 'motion/react';
import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageHeader from '@/components/PageHeader';

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

interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    slug: 'teknologi-cloud-seeding-drone-indonesia',
    tag: 'Teknologi',
    title: 'Bagaimana Drone Mengubah Cara Kita Melakukan Cloud Seeding di Indonesia',
    excerpt: 'Teknologi penyemaian awan konvensional menggunakan pesawat berawak memiliki keterbatasan besar: biaya tinggi, bergantung visibilitas, dan tidak bisa menarget awan spesifik. Drone VTOL generasi terbaru mengubah paradigma ini secara fundamental.',
    date: '12 Juni 2025',
    readTime: '6 menit',
    image: '/images/blog/drone-seeding.webp',
    featured: true,
  },
  {
    slug: 'cloud-dome-teknologi-pengurangan-hujan',
    tag: 'Inovasi',
    title: 'Cloud Dome: Teknologi Pengurangan Hujan untuk Operasi Pertambangan',
    excerpt: 'Operasi hauling tambang yang terhenti karena hujan lebat bisa menelan kerugian miliaran rupiah per hari. Teknologi Cloud Dome hadir sebagai solusi mitigasi yang terbukti efektif di lapangan.',
    date: '28 Mei 2025',
    readTime: '5 menit',
    image: '/images/blog/mining-dome.webp',
  },
  {
    slug: 'modifikasi-cuaca-plta-pengisian-waduk',
    tag: 'Studi Kasus',
    title: 'Meningkatkan Debit Air Waduk PLTA dengan Penyemaian Awan Selektif',
    excerpt: 'Musim kemarau yang berkepanjangan mengancam kapasitas produksi PLTA. Penyemaian awan selektif terbukti meningkatkan curah hujan di area tangkapan hingga 25% berdasarkan proyek PLTA Bakaru.',
    date: '10 Mei 2025',
    readTime: '7 menit',
    image: '/images/blog/plta-dam.webp',
  },
  {
    slug: 'groundbase-tower-flare-cara-kerja',
    tag: 'Teknologi',
    title: 'Cara Kerja Groundbase Tower Flare dalam Seeding Awan Orografis',
    excerpt: 'Awan orografis yang terbentuk di wilayah pegunungan memiliki potensi besar sebagai sumber air hujan. Groundbase Tower Flare memanfaatkan updraft alami untuk mendistribusikan partikel CCN secara efisien.',
    date: '22 April 2025',
    readTime: '5 menit',
    image: '/images/blog/groundbase.webp',
  },
  {
    slug: 'karhutla-mitigasi-cuaca-kalimantan',
    tag: 'Lingkungan',
    title: 'Peran Modifikasi Cuaca dalam Mitigasi Karhutla di Kalimantan',
    excerpt: 'Kebakaran hutan dan lahan (karhutla) menjadi ancaman tahunan. Intervensi cuaca berbasis drone dapat menjadi lapisan pertahanan pertama sebelum api meluas ke area yang lebih luas.',
    date: '5 April 2025',
    readTime: '8 menit',
    image: '/images/blog/karhutla.webp',
  },
  {
    slug: 'regulasi-modifikasi-cuaca-indonesia',
    tag: 'Regulasi',
    title: 'Memahami Regulasi Modifikasi Cuaca dan Perizinan DKPPU di Indonesia',
    excerpt: 'Setiap operasi modifikasi cuaca di Indonesia memerlukan perizinan khusus. Artikel ini menjelaskan proses NOTAM, registrasi DKPPU, dan standar keselamatan yang harus dipenuhi.',
    date: '18 Maret 2025',
    readTime: '6 menit',
    image: '/images/blog/aviation-rules.webp',
  },
];

const tagColors: Record<string, string> = {
  Teknologi: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Inovasi: 'bg-violet-50 text-violet-700 border-violet-200',
  'Studi Kasus': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Lingkungan: 'bg-green-50 text-green-700 border-green-200',
  Regulasi: 'bg-amber-50 text-amber-700 border-amber-200',
};

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Blog & Artikel"
        title="Wawasan & Edukasi Cuaca"
        description="Artikel riset, studi kasus, dan panduan teknis seputar teknologi modifikasi cuaca dan meteorologi terapan."
      />

      {/* Featured Article */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-8"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-cyan-700">Artikel Unggulan</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="bg-slate-900 text-white rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch hover:ring-2 hover:ring-cyan-500/30 transition-all cursor-pointer group shadow-lg"
          >
            <div className="relative w-full lg:w-2/5 h-64 lg:h-auto bg-slate-800">
              <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" placeholder="blur" blurDataURL="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==" />
            </div>
            <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium mb-6 self-start ${tagColors[featured.tag] ?? 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                <Tag className="w-3 h-3" /> {featured.tag}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mb-5 group-hover:text-cyan-300 transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">{featured.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featured.readTime} baca</span>
                </div>
                <div className="shrink-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-10"
          >
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-900">Artikel Lainnya</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((article) => (
              <motion.div key={article.slug} variants={fadeUp}
                className="group bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:border-cyan-300 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative w-full h-48 bg-slate-200">
                  <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" placeholder="blur" blurDataURL="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==" />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium shadow-sm backdrop-blur-md ${tagColors[article.tag] ?? 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                      <Tag className="w-3 h-3" /> {article.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1 gap-4">
                  <h3 className="font-heading font-semibold text-slate-900 leading-snug group-hover:text-cyan-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-400">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-cyan-50 border-t border-cyan-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 mb-4">
            Dapatkan Update Artikel Terbaru
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Kirimkan email Anda dan kami akan mengirimkan artikel riset &amp; teknologi cuaca terbaru langsung ke inbox Anda.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="alamat@email.com"
              className="flex-1 rounded-full h-12 px-5 bg-white"
            />
            <Button
              type="submit"
              className="h-12 px-7 rounded-full bg-cyan-700 hover:bg-cyan-800 text-white font-medium shrink-0"
            >
              Berlangganan
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
