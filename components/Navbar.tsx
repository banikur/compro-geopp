'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, HelpCircle } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/teknologi', label: 'Teknologi' },
  { href: '/proyek', label: 'Proyek & Galeri' },
  { href: '/klien', label: 'Klien Kami' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cloud/92 backdrop-blur-xl border-b border-steel/40" style={{ height: 'var(--nav-height)' }}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo_upscale.png"
            alt="Logo PT. Geo Pilar Persada"
            width={200}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-steel-text">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === link.href
                  ? 'text-sky-text bg-sky/10'
                  : 'hover:text-sky-text hover:bg-steel/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {pathname.startsWith('/admin') && (
            <Link href="/admin/help" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-steel-text hover:text-sky-text hover:bg-steel/10 rounded-lg transition-colors">
              <HelpCircle className="w-4 h-4" />
              Panduan
            </Link>
          )}
          <Link href="/hubungi-kami" className={cn(buttonVariants(), 'rounded-full bg-navy hover:bg-navy/90 text-white text-sm')}>
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-ink hover:bg-steel/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-cloud border-t border-steel/40 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-sky-text bg-sky/10'
                  : 'text-ink hover:bg-steel/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {pathname.startsWith('/admin') && (
            <Link href="/admin/help" onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-ink hover:bg-steel/10 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Panduan Admin
            </Link>
          )}
          <Link href="/hubungi-kami" onClick={() => setMenuOpen(false)}
            className={cn(buttonVariants(), 'mt-2 w-full rounded-full bg-navy hover:bg-navy/90 text-white text-sm justify-center')}
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}
