# Phase 6: Contact Form Backend

## Overview
Menghubungkan contact form di `/hubungi-kami` ke email service sungguhan. Saat ini form hanya simulasi client-side — submit tidak mengirim email apapun.

## Requirements

### REQ-1: API Route
Harus ada server-side endpoint yang menangani submission form.

**Acceptance Criteria:**
- `POST /api/contact` menerima dan memproses form submission
- Server-side validation menggunakan Zod schema yang sama dengan frontend
- Response JSON konsisten: `{ success: boolean, message: string }`
- HTTP status codes tepat: 200 (berhasil), 400 (validasi gagal), 429 (rate limit), 500 (server error)
- Tidak ada data sensitif yang di-log ke console di production

### REQ-2: Email Delivery
Email notifikasi harus terkirim ke inbox klien setiap kali form disubmit.

**Acceptance Criteria:**
- Email terkirim ke `pt.geopilarpersada@gmail.com` setiap submit berhasil
- Email berisi semua field: nama, perusahaan, email, telepon, layanan, pesan
- Subject email deskriptif: `[Kontak Baru] {nama} - {layanan}`
- Reply-to header diset ke email pengirim, sehingga klien bisa langsung reply
- Template email rapi dan readable di Gmail

### REQ-3: Rate Limiting
Form harus dilindungi dari spam dan abuse.

**Acceptance Criteria:**
- Maksimal 5 submission per IP per 10 menit
- Response 429 dengan pesan yang ramah: "Terlalu banyak permintaan. Coba lagi beberapa menit."
- Honeypot field tersembunyi — jika field ini terisi, request diabaikan secara diam-diam

### REQ-4: Frontend Integration
UI form harus terintegrasi penuh dengan API route.

**Acceptance Criteria:**
- `onSubmit` di `hubungi-kami/page.tsx` melakukan `fetch('POST /api/contact')`
- Loading state selama request berlangsung (button disabled, teks "Mengirim...")
- Success state muncul setelah response 200 (sudah ada ✅ — tinggal hubungkan ke API)
- Error state muncul dengan pesan yang jelas untuk response 400, 429, 500
- Network error ditangani (timeout, offline) dengan pesan fallback

## Technical Notes
- **Email service pilihan: Resend** — paling mudah setup, SDK TypeScript-first, gratis 3000 email/bulan
- Alternatif: Nodemailer + Gmail App Password (lebih rumit setup)
- `RESEND_API_KEY` harus ada di `.env.local` dan di Vercel environment variables
- Jangan pernah expose API key di client-side code
- Rate limiting sederhana bisa pakai Map di-memory atau Vercel KV (jika perlu persistent)
