'use client';
import { Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Samples', href: '#samples' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2229] text-white relative overflow-hidden">
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D98862] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Logo + quote */}
          <div className="space-y-4">
            <p className="font-allura text-5xl text-white">Iqra</p>
            <p className="font-manrope text-sm text-white/60 leading-relaxed max-w-xs">
              Words that build brands, drive growth, and inspire action. Let&apos;s craft something beautiful together.
            </p>
            {/* Handwritten quote */}
            <p className="font-allura text-2xl text-[#D98862] mt-4">
              &ldquo;Every word matters.&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:text-center">
            <p className="font-manrope text-xs font-bold tracking-widest text-white/40 uppercase mb-4">Navigation</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-center">
              {footerLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="font-manrope text-sm text-white/70 hover:text-[#D98862] transition-colors duration-300"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="lg:text-right space-y-4">
            <div>
              <p className="font-manrope text-xs font-bold tracking-widest text-white/40 uppercase mb-4">Connect</p>
              <div className="flex gap-3 lg:justify-end">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D98862] hover:border-[#D98862] transition-all duration-300"
                  >
                    <s.icon size={16} className="text-white/70" />
                  </a>
                ))}
              </div>
            </div>
            <a
              href="mailto:iqra.writer@gmail.com"
              className="inline-block font-manrope text-sm text-white/70 hover:text-[#D98862] transition-colors duration-300"
            >
              iqra.writer@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-white/50">
            &copy; {new Date().getFullYear()} Iqra Usman. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2 font-manrope text-xs text-white/70 hover:text-[#D98862] transition-colors duration-300"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D98862] hover:border-[#D98862] transition-all duration-300">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
