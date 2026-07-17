# Phase 4: Performance Optimization

## Overview
Memastikan website memenuhi standar Core Web Vitals Google dan load secepat mungkin di koneksi mobile Indonesia yang bervariasi.

## Requirements

### REQ-1: Image Optimization
Semua gambar harus dioptimasi dan tidak menyebabkan layout shift.

**Acceptance Criteria:**
- 100% gambar menggunakan `next/image` — tidak ada `<img>` tag native
- Semua `next/image` memiliki `width`, `height`, dan `alt` yang tepat
- Hero image dan above-fold images menggunakan `priority={true}`
- `sizes` prop disesuaikan dengan breakpoint aktual komponen
- `placeholder="blur"` diterapkan pada gambar-gambar above-the-fold
- Tidak ada gambar yang menyebabkan CLS (Cumulative Layout Shift)

### REQ-2: Bundle Size
JavaScript bundle harus seminimal mungkin untuk first load.

**Acceptance Criteria:**
- Bundle analyzer dijalankan dan tidak ada dependency mencurigakan yang besar
- Komponen yang tidak dibutuhkan saat initial load di-lazy load via `next/dynamic`
- Tidak ada package besar yang di-import di sisi client tanpa kebutuhan yang jelas

### REQ-3: Core Web Vitals Targets
Website harus memenuhi standar "Good" Google.

**Acceptance Criteria:**
- LCP (Largest Contentful Paint) < 2.5s di mobile
- INP (Interaction to Next Paint) < 200ms
- CLS (Cumulative Layout Shift) < 0.1
- Lighthouse Mobile Performance score ≥ 85
- Lighthouse Desktop Performance score ≥ 95

## Technical Notes
- Jalankan audit Lighthouse di `npm run start` (production mode), bukan `npm run dev`
- Gunakan Chrome DevTools > Performance tab untuk menganalisis LCP element
- Font sudah dioptimasi via `next/font` — tidak perlu perubahan
- Tailwind CSS sudah di-purge otomatis — tidak perlu konfigurasi tambahan
