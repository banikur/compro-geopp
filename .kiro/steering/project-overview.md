---
inclusion: always
---

# PT. Geo Pilar Persada — Project Overview

## Deskripsi Proyek
Website company profile profesional untuk **PT. Geo Pilar Persada**, perusahaan rekayasa cuaca berbasis riset yang bergerak di bidang manajemen hujan, penambahan hujan, dan monitoring cuaca skala mikro di Indonesia.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animation:** Motion (Framer Motion successor)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Analytics:** Vercel Analytics
- **Fonts:** Inter (body) + Space Grotesk (headings) via next/font

## Struktur Halaman (8 Halaman)
| Route | Halaman |
|-------|---------|
| `/` | Home |
| `/tentang-kami` | Tentang Kami |
| `/layanan` | Layanan Kami |
| `/teknologi` | Teknologi |
| `/proyek` | Proyek & Galeri |
| `/klien` | Klien Kami |
| `/blog` | Blog & Artikel |
| `/hubungi-kami` | Hubungi Kami |

## Shared Components
- `components/Navbar.tsx` — fixed nav, mobile-responsive, active link highlight
- `components/Footer.tsx` — kolom navigasi + alamat 2 kantor
- `components/PageHeader.tsx` — reusable page header dengan Badge + animasi

## Konvensi Kode
- Semua page components: `'use client'` directive di atas
- Animation variants: definisikan di luar component (`const fadeUp = ...`)
- Data statis: pindahkan ke `data/` folder, bukan inline di JSX
- shadcn components: selalu gunakan `asChild` prop untuk Link di dalam Button
- Class merging: gunakan `cn()` dari `@/lib/utils`
- Path alias: gunakan `@/` untuk semua import internal

## Brand
- **Primary color:** Cyan-700 (`oklch(0.52 0.13 213)`) — defined di `globals.css` sebagai `--primary`
- **Neutral:** Slate scale
- **Heading font:** Space Grotesk (`font-heading`)
- **Body font:** Inter (`font-sans`)

## Kontak Bisnis
- Email: pt.geopilarpersada@gmail.com
- Kantor Pusat: Perum Damai Regency Kavling A1, Sinduharjo, Ngaglik, Sleman, DIY 55581 — Tel: 0813-2825-9928
- Workshop: Jl. Bukit Dago BDU No 36-40, Rawakalong, Gunung Sindur, Bogor 16340 — Tel: 0813-1768-8191
