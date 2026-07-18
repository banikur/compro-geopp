# Phase 3 Tasks: SEO & Metadata

## Task List

- [x] 1. Buat `app/sitemap.ts` — return semua 8 route dengan `lastModified` dan `changeFrequency`
- [x] 2. Buat `app/robots.ts` — allow semua, disallow `/api/`, tambah sitemap URL
- [x] 3. Tambah JSON-LD `Organization` schema di `app/layout.tsx` via `<script type="application/ld+json">`
- [x] 4. Tambah JSON-LD `LocalBusiness` schema di `app/layout.tsx` (nama, alamat, telepon, area layanan)
- [x] 5. Tambah JSON-LD `FAQPage` schema di `app/layanan/layout.tsx` (5 FAQ)
- [x] 6. Update 7 page layouts dengan `alternates.canonical`
- [x] 7. Update `.env.local` dengan production URL
- [ ] 8. Buat `app/opengraph-image.tsx` — OG image default 1200×630 menggunakan `next/og` (ImageResponse)
- [ ] 9. Buat OG image per halaman: `app/tentang-kami/opengraph-image.tsx`, `app/layanan/opengraph-image.tsx`, dst
- [ ] 10. Tambah JSON-LD `Article` schema di setiap artikel blog
- [ ] 11. Validasi structured data di schema.org validator
- [ ] 12. Test OG preview semua halaman di opengraph.xyz setelah deploy
- [ ] 13. Jalankan Lighthouse SEO audit — target ≥ 90
