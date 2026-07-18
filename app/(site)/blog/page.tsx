'use client';

import { motion, type Variants } from 'motion/react';
import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageHeader from '@/components/PageHeader';
import { articles } from '@/data';

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

const tagColors: Record<string, string> = {
  Teknologi: 'bg-sky/10 text-sky-text border-sky/30',
  Inovasi: 'bg-sky/10 text-sky-text border-sky/30',
  'Studi Kasus': 'bg-steel/8 text-ink border-steel/20',
  Lingkungan: 'bg-steel/8 text-ink border-steel/20',
  Regulasi: 'bg-flare/10 text-flare-text border-flare/30',
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

      <section className="py-16 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-8"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-sky-text">Artikel Unggulan</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="bg-navy text-white rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch hover:ring-2 hover:ring-sky/30 transition-all cursor-pointer group shadow-lg"
          >
            <div className="relative w-full lg:w-2/5 h-64 lg:h-auto bg-ink">
              <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" placeholder="blur" blurDataURL="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==" />
            </div>
            <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium mb-6 self-start ${tagColors[featured.tag] ?? 'bg-steel/8 text-ink border-steel/20'}`}>
                <Tag className="w-3 h-3" /> {featured.tag}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-5 group-hover:text-sky-text transition-colors">
                {featured.title}
              </h2>
              <p className="text-steel-text leading-relaxed text-lg mb-8">{featured.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-6 text-sm text-steel-text">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featured.readTime} baca</span>
                </div>
                <div className="shrink-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-sky rounded-2xl flex items-center justify-center group-hover:bg-sky/90 transition-colors">
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-10"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Artikel Lainnya</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((article) => (
              <motion.div key={article.slug} variants={fadeUp}
                className="group bg-cloud border border-steel/20 rounded-3xl overflow-hidden hover:border-sky/40 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative w-full h-48 bg-steel/10">
                  <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" placeholder="blur" blurDataURL="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==" />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium shadow-sm backdrop-blur-md ${tagColors[article.tag] ?? 'bg-steel/8 text-ink border-steel/20'}`}>
                      <Tag className="w-3 h-3" /> {article.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1 gap-4">
                  <h3 className="font-display font-semibold text-ink leading-snug group-hover:text-sky-text transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-steel-text leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-steel/20 text-xs text-steel-text">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-sky/5 border-t border-sky/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink mb-4">
            Dapatkan Update Artikel Terbaru
          </h2>
          <p className="text-steel-text leading-relaxed mb-8">
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
              className="h-12 px-7 rounded-full bg-sky hover:bg-sky/90 text-white font-medium shrink-0"
            >
              Berlangganan
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
