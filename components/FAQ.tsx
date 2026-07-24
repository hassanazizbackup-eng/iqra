'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    q: 'What types of content do you write?',
    a: 'I specialize in website copywriting, SEO articles, blog posts, landing pages, email campaigns, product descriptions, content strategy, and social media copy. Essentially, if it involves words that need to persuade or inform, I can help.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary by scope. A single blog post takes 2-3 days, a full website copy project takes 1-2 weeks, and ongoing content partnerships are delivered weekly or monthly. Rush delivery is available for urgent projects.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Absolutely. Every project includes two rounds of revisions to ensure the content perfectly matches your vision. Your satisfaction is my priority, and I refine until it feels right.',
  },
  {
    q: 'How do you handle SEO in your writing?',
    a: 'I conduct thorough keyword research, analyze search intent, and naturally integrate keywords into engaging, readable content. I also optimize headings, meta descriptions, and structure for maximum search visibility.',
  },
  {
    q: 'What are your pricing options?',
    a: 'Pricing depends on project scope, complexity, and timeline. I offer per-word, per-project, and monthly retainer options. Reach out for a custom quote tailored to your specific needs.',
  },
  {
    q: 'Can you match my brand voice?',
    a: 'Yes. I study your existing content, brand guidelines, and audience to craft a voice that feels authentically yours. I can adapt to formal, conversational, playful, or technical tones with ease.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-[#FFFDFC] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Questions"
          title="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Everything you need to know before we start working together."
        />

        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 3) * 100} premium-card overflow-hidden`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={open === i}
              >
                <span className="font-playfair text-lg lg:text-xl font-bold text-[#1F2229] pr-4">
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    open === i ? 'bg-[#D98862]' : 'bg-[#F4D5C4]'
                  }`}>
                  {open === i ? (
                    <Minus size={18} className="text-white" />
                  ) : (
                    <Plus size={18} className="text-[#D98862]" />
                  )}
                </div>
              </button>
              <div className={`faq-content ${open === i ? 'open' : ''} px-6`}>
                <p className="font-manrope text-sm text-[#5E5E5E] leading-relaxed pb-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
