'use client';
import { ArrowUpRight, FileText, Search, PenLine, LayoutTemplate, Mail, ShoppingCart, Lightbulb, Share2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const services = [
  { icon: FileText, title: 'Website Copywriting', desc: 'Compelling, conversion-focused copy that captures your brand voice and turns visitors into customers.' },
  { icon: Search, title: 'SEO Articles', desc: 'Search-optimized articles that rank high on Google and drive organic traffic to your website.' },
  { icon: PenLine, title: 'Blog Writing', desc: 'Engaging, informative blog posts that establish authority and keep your audience coming back.' },
  { icon: LayoutTemplate, title: 'Landing Pages', desc: 'High-converting landing page copy designed to maximize signups, sales, and lead generation.' },
  { icon: Mail, title: 'Email Campaigns', desc: 'Persuasive email sequences that nurture leads, build relationships, and drive consistent sales.' },
  { icon: ShoppingCart, title: 'Product Descriptions', desc: 'Descriptions that highlight benefits, evoke desire, and compel customers to click buy.' },
  { icon: Lightbulb, title: 'Content Strategy', desc: 'Comprehensive content roadmaps aligned with your business goals and target audience needs.' },
  { icon: Share2, title: 'Social Media Copy', desc: 'Scroll-stopping social media content that builds community and amplifies your brand presence.' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-[#FFFDFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="My Services"
          title="What I Can"
          titleHighlight="Help You With"
          subtitle="Comprehensive content writing services tailored to elevate your brand and drive measurable results."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`premium-card p-6 reveal delay-${((i % 4) + 1) * 100} group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F4D5C4] flex items-center justify-center group-hover:bg-[#D98862] transition-colors duration-400">
                  <s.icon size={22} className="text-[#D98862] group-hover:text-white transition-colors duration-400" />
                </div>
                <div className="w-9 h-9 rounded-full border border-[#ECD8CC] flex items-center justify-center group-hover:border-[#D98862] group-hover:bg-[#D98862] transition-all duration-400">
                  <ArrowUpRight size={14} className="text-[#5E5E5E] group-hover:text-white transition-colors duration-400" />
                </div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1F2229] mb-2">{s.title}</h3>
              <p className="font-manrope text-sm text-[#5E5E5E] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
