# Phase 4 Tasks: Performance Optimization

## Task List

- [ ] 1. Install `@next/bundle-analyzer`: `npm install --save-dev @next/bundle-analyzer`
- [ ] 2. Tambah config bundle analyzer ke `next.config.ts`
- [ ] 3. Jalankan `ANALYZE=true npm run build` — screenshot hasil dan identifikasi bundle besar
- [ ] 4. Audit semua `next/image` — pastikan `sizes` prop sesuai breakpoint aktual
- [ ] 5. Tambah `placeholder="blur"` + `blurDataURL` ke semua hero/above-fold images
- [ ] 6. Identifikasi komponen yang bisa di-lazy load dengan `dynamic()` dari next/dynamic
- [ ] 7. Cek apakah animasi Motion bisa di-dynamic import di halaman yang tidak perlu animasi
- [ ] 8. Tambah `generateStaticParams` jika ada dynamic routes di blog
- [ ] 9. Jalankan Lighthouse mobile audit di `npm run start` (production build)
- [ ] 10. Fix semua issue CLS — pastikan semua `next/image` punya explicit `width` dan `height`
- [ ] 11. Verifikasi LCP < 2.5s di mobile (gunakan Chrome DevTools > Performance tab)
- [ ] 12. Verifikasi INP < 200ms — cek event handler yang berat
- [ ] 13. Target akhir: Lighthouse Mobile Performance ≥ 85, Desktop ≥ 95
