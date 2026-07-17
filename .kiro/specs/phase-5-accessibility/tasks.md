# Phase 5 Tasks: Accessibility & UX Polish

## Task List

- [ ] 1. Tambah skip-to-content link di `components/Navbar.tsx`: `<a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to content</a>`
- [ ] 2. Tambah `id="main-content"` ke `<main>` di `app/layout.tsx`
- [ ] 3. Audit `aria-expanded` di Navbar mobile menu button — tambah jika belum ada
- [ ] 4. Tambah `aria-controls` di hamburger button yang menunjuk ke ID mobile menu
- [ ] 5. Audit semua `next/image` — pastikan `alt` text deskriptif (bukan "image" atau kosong)
- [ ] 6. Gambar dekoratif (background, pattern) harus pakai `alt=""` (empty alt = presentational)
- [ ] 7. Audit form di `hubungi-kami` — semua input punya visible `<label>` yang terasosiasi
- [ ] 8. Tambah `aria-describedby` ke form inputs yang punya error message
- [ ] 9. Cek color contrast semua teks dengan WebAIM Contrast Checker — target ≥ 4.5:1
- [ ] 10. Update focus ring di `globals.css` — gunakan `ring-cyan-500` yang branded dan visible
- [ ] 11. Buat `app/error.tsx` — error boundary dengan tombol "Coba Lagi" dan link kembali ke Home
- [ ] 12. Update `app/not-found.tsx` — tambah navigasi ke halaman utama dan pencarian
- [ ] 13. Test keyboard navigation di semua halaman — Tab, Shift+Tab, Enter, Space, Escape
- [ ] 14. Jalankan axe DevTools browser extension — target 0 critical, 0 serious violations
- [ ] 15. Jalankan Lighthouse Accessibility audit — target ≥ 90
