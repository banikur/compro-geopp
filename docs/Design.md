# Design system — PT Geo Pilar Persada company profile

Dokumen ini adalah rule book, bukan brief kreatif. Tujuannya: setiap halaman/komponen baru yang di-generate (oleh AI coding agent maupun manual) tetap konsisten dengan vibe yang sudah ditentukan. Kalau ragu, ikuti angka/token di sini, jangan improvisasi ulang dari nol.

## 1. Brand premise

PT Geo Pilar Persada — operator Teknologi Modifikasi Cuaca (penyemaian awan). Audiens utama: instansi pemerintah, mitra strategis, bukan konsumen retail. Vibe: presisi, institusional, teknikal — bukan playful, bukan startup-glossy.

Tema visual: langit / altitude / instrumen meteorologi-penerbangan. Signature motif: "altitude ruler" — garis vertikal tipis di margin yang menandai ketinggian (0 m → ~4.000 m) mengikuti scroll, menggantikan angka section generik (01/02/03).

## 2. Warna (jangan pakai hex di luar tabel ini)

> **Revisi v2** — v1 gagal WCAG AA di beberapa kombinasi (steel/sky/flare dipakai sebagai teks di atas cloud, semua di bawah 3:1). Fix: pisahkan token *dekoratif* (border/ikon/badge, boleh kontras rendah) dari token *teks* (wajib ≥4.5:1, sudah divalidasi hitungan relative-luminance, bukan estimasi visual).

| Token | Hex | Peran | Contrast on `--cloud` |
|---|---|---|---|
| `--brand-sky` | `#2E9BC7` | ikon, border aktif, background tombol (teks putih di atasnya) | 2.97:1 — **jangan** dipakai sbg warna teks langsung |
| `--sky-text` | `#1C7999` | link inline, teks aksen kecil di atas `--cloud` | 4.64:1 ✅ |
| `--brand-navy` | `#0A4C6E` | navbar gelap, footer, background tombol solid | 9.24:1 (teks putih di atasnya) ✅ |
| `--ink` | `#10202B` | teks body/heading di atas background terang | 15.58:1 ✅ |
| `--cloud` | `#F5F8FA` | background halaman utama | — |
| `--steel` | `#8CA2AE` | border, divider, ikon non-interaktif SAJA | 2.49:1 — **jangan** dipakai sbg teks |
| `--steel-text` | `#56707D` | secondary text, caption, label kecil | 4.91:1 ✅ |
| `--flare` | `#E08A2C` | badge fill, highlight non-teks, dekorasi aksen | 2.51:1 — **jangan** dipakai sbg teks/tombol dgn teks putih |
| `--flare-text` | `#96590E` | kalau butuh angka/label penting berwarna flare sbg teks | 5.28:1 ✅ |
| `--flare-deep` | `#B5650C` | background tombol CTA (dengan teks putih di atasnya) | white-on-bg 4.35:1 ✅ |

Aturan keras:
- **Warna dasar (`--brand-sky`, `--steel`, `--flare`) HANYA untuk elemen non-teks** — ikon, border, fill badge, background tombol. Begitu jadi warna teks langsung di atas `--cloud`, wajib pakai varian `-text`/`-deep`.
- Tombol CTA utama pakai `--flare-deep` sebagai background (bukan `--flare` mentah), teks putih di atasnya.
- Maksimal satu tombol warna hangat (`--flare-deep`) yang terlihat per layar. Sisanya sekunder (outline pakai `--brand-sky`/`--brand-navy`).
- Jangan tambah warna baru (hijau sukses, merah error, dst.) tanpa alasan fungsional — turunkan status info dari `--brand-sky`, pakai warna semantik standar hanya untuk error/validasi form.
- Dark section (navbar/footer) = `--brand-navy` background + teks `--cloud`/putih. Jangan campur `--ink` di atas background gelap (kontrasnya cuma 1.8:1 — gagal total).
- Setiap kombinasi teks-baru di luar tabel ini WAJIB dicek contrast ratio-nya dulu (target ≥4.5:1 teks normal, ≥3:1 teks besar/komponen UI) sebelum dipakai — jangan asumsi "kelihatannya kebaca" itu cukup.

### Catatan soal "kesan generic AI palette"
Kombinasi soft-blue + gray-blue muted + satu warna hangat aksen ini memang pola yang sering muncul di desain ber-vibe AI-generated/template SaaS. `--brand-sky`/`--brand-navy` asalnya dari logo asli jadi itu tetap dipertahankan, tapi supaya nggak kebaca generik:
- Jangan pakai `--steel`/`--steel-text` di terlalu banyak tempat sekaligus (border, teks sekunder, ikon, placeholder) — itu yang bikin section kelihatan "flat gray-blue wash" khas AI template. Variasikan: sebagian border pakai opacity dari `--brand-navy` saja, bukan selalu `--steel`.
- Signature element altitude ruler (section 4) dan foto proyek real (bukan stok generik/kastil AI-generated) adalah yang bikin ini beda dari template biasa — pastikan itu benar-benar dipakai, jangan cuma warna doang yang dianggap "brand identity".

## 3. Padding & spacing komponen (belum ada di v1 — celah yang bikin "cramped")

| Elemen | Padding minimum |
|---|---|
| Card (project, service, article) | `padding: 24px` mobile, `32px` desktop — jangan di bawah `20px` |
| Tombol (button) | `padding: 12px 24px` (vertikal 12px, horizontal 24px) minimum untuk tombol utama |
| Input/textarea | `padding: 12px 16px` |
| Section container (horizontal) | `padding-inline: 24px` mobile, `48px`+ desktop, max-width konten `1280px` |
| Gap antar card dalam grid | minimum `24px`, idealnya `32px` untuk grid 3-4 kolom |

