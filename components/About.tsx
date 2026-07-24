'use client';
import { Award, Heart, Target, Sparkles } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Mission', text: 'To craft words that resonate deeply with audiences and drive meaningful business growth.' },
  { icon: Target, title: 'Approach', text: 'Research-driven, audience-first writing that balances creativity with strategy.' },
  { icon: Award, title: 'Values', text: 'Authenticity, precision, and a commitment to delivering excellence every time.' },
  { icon: Sparkles, title: 'Why Me', text: 'I blend storytelling with SEO expertise to create content that ranks and converts.' },
];

const stats = [
  { value: '300+', label: 'Projects' },
  { value: '120+', label: 'Happy Clients' },
  { value: '97%', label: 'Client Retention' },
  { value: '7+', label: 'Years Experience' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#FCF8F4] relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 right-10 w-32 h-32 dot-pattern opacity-20 rounded-full" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className="relative reveal-left">
            {/* Brush stroke behind */}
            <svg
              className="absolute -top-8 -left-8 w-32 h-32 z-0"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path
                d="M50 10 C 20 20, 10 50, 30 80 C 50 95, 80 85, 90 50 C 95 20, 70 5, 50 10 Z"
                fill="#F4D5C4"
                opacity="0.6"
              />
            </svg>

            <div className="relative z-10 rounded-[32px] overflow-hidden aspect-[4/5] shadow-[0_20px_60px_rgba(217,136,98,0.15)]">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Iqra Usman writing at her desk"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(217,136,98,0.2)] border border-[#ECD8CC] text-center z-20">
              <p className="font-playfair text-4xl font-bold text-[#D98862]">7+</p>
              <p className="font-manrope text-xs font-bold tracking-widest text-[#1F2229] uppercase mt-1">Years</p>
              <div className="mt-2 w-8 h-0.5 bg-[#D98862] mx-auto rounded" />
            </div>
          </div>

          {/* Right — Content */}
          <div className="space-y-8">
            <div className="reveal-right">
              <p className="section-label">About Me</p>
              <h2 className="mt-3 font-playfair text-4xl sm:text-5xl font-bold text-[#1F2229] leading-tight">
                Crafting Words That <span className="text-[#D98862]">Build Brands</span>
              </h2>
              <div className="mt-4 h-0.5 w-12 bg-[#D98862] rounded" />
            </div>

            <p className="reveal-right delay-100 font-manrope text-base text-[#5E5E5E] leading-relaxed">
              Iqra Usman is a professional content writer with 7+ years of experience creating compelling content that drives engagement, builds trust, and increases conversions. My writing blends creativity with strategy, turning ideas into words that resonate.
            </p>

            {/* Signature */}
            <div className="reveal-right delay-200">
              <p className="font-allura text-5xl text-[#1F2229]">Iqra Usman</p>
              <p className="font-manrope text-xs text-[#5E5E5E] mt-1 tracking-wider uppercase">Content Writer & Copywriter</p>
            </div>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`reveal-right delay-${(i + 3) * 100} premium-card p-5`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#F4D5C4] flex items-center justify-center mb-3">
                    <v.icon size={18} className="text-[#D98862]" />
                  </div>
                  <h3 className="font-manrope text-sm font-bold text-[#1F2229] mb-1">{v.title}</h3>
                  <p className="font-manrope text-xs text-[#5E5E5E] leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal text-center delay-${(i + 1) * 100}`}
            >
              <p className="font-playfair text-5xl lg:text-6xl font-bold text-[#D98862]">{s.value}</p>
              <p className="font-manrope text-xs font-bold tracking-widest text-[#1F2229] uppercase mt-2">{s.label}</p>
              <div className="mt-3 w-8 h-0.5 bg-[#D98862] mx-auto rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
