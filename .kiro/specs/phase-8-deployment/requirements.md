# Phase 8: Deployment

## Overview
Men-deploy website ke Vercel dengan custom domain, environment variables yang benar, dan semua post-deploy verification selesai.

## Requirements

### REQ-1: Build Quality Gate
Tidak ada error apapun sebelum deploy.

**Acceptance Criteria:**
- `npm run build` selesai tanpa TypeScript error, build error, atau warning kritis
- `npm run lint` menghasilkan 0 error
- Tidak ada `console.log` di production code
- Tidak ada hardcoded URL `localhost` atau `127.0.0.1` di codebase
- Semua environment variables terdokumentasi di `.env.example`

### REQ-2: Vercel Configuration
Project dikonfigurasi dengan benar di Vercel.

**Acceptance Criteria:**
- Project terhubung ke GitHub repository
- Environment variables terset di Vercel dashboard (bukan di file):
  - `APP_URL` = URL production
  - `RESEND_API_KEY` = API key email
- Framework preset terdeteksi sebagai Next.js (otomatis)
- Build command dan output directory sesuai (otomatis dari `next.config.ts`)
- Vercel Analytics aktif di project settings

### REQ-3: Domain & HTTPS
Website harus accessible via domain yang benar dengan HTTPS.

**Acceptance Criteria:**
- Custom domain terhubung (jika tersedia)
- HTTPS aktif dan redirect HTTP → HTTPS (Vercel otomatis)
- `APP_URL` env var sesuai dengan domain yang aktif
- Tidak ada mixed content warning di browser

### REQ-4: Post-Deploy Verification
Website berfungsi dengan benar di production environment.

**Acceptance Criteria:**
- Semua 8 route mengembalikan HTTP 200
- `/sitemap.xml` accessible dan valid XML
- `/robots.txt` accessible dan berisi sitemap URL
- Contact form mengirim email sungguhan di production
- Google Search Console ter-setup dan sitemap sudah disubmit
- Lighthouse audit di production URL: Performance ≥ 85, SEO ≥ 90, Accessibility ≥ 90

## Technical Notes
- Deploy ke Vercel adalah zero-config untuk Next.js — tidak perlu konfigurasi tambahan
- Custom domain DNS propagation bisa memakan waktu 24–48 jam
- Selalu test contact form di production setelah deploy — behavior bisa berbeda dari lokal
- Google Search Console butuh verifikasi kepemilikan domain sebelum bisa submit sitemap
