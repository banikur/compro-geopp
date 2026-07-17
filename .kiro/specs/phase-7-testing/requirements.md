# Phase 7: Testing & QA

## Overview
Verifikasi manual bahwa semua halaman dan fitur berfungsi dengan benar di semua target browser dan ukuran layar sebelum deployment.

## Requirements

### REQ-1: Cross-Browser Compatibility
Website harus tampil dan berfungsi konsisten di semua browser modern.

**Acceptance Criteria:**
- Tampilan konsisten di Chrome, Firefox, Safari, Edge (versi terbaru)
- Semua animasi Motion berjalan smooth di semua browser
- Font Space Grotesk dan Inter render dengan benar di semua platform
- Grid dan flexbox layout tidak rusak di browser manapun
- Form submission berfungsi di semua browser

### REQ-2: Responsive Design
Website harus berfungsi di semua ukuran layar target.

**Acceptance Criteria:**
- Tidak ada horizontal scroll di ukuran layar manapun
- Navbar beralih ke mobile menu di breakpoint < 1024px (lg)
- Grid layout menyesuaikan: 1 kolom (mobile) → 2 kolom (tablet) → 3/4 kolom (desktop)
- Teks tidak terpotong atau overflow di ukuran layar kecil
- Gambar tidak distorted atau pixelated di semua ukuran

### REQ-3: Functional Completeness
Semua fitur interaktif harus berfungsi end-to-end.

**Acceptance Criteria:**
- Semua 8 halaman dapat diakses tanpa error
- Semua link internal mengarah ke halaman yang benar
- Navbar active state benar di setiap halaman
- Mobile menu toggle berfungsi (open/close)
- Contact form: validasi frontend berfungsi
- Contact form: submission berhasil kirim email (Phase 6 harus selesai)
- Loading state muncul saat navigasi antar halaman
- 404 page muncul untuk URL yang tidak ada

## Technical Notes
- Gunakan Chrome DevTools Device Toolbar untuk responsive testing
- BrowserStack atau Sauce Labs untuk cross-browser testing di device nyata (opsional)
- Catat semua bug yang ditemukan beserta screenshot dan langkah reproduksi
- Fix semua critical dan major bugs sebelum lanjut ke Phase 8
