'use client';
import { ArrowRight, Mail, PenLine, Search, FileText } from 'lucide-react';

// Decorative brush stroke SVG
function BrushStroke({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 90 C 60 30, 120 20, 180 50 C 240 80, 280 120, 340 90 C 370 75, 385 60, 390 90 C 395 120, 370 145, 340 140 C 280 130, 230 100, 170 110 C 110 120, 60 150, 30 130 C 10 118, 5 100, 20 90 Z"
        fill="#D98862"
        opacity="0.18"
      />
      <path
        d="M30 80 C 80 20, 160 10, 220 45 C 280 80, 310 130, 360 100 C 380 88, 390 70, 385 85 C 378 105, 355 125, 320 120 C 260 110, 220 75, 160 85 C 100 95, 55 130, 30 120 C 15 113, 12 88, 30 80 Z"
        fill="#C87048"
        opacity="0.12"
      />
    </svg>
  );
}

const floatingBadges = [
  { icon: PenLine, label: 'SEO Expert', delay: '0s', position: 'top-[8%] right-[5%]' },
  { icon: FileText, label: 'Website Copy', delay: '0.5s', position: 'top-[38%] right-[0%]' },
  { icon: Search, label: 'Blog Writer', delay: '1s', position: 'bottom-[28%] right-[4%]' },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#FCF8F4] flex items-center overflow-hidden pt-20"
    >
      {/* Background decorative dots */}
      <div className="absolute bottom-20 left-8 w-28 h-28 dot-pattern opacity-30 rounded-full" aria-hidden="true" />
      <div className="absolute top-32 right-16 w-20 h-20 dot-pattern opacity-20 rounded-full" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[80vh]">

          {/* Left Content */}
          <div className="relative z-10 space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 bg-[#F4D5C4] text-[#C87048] px-4 py-2 rounded-full text-xs font-manrope font-700 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D98862] animate-pulse" />
              7+ Years of Experience
            </div>

            {/* Main Heading */}
            <div className="reveal delay-100 space-y-1">
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-800 text-[#1F2229] leading-[1.05] tracking-tight">
                Hey There,
              </h1>
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-800 text-[#1F2229] leading-[1.05] tracking-tight">
                I&apos;m{' '}
                <span className="relative">
                  Iqra
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 140 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8 C 30 2, 80 2, 138 6"
                      stroke="#D98862"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="reveal delay-200 font-manrope text-lg text-[#5E5E5E] leading-relaxed max-w-md">
              I write content that{' '}
              <span className="text-[#D98862] font-semibold">connects</span>,{' '}
              <span className="text-[#C87048] font-semibold">engages</span>, and{' '}
              <span className="text-[#D98862] font-semibold">delivers</span> results.
            </p>

            {/* Email */}
            <div className="reveal delay-300 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#D98862] flex items-center justify-center">
                <Mail size={14} className="text-[#D98862]" />
              </div>
              <a
                href="mailto:iqra.writer@gmail.com"
                className="font-manrope text-sm text-[#5E5E5E] hover:text-[#D98862] transition-colors duration-300"
              >
                iqra.writer@gmail.com
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="reveal delay-400 flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('samples')}
                className="btn-primary"
              >
                View Portfolio
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="btn-outline"
              >
                Hire Me
              </button>
            </div>

            {/* Stats */}
            <div className="reveal delay-500 flex items-center gap-2 pt-4">
              <span className="font-playfair text-5xl font-bold text-[#1F2229]">7</span>
              <div className="space-y-0">
                <p className="font-manrope text-xs font-bold tracking-widest text-[#1F2229] uppercase">Years</p>
                <p className="font-manrope text-xs font-bold tracking-widest text-[#1F2229] uppercase">Experience</p>
              </div>
            </div>
          </div>

          {/* Right — Image with decoration */}
          <div className="relative flex items-center justify-center">
            {/* Brush stroke behind image */}
            <BrushStroke className="absolute inset-0 w-full h-full scale-110 rotate-[-8deg] translate-y-4" />

            {/* Profile image */}
            <div className="relative z-10 w-[300px] sm:w-[380px] lg:w-[420px] aspect-[3/4] rounded-[32px] overflow-hidden reveal-scale delay-200">
              <img
                src="https://images.pexels.com/photos/3808008/pexels-photo-3808008.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Iqra Usman - Professional Content Writer"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D98862]/10 to-transparent" />
            </div>

            {/* Right side text */}
            <div className="absolute right-0 top-1/4 text-right hidden lg:block reveal-right delay-300">
              <p className="font-manrope text-sm text-[#5E5E5E] leading-relaxed">
                I turn ideas into
                <br />
                powerful words
                <br />
                that{' '}
                <span className="text-[#D98862] font-semibold">inspire action.</span>
              </p>
            </div>

            {/* Bottom right badge */}
            <div className="absolute bottom-8 right-2 lg:right-[-20px] reveal-right delay-400">
              <div className="bg-white rounded-2xl p-5 shadow-[0_8px_40px_rgba(217,136,98,0.2)] border border-[#ECD8CC] text-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#D98862] flex items-center justify-center mx-auto mb-3">
                  <PenLine size={20} className="text-[#D98862]" />
                </div>
                <p className="font-manrope text-xs font-bold tracking-widest text-[#1F2229] uppercase leading-6">
                  Content Writer
                  <br />
                  Blogger
                  <br />
                  Storyteller
                </p>
                <div className="mt-2 w-8 h-0.5 bg-[#D98862] mx-auto rounded" />
              </div>
            </div>

            {/* Floating badges */}
            {floatingBadges.map((badge) => (
              <div
                key={badge.label}
                className={`absolute ${badge.position} floating-badge hidden lg:flex`}
                style={{ animationDelay: badge.delay }}
              >
                <div className="bg-white rounded-full px-4 py-2 shadow-[0_4px_20px_rgba(217,136,98,0.25)] border border-[#ECD8CC] flex items-center gap-2">
                  <badge.icon size={12} className="text-[#D98862]" />
                  <span className="font-manrope text-xs font-semibold text-[#1F2229]">{badge.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FCF8F4] to-transparent" aria-hidden="true" />
    </section>
  );
}
