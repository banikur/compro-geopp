'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CloudRain, Menu, X } from 'lucide-react';
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
    <nav className="fixed w-full z-50 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center">
            <CloudRain className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-semibold text-lg tracking-tight text-slate-900">
            Geo Pilar Persada
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === link.href
                  ? 'text-cyan-700 bg-cyan-50'
                  : 'hover:text-cyan-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/hubungi-kami" className={cn(buttonVariants(), 'rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm')}>
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-cyan-700 bg-cyan-50'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/hubungi-kami" onClick={() => setMenuOpen(false)}
            className={cn(buttonVariants(), 'mt-2 w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm justify-center')}
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}
