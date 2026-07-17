---
inclusion: manual
---

# Development Plan — PT. Geo Pilar Persada

**Status:** Foundation selesai, menuju production-ready
**Total Estimasi:** 3–4 minggu (part-time) / 1.5–2 minggu (full-time)

---

## Phase 0: Project Setup & Foundation ✅ SELESAI

**Status:** Done

### Tasks Completed
- [x] Migrasi dari AI Studio scaffold ke project profesional
- [x] Setup Next.js 15 App Router + TypeScript strict mode
- [x] Konfigurasi Tailwind v4 + shadcn/ui + brand theming (cyan-700)
- [x] Install React Hook Form + Zod + Vercel Analytics
- [x] Buat 8 halaman dengan shared Navbar + Footer + PageHeader
- [x] Contact form dengan validasi Zod lengkap
- [x] OpenGraph + Twitter metadata di semua halaman
- [x] Loading state (`app/loading.tsx`) + prefetch hints
- [x] Cleanup semua AI Studio artifacts (package name, env vars, webpack config)
- [x] README.md profesional

### Deliverable
Codebase bersih, dev server jalan, semua halaman accessible di localhost:3000

---

## Phase 1: Visual & Graphics 🎨

**Status:** 🔴 Belum dimulai
**Estimasi:** 3–5 hari
**Priority:** TINGGI — paling impactful secara visual

### Dependencies
- Asset foto/video dari klien (drone, operasi lapangan, lokasi proyek)
- Akun Unsplash jika foto klien belum tersedia

### 1A. Asset Strategy (0.5 hari)
- [ ] Tentukan mana yang pakai real asset vs Unsplash vs SVG inline
- [ ] Download foto relevan: drone operasi, tambang, awan, waduk, PLTA
- [ ] Buat struktur folder:
  ```
  public/
  └── images/
      ├── hero/
      ├── projects/
      ├── technology/
      ├── team/
      └── clients/
  ```
- [ ] Kompres semua gambar ke format WebP
- [ ] Siapkan `blurDataURL` untuk placeholder gambar utama

### 1B. Hero Section — `app/page.tsx` (1 hari)
- [ ] Ganti radar placeholder dengan foto/ilustrasi drone operasi
- [ ] Tambah gradient overlay supaya teks tetap readable
- [ ] Implementasi `next/image` dengan `priority` prop (LCP optimization)
- [ ] Pastikan versi mobile tidak clipping
- [ ] Animasi floating chips (stat badges) lebih smooth

### 1C. Halaman Teknologi — `app/teknologi/page.tsx` (1 hari)
- [ ] Ilustrasi SVG inline untuk drone VTOL 320
- [ ] Ilustrasi SVG inline untuk Multirotor H10
- [ ] Diagram cara kerja Cloud Dome (step-by-step visual)
- [ ] Animasi Groundbase Tower Flare — partikel naik ke awan
- [ ] Foto real drone jika tersedia dari klien

### 1D. Halaman Proyek — `app/proyek/page.tsx` (0.5 hari)
- [ ] Thumbnail foto untuk setiap project card
- [ ] Peta Indonesia mini dengan pin lokasi proyek
- [ ] Visual indikator before/after curah hujan

### 1E. Halaman Tentang Kami — `app/tentang-kami/page.tsx` (0.5 hari)
- [ ] Foto tim / kantor
- [ ] Logo partner: BRIN, BMKG, PLN NP, Adaro (placeholder branded jika belum ada)
- [ ] Foto drone operasional di lapangan

### 1F. Blog Article Cards — `app/blog/page.tsx` (0.5 hari)
- [ ] Cover image untuk setiap artikel (Unsplash: cloud, drone, mining)
- [ ] Implementasi `next/image` dengan `sizes` prop yang tepat
- [ ] Aspect ratio konsisten di semua card

### Deliverable
Semua halaman punya visual yang layak, tidak ada section kosong/placeholder

---

## Phase 2: Content & Data Layer 📝

**Status:** 🔴 Belum dimulai
**Estimasi:** 2–3 hari
**Priority:** TINGGI — konten sekarang masih placeholder

