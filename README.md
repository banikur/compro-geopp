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

## 👥 User Manual

### CMS Content Management

This system uses **Keystatic** for headless CMS management. All content (projects, clients, services, articles) is managed via the Keystatic UI at `http://localhost:3000/admin`.

#### How to Access Keystatic Admin
1. Start the development server: `npm run dev`
2. Visit **`http://localhost:3000/admin`** in your browser
3. Sign in with your Keystatic credentials

#### Creating New Content

**Projects:**
1. Click "New Project" in Keystatic
2. Fill in fields: Name, Location, Type, Result, Year, Sector, Image, Description
3. Save and sync with CMS

**Clients:**
1. Click "New Client" in Keystatic
2. Fill in: Name, Sector, Logo (optional)
3. Save and sync

**Services:**
1. Click "New Service" in Keystatic
2. Fill in: Icon, Title, Subtitle, Description, Items (comma-separated), Href
3. Save and sync

**Articles:**
1. Click "New Article" in Keystatic
2. Fill in: Slug, Tag, Title, Excerpt, Date, Read Time, Image, Featured, Author, Content
3. Use MDX format for rich content
4. Save and sync

#### Syncing Content
After creating or editing any content:
1. Wait for auto-sync (takes 2-3 seconds)
2. Use `npm run cms:sync` manually if needed
3. Verify changes in `data/` directory

#### Content File Formats

**Projects (`content/projects/*.yaml`):**
```yaml
name: Project Name
location: Location
type: Penambahan Hujan
result: +25%
year: 2024
sector: Energi / PLTA
image: /images/projects/project.webp
description: Project description
```

**Clients (`content/clients/*.mdx`):**
```mdx
---
slug: client-slug
image: /images/clients/logo.webp
date: 15 Juli 2025
featured: true
author: Author Name
readTime: 4 menit
tag: Category
---

# Content here...
```

**Services (`content/services/*.mdx`):**
```mdx
---
slug: service-slug
icon: Icon Name
title: Service Title
sub: Subtitle
desc: Description
items: Item1,Item2,Item3
href: /service-link
---

# Content here...
```

**Articles (`content/articles/*.mdx`):**
```mdx
---
slug: article-slug
image: /images/articles/image.webp
date: 15 Juli 2025
featured: true
author: Author Name
readTime: 4 menit
tag: Kategori
---

# Content here...
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (lazy compilation, slower first load) |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server (instant navigation) |
| `npm run lint` | Run ESLint for code quality checks |

## 🔧 Troubleshooting & FAQ

### Common Issues

#### **Keystatic Admin Not Loading**
**Problem:** Keystatic admin page shows loading spinner but never loads
**Solution:** Clear browser cache and restart the development server
```bash
# Clear browser cache
# Restart server
npm run dev
```

#### **Content Changes Not Syncing**
**Problem:** Changes made in Keystatic not appearing in `data/` files
**Solution:** Run the sync script manually
```bash
npm run cms:sync
```

#### **Build Errors**
**Problem:** `npm run build` fails with compilation errors
**Solution:** Run linting and fix any TypeScript errors
```bash
npm run lint
npm run build
```

### Keystatic Administration

#### Default Login Credentials
- **Keystatic Admin:** Visit `http://localhost:3000/admin`
- **Username:** Usually "admin" or configured via environment variables
- **Password:** Set during Keystatic installation, configured via `KEYSTATIC_AUTH_PASSWORD`

#### Content Management Permissions
- **Content Creator:** Can create/edit own content
- **Content Approver:** Can approve/publish content
- **Super Admin:** Full access to all content and settings

### File Structure Reference

#### Development Files

**Source Directories:**
- `app/` - Next.js application pages
- `components/` - Reusable React components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `scripts/` - Node.js scripts and automation tools

**Content Directories:**
- `content/projects/` - Project information (YAML format)
- `content/clients/` - Client profiles (MDX format)
- `content/services/` - Service details (MDX format)
- `content/articles/` - Blog articles (MDX format)

**Generated Directories:**
- `data/` - TypeScript interfaces and exported data
- `node_modules/` - Dependencies (do not commit)

#### Configuration Files

