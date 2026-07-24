'use client';
import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'TechFlow SaaS',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Iqra transformed our website copy completely. Our conversion rate jumped 40% within two months. Her ability to capture our brand voice was remarkable.',
  },
  {
    name: 'James Carter',
    company: 'GrowthLab Media',
    img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Working with Iqra was a game-changer. Her SEO articles consistently rank on page one, driving organic traffic we never thought possible.',
  },
  {
    name: 'Emily Rodriguez',
    company: 'Wellness Brand Co.',
    img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The email sequence Iqra wrote for our product launch generated $12K in revenue. Her words truly drive action. Highly recommended.',
  },
  {
    name: 'Michael Chen',
    company: 'StartupHub',
    img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Iqra understands content strategy like no one else. She took our scattered ideas and turned them into a cohesive, powerful brand narrative.',
  },
  {
    name: 'Priya Sharma',
    company: 'Digital Wave',
    img: 'https://images.pexels.com/photos/3754325/pexels-photo-3754325.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Professional, reliable, and incredibly talented. Iqra delivered every project on time with exceptional quality. A true wordsmith.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const updateView = () => setPerView(window.innerWidth >= 1024 ? 2 : 1);
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);
  const prev = useCallback(() => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)), [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 lg:py-32 bg-[#FCF8F4] relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute bottom-20 right-10 w-32 h-32 dot-pattern opacity-20 rounded-full" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Client Love"
          title="What Clients"
          titleHighlight="Say About Me"
          subtitle="Trusted by founders, marketers, and brands worldwide to deliver content that makes an impact."
        />

        <div className="mt-16 relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="premium-card p-8 lg:p-10 h-full">
                    <Quote size={40} className="text-[#F4D5C4] mb-4" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="star-filled" />
                      ))}
                    </div>
                    <p className="font-manrope text-base text-[#1F2229] leading-relaxed mb-8 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ECD8CC] flex-shrink-0">
                        <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <p className="font-playfair text-lg font-bold text-[#1F2229]">{t.name}</p>
                        <p className="font-manrope text-xs text-[#D98862] font-semibold">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#D98862] flex items-center justify-center hover:bg-[#D98862] transition-colors duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-[#D98862] group-hover:text-white transition-colors duration-300" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-[#D98862]' : 'w-2 bg-[#ECD8CC]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#D98862] flex items-center justify-center hover:bg-[#D98862] transition-colors duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-[#D98862] group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
