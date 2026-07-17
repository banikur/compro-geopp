# PT. Geo Pilar Persada — Company Profile

Official company profile website for **PT. Geo Pilar Persada**, an Indonesian company specializing in precision weather modification, cloud seeding (rain enhancement & rain management), and micro-scale weather monitoring.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Motion (Framer Motion)](https://motion.dev/) for animations
- [Lucide React](https://lucide.dev/) for icons
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for form validation
- [Vercel Analytics](https://vercel.com/analytics) for metrics

## Features

- ✅ **8 Full Pages:** Home, About, Services, Technology, Projects, Clients, Blog, Contact
- ✅ **SEO Optimized:** OpenGraph metadata, structured data, sitemap ready
- ✅ **Fully Responsive:** Mobile-first design with optimized navigation
- ✅ **Form Validation:** Contact form with real-time validation & error handling
- ✅ **Performance:** Prefetch hints, lazy compilation, loading states
- ✅ **Modern UI:** shadcn/ui components with custom cyan brand theming
- ✅ **Animations:** Smooth scroll-triggered animations via Motion
- ✅ **Production Ready:** Standalone build, Vercel Analytics integrated

## Getting Started

**Prerequisites:** Node.js 20+

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment (optional):**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and set `APP_URL` if needed (defaults to `http://localhost:3000` in dev).

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Local: [http://localhost:3000](http://localhost:3000)

5. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (lazy compilation, slower first load) |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server (instant navigation) |
| `npm run lint` | Run ESLint for code quality checks |

## Project Structure

```
├── app/
│   ├── (pages)/
│   │   ├── tentang-kami/      # About page
│   │   ├── layanan/           # Services page
│   │   ├── teknologi/         # Technology page
│   │   ├── proyek/            # Projects & Gallery
│   │   ├── klien/             # Clients page
│   │   ├── blog/              # Blog & Articles
│   │   └── hubungi-kami/      # Contact page (with form)
│   ├── globals.css            # Global styles, Tailwind, shadcn theme
│   ├── layout.tsx             # Root layout (Nav, Footer, Analytics, SEO)
│   ├── loading.tsx            # Loading UI for route transitions
│   ├── not-found.tsx          # Custom 404 page
│   └── page.tsx               # Home page
├── components/
│   ├── ui/                    # shadcn/ui primitives (Button, Input, etc.)
│   ├── Navbar.tsx             # Global navigation with mobile menu
│   ├── Footer.tsx             # Global footer with office info
│   └── PageHeader.tsx         # Reusable page header component
├── hooks/
│   └── use-mobile.ts          # Responsive breakpoint hook
├── lib/
│   └── utils.ts               # Utility helpers (cn for className merging)
├── public/                    # Static assets (images, fonts, etc.)
├── components.json            # shadcn/ui configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS v4 config
└── tsconfig.json              # TypeScript configuration
```

## Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Hero, trust indicators, services preview, stats, CTA |
| `/tentang-kami` | Company story, values, milestones timeline |
| `/layanan` | Service details (Rain Management, Enhancement, Monitoring) |
| `/teknologi` | Tech specs (Drone VTOL 320, Multirotor H10, Groundbase Flare) |
| `/proyek` | Track record, 11 projects (2024-2025), stats |
| `/klien` | Client list by sector, testimonials |
| `/blog` | Articles with featured post, newsletter signup |
| `/hubungi-kami` | Contact form (React Hook Form + Zod), office addresses |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy (zero config needed — Next.js auto-detected)

**Environment Variables (Vercel):**
- `APP_URL` — Set to your production domain (e.g., `https://geopilarpersada.com`)

### Manual Build

```bash
npm run build
npm run start
```

Output: `.next/` standalone build ready for Node.js hosting.

## Development Notes

- **Dev mode is slow by design** — Next.js lazy-compiles routes on first visit (1-3s). Production is instant.
- **Prefetch enabled** — All navbar links prefetch on hover/viewport in production.
- **Loading states** — `app/loading.tsx` shows spinner during route transitions.
- **Form submission** — Contact form has client-side simulation. Wire up to API route or email service (Resend, Nodemailer, etc.).

## Customization

**Brand Colors:**
- Primary: Cyan-700 (`#0e7490`) — defined in `globals.css` as `--primary`
- All shadcn components automatically use this via CSS variables

**Fonts:**
- Body: Inter (via Google Fonts)
- Headings: Space Grotesk (via Google Fonts)

**Add more pages:**
```bash
mkdir app/new-page
touch app/new-page/page.tsx app/new-page/layout.tsx
```

**Add shadcn components:**
```bash
npx shadcn@latest add [component-name]
```

## Contact

- **Email:** pt.geopilarpersada@gmail.com
- **Kantor Pusat:** Perum Damai Regency Kavling A1, Sinduharjo, Ngaglik, Sleman, D.I. Yogyakarta 55581
- **Workshop Operasional:** Jl. Bukit Dago BDU No 36-40, Rawakalong, Gunung Sindur, Bogor 16340
- **Phone (Pusat):** 0813-2825-9928
- **Phone (Workshop):** 0813-1768-8191

---

**Built with ❤️ using Next.js 15 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui**