**Project Configuration:**
- `keystatic.config.ts` - Keystatic CMS configuration
- `next.config.ts` - Next.js settings
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

**Environment Configuration:**
- `.env.example` - Environment variable examples
- `.env.local` - Local environment variables (Git ignored)

### Advanced Features

#### Keystatic Integration

**Automatic Syncing:**
- Content changes in Keystatic automatically sync to `data/*.ts`
- Sync occurs within 2-3 seconds after changes
- Manual sync available via `npm run cms:sync`

**Data Format:**
- TypeScript interfaces ensure type safety
- Automatic TypeScript generation from content files
- Full TypeScript compilation and linting

### Production Deployment

#### Build Process
```bash
# Local development
npm run dev

# Production build
npm run build
npm run start
```

#### Environment Variables
```bash
# Required for production
APP_URL=https://your-domain.com
```

#### Version Management
- Semantic versioning (`npm version`) for releases
- Automatic CHANGELOG generation
- Git branch protection for main production branch

### 📋 Frequently Asked Questions

#### **Keystatic Access & Login**

**Q: How do I access Keystatic admin interface?**
A: Start the development server with `npm run dev`, then visit `http://localhost:3000/admin` in your browser. You may need to sign in with your Keystatic credentials.

**Q: I can't access Keystatic, what should I do?**
A: Common solutions:
1. Check if the development server is running (`npm run dev`)
2. Clear browser cache and try again
3. Ensure your browser allows JavaScript and cookies from localhost
4. If using Cloudflare or similar services, check firewall settings

**Q: What are the default login credentials for Keystatic?**
A: Credentials are set during Keystatic installation via the `KEYSTATIC_AUTH_PASSWORD` environment variable. Contact your system administrator if you don't have these credentials.

#### **Content Management**

**Q: How do I create new content in Keystatic?**
A: For each content type:
- **Projects:** Click "New Project", fill in all fields, save and sync
- **Clients:** Click "New Client", fill in name, sector, logo (optional)
- **Services:** Click "New Service", fill in icon, title, subtitle, description, items
- **Articles:** Click "New Article", fill in slug, tag, title, excerpt, date, author, content

**Q: Why are my changes not syncing from Keystatic?**
A: Possible reasons:
1. Network connection issues - try again after a few seconds
2. File system permissions - ensure write permissions in `content/` directory
3. Manual sync - run `npm run cms:sync` if auto-sync fails
4. Keystatic configuration - check if sync is enabled in `keystatic.config.ts`

**Q: What formats should content files be in?**
A: Correct formats:
- **Projects:** YAML format (`content/projects/*.yaml`)
- **Clients:** MDX format (`content/clients/*.mdx`)
- **Services:** MDX format (`content/services/*.mdx`)
- **Articles:** MDX format (`content/articles/*.mdx`)

**Q: Can I edit existing content from files directly?**
A: Yes, you can edit content files directly:
1. Edit files in `content/` directory
2. Run `npm run cms:sync` to sync to data files
3. Changes will be reflected in the application

#### **Technical Issues**

**Q: What should I do if `npm run dev` shows errors?**
A: Common issues and solutions:
1. **Port conflicts:** Change port in `package.json` if `3000` is in use
2. **Missing dependencies:** Run `npm install` and try again
3. **Permission issues:** Check file and directory permissions
4. **TypeScript errors:** Run `npm run lint` to find and fix issues

**Q: Why does `npm run build` fail?**
A: Build failures typically indicate:
1. **TypeScript compilation errors:** Run `npm run lint` to fix
2. **Missing environment variables:** Set required variables in `.env.local`
3. **Configuration issues:** Verify `next.config.ts`, `tailwind.config.ts`

**Q: How do I fix "Module type is not specified" warnings?**
A: Add "type": "module" to `package.json`:
```json
{
  "type": "module",
  // ... rest of package.json
}
```

#### **Best Practices & Tips**

**Q: How can I optimize my content for better performance?**
A: Content optimization tips:
1. **Image optimization:** Use descriptive image file names
2. **Content structure:** Use proper YAML/MDX formatting
3. **SEO optimization:** Fill in meta fields (titles, descriptions, images)
4. **Sync regularly:** Use `npm run cms:sync` after changes

