'use client';
import { Search, PenLine, Lightbulb, FileText, ClipboardCheck, Package } from 'lucide-react';
import SectionHeading from './SectionHeading';

const steps = [
  { num: '01', icon: Search, title: 'Discovery', desc: 'Understanding your brand, audience, and goals through deep-dive conversations.' },
  { num: '02', icon: Lightbulb, title: 'Research', desc: 'Analyzing your industry, competitors, and keywords to inform a winning strategy.' },
  { num: '03', icon: ClipboardCheck, title: 'Strategy', desc: 'Crafting a content roadmap that aligns with your business objectives and voice.' },
  { num: '04', icon: PenLine, title: 'Writing', desc: 'Producing polished, engaging content that speaks directly to your target audience.' },
  { num: '05', icon: FileText, title: 'Editing', desc: 'Refining every word for clarity, flow, SEO, and maximum impact before delivery.' },
  { num: '06', icon: Package, title: 'Delivery', desc: 'Delivering ready-to-publish content with guidance on distribution and promotion.' },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-32 bg-[#FFFDFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="How I Work"
          title="My Creative"
          titleHighlight="Process"
          subtitle="A structured approach that ensures every project is delivered with precision and care."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`premium-card p-8 reveal delay-${((i % 3) + 1) * 100} group relative`}
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 font-playfair text-6xl font-bold text-[#F4D5C4] opacity-60 group-hover:text-[#D98862] group-hover:opacity-20 transition-all duration-400">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#F4D5C4] flex items-center justify-center mb-5 group-hover:bg-[#D98862] transition-colors duration-400">
                  <s.icon size={24} className="text-[#D98862] group-hover:text-white transition-colors duration-400" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#1F2229] mb-2">{s.title}</h3>
                <p className="font-manrope text-sm text-[#5E5E5E] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
