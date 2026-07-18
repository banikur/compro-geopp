# Phase 1: Visual & Graphics

## Overview
Menambahkan visual yang layak ke semua halaman. Saat ini semua section visual masih menggunakan placeholder CSS/SVG sederhana. Phase ini bertujuan membuat website terlihat profesional sebelum di-deploy.

## Requirements

### REQ-1: Asset Management
Semua aset gambar harus diorganisir dengan benar dan dioptimasi sebelum digunakan.

**Acceptance Criteria:**
- Folder `public/images/` tersedia dengan subfolder: `hero/`, `projects/`, `technology/`, `team/`, `clients/`
- Semua gambar dalam format WebP
- Ukuran gambar maksimal 200KB untuk thumbnail, 500KB untuk hero
- Setiap gambar memiliki versi fallback JPG/PNG

### REQ-2: Hero Section
Hero di halaman Home harus menarik perhatian dan mengkomunikasikan bisnis dengan jelas.

**Acceptance Criteria:**
- Ada visual yang relevan (foto drone/operasi atau ilustrasi SVG profesional) di sisi kanan hero
- `next/image` dengan `priority={true}` digunakan untuk hero image
- Teks hero tetap readable di semua ukuran layar
- Animasi floating stat chips (73% / +35%) smooth dan tidak mengganggu
- Versi mobile: visual tersembunyi atau diperkecil dengan elegan

### REQ-3: Halaman Teknologi
Halaman teknologi harus menjelaskan sistem drone secara visual, bukan hanya teks.

**Acceptance Criteria:**
- Ada ilustrasi atau foto untuk VTOL 320
- Ada ilustrasi atau foto untuk Multirotor H10
- Diagram atau visual cara kerja Cloud Dome tersedia
- Animasi Groundbase Tower Flare menunjukkan partikel seeding naik ke awan
- Semua visual responsive di mobile

### REQ-4: Halaman Proyek
Setiap project card harus punya visual pendukung.

**Acceptance Criteria:**
- Setiap project card punya thumbnail gambar atau ilustrasi lokasi
- Ada peta Indonesia sederhana dengan pin lokasi proyek (bisa SVG atau gambar statis)
- Indikator hasil (persentase) ditampilkan secara visual yang menarik

### REQ-5: Halaman Tentang Kami
Section story dan milestones butuh visual pendukung.

**Acceptance Criteria:**
- Ada foto atau ilustrasi yang relevan di section "Lahir dari Kebutuhan Nyata"
- Logo atau badge partner (BRIN, BMKG, PLN NP) ditampilkan
- Milestones timeline punya ikon atau visual per tahun

### REQ-6: Blog Article Cards
Setiap artikel harus punya cover image.

**Acceptance Criteria:**
- Semua 6 artikel punya cover image (Unsplash atau custom)
- `next/image` dengan `sizes` prop yang tepat digunakan
- Aspect ratio 16:9 konsisten di semua card
- `placeholder="blur"` ditambahkan untuk UX yang lebih baik

## Technical Notes
- Gunakan `next/image` untuk SEMUA gambar — tidak boleh ada `<img>` tag native
- Selalu set `alt`, `width`, dan `height` di setiap `next/image`
- Untuk gambar dari URL eksternal, tambahkan domain ke `next.config.ts` di `remotePatterns`
- SVG ilustrasi inline lebih baik untuk ikon/diagram karena tidak perlu HTTP request tambahan
