'use client';

import { motion, type Variants } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ── Zod schema ─────────────────────────────────────────────────────────── */
const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter.'),
  company: z.string().optional(),
  email: z.string().email('Format email tidak valid.'),
  phone: z
    .string()
    .regex(/^[0-9+\-\s()]{7,20}$/, 'Nomor telepon tidak valid.')
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, 'Pilih layanan yang diminati.'),
  message: z.string().min(20, 'Pesan minimal 20 karakter.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const services = [
  'Manajemen Hujan (Cloud Dome)',
  'Penambahan Hujan (Cloudbuster)',
  'Monitoring Cuaca (AWS)',
  'Konsultasi Teknis',
  'Lainnya',
];

const offices = [
  {
    type: 'Kantor Pusat',
    address:
      'Perum Damai Regency Kavling A1 Lantai 2, Gg. Pusung Utama RT.011/RW.29, Sinduharjo, Ngaglik, Sleman, D.I. Yogyakarta 55581',
    phone: '0813-2825-9928',
    tel: '081328259928',
  },
  {
    type: 'Workshop Operasional',
    address: 'Jl. Bukit Dago BDU No 36-40, Rawakalong, Gunung Sindur, Bogor 16340',
    phone: '0813-1768-8191',
    tel: '081317688191',
  },
];

export default function HubungiKamiPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormValues) => {
    // TODO: wire up to an API route or email service (e.g. Resend, Nodemailer)
    await new Promise((r) => setTimeout(r, 600)); // simulate network
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-medium tracking-wide mb-6 uppercase"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Hubungi Kami
          </motion.div>
          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="font-heading text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight mb-6 max-w-3xl"
          >
            Mari Mulai Diskusi
          </motion.h1>
          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
            className="text-xl text-slate-600 leading-relaxed max-w-2xl"
          >
            Ceritakan tantangan operasional Anda. Tim kami akan merespons dalam 1×24 jam kerja dengan solusi yang relevan.
          </motion.p>
        </div>
      </section>

      {/* Main */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Sidebar info */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-cyan-700 mb-5">
                  Kontak Langsung
                </p>
                <a
                  href="mailto:pt.geopilarpersada@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 group-hover:border-cyan-300 group-hover:text-cyan-700 transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Email Resmi</p>
                    <p className="font-medium text-slate-900 group-hover:text-cyan-700 transition-colors text-sm">
                      pt.geopilarpersada@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Waktu Respons</p>
                  <p className="font-medium text-slate-900 text-sm">1×24 jam kerja</p>
                  <p className="text-xs text-slate-500 mt-1">Mobilisasi armada dalam 14 hari kerja</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-cyan-700 mb-5">
                  Lokasi Kami
                </p>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.type} className="bg-white border border-slate-200 rounded-2xl p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 mb-3">
                        {office.type}
                      </p>
                      <div className="flex items-start gap-3 mb-3">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <address className="not-italic text-sm text-slate-600 leading-relaxed">
                          {office.address}
                        </address>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                        <a
                          href={`tel:${office.tel}`}
                          className="text-sm text-slate-700 hover:text-cyan-700 transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-3">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-slate-600 max-w-sm leading-relaxed">
                      Terima kasih telah menghubungi kami. Tim kami akan merespons pesan Anda dalam 1×24 jam kerja.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                    <div className="mb-2">
                      <h2 className="font-heading text-2xl font-semibold text-slate-900">
                        Kirim Pesan
                      </h2>
                      <p className="text-slate-500 text-sm mt-1">
                        Semua kolom bertanda * wajib diisi.
                      </p>
                    </div>

                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <Input
                          {...register('name')}
                          placeholder="Budi Santoso"
                          className={errors.name ? 'border-red-400 focus-visible:ring-red-400' : ''}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Perusahaan</label>
                        <Input {...register('company')} placeholder="PT. Nama Perusahaan" />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="nama@perusahaan.com"
                          className={errors.email ? 'border-red-400 focus-visible:ring-red-400' : ''}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">
                          Nomor Telepon
                        </label>
                        <Input
                          {...register('phone')}
                          type="tel"
                          placeholder="0812-xxxx-xxxx"
                          className={errors.phone ? 'border-red-400 focus-visible:ring-red-400' : ''}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Service select */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        Layanan yang Diminati <span className="text-red-500">*</span>
                      </label>
                      <Select onValueChange={(val) => setValue('service', val as string, { shouldValidate: true })}>
                        <SelectTrigger
                          className={errors.service ? 'border-red-400 focus:ring-red-400' : ''}
                        >
                          <SelectValue placeholder="Pilih layanan..." />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-xs text-red-500">{errors.service.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        Pesan <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        {...register('message')}
                        rows={5}
                        placeholder="Ceritakan kebutuhan atau tantangan operasional Anda..."
                        className={`resize-none ${errors.message ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
