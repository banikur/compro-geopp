# Phase 6 Tasks: Contact Form Backend

## Task List

- [ ] 1. Buat akun Resend di resend.com (gratis: 3000 email/bulan)
- [ ] 2. Install Resend SDK: `npm install resend`
- [ ] 3. Tambah `RESEND_API_KEY` ke `.env.example` dan `.env.local`
- [ ] 4. Buat `app/api/contact/route.ts` dengan POST handler
- [ ] 5. Re-use Zod `contactSchema` dari `hubungi-kami/page.tsx` untuk server-side validation
- [ ] 6. Implementasi rate limiting sederhana (cek Vercel KV atau in-memory Map)
- [ ] 7. Buat email template HTML yang rapi untuk notifikasi ke `pt.geopilarpersada@gmail.com`
- [ ] 8. Return response JSON yang konsisten: `{ success: boolean, message: string }`
- [ ] 9. Handle semua error cases: 400 (invalid input), 429 (rate limit), 500 (server error)
- [ ] 10. Update `onSubmit` di `app/hubungi-kami/page.tsx` — POST ke `/api/contact`
- [ ] 11. Tambah honeypot field tersembunyi di form untuk anti-spam dasar
- [ ] 12. Tambah toast notification atau inline alert untuk success/error states
- [ ] 13. Test end-to-end: submit form → cek inbox `pt.geopilarpersada@gmail.com`
- [ ] 14. Test rate limiting: submit 6 kali berturut-turut dalam 1 menit
