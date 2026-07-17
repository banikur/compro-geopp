# Phase 3 Tasks: SEO & Metadata

## Task List

- [ ] 1. Buat `app/opengraph-image.tsx` — OG image default 1200×630 menggunakan `next/og` (ImageResponse)
- [ ] 2. Buat OG image per halaman: `app/tentang-kami/opengraph-image.tsx`, `app/layanan/opengraph-image.tsx`, dst
- [ ] 3. Update metadata di semua 8 layout.tsx — tambah `openGraph.images` yang menunjuk ke OG image
- [ ] 4. Tambah `alternates.canonical` di setiap halaman metadata
- [ ] 5. Buat `app/sitemap.ts` — return semua 8 route dengan `lastModified` dan `changeFrequency`
- [ ] 6. Buat `app/robots.ts` — allow semua, disallow `/api/`, tambah sitemap URL
- [ ] 7. Tambah JSON-LD `Organization` schema di `app/layout.tsx` via `<script type="application/ld+json">`
- [ ] 8. Tambah JSON-LD `LocalBusiness` schema di `app/layout.tsx` (nama, alamat, telepon, area layanan)
- [ ] 9. Tambah JSON-LD `FAQPage` schema di `app/layanan/layout.tsx`
- [ ] 10. Tambah JSON-LD `Article` schema di setiap artikel blog
- [ ] 11. Jalankan `npm run build` dan test `/sitemap.xml` accessible di browser
- [ ] 12. Validasi structured data di schema.org validator
- [ ] 13. Test OG preview semua halaman di opengraph.xyz setelah deploy
- [ ] 14. Jalankan Lighthouse SEO audit — target ≥ 90