### Dependencies
- Konfirmasi data dari klien (proyek, tim, sertifikasi)
- Bisa paralel dengan Phase 1

### 2A. Data Refactor (0.5 hari)
- [ ] Buat `data/projects.ts` — pindah array proyek dari `proyek/page.tsx`
- [ ] Buat `data/clients.ts` — pindah data klien dari `klien/page.tsx`
- [ ] Buat `data/articles.ts` — pindah data artikel dari `blog/page.tsx`
- [ ] Buat `data/services.ts` — pindah data layanan dari `layanan/page.tsx`
- [ ] Tambah TypeScript interface untuk setiap data type

### 2B. Content Finalization (1.5 hari)
- [ ] Review dan finalize semua copy teks bersama klien
- [ ] Update data proyek (nama, lokasi, hasil, tahun) — verifikasi akurasi
- [ ] Tambah detail tim (nama, jabatan, background) ke Tentang Kami
- [ ] Update sertifikasi & legalitas yang akurat
- [ ] Verifikasi alamat, nomor telepon, email

### 2C. Blog Content (1 hari)
- [ ] Tulis minimal 3 artikel real (bukan placeholder)
- [ ] Buat heading hierarchy yang benar: H1 → H2 → H3
- [ ] Tambah internal linking antar halaman
- [ ] Pertimbangkan MDX untuk artikel yang lebih kaya konten

### Deliverable
Semua konten akurat, data terstruktur di `data/` folder, mudah diupdate

---

## Phase 3: SEO & Metadata 🔍

**Status:** 🟡 Partial (metadata dasar sudah ada)
**Estimasi:** 1–2 hari
**Priority:** TINGGI untuk discoverability

### Dependencies
- Phase 2 harus selesai (konten final)

