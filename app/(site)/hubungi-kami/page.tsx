'use client';

import dynamic from 'next/dynamic';
import { motion, type Variants } from 'motion/react';
import { MessageSquare } from 'lucide-react';

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => (
    <div className="grid lg:grid-cols-5 gap-16 animate-pulse">
      <div className="lg:col-span-2 space-y-10">
        <div className="h-4 bg-steel/10 rounded w-32" />
        <div className="h-20 bg-steel/10 rounded-2xl" />
        <div className="h-20 bg-steel/10 rounded-2xl" />
      </div>
      <div className="lg:col-span-3">
        <div className="bg-white border border-steel/20 rounded-3xl p-8 md:p-10 space-y-6">
          <div className="h-8 bg-steel/10 rounded w-48" />
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="h-10 bg-steel/10 rounded-xl" />
            <div className="h-10 bg-steel/10 rounded-xl" />
          </div>
          <div className="h-10 bg-steel/10 rounded-xl" />
          <div className="h-28 bg-steel/10 rounded-xl" />
          <div className="h-12 bg-sky/20 rounded-xl" />
        </div>
      </div>
    </div>
  ),
  ssr: false,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function HubungiKamiPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 bg-white border-b border-steel/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky/10 border border-sky/30 text-sky text-xs font-medium tracking-wide mb-6 uppercase"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Hubungi Kami
          </motion.div>
          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-semibold tracking-tighter text-ink leading-tight mb-6 max-w-3xl"
          >
            Mari Mulai Diskusi
          </motion.h1>
          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
            className="text-xl text-steel leading-relaxed max-w-2xl"
          >
            Ceritakan tantangan operasional Anda. Tim kami akan merespons dalam 1\u00D724 jam kerja dengan solusi yang relevan.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
