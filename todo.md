# Audit Report — compro-geopp

**Project:** PT. Geo Pilar Persada — Company Profile Website
**Date:** 2026-07-18
**Stack:** Next.js 15 + React 19 + TypeScript + Keystatic CMS

---

## Summary

| Severity | Count |
|----------|-------|
| Critical | 4 |
| High | 6 |
| Medium | 10 |
| Low | 8 |
| Info | 7 |

---

## Critical

### 1. Timing Attack on Basic Auth

- **File:** `middleware.ts:16`
- **Issue:** String comparison using `===` is not constant-time. An attacker can measure response time differences to brute-force the password character-by-character.
- **Impact:** Admin password can be recovered via timing side-channel.
- **Fix:** Use `crypto.timingSafeEqual`:
  ```ts
  import crypto from 'crypto';
  function safeCompare(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
  }
  ```

### 2. Default Admin Credentials

- **File:** `middleware.ts:4-5`, `.env.example:16-17`
- **Issue:** Credentials fall back to `admin/admin` when env vars are unset. Any deployment without explicit env vars is wide open.
- **Impact:** Complete admin panel compromise.
- **Fix:** Remove defaults. Throw at startup if env vars are missing:
  ```ts
  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
    throw new Error('ADMIN_USERNAME and ADMIN_PASSWORD must be set');
  }
  ```

### 3. HTML Injection in Emails

- **File:** `app/api/contact/route.ts:80-101`
- **Issue:** User-supplied `name`, `company`, `email`, `phone`, `message`, and `service` are interpolated directly into HTML without sanitization.
- **Impact:** Stored XSS in email client, potential phishing via crafted emails.
- **Fix:** Escape all user values with `he.encode()` or similar:
  ```ts
  import he from 'he';
  const safe = (s: string) => he.encode(s);
  ```

### 4. No CSRF Protection

- **File:** `app/api/contact/route.ts`
- **Issue:** The POST `/api/contact` endpoint has no CSRF token validation or Origin/Referer header verification.
- **Impact:** Potential CSRF attacks if the browser sends credentials.
- **Fix:** Add a CSRF token mechanism or verify `Origin`/`Referer` headers against allowed domains.

---

## High

### 5. No Rate Limiting on Contact API

- **File:** `app/api/contact/route.ts`
- **Issue:** The contact endpoint can be spammed, causing email flooding and Resend API cost damage.
- **Impact:** Financial damage (Resend billing), email flood to admin.
- **Fix:** Add rate limiting with `@upstash/ratelimit` or a simple in-memory counter (e.g., 5 requests per IP per minute).

### 6. Email Subject Injection

- **File:** `app/api/contact/route.ts:136`
- **Issue:** User-controlled `name` is injected into the email subject without sanitization. Newline injection (`\r\n`) possible.
- **Impact:** Email header injection, potentially spoofing subjects or sending to unintended recipients.
- **Fix:** Sanitize `data.name` by removing newlines and control characters before using it in headers.

### 7. Admin Route Leaked via Prefetch

- **File:** `app/layout.tsx:142-144`
- **Issue:** `/admin/help` is in the prefetch list for every visitor, revealing the existence of the admin area.
- **Impact:** Information disclosure, aids attackers in mapping the admin attack surface.
- **Fix:** Remove `/admin/help` from the prefetch list.

### 8. No Security Headers Configured

- **File:** `next.config.ts`
- **Issue:** Missing CSP, X-Frame-Options, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- **Impact:** Susceptible to clickjacking, MIME sniffing, downgrade attacks.
- **Fix:** Add security headers in `next.config.ts`:
  ```ts
  const securityHeaders = [
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
    { key: 'X-XSS-Protection', value: '1; mode=block' },
  ];
  ```

### 9. Homepage Entirely Client-Rendered

- **File:** `app/page.tsx:1`
- **Issue:** `'use client'` on the entire homepage defeats SSR, hurts SEO and Core Web Vitals.
- **Impact:** Poor Core Web Vitals, weaker SEO, larger client bundle.
- **Fix:** Split into server component wrapper with client sub-components for animated sections.

### 10. `.gitignore` Ignores Critical Files

- **File:** `.gitignore:76,186`
- **Issue:** `*.md` and `*.json` patterns exclude `package.json`, `README.md`, `tsconfig.json` from git.
- **Impact:** Repository is incomplete; collaborators cannot clone and run the project.
- **Fix:** Remove `*.md` and `*.json` from `.gitignore`. Add specific files/dirs only if needed.

---

## Medium

### 11. Missing Content-Type Validation

- **File:** `app/api/contact/route.ts:21`
- **Issue:** No check for `Content-Type` header before `request.json()`.
- **Impact:** Poor error handling for malformed requests.
- **Fix:** Validate `Content-Type` header before parsing.

### 12. Duplicate Zod Schema

- **File:** `components/ContactForm.tsx:30-41` + `app/api/contact/route.ts:4-15`
- **Issue:** Contact validation schema is duplicated in client and server. Can drift apart.
- **Impact:** Validation inconsistencies between client and server.
- **Fix:** Extract to a shared `lib/validations.ts` file.

### 13. `motion/react` Not Code-Split

- **File:** `next.config.ts:17`
- **Issue:** `motion` is in `transpilePackages` but isn't dynamically imported (~40KB gzipped bundled everywhere).
- **Impact:** Unnecessary bundle size increase.
- **Fix:** Use `next/dynamic` for components that use `motion`.

### 14. Mobile Menu Missing Focus Management

- **File:** `components/Navbar.tsx:68-74`
- **Issue:** Mobile menu toggle lacks `aria-expanded`, Escape key handler, and focus trap.
- **Impact:** Accessibility failure for keyboard/screen reader users.
- **Fix:** Add `aria-expanded={menuOpen}`, `onKeyDown` for Escape, and focus trap.

### 15. No `aria-current` on Active Nav Links

- **File:** `components/Navbar.tsx:43-47`
- **Issue:** Active navigation link has no `aria-current="page"` attribute.
- **Impact:** Screen readers cannot identify the current page.
- **Fix:** Add `aria-current={pathname === link.href ? 'page' : undefined}`.

### 16. Aggressive Prefetching

- **File:** `app/layout.tsx:142-144`
- **Issue:** All routes prefetch-loaded via `<link rel="prefetch" as="document">` on every visit (8 extra document fetches).
- **Impact:** Bandwidth waste, contradicts Next.js built-in route prefetching.
- **Fix:** Remove entirely. Next.js already prefetches routes on hover/focus.

### 17. `dangerouslySetInnerHTML` for JSON-LD

- **File:** `app/layout.tsx:135-139`
- **Issue:** `JSON.stringify` does not escape `</script>` tags. If data ever contains it, the script tag breaks.
- **Impact:** Potential script injection if data is ever user-controlled.
- **Fix:** Use a JSON-LD serializer that escapes special characters.

### 18. Sync Script Vulnerable to Code Injection

- **File:** `scripts/sync-keystatic.ts:85`
- **Issue:** Content values from YAML are interpolated directly into generated TypeScript via string templates. Malicious YAML can inject arbitrary JS.
- **Impact:** Supply-chain attack via poisoned content file.
- **Fix:** Use JSON serialization for values or escape single quotes and backslashes.

### 19. Download Script Lacks HTTPS Verification

- **File:** `scripts/download-assets.mjs:51`
- **Issue:** Follows redirects without verifying the target URL. HTTP downgrade accepted.
- **Impact:** MITM attack could serve malicious images.
- **Fix:** Validate redirect URLs stay on HTTPS. Add timeout and max redirect limits.

### 20. Footer Missing Landmark Role

- **File:** `components/Footer.tsx:27`
- **Issue:** Footer links are in an unordered list without navigation context.
- **Impact:** Minor accessibility issue.
- **Fix:** Wrap footer link columns in `<nav aria-label="Footer navigation">`.

---

## Low

### 21. Open Graph Image Missing

- **File:** `app/layout.tsx:107-115`
- **Issue:** OpenGraph and Twitter card metadata don't specify an `images` property.
- **Impact:** Poor social media sharing experience.
- **Fix:** Add `images: [{ url: '${siteUrl}/og-image.png', width: 1200, height: 630 }]`.

### 22. Sitemap Uses `new Date()` on Every Build

