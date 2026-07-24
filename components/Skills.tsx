'use client';
import { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';

const skills = [
  { name: 'Content Writing', level: 98 },
  { name: 'SEO Writing', level: 95 },
  { name: 'Website Copy', level: 92 },
  { name: 'Landing Pages', level: 90 },
  { name: 'Editing & Proofreading', level: 96 },
  { name: 'Research', level: 94 },
  { name: 'Email Writing', level: 91 },
  { name: 'Brand Messaging', level: 89 },
];

const tools = [
  { name: 'Grammarly', img: 'https://cdn.simpleicons.org/grammarly/15C39A' },
  { name: 'Ahrefs', 'img': 'https://cdn.simpleicons.org/ahrefs/0080FF' },
  { name: 'SEMrush', 'img': 'https://cdn.simpleicons.org/semrush/FF6420' },
  { name: 'Notion', 'img': 'https://cdn.simpleicons.org/notion/000000' },
  { name: 'Canva', 'img': 'https://cdn.simpleicons.org/canva/00C4CC' },
  { name: 'Google Docs', 'img': 'https://cdn.simpleicons.org/googledocs/4285F4' },
  { name: 'Surfer SEO', 'img': 'https://cdn.simpleicons.org/surferseo/1E90FF' },
  { name: 'Yoast SEO', 'img': 'https://cdn.simpleicons.org/yoast/A4286A' },
  { name: 'ChatGPT', 'img': 'https://cdn.simpleicons.org/openai/412991' },
  { name: 'Claude', 'img': 'https://cdn.simpleicons.org/anthropic/D4A27F' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const bars = entry.target.querySelectorAll('.skill-bar-fill');
            bars.forEach((bar) => {
              const target = bar.getAttribute('data-level');
              if (target) {
                setTimeout(() => {
                  (bar as HTMLElement).style.width = `${target}%`;
                }, 100);
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 lg:py-32 bg-[#FCF8F4] relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="My Expertise"
          title="Skills &"
          titleHighlight="Tools I Master"
          subtitle="A blend of writing craft and technical tools that help me deliver content that performs."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Skill bars */}
          <div className="reveal-left space-y-5">
            {skills.map((s, i) => (
              <div key={s.name} className={`delay-${(i % 4) * 100}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-manrope text-sm font-semibold text-[#1F2229]">{s.name}</span>
                  <span className="font-manrope text-xs font-bold text-[#D98862]">{s.level}%</span>
                </div>
                <div className="h-2 w-full bg-[#ECD8CC] rounded-full overflow-hidden">
                  <div
                    className="skill-bar-fill"
                    data-level={s.level}
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right — Tool icons */}
          <div className="reveal-right">
            <p className="font-manrope text-sm font-bold tracking-widest text-[#1F2229] uppercase mb-6">Tools I Use</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 lg:gap-5">
              {tools.map((t, i) => (
                <div
                  key={t.name}
                  className={`flex flex-col items-center gap-2 reveal-scale delay-${(i % 4) * 100} group`}
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white border border-[#ECD8CC] flex items-center justify-center shadow-[0_4px_15px_rgba(217,136,98,0.08)] group-hover:shadow-[0_8px_30px_rgba(217,136,98,0.2)] group-hover:border-[#D98862] group-hover:-translate-y-1 transition-all duration-400">
                    <img src={t.img} alt={t.name} className="w-8 h-8 lg:w-10 lg:h-10 object-contain" loading="lazy" />
                  </div>
                  <span className="font-manrope text-[10px] lg:text-xs font-medium text-[#5E5E5E] text-center">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
