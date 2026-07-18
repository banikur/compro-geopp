'use client';

import { motion, type Variants } from 'motion/react';
import { Badge } from '@/components/ui/badge';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="py-24 bg-cloud border-b border-steel/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
          <Badge variant="outline" className="mb-6 text-sky-text border-sky/30 bg-sky/5 uppercase tracking-wide text-xs">
            {badge}
          </Badge>
        </motion.div>
        <motion.h1
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
          className="font-display text-5xl md:text-6xl font-semibold tracking-tighter text-ink leading-tight mb-6 max-w-3xl"
        >
          {title}
        </motion.h1>
        <motion.p
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="text-xl text-steel-text leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