**Q: How do I handle large amounts of content?**
A: For bulk content operations:
1. Use Keystatic's bulk import features
2. Consider organizing content into categories
3. Use the sync script for large content updates
4. Implement version control for content files

**Q: Can I backup content?**
A: Yes, content is backed up automatically:
1. Source files in `content/` directory are Git tracked
2. Generated TypeScript files are auto-generated
3. Manual backups can be made from the `content/` directory

#### **Development Workflow**

**Q: What's the best workflow for content updates?**
A: Recommended workflow:
1. Start with `npm run dev`
2. Access Keystatic at `http://localhost:3000/admin`
3. Make changes in Keystistic interface
4. Wait for auto-sync (2-3 seconds)
5. Verify in browser or use `npm run cms:sync` manually
6. Run `npm run lint` to ensure code quality
7. Test changes in development
8. Build for production with `npm run build` when ready

**Q: How do I move from development to production?**
A: Production deployment:
1. Build locally: `npm run build`
2. Start production: `npm run start`
3. Set environment variables (`.env.local`)
4. Configure domain in `APP_URL`
5. Use `pm2` or similar for process management in production

**Q: How do I handle content for multiple languages?**
A: For multi-language content:
1. Create separate content files for each language
2. Use appropriate language codes in file names
3. Configure `APP_URL` for each language version
4. Consider using Keystatic's localization features

#### **Maintenance & Support**

**Q: Where can I find logs or debugging information?**
A: Log locations:
1. Console logs from `npm run dev`
2. Build logs from `npm run build`
3
3. Error logs in `./logs/` (if configured)
4. Keystatic logs in the Keystatic interface

**Q: How do I report bugs or issues?**
A: Report issues:
1. GitHub issues in the repository
2. Email: pt.geopilarpersada@gmail.com
3. Check documentation in README.md for common solutions
4. Community forums if available

**Q: How often should I run the sync script?**
A: Recommended sync frequency:
- **After content changes:** Always sync changes
- **Before builds:** Sync before `npm run build`
- **Weekly:** Regular sync for backups
- **Monthly:** Comprehensive sync for archives

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

## Audit & Known Issues

A full audit was conducted on **2026-07-18**. See [`todo.md`](./todo.md) for the complete report with file-level details and recommended fixes.

### Summary

| Severity | Count |
|----------|-------|
| Critical | 4 |
| High | 6 |
| Medium | 10 |
| Low | 8 |
| Info | 7 |

### Top 3 Immediate Priorities

1. **Timing-safe comparison** in `middleware.ts` — admin auth uses `===` instead of `crypto.timingSafeEqual`, enabling timing side-channel attacks
2. **HTML injection in emails** — `app/api/contact/route.ts` interpolates user input directly into HTML email body without sanitization
3. **Default admin credentials** — `middleware.ts` falls back to `admin/admin` when env vars are unset

### Key Findings

- **No security headers** configured (CSP, HSTS, X-Frame-Options missing)
- **No rate limiting** on contact form endpoint
- **Admin route `/admin/help` leaked** via prefetch in `<head>`
- **Homepage is fully client-rendered** — hurts SEO and Core Web Vitals
- **`.gitignore` excludes `*.md`, `*.json`, and `*.lock`** — needs cleanup
- **No automated tests** exist
- **Duplicate Zod schema** in client and server (drift risk)

### Running the Audit

```bash
# Check for dependency vulnerabilities
npm audit

# Lint for code quality
npm run lint

# Type check
npx tsc --noEmit
```

## Contact

- **Email:** pt.geopilarpersada@gmail.com
- **Kantor Pusat:** Perum Damai Regency Kavling A1, Sinduharjo, Ngaglik, Sleman, D.I. Yogyakarta 55581
- **Workshop Operasional:** Jl. Bukit Dago BDU No 36-40, Rawakalong, Gunung Sindur, Bogor 16340
- **Phone (Pusat):** 0813-2825-9928
- **Phone (Workshop):** 0813-1768-8191

---

**Built with ❤️ using Next.js 15 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui**
