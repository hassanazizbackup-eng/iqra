'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Samples', href: '#samples' },
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'navbar-blur bg-[#FCF8F4]/90 shadow-[0_2px_30px_rgba(217,136,98,0.1)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleLinkClick('#home')}
            className="font-allura text-4xl text-[#1F2229] hover:text-[#D98862] transition-colors duration-300 cursor-pointer"
            aria-label="Iqra Usman - Home"
          >
            Iqra
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative font-manrope text-sm font-500 tracking-wide transition-colors duration-300 group ${
                    isActive ? 'text-[#D98862]' : 'text-[#5E5E5E] hover:text-[#1F2229]'
                  } ${link.label === 'Services' ? 'border border-[#D98862] text-[#D98862] rounded-full px-5 py-1.5 hover:bg-[#D98862] hover:text-white' : ''}`}
                >
                  {link.label}
                  {link.label !== 'Services' && (
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#D98862] rounded transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="font-manrope text-sm text-[#5E5E5E] font-medium">+1 (313) 555 6789</span>
            <a
              href="mailto:iqra.writer@gmail.com"
              className="w-10 h-10 rounded-full bg-[#D98862] flex items-center justify-center hover:bg-[#C36C46] transition-colors duration-300 shadow-[0_4px_15px_rgba(217,136,98,0.35)]"
              aria-label="Send email"
            >
              <Mail size={16} color="white" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#1F2229]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FCF8F4]/98 navbar-blur transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-6 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleLinkClick(link.href)}
            className="font-playfair text-2xl text-[#1F2229] hover:text-[#D98862] transition-colors duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {link.label}
          </button>
        ))}
        <a
          href="mailto:iqra.writer@gmail.com"
          className="btn-primary mt-4"
          onClick={() => setMobileOpen(false)}
        >
          <Mail size={16} />
          iqra.writer@gmail.com
        </a>
      </div>
    </>
  );
}
