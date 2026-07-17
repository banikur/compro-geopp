# Phase 3: SEO & Metadata

## Overview
Memastikan website terindeks dengan baik oleh mesin pencari dan tampil profesional saat dibagikan di media sosial. Phase ini mencakup OG images, structured data, sitemap, dan robots.txt.

## Requirements

### REQ-1: Open Graph Images
Setiap halaman harus punya OG image yang tampil saat link dibagikan di WhatsApp, LinkedIn, Twitter, dll.

**Acceptance Criteria:**
- OG image default (1200×630px) tersedia di `/opengraph-image`
- Dibuat menggunakan `next/og` (ImageResponse) — tidak perlu file gambar statis
- Berisi: logo/nama perusahaan, tagline, warna brand cyan
- Test preview valid di opengraph.xyz setelah deploy

### REQ-2: Structured Data (Schema.org)
Mesin pencari harus bisa memahami konteks bisnis dari website ini.

**Acceptance Criteria:**
- `Organization` schema: nama, url, logo, kontak, sameAs (social media)
- `LocalBusiness` schema: nama, alamat (2 lokasi), telepon, area layanan Indonesia
- `FAQPage` schema di `/layanan`: min 5 pertanyaan umum seputar cloud seeding
- `Article` schema di setiap artikel blog: judul, penulis, tanggal, excerpt
- Semua schema valid di validator.schema.org

### REQ-3: Sitemap & Robots
Crawler mesin pencari harus bisa menjelajahi semua halaman.

**Acceptance Criteria:**
- `app/sitemap.ts` menghasilkan `/sitemap.xml` yang valid
- Semua 8 route publik tercantum di sitemap
- `lastModified` menggunakan tanggal yang realistis
- `changeFrequency`: `monthly` untuk halaman statis, `weekly` untuk blog
- `priority`: `1.0` untuk home, `0.8` untuk halaman utama, `0.6` untuk blog/proyek
- `app/robots.ts` menghasilkan `/robots.txt` yang allow semua kecuali `/api/`
- Sitemap URL tercantum di robots.txt

### REQ-4: Per-Page Metadata Quality
Setiap halaman harus punya metadata yang unik dan keyword-rich.

**Acceptance Criteria:**
- Title setiap halaman unik, 50–60 karakter
- Description setiap halaman unik, 120–160 karakter, mengandung keyword utama
- `canonical` URL sesuai dengan URL halaman
- Tidak ada halaman dengan title atau description duplikat

## Technical Notes
- Gunakan `ImageResponse` dari `next/og` untuk OG images — lebih efisien dari file statis
- JSON-LD lebih direkomendasikan daripada microdata untuk structured data
- Inject JSON-LD via `<script type="application/ld+json">` di `layout.tsx` atau per halaman
- `generateMetadata` function bisa digunakan untuk metadata dinamis di masa depan
