'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'motion/react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cloud px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="w-full max-w-md text-center"
      >
        <motion.div
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-100 border border-amber-300 mb-6"
        >
          <AlertTriangle className="w-10 h-10 text-amber-600" />
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          className="font-display text-3xl font-semibold text-ink mb-3"
        >
          Terjadi Kesalahan
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          className="text-steel mb-8 leading-relaxed"
        >
          Maaf, terjadi kesalahan pada sisi server. Tim teknis kami telah
          diberitahu dan akan memperbaikinya segera.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={reset}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky text-white font-semibold text-sm hover:bg-sky/90 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Coba Lagi
          </motion.button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-steel/40 text-ink font-semibold text-sm hover:bg-cloud hover:border-steel/60 transition-all"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </motion.div>

        {error.digest && (
          <motion.p
            custom={4}
            variants={fadeUp}
            className="mt-8 text-xs text-steel/60 font-mono"
          >
            Error ID: {error.digest}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}