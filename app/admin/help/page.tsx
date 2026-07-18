'use client';

import { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { ChevronDown, BookOpen, FileText, Settings, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

interface FAQItem {
  question: string;
  answer: string;
  category: 'umum' | 'konten' | 'teknis' | 'deployment';
}

const faqData: FAQItem[] = [
  // Umum
  {
    question: 'Apa itu Keystatic?',
    answer: 'Keystatic adalah headless CMS (Content Management System) yang memungkinkan Anda mengelola konten website melalui antarmuka visual yang mudah digunakan. Semua perubahan pada konten (proyek, klien, layanan, artikel) dilakukan melalui Keystatic, lalu otomatis disinkronkan ke file data website.',
    category: 'umum',
  },
  {
    question: 'Bagaimana cara mengakses halaman admin?',
    answer: 'Kunjungi http://localhost:3000/admin di browser Anda setelah menjalankan server development (npm run dev). Anda akan melihat antarmuka Keystatic untuk mengelola semua konten.',
    category: 'umum',
  },
  {
    question: 'Apa bedanya mengedit langsung file vs menggunakan Keystatic?',
    answer: 'Keystatic memberikan antarmuka visual yang lebih mudah digunakan, validasi otomatis, dan mencegah kesalahan format. Mengedit langsung file memerlukan pemahaman format YAML/MDX dan berisiko merusak struktur konten.',
    category: 'umum',
  },

  // Konten
  {
    question: 'Bagaimana cara membuat proyek baru?',
    answer: '1. Buka Keystatic di /admin\n2. Klik "Proyek" di sidebar\n3. Klik "New Proyek"\n4. Isi semua field: Nama, Lokasi, Tipe, Hasil, Tahun, Sektor, Path Gambar, Deskripsi\n5. Klik Save\n6. Tunggu 2-3 detik untuk sinkronisasi otomatis, atau jalankan npm run cms:sync',
    category: 'konten',
  },
  {
    question: 'Bagaimana cara menambahkan gambar ke konten?',
    answer: 'Untuk proyek, masukkan path gambar relatif (contoh: /images/projects/project-dam.webp). Gambar harus sudah ada di folder /public/images/. Untuk artikel, gunakan field "Path Gambar" dengan format yang sama.',
    category: 'konten',
  },
  {
    question: 'Format apa yang digunakan untuk konten artikel?',
    answer: 'Artikel menggunakan format MDX (Markdown + JSX). Field yang tersedia: Slug, Tag, Judul, Excerpt, Tanggal, Waktu Baca, Path Gambar, Featured, Penulis, dan Konten (dalam format MDX).',
    category: 'konten',
  },
  {
    question: 'Bagaimana cara mengedit konten yang sudah ada?',
    answer: '1. Buka Keystatic di /admin\n2. Pilih kategori konten (Proyek, Klien, Layanan, atau Artikel)\n3. Klik item yang ingin diedit\n4. Ubah field yang diperlukan\n5. Klik Save\n6. Perubahan akan otomatis terlihat di website',
    category: 'konten',
  },
  {
    question: 'Bagaimana cara menghapus konten?',
    answer: '1. Buka Keystatic di /admin\n2. Pilih kategori konten\n3. Pilih item yang ingin dihapus\n4. Klik ikon hapus atau trash\n5. Konfirmasi penghapusan\n6. File akan dihapus dari folder content/ dan data/',
    category: 'konten',
  },

  // Teknis
  {
    question: 'Perubahan saya tidak muncul di website, apa yang harus dilakukan?',
    answer: '1. Pastikan server development sedang berjalan (npm run dev)\n2. Jalankan npm run cms:sync untuk sinkronisasi manual\n3. Refresh halaman website (Ctrl+F5)\n4. Jika masih tidak muncul, periksa file di folder data/ untuk memastikan sinkronisasi berhasil',
    category: 'teknis',
  },
  {
    question: 'Bagaimana cara menambahkan gambar baru ke website?',
    answer: '1. Upload gambar ke folder /public/images/ dengan format yang sesuai (disarankan .webp)\n2. Gunakan nama file yang deskriptif dan SEO-friendly\n3. Masukkan path gambar di Keystatic (contoh: /images/projects/nama-file.webp)\n4. Pastikan ukuran gambar sesuai (disarankan max 500KB untuk performa)',
    category: 'teknis',
  },
  {
    question: 'Apakah ada batasan ukuran konten?',
    answer: 'Tidak ada batasan ketat, namun disarankan:\n- Deskripsi proyek: maksimal 500 karakter\n- Konten artikel: maksimal 10.000 karakter\n- Items layanan: maksimal 10 item\n- Gambar: maksimal 500KB per file',
    category: 'teknis',
  },
  {
    question: 'Bagaimana cara memperbaiki error "Module type is not specified"?',
    answer: 'Tambahkan "type": "module" di file package.json:\n{\n  "type": "module",\n  // ... sisa package.json\n}\nLalu jalankan ulang npm run dev',
    category: 'teknis',
  },

  // Deployment
  {
    question: 'Bagaimana cara deploy perubahan ke production?',
    answer: '1. Pastikan semua perubahan sudah disinkronkan (npm run cms:sync)\n2. Jalankan npm run build untuk membangun versi production\n3. Jalankan npm run start untuk memulai server production\n4. Atau push ke repository untuk deploy otomatis (jika menggunakan Vercel/Netlify)',
    category: 'deployment',
  },
  {
    question: 'Apakah perubahan konten langsung terlihat di production?',
    answer: 'Ya, setelah Anda melakukan sync (npm run cms:sync) dan rebuild (npm run build), perubahan konten akan terlihat di production. Jika menggunakan Vercel, deploy otomatis terjadi setelah push ke repository.',
    category: 'deployment',
  },
  {
    question: 'Bagaimana cara backup konten?',
    answer: 'Konten sudah terbackup otomatis melalui Git:\n1. File di folder content/ sudah tertrack di Git\n2. File di folder data/ juga tertrack (hasil generate)\n3. Untuk backup manual, cukup copy folder content/ ke lokasi aman\n4. Semua perubahan tercatat di Git history',
    category: 'deployment',
  },
];

const categoryLabels: Record<string, { label: string; color: string }> = {
  umum: { label: 'Umum', color: 'bg-steel/8 text-ink' },
  konten: { label: 'Konten', color: 'bg-sky/10 text-sky' },
  teknis: { label: 'Teknis', color: 'bg-flare/10 text-flare' },
  deployment: { label: 'Deployment', color: 'bg-sky/10 text-sky' },
};

const quickLinks = [
  { label: 'Buka Keystatic Admin', href: '/admin', icon: <Settings className="w-5 h-5" /> },
  { label: 'Lihat Semua Proyek', href: '/proyek', icon: <FileText className="w-5 h-5" /> },
  { label: 'Baca Artikel', href: '/blog', icon: <BookOpen className="w-5 h-5" /> },
];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const cat = categoryLabels[item.category];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index % 4}
      className="border border-steel/40 rounded-2xl overflow-hidden hover:border-sky/40 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-cloud transition-colors duration-200"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className={cn('shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium', cat.color)}>
            {cat.label}
          </span>
          <span className="font-display font-medium text-ink truncate">{item.question}</span>
        </div>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-steel shrink-0 ml-4 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 pt-2 text-sm text-ink/70 leading-relaxed whitespace-pre-line bg-cloud border-t border-steel/20">
          {item.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AdminHelpPage() {
  const [activeFilter, setActiveFilter] = useState<string>('semua');

  const categories = ['semua', 'umum', 'konten', 'teknis', 'deployment'];
  const filteredFAQ = activeFilter === 'semua'
    ? faqData
    : faqData.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Panduan Admin"
        title="User Manual & FAQ"
        description="Panduan lengkap menggunakan CMS Keystatic untuk mengelola konten website PT. Geo Pilar Persada."
      />

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-sky mb-3">Akses Cepat</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Menu Utama</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-3 gap-6"
          >
            {quickLinks.map((link) => (
              <motion.div key={link.label} variants={fadeUp}>
                <Link href={link.href}>
                  <Card className="h-full hover:border-sky/40 hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="w-12 h-12 bg-sky/10 text-sky rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-sky/15 transition-colors">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-medium text-ink group-hover:text-sky transition-colors">{link.label}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-steel group-hover:text-sky group-hover:translate-x-0.5 transition-all" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Panduan Singkat */}
      <section className="py-20 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-sky mb-3">Langkah Pertama</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Panduan Singkat Memulai</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: '01',
                title: 'Jalankan Server',
                desc: 'Jalankan npm run dev di terminal, lalu buka http://localhost:3000/admin di browser.',
              },
              {
                step: '02',
                title: 'Pilih Kategori',
                desc: 'Di sidebar Keystatic, pilih kategori konten: Proyek, Klien, Layanan, atau Artikel.',
              },
              {
                step: '03',
                title: 'Buat/Edit Konten',
                desc: 'Klik "New" untuk konten baru, atau klik item yang ada untuk mengeditnya.',
              },
              {
                step: '04',
                title: 'Simpan & Sync',
                desc: 'Klik Save, lalu tunggu sinkronisasi otomatis (2-3 detik) atau jalankan npm run cms:sync.',
              },
            ].map((s) => (
              <motion.div key={s.step} variants={fadeUp}
                className="relative p-6 bg-white rounded-3xl border border-steel/40 hover:border-sky/40 hover:shadow-md transition-all duration-300"
              >
                <span className="font-display text-5xl font-bold text-sky/10 absolute top-4 right-5 select-none">{s.step}</span>
                <h3 className="font-display text-lg font-semibold text-ink mb-3 relative z-10">{s.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed relative z-10">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-sky mb-3">Bantuan</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink mb-2">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-steel">Temukan jawaban atas pertanyaan umum seputar penggunaan CMS.</p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 capitalize',
                  activeFilter === cat
                    ? 'bg-sky text-white shadow-md'
                    : 'bg-steel/8 text-ink/70 hover:bg-steel/15'
                )}
              >
                {cat === 'semua' ? 'Semua' : categoryLabels[cat]?.label || cat}
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filteredFAQ.map((item, idx) => (
              <FAQAccordion key={item.question} item={item} index={idx} />
            ))}
          </div>

          {filteredFAQ.length === 0 && (
            <div className="text-center py-12 text-steel">
              <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Tidak ada pertanyaan untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Format Konten */}
      <section className="py-20 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-sky mb-3">Referensi</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Format Konten</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Proyek (YAML)',
                format: 'content/projects/*.yaml',
                fields: ['name — Nama proyek (slug)', 'location — Lokasi proyek', 'type — Tipe (Penambahan/Pengurangan Hujan)', 'result — Hasil pencapaian', 'year — Tahun pelaksanaan', 'sector — Sektor industri', 'image — Path gambar', 'description — Deskripsi singkat'],
              },
              {
                title: 'Artikel (MDX)',
                format: 'content/articles/*.mdx',
                fields: ['slug — URL slug', 'tag — Kategori artikel', 'title — Judul artikel', 'excerpt — Ringkasan singkat', 'date — Tanggal publikasi', 'readTime — Estimasi waktu baca', 'image — Path gambar', 'featured — Artikel unggulan', 'author — Nama penulis', 'content — Konten MDX'],
              },
              {
                title: 'Klien (MDX)',
                format: 'content/clients/*.mdx',
                fields: ['name — Nama klien (slug)', 'sector — Sektor industri', 'logo — Path logo (opsional)'],
              },
              {
                title: 'Layanan (MDX)',
                format: 'content/services/*.mdx',
                fields: ['slug — URL slug', 'icon — Nama ikon (lucide-react)', 'title — Judul layanan', 'sub — Subjudul', 'desc — Deskripsi layanan', 'items — Daftar item (pisah koma)', 'href — Link tujuan'],
              },
            ].map((fmt) => (
              <motion.div key={fmt.title} variants={fadeUp}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-sky" />
                      {fmt.title}
                    </CardTitle>
                    <p className="text-xs text-steel font-mono mt-1">{fmt.format}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5">
                      {fmt.fields.map((f) => (
                        <li key={f} className="text-sm text-ink/70 flex items-start gap-2">
                          <span className="text-sky mt-1.5 text-xs">●</span>
                          <code className="text-xs bg-steel/8 px-1.5 py-0.5 rounded text-ink">{f.split(' — ')[0]}</code>
                          <span className="text-steel">{f.split(' — ')[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Script Reference */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-sky mb-3">Referensi Script</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Perintah yang Sering Digunakan</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="bg-navy rounded-3xl p-8 overflow-x-auto"
          >
            <div className="space-y-4">
              {[
                { cmd: 'npm run dev', desc: 'Jalankan server development (auto-sync aktif)' },
                { cmd: 'npm run build', desc: 'Bangun versi production' },
                { cmd: 'npm run start', desc: 'Jalankan server production' },
                { cmd: 'npm run cms:sync', desc: 'Sinkronkan konten dari content/ ke data/' },
                { cmd: 'npm run lint', desc: 'Jalankan pengecekan kualitas kode' },
              ].map((s) => (
                <div key={s.cmd} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <code className="font-mono text-sm text-sky shrink-0">{s.cmd}</code>
                  <span className="text-steel text-sm">— {s.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight mb-5">Siap Mengelola Konten?</h2>
          <p className="text-steel leading-relaxed mb-8">
            Buka Keystatic admin untuk mulai membuat, mengedit, dan mengelola konten website Anda.
          </p>
          <Link
            href="/admin"
            className={cn(
              'inline-flex items-center gap-2 px-8 py-3.5 bg-sky hover:bg-sky/90 text-white font-medium rounded-full transition-colors duration-200 group'
            )}
          >
            Buka Keystatic Admin
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
