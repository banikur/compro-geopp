import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, errors, message: 'Validasi gagal' },
        { status: 400 }
      );
    }

    const data: ContactFormValues = result.data;

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'pt.geopilarpersada@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not set, skipping email send');
      return NextResponse.json(
        { success: true, message: 'Pesan diterima (email tidak dikirim - konfigurasi RESEND_API_KEY diperlukan)' },
        { status: 200 }
      );
    }

    const serviceLabels: Record<string, string> = {
      'Manajemen Hujan (Cloud Dome)': 'Manajemen Hujan (Cloud Dome)',
      'Penambahan Hujan (Cloudbuster)': 'Penambahan Hujan (Cloudbuster)',
      'Monitoring Cuaca (AWS)': 'Monitoring Cuaca (AWS)',
      'Konsultasi Teknis': 'Konsultasi Teknis',
      Lainnya: 'Lainnya',
    };

    const selectedService = serviceLabels[data.service] ?? data.service;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #10202B; max-width: 600px; margin: 0 auto; padding: 24px; }
            .header { background: #2E9BC7; color: white; padding: 24px; border-radius: 12px 12px 0 0; }
            .content { background: #F5F8FA; padding: 24px; border-radius: 0 0 12px 12px; }
            .field { margin-bottom: 16px; }
            .label { font-weight: 600; color: #0A4C6E; font-size: 14px; margin-bottom: 4px; display: block; }
            .value { color: #10202B; }
            .divider { border-top: 1px solid #8CA2AE; margin: 20px 0; }
            .footer { text-align: center; color: #8CA2AE; font-size: 12px; margin-top: 24px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 20px;">Pesan Baru dari Website</h1>
            <p style="margin: 8px 0 0; opacity: 0.9;">Formulir Kontak — PT. Geo Pilar Persada</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Nama Lengkap</span>
              <span class="value">${data.name}</span>
            </div>
            <div class="field">
              <span class="label">Perusahaan</span>
              <span class="value">${data.company ?? '—'}</span>
            </div>
            <div class="field">
              <span class="label">Email</span>
              <span class="value">${data.email}</span>
            </div>
            <div class="field">
              <span class="label">Nomor Telepon</span>
              <span class="value">${data.phone ?? '—'}</span>
            </div>
            <div class="field">
              <span class="label">Layanan Diminati</span>
              <span class="value">${selectedService}</span>
            </div>
            <div class="divider" />
            <div class="field">
              <span class="label">Pesan</span>
              <div class="value" style="white-space: pre-wrap;">${data.message}</div>
            </div>
            <div class="footer">
              Dikirim dari formulir kontak di <a href="${process.env.APP_URL ?? 'https://geopilarpersada.com'}" style="color: #2E9BC7;">geopilarpersada.com</a>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
Pesan Baru dari Website — PT. Geo Pilar Persada

Nama Lengkap: ${data.name}
Perusahaan: ${data.company ?? '—'}
Email: ${data.email}
Nomor Telepon: ${data.phone ?? '—'}
Layanan Diminati: ${selectedService}

Pesan:
${data.message}

---
Dikirim dari formulir kontak di ${process.env.APP_URL ?? 'https://geopilarpersada.com'}
    `.trim();

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Geo Pilar Persada <${fromEmail}>`,
        to: [toEmail],
        subject: `Kontak Website: ${data.name} — ${selectedService}`,
        html: htmlContent,
        text: textContent,
        replyTo: data.email,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error('Resend API error:', errorData);
      return NextResponse.json(
        { success: false, message: 'Gagal mengirim email. Silakan coba lagi nanti.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Pesan berhasil dikirim. Tim kami akan merespons dalam 1×24 jam kerja.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan server. Silakan coba lagi nanti.' },
      { status: 500 }
    );
  }
}