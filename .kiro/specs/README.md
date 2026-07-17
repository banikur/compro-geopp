# Specs Index — PT. Geo Pilar Persada

Semua spec development plan tersedia di folder ini. Setiap phase punya `requirements.md` dan `tasks.md`.

## Status Overview

| Phase | Nama | Status | Estimasi |
|-------|------|--------|----------|
| 0 | Project Setup & Foundation | ✅ Selesai | — |
| 1 | Visual & Graphics | 🔴 Belum | 3–5 hari |
| 2 | Content & Data Layer | 🔴 Belum | 2–3 hari |
| 3 | SEO & Metadata | 🟡 Partial | 1–2 hari |
| 4 | Performance Optimization | 🔴 Belum | 1–2 hari |
| 5 | Accessibility & UX Polish | 🔴 Belum | 1 hari |
| 6 | Contact Form Backend | 🟡 Partial | 0.5–1 hari |
| 7 | Testing & QA | 🔴 Belum | 1 hari |
| 8 | Deployment | 🔴 Belum | 0.5 hari |

**Total estimasi:** 3–4 minggu (part-time) / 1.5–2 minggu (full-time)

## File Structure

```
.kiro/
├── steering/
│   ├── project-overview.md   # Context project (auto-loaded oleh Kiro)
│   └── dev-plan.md           # Full development plan ringkas
└── specs/
    ├── README.md             # File ini
    ├── phase-1-visual/
    │   ├── requirements.md
    │   └── tasks.md
    ├── phase-2-content/
    │   ├── requirements.md
    │   └── tasks.md
    ├── phase-3-seo/
    │   ├── requirements.md
    │   └── tasks.md
    ├── phase-4-performance/
    │   ├── requirements.md
    │   └── tasks.md
    ├── phase-5-accessibility/
    │   ├── requirements.md
    │   └── tasks.md
    ├── phase-6-form-backend/
    │   ├── requirements.md
    │   └── tasks.md
    ├── phase-7-testing/
    │   ├── requirements.md
    │   └── tasks.md
    └── phase-8-deployment/
        ├── requirements.md
        └── tasks.md
```

## Urutan Pengerjaan

```
Minggu 1:  Phase 1 (Visual)  ←paralel→  Phase 2 (Content)
Minggu 2:  Phase 3 (SEO)     ←paralel→  Phase 4 (Performance)
Minggu 3:  Phase 5 (A11y)    ←paralel→  Phase 6 (Form API)
Minggu 4:  Phase 7 (Testing) ──────────► Phase 8 (Deploy)
```

## Cara Menggunakan

Mulai dari `tasks.md` phase yang aktif, kerjakan setiap task dari atas ke bawah, dan tandai dengan `[x]` setelah selesai.

**Phase prioritas saat ini: Phase 1 (Visual)**
