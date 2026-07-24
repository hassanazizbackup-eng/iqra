'use client';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const works = [
  {
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Website Copy',
    title: 'SaaS Brand Voice & Copy',
    desc: 'Complete website copy overhaul for a B2B SaaS platform, increasing conversions by 40%.',
  },
  {
    img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SEO Article',
    title: 'Top-Ranking Tech Blog',
    desc: 'Long-form SEO article that reached page one of Google for a competitive keyword in 3 months.',
  },
  {
    img: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Email Campaign',
    title: 'E-commerce Email Sequence',
    desc: '7-part welcome sequence that achieved a 45% open rate and drove $12K in first-month revenue.',
  },
  {
    img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Landing Page',
    title: 'Product Launch Landing Page',
    desc: 'High-converting landing page copy for a wellness brand launch with a 6.2% conversion rate.',
  },
];

export default function FeaturedWork() {
  return (
    <section id="samples" className="py-20 lg:py-32 bg-[#FCF8F4] relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-24 left-8 w-24 h-24 dot-pattern opacity-20 rounded-full" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Featured Work"
          title="Selected"
          titleHighlight="Writing Samples"
          subtitle="A curated collection of projects that showcase my range, voice, and ability to deliver results."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {works.map((w, i) => (
            <article
              key={w.title}
              className={`premium-card overflow-hidden reveal delay-${((i % 2) + 1) * 100} group cursor-pointer`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Category tag */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full font-manrope text-xs font-bold tracking-wider uppercase text-[#D98862]">
                  {w.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-playfair text-2xl font-bold text-[#1F2229] mb-2 group-hover:text-[#D98862] transition-colors duration-300">
                  {w.title}
                </h3>
                <p className="font-manrope text-sm text-[#5E5E5E] leading-relaxed mb-4">{w.desc}</p>
                <button className="inline-flex items-center gap-2 font-manrope text-sm font-bold text-[#D98862] hover:gap-3 transition-all duration-300">
                  Read Sample
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
