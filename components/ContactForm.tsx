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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setApiError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        const errorMessage = result.errors
          ? Object.values(result.errors).flat().join(', ')
          : result.message ?? 'Gagal mengirim pesan. Silakan coba lagi.';
        setApiError(errorMessage);
        return;
      }

      setSubmitted(true);
    } catch {
      setApiError('Terjadi kesalahan jaringan. Silakan periksa koneksi dan coba lagi.');
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-16">
      {/* Sidebar info */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="lg:col-span-2 space-y-10"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-sky-text mb-5">
            Kontak Langsung
          </p>
          <a
            href="mailto:pt.geopilarpersada@gmail.com"
            className="flex items-start gap-4 group"
          >
            <div className="w-12 h-12 bg-cloud border border-steel/40 rounded-2xl flex items-center justify-center text-steel-text group-hover:border-sky group-hover:text-sky-text transition-all shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-steel-text mb-1">Email Resmi</p>
              <p className="font-medium text-ink group-hover:text-sky-text transition-colors text-sm">
                pt.geopilarpersada@gmail.com
              </p>
            </div>
          </a>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-cloud border border-steel/40 rounded-2xl flex items-center justify-center text-steel-text shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-steel-text mb-1">Waktu Respons</p>
            <p className="font-medium text-ink text-sm">1×24 jam kerja</p>
            <p className="text-xs text-steel-text mt-1">Mobilisasi armada dalam 14 hari kerja</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-sky-text mb-5">
            Lokasi Kami
          </p>
          <div className="space-y-4">
            {offices.map((office) => (
              <div key={office.type} className="bg-cloud border border-steel/40 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-text mb-3">
                  {office.type}
                </p>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-steel-text shrink-0 mt-0.5" />
                  <address className="not-italic text-sm text-steel-text leading-relaxed">
                    {office.address}
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-steel-text shrink-0" />
                  <a
                    href={`tel:${office.tel}`}
                    className="text-sm text-ink hover:text-sky-text transition-colors font-mono"
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
        <div className="bg-cloud border border-steel/40 rounded-2xl p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-sky/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-sky-text" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                Pesan Terkirim!
              </h3>
              <p className="text-steel-text max-w-sm leading-relaxed">
                Terima kasih telah menghubungi kami. Tim kami akan merespons pesan Anda dalam 1×24 jam kerja.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              {apiError && (
                <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700" role="alert">
                  {apiError}
                </div>
              )}
              <div className="mb-2">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Kirim Pesan
                </h2>
                <p className="text-steel-text text-sm mt-1">
                  Semua kolom bertanda * wajib diisi.
                </p>
              </div>

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-ink">
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
                  <label className="text-sm font-medium text-ink">Perusahaan</label>
                  <Input {...register('company')} placeholder="PT. Nama Perusahaan" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-ink">
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
                  <label className="text-sm font-medium text-ink">
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
                <label className="text-sm font-medium text-ink">
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
                <label className="text-sm font-medium text-ink">
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
                className="w-full h-12 rounded-xl bg-sky hover:bg-sky/90 text-white font-semibold text-sm gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
