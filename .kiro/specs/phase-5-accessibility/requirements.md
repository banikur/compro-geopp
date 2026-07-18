# Phase 5: Accessibility & UX Polish

## Overview
Memastikan website dapat diakses oleh semua pengguna, termasuk pengguna screen reader dan keyboard-only navigation. Target standar WCAG 2.1 Level AA.

## Requirements

### REQ-1: Keyboard Navigation
Semua fungsi website harus bisa dioperasikan hanya dengan keyboard.

**Acceptance Criteria:**
- Tab order logis di semua halaman (kiri → kanan, atas → bawah)
- Skip-to-content link tersedia dan muncul saat di-focus (pertama di Tab order)
- Navbar mobile menu bisa dibuka/tutup dengan keyboard (Enter/Space/Escape)
- Semua link, button, dan form field accessible via Tab
- Tidak ada keyboard trap (kecuali modal, jika ada)
- Focus indicator visible di semua interactive elements

### REQ-2: Screen Reader Support
Konten harus bermakna saat dibaca oleh screen reader.

**Acceptance Criteria:**
- Semua `next/image` punya `alt` text deskriptif yang menjelaskan isi gambar
- Gambar dekoratif (background, divider) menggunakan `alt=""`
- Navbar punya `aria-label="Navigasi utama"`
- Hamburger button punya `aria-label`, `aria-expanded`, dan `aria-controls`
- Form inputs terasosiasi dengan `<label>` via `htmlFor` / `id`
- Error messages terhubung ke input via `aria-describedby`
- Icon-only buttons punya `aria-label`

### REQ-3: Color Contrast
Semua teks harus cukup kontras dengan background-nya.

**Acceptance Criteria:**
- Teks body (< 18px): contrast ratio ≥ 4.5:1
- Teks besar / bold (≥ 18px atau ≥ 14px bold): contrast ratio ≥ 3:1
- Placeholder text di form: contrast ratio ≥ 3:1
- Warna cyan-700 pada background putih: verifikasi di WebAIM Contrast Checker

### REQ-4: Error Handling UX
Pengguna harus mendapat feedback yang jelas saat terjadi error.

**Acceptance Criteria:**
- `app/error.tsx` menangkap runtime errors dengan pesan yang ramah pengguna
- Ada tombol "Coba Lagi" (`reset()`) dan link kembali ke Home di error page
- `app/not-found.tsx` menampilkan navigasi yang membantu, bukan hanya teks "404"
- Form validation error muncul inline per field, bukan hanya di atas form

## Technical Notes
- Gunakan axe DevTools browser extension untuk audit cepat
- WCAG 2.1 Level AA adalah target minimum untuk website bisnis profesional
- `sr-only` class dari Tailwind untuk menyembunyikan konten secara visual tapi tetap accessible
- Validasi manual dengan keyboard tetap diperlukan — tools otomatis hanya menangkap ~30% issues
