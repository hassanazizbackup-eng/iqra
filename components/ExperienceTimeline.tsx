'use client';
import { PenLine, Lightbulb, Search, FileText, BookOpen, ClipboardList } from 'lucide-react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    icon: PenLine,
    role: 'Senior Content Writer',
    company: 'BrandCraft Agency',
    duration: '2022 — Present',
    desc: 'Leading content strategy and execution for enterprise clients across tech, wellness, and e-commerce sectors.',
  },
  {
    icon: Lightbulb,
    role: 'Content Strategist',
    company: 'GrowthLab Media',
    duration: '2020 — 2022',
    desc: 'Developed data-driven content roadmaps that increased organic traffic by 180% for SaaS clients.',
  },
  {
    icon: Search,
    role: 'SEO Writer',
    company: 'RankHigher Studio',
    duration: '2018 — 2020',
    desc: 'Specialized in crafting SEO-optimized content that ranked on page one for competitive industry keywords.',
  },
  {
    icon: FileText,
    role: 'Freelance Copywriter',
    company: 'Self-Employed',
    duration: '2017 — 2018',
    desc: 'Worked with 40+ startups and small businesses to build their brand voice and digital presence.',
  },
  {
    icon: BookOpen,
    role: 'Guest Blogger',
    company: 'Various Publications',
    duration: '2016 — 2017',
    desc: 'Published thought leadership articles on Medium, HubSpot, and industry-leading marketing blogs.',
  },
  {
    icon: ClipboardList,
    role: 'Content Intern',
    company: 'Digital Wave Marketing',
    duration: '2015 — 2016',
    desc: 'Began my journey crafting social media copy and supporting the editorial team with research.',
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-[#FFFDFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="My Journey"
          title="Professional"
          titleHighlight="Experience"
          subtitle="A timeline of roles that have shaped my expertise in content writing and digital marketing."
        />

        <div className="mt-20 relative">
          {/* Center line */}
          <div className="timeline-line" aria-hidden="true" />

          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={exp.role}
                  className={`relative lg:flex lg:items-center lg:justify-between ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } lg:mb-16`}
                >
                  {/* Card */}
                  <div className={`lg:w-[44%] reveal ${isLeft ? 'reveal-left' : 'reveal-right'} delay-100`}>
                    <div className="premium-card p-6 lg:p-8">
                      <span className="font-manrope text-xs font-bold tracking-widest text-[#D98862] uppercase">
                        {exp.duration}
                      </span>
                      <h3 className="mt-2 font-playfair text-2xl font-bold text-[#1F2229]">{exp.role}</h3>
                      <p className="mt-1 font-manrope text-sm font-semibold text-[#C87048]">{exp.company}</p>
                      <p className="mt-3 font-manrope text-sm text-[#5E5E5E] leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#D98862] flex items-center justify-center shadow-[0_4px_20px_rgba(217,136,98,0.25)]">
                      <exp.icon size={22} className="text-[#D98862]" />
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block lg:w-[44%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