### 3A. OG Images (0.5 hari)
- [ ] Buat `app/opengraph-image.tsx` — OG image default (1200×630)
- [ ] Buat OG image per halaman utama menggunakan `next/og`
- [ ] Test preview di [opengraph.xyz](https://www.opengraph.xyz)

### 3B. Structured Data / Schema.org (0.5 hari)
- [ ] Tambah `Organization` schema di `app/layout.tsx`
- [ ] Tambah `LocalBusiness` schema (alamat, telepon, area layanan)
- [ ] Tambah `FAQPage` schema di `/layanan`
- [ ] Tambah `Article` schema di `/blog`
- [ ] Validasi di [schema.org validator](https://validator.schema.org)

### 3C. Sitemap & Robots (0.5 hari)
- [ ] Buat `app/sitemap.ts` — auto-generate sitemap XML
- [ ] Buat `app/robots.ts` — robots.txt yang proper
- [ ] Tambah `alternates.canonical` di setiap metadata

### 3D. Core Web Vitals Audit (0.5 hari)
- [ ] Jalankan Lighthouse di production build
- [ ] Fix LCP — hero image wajib pakai `priority` prop
- [ ] Fix CLS — semua `next/image` harus ada `width` dan `height`
- [ ] Target: Lighthouse SEO score ≥ 90

### Deliverable
`/sitemap.xml` valid, structured data valid, Lighthouse SEO ≥ 90

---

## Phase 4: Performance Optimization ⚡

**Status:** 🔴 Belum dimulai
**Estimasi:** 1–2 hari
**Priority:** MEDIUM

### Dependencies
- Phase 1 (semua gambar sudah final)

### 4A. Image Optimization (0.5 hari)
- [ ] Audit semua gambar — 100% pakai `next/image`
- [ ] Set `sizes` prop sesuai breakpoint per komponen
- [ ] Tambah `placeholder="blur"` + `blurDataURL` untuk above-the-fold images
- [ ] Pastikan gambar below fold menggunakan `loading="lazy"` (default `next/image`)

### 4B. Bundle Optimization (0.5 hari)
- [ ] Install `@next/bundle-analyzer` dan jalankan analisis
- [ ] Dynamic import komponen besar yang tidak dibutuhkan saat initial load
- [ ] Cek apakah `motion/react` bisa di-dynamic import di halaman statis

### 4C. Font Optimization (sudah partial ✅)
- [ ] Verifikasi `font-display: swap` aktif (sudah via `next/font`)
- [ ] Pastikan tidak ada FOUT yang signifikan

### Target Web Vitals
| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID/INP | < 200ms |
| CLS | < 0.1 |
| Performance (mobile) | ≥ 85 |
| Performance (desktop) | ≥ 95 |

### Deliverable
Lighthouse Performance mobile ≥ 85, desktop ≥ 95

---

## Phase 5: Accessibility & UX Polish ♿

**Status:** 🔴 Belum diaudit
**Estimasi:** 1 hari
**Priority:** MEDIUM — wajib untuk website profesional

### 5A. Accessibility Audit (0.5 hari)
- [ ] Semua `next/image` punya `alt` text deskriptif
- [ ] Color contrast ratio ≥ 4.5:1 untuk semua teks body
- [ ] Color contrast ratio ≥ 3:1 untuk teks large/bold
- [ ] Semua interactive element accessible via keyboard (Tab → Enter/Space)
- [ ] Navbar mobile menu: tambah `aria-expanded` dan `aria-controls`
- [ ] Form fields: `aria-describedby` untuk pesan error
- [ ] Tambah skip-to-content link di atas navbar
- [ ] Semua icon-only buttons punya `aria-label`

### 5B. UX Polish (0.5 hari)
- [ ] Focus ring visible dan branded (gunakan `ring-cyan-500`)
- [ ] Hover transitions konsisten di semua interactive elements (200–300ms)
- [ ] Loading skeleton untuk data yang di-fetch (jika ada)
- [ ] Error boundary di `app/error.tsx`
- [ ] Update `app/not-found.tsx` dengan navigasi yang lebih baik

### Deliverable
axe DevTools scan 0 critical errors, Lighthouse Accessibility ≥ 90

---

## Phase 6: Contact Form Backend 📬

**Status:** 🟡 Frontend done, backend belum
**Estimasi:** 0.5–1 hari
**Priority:** MEDIUM — form sekarang hanya simulasi client-side

### Dependencies
- Akun Resend (gratis: 3000 email/bulan) — [resend.com](https://resend.com)

### 6A. API Route (0.5 hari)
- [ ] Buat `app/api/contact/route.ts`
- [ ] Install `resend` package: `npm install resend`
- [ ] Re-use Zod schema dari frontend untuk server-side validation
- [ ] Rate limiting: gunakan Vercel's built-in atau `upstash/ratelimit`
- [ ] Return proper HTTP status: 200 (success), 400 (validation error), 429 (rate limit), 500 (server error)

```typescript
// app/api/contact/route.ts
// POST handler:
// 1. Parse + validate body dengan Zod
// 2. Send email via Resend
// 3. Return JSON response
```

### 6B. Frontend Integration (0.5 hari)
- [ ] Update `onSubmit` di `hubungi-kami/page.tsx` → fetch ke `/api/contact`
- [ ] Handle semua error states dengan toast atau inline message
- [ ] Tambah honeypot field untuk anti-spam sederhana
- [ ] Tambah env var: `RESEND_API_KEY` ke `.env.example`

### Deliverable
Form benar-benar kirim email ke `pt.geopilarpersada@gmail.com`

---

## Phase 7: Testing & QA 🧪

**Status:** 🔴 Belum
**Estimasi:** 1 hari
**Priority:** WAJIB sebelum deploy

### 7A. Cross-Browser Testing (0.5 hari)
- [ ] Chrome (latest) — desktop + Android
- [ ] Firefox (latest) — desktop
- [ ] Safari (latest) — desktop + iOS
- [ ] Edge (latest) — desktop
- [ ] Cek: animasi, font, grid layout, form behavior

### 7B. Responsive Testing (0.5 hari)
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 14)
- [ ] 768px (iPad)
- [ ] 1024px (iPad Pro landscape)
- [ ] 1280px (laptop)
- [ ] 1440px (desktop)
- [ ] Fokus: Navbar mobile menu, form layout, card grids, hero section

### Deliverable
Zero visual bugs di semua target device dan browser

---

## Phase 8: Deployment 🚀

**Status:** 🔴 Belum
**Estimasi:** 0.5 hari
**Priority:** FINAL

### 8A. Pre-Deploy Checklist (2 jam)
- [ ] `npm run build` — 0 TypeScript errors, 0 build errors
- [ ] `npm run lint` — 0 lint errors
- [ ] Semua `console.log` development sudah dihapus
- [ ] Tidak ada hardcoded `localhost` URL di kode
- [ ] Semua env variables terdokumentasi di `.env.example`
- [ ] `sitemap.ts` dan `robots.ts` sudah ada

### 8B. Vercel Deploy (1 jam)
- [ ] Push ke GitHub (private repo)
- [ ] Import project ke [vercel.com](https://vercel.com)
- [ ] Set environment variables di Vercel dashboard:
  - `APP_URL` — domain production (contoh: `https://geopilarpersada.com`)
  - `RESEND_API_KEY` — API key email service
- [ ] Connect custom domain
- [ ] Vercel Analytics sudah aktif ✅

### 8C. Post-Deploy (1 jam)
- [ ] Test semua 8 halaman di production URL
- [ ] Test contact form kirim email sungguhan
- [ ] Submit sitemap ke Google Search Console
- [ ] Test OG preview di [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Jalankan Lighthouse audit di URL production (bukan localhost)
- [ ] Setup Vercel Speed Insights

### Deliverable
Website live, terindeks Google, form berfungsi, analytics aktif

---

## Timeline

```
Week 1  │ Phase 1 (Visual)     ←→  Phase 2 (Content)    [paralel]
Week 2  │ Phase 3 (SEO)        ←→  Phase 4 (Perf)       [paralel]
Week 3  │ Phase 5 (A11y)       ←→  Phase 6 (Form API)   [paralel]
Week 4  │ Phase 7 (Testing)    →   Phase 8 (Deploy)      [sequential]
```

---

## ✅ Production Ready Checklist

### Code Quality
- [ ] `npm run build` — 0 errors
- [ ] `npm run lint` — 0 errors
- [ ] Tidak ada tipe `any` yang tidak perlu
- [ ] Semua `TODO` komentar sudah diselesaikan
- [ ] Data statis ada di `data/` folder, bukan inline JSX

### SEO
- [ ] Setiap halaman punya unique `<title>` dan `<meta description>`
- [ ] OG image ada untuk semua halaman (1200×630px)
- [ ] `/sitemap.xml` accessible dan valid
- [ ] `/robots.txt` dikonfigurasi benar
- [ ] Structured data valid (Organization + LocalBusiness)
- [ ] Lighthouse SEO ≥ 90

### Performance
- [ ] Lighthouse Mobile Performance ≥ 85
- [ ] Lighthouse Desktop Performance ≥ 95
- [ ] Semua gambar pakai `next/image` dengan `alt`, `width`, `height`
- [ ] Hero image pakai `priority` prop
- [ ] LCP < 2.5s di mobile

### Accessibility
- [ ] Lighthouse Accessibility ≥ 90
- [ ] axe DevTools: 0 critical errors
- [ ] Semua form fields punya `label`
- [ ] Keyboard navigation berfungsi di semua halaman
- [ ] Skip-to-content link tersedia

### Functionality
- [ ] Contact form benar-benar mengirim email
- [ ] Semua 8 halaman dapat diakses tanpa error
- [ ] Semua internal link berfungsi
- [ ] `404` page berfungsi dan ada navigasi kembali
- [ ] Loading state muncul saat navigasi antar halaman

### Security
- [ ] Tidak ada API key exposed di client-side bundle
- [ ] Contact form ada rate limiting
- [ ] Input form di-sanitize di server-side

### Deployment
- [ ] Custom domain terhubung dan HTTPS aktif
- [ ] Vercel Analytics aktif
- [ ] Google Search Console ter-setup dan sitemap sudah disubmit
- [ ] Semua env vars terset di Vercel dashboard
