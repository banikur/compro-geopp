import Link from 'next/link';
import { CloudRain, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigasi',
    links: [
      { href: '/', label: 'Home' },
      { href: '/tentang-kami', label: 'Tentang Kami' },
      { href: '/layanan', label: 'Layanan Kami' },
      { href: '/teknologi', label: 'Teknologi' },
    ],
  },
  {
    title: 'Informasi',
    links: [
      { href: '/proyek', label: 'Proyek & Galeri' },
      { href: '/klien', label: 'Klien Kami' },
      { href: '/blog', label: 'Blog & Artikel' },
      { href: '/hubungi-kami', label: 'Hubungi Kami' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-steel-text">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <CloudRain className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-semibold text-xl tracking-tight text-white">
                Geo Pilar Persada
              </span>
            </Link>
            <p className="text-steel-text leading-relaxed text-sm max-w-sm mb-8">
              Solusi manajemen cuaca dan modifikasi presipitasi berbasis riset untuk ketahanan lingkungan dan operasional industri di Indonesia.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:pt.geopilarpersada@gmail.com"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-steel-text group-hover:text-sky-text transition-colors" />
                pt.geopilarpersada@gmail.com
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Offices */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-text" /> Kantor Pusat
              </h4>
              <address className="not-italic text-steel-text leading-relaxed text-sm">
                Perum Damai Regency Kavling A1 Lantai 2,<br />
                Gg. Pusung Utama RT.011/RW.29, Sinduharjo,<br />
                Ngaglik, Sleman, D.I. Yogyakarta 55581
              </address>
              <a href="tel:081328259928" className="mt-2 flex items-center gap-2 text-sm hover:text-white transition-colors font-mono">
                <Phone className="w-3.5 h-3.5 text-steel-text" /> 0813-2825-9928
              </a>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-text" /> Workshop Operasional
              </h4>
              <address className="not-italic text-steel-text leading-relaxed text-sm">
                Jl. Bukit Dago BDU No 36-40,<br />
                Rawakalong, Gunung Sindur,<br />
                Bogor 16340
              </address>
              <a href="tel:081317688191" className="mt-2 flex items-center gap-2 text-sm hover:text-white transition-colors font-mono">
                <Phone className="w-3.5 h-3.5 text-steel-text" /> 0813-1768-8191
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-steel-text">
          <p>&copy; {new Date().getFullYear()} PT. Geo Pilar Persada. Hak cipta dilindungi.</p>
          <p>Teknologi Presisi untuk Masa Depan yang Berkelanjutan.</p>
        </div>
      </div>
    </footer>
  );
}
