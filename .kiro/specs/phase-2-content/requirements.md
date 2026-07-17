# Phase 2: Content & Data Layer

## Overview
Memisahkan data statis dari komponen JSX ke file TypeScript terpisah di folder `data/`, dan memastikan semua konten sudah diverifikasi akurasinya bersama klien.

## Requirements

### REQ-1: Data Separation
Semua data statis harus dipindah ke `data/` folder dengan TypeScript interface yang tepat.

**Acceptance Criteria:**
- `data/projects.ts` — array data proyek dengan interface `Project`
- `data/clients.ts` — array data klien dengan interface `Client`
- `data/articles.ts` — array data artikel dengan interface `Article`
- `data/services.ts` — array data layanan dengan interface `Service`
- Semua interface di-export dari `data/index.ts`
- Halaman yang terkait di-update untuk import dari `data/`

### REQ-2: Content Accuracy
Semua konten harus diverifikasi akurasinya dengan klien.

**Acceptance Criteria:**
- Data 11 proyek (nama klien, lokasi, hasil, tahun) sudah diverifikasi
- Informasi kontak (email, telepon, alamat) sudah diverifikasi
- Deskripsi layanan teknis sudah diverifikasi oleh tim teknis klien
- Angka statistik (73%, 20%+, 11+ proyek) sudah diverifikasi

### REQ-3: Blog Articles
Minimal 3 artikel real (bukan placeholder lorem ipsum).

**Acceptance Criteria:**
- Setiap artikel minimal 500 kata
- Heading hierarchy benar: satu H1, H2 untuk section utama, H3 untuk sub-section
- Ada internal linking ke halaman layanan atau teknologi yang relevan
- Metadata artikel lengkap: judul, tanggal, waktu baca, tag, excerpt

## Technical Notes
- Gunakan TypeScript interface, bukan `type` untuk data entities (lebih extensible)
- Export semua interface dari satu file `data/types.ts`
- Data tidak perlu di-fetch dari API — cukup file `.ts` statis untuk project ini
- Jika konten akan sering diupdate, pertimbangkan Contentlayer atau MDX di fase berikutnya