Aturan: kalau sebuah card/tombol terasa "nempel" ke teks di dalamnya atau ke elemen tetangganya, itu tanda padding di bawah minimum di atas — naikkan, jangan dikompensasi dengan margin luar saja.

## 4. Letter-spacing (belum ada di v1)

| Elemen | Letter-spacing |
|---|---|
| Display heading besar (Space Grotesk, ≥40px) | `-0.01em` sampai `-0.02em` MAKSIMAL — jangan lebih negatif dari itu |
| Display heading kecil/subheading | `0` (normal) |
| Body text (IBM Plex Sans) | `0` (normal), jangan pakai `tracking-tight` |
| Label/eyebrow kecil huruf kapital (mis. "0 M — PERMUKAAN") | `+0.05em` sampai `+0.1em` (positif, bukan negatif) — huruf kapital kecil butuh spacing lebih lega, bukan lebih rapat |
| Angka mono (IBM Plex Mono) | `0` (normal) |

Aturan: jangan pakai utility class tracking negatif (`tracking-tighter`/`tracking-tight`) secara default di seluruh heading — itu yang bikin "crushed". Tracking negatif cuma boleh di display heading besar, dan dibatasi `-0.02em`.

## 3. Tipografi

| Peran | Font | Berat | Dipakai untuk |
|---|---|---|---|
| Display | Space Grotesk | 500/600 saja | Headline hero, judul section besar |
| Body | IBM Plex Sans | 400 (regular), 500 utk emphasis | Paragraf, nav, tombol, label |
| Utility/data | IBM Plex Mono | 400 | Angka spesifikasi: altitude, curah hujan (mm), koordinat, nomor telepon di kartu kontak |

Aturan:
- Hanya 2 bobot per font. Jangan pakai 700/800 — kesannya berat dan lepas dari vibe institusional-tenang.
- Body text: `line-height` longgar (1.6–1.7), ukuran dasar 16px, jangan di bawah 14px untuk teks baca.
- Sentence case di semua UI (tombol, label, nav). Jangan Title Case atau ALL CAPS kecuali untuk eyebrow/label kecil altitude ("0 M", "2.000 M") yang memang berfungsi sebagai penanda teknis.

## 4. Signature element — altitude ruler

- Garis vertikal tipis (`1px`, warna `--steel`) di margin kiri, berjalan dari hero sampai footer.
- Titik penanda dengan label ketinggian riil (bukan urutan section kosong): `0 M — permukaan`, `~2.000 M — dasar awan`, `~4.000 M — altitude penyemaian`.
- Titik/indicator bergerak naik mengikuti scroll progress halaman (bukan animasi lepas dari konten).
- Elemen ini HANYA dipakai sekali sebagai struktur utama. Jangan diulang jadi motif dekoratif di tempat lain (misal jangan ditaruh lagi di dalam card layanan) — itu bikin elemen unik jadi wallpaper dan kehilangan makna.

## 5. Layout & spacing

- Section utama (Hero, Tentang, Layanan, Lokasi & Kontak) — urutan tetap, jangan tambah section baru tanpa konten nyata (jangan mengarang layanan ketiga kalau belum dikonfirmasi klien).
- Grid dua kolom untuk Tentang (teks kiri, kartu fakta kanan) dan Layanan (kartu per layanan).
- Radius: `12px` untuk card, `8px` untuk tombol/input.
- Border default `0.5px solid var(--steel)` dengan opacity rendah — jangan pakai border tebal/hitam.
- Jarak antar-section konsisten pakai skala rem (2rem/3rem/4rem), jangan angka px acak.

## 6. Motion

- Hanya dua animasi yang diizinkan: (1) altitude indicator naik saat scroll, (2) transisi hover standar (200ms) untuk tombol/card.
- Tidak ada animasi partikel awan, parallax berlebihan, atau efek "AI-generated flashy". Kalau ragu, matikan animasinya — less is more di brief ini.
- Hormati `prefers-reduced-motion`: kalau aktif, altitude indicator langsung snap ke posisi tanpa transisi.

## 7. Yang harus dihindari (anti-pattern check)

Sebelum ship komponen baru, cek dulu — kalau salah satu ini muncul, revisi:
- Background cream + serif + aksen terracotta (default AI generic #1)
- Background hitam pekat + neon accent (default AI generic #2)
- Layout broadsheet dengan garis-garis hairline dan kolom koran (default AI generic #3)
- Section dengan penomoran "01 / 02 / 03" padahal bukan urutan proses nyata
- Lebih dari satu warna hangat aktif di layar yang sama
- Copy generik/corporate filler ("solusi terbaik", "terpercaya", "profesional") tanpa fakta konkret — ganti dengan fakta spesifik (lokasi, layanan, kontak yang sudah ada)

## 8. Referensi cepat token CSS

```css
:root {
  --brand-sky: #2E9BC7;
  --brand-navy: #0A4C6E;
  --ink: #10202B;
  --cloud: #F5F8FA;
  --steel: #8CA2AE;
  --flare: #E08A2C;

  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'IBM Plex Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  --radius-card: 12px;
  --radius-control: 8px;
  --border-default: 0.5px solid rgba(140, 162, 174, 0.4);
}
```