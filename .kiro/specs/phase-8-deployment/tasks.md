# Phase 8 Tasks: Deployment

## Task List

### Pre-Deploy
- [ ] 1. Jalankan `npm run build` — pastikan 0 TypeScript errors, 0 build errors
- [ ] 2. Jalankan `npm run lint` — pastikan 0 lint errors
- [ ] 3. Cari dan hapus semua `console.log` di kode production
- [ ] 4. Cari string `localhost` di seluruh codebase — pastikan tidak ada yang hardcoded
- [ ] 5. Verifikasi `.env.example` mencantumkan semua env vars yang dibutuhkan
- [ ] 6. Pastikan `app/sitemap.ts` dan `app/robots.ts` sudah ada
- [ ] 7. Test `npm run start` (production mode) di lokal — semua halaman berfungsi

### Vercel Deploy
- [ ] 8. Push semua perubahan ke GitHub repository
- [ ] 9. Import project ke vercel.com — pilih repository
- [ ] 10. Set environment variables di Vercel dashboard:
  - `APP_URL` = URL production (contoh: `https://geopilarpersada.com`)
  - `RESEND_API_KEY` = API key dari resend.com
- [ ] 11. Trigger deploy pertama — tunggu build selesai
- [ ] 12. Connect custom domain (jika sudah siap)
- [ ] 13. Verifikasi HTTPS aktif di custom domain
- [ ] 14. Verifikasi Vercel Analytics aktif di Vercel dashboard

### Post-Deploy Verification
- [ ] 15. Test semua 8 halaman di URL production
- [ ] 16. Test contact form — kirim email sungguhan ke `pt.geopilarpersada@gmail.com`
- [ ] 17. Test `/sitemap.xml` accessible di browser
- [ ] 18. Test `/robots.txt` accessible di browser
- [ ] 19. Preview OG image di [opengraph.xyz](https://www.opengraph.xyz)
- [ ] 20. Jalankan Lighthouse audit di URL production (Chrome DevTools)
- [ ] 21. Setup Google Search Console — verify domain ownership
- [ ] 22. Submit sitemap di Google Search Console: `https://[domain]/sitemap.xml`
- [ ] 23. Aktifkan Vercel Speed Insights di project settings