- **File:** `app/sitemap.ts:9`
- **Issue:** Every build generates a new `lastModified` timestamp, even if content hasn't changed.
- **Impact:** Unnecessary crawl budget waste.
- **Fix:** Use actual content modification timestamps or a fixed build timestamp.

### 23. No `noindex` on Admin Routes

- **File:** `app/robots.ts`
- **Issue:** `robots.ts` disallows `/api/` but doesn't `noindex` `/admin/*`.
- **Impact:** Admin pages could appear in search results.
- **Fix:** Add `disallow: '/admin/'` to robots.ts rules.

### 24. `suppressHydrationWarning` on Entire Body

- **File:** `app/layout.tsx:147`
- **Issue:** Suppresses React hydration warning for the entire body instead of specific elements.
- **Impact:** Masks potential hydration mismatches during development.
- **Fix:** Move to specific elements that cause hydration differences.

### 25. `.env.example` Is Gitignored

- **File:** `.gitignore:4`
- **Issue:** `.env.example` file is gitignored. New developers won't see required env vars.
- **Impact:** Poor developer experience.
- **Fix:** Remove `.env.example` from `.gitignore`.

### 26. Missing `loading.tsx` for Data-Heavy Routes

- **File:** Various
- **Issue:** Pages that fetch data don't have explicit `loading.tsx` files.
- **Impact:** Blank page during navigation.
- **Fix:** Add `loading.tsx` files for data-heavy routes.

### 27. Contact Form `noValidate`

- **File:** `components/ContactForm.tsx:197`
- **Issue:** `noValidate` disables native browser validation.
- **Impact:** Minor UX degradation.
- **Fix:** Remove `noValidate` or document that Zod is the sole validator.

### 28. `data/*.ts` Gitignored — Broken Fresh Clone

- **File:** `.gitignore:11`
- **Issue:** All generated data files are gitignored. Fresh clone has no data without running `cms:sync`.
- **Impact:** Broken builds on fresh clone.
- **Fix:** Either commit the data files or add a post-install script that runs `cms:sync`.

---

## Info

### 29. `tsconfig.json` Targets ES2017

- **File:** `tsconfig.json`
- **Issue:** Could target ES2020+ for smaller bundles since Next.js handles transpilation.
- **Recommendation:** Consider `ES2020` or `ES2022`.

### 30. Three Google Fonts Loaded

- **File:** `app/layout.tsx:2,14,20`
- **Issue:** Three fonts (IBM Plex Sans, IBM Plex Mono, Space Grotesk) add ~150-200KB of font CSS.
- **Recommendation:** Consider using only 2 fonts with `next/font` self-hosting.

### 31. `shadcn` in Runtime Dependencies

- **File:** `package.json`
- **Issue:** `shadcn` CLI tool is listed as a runtime dependency instead of devDependency.
- **Impact:** Adds ~5MB to production `node_modules`.
- **Fix:** Move to `devDependencies`.

### 32. `*.lock` in `.gitignore`

- **File:** `.gitignore:147`
- **Issue:** Lock files are gitignored. Dependency resolution can differ across environments.
- **Impact:** Non-reproducible builds.
- **Fix:** Commit `package-lock.json`.

### 33. Sync Script Has No Error Handling

- **File:** `scripts/sync-keystatic.ts`
- **Issue:** No try/catch around file operations. Malformed content crashes with unhelpful errors.
- **Impact:** Poor developer experience during content sync.

### 34. Contact Form Missing `maxLength` Constraints

- **File:** `components/ContactForm.tsx`
- **Issue:** Form fields have `min` length but no `maxLength`.
- **Impact:** Potential DoS via large payloads.
- **Fix:** Add `z.string().max(500)` constraints to fields.

### 35. No Automated Tests

- **Issue:** No unit tests, integration tests, or end-to-end tests exist.
- **Impact:** Regressions can ship undetected.
- **Fix:** Add at minimum: contact form validation tests, API route tests, and critical path E2E tests.

---

## Top 3 Immediate Priorities

1. **Timing-safe comparison** in middleware auth (`crypto.timingSafeEqual`)
2. **HTML injection in emails** — escape all user input before interpolation
3. **Default admin credentials** — fail loud if env vars missing
