'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'iqra.writer@gmail.com', href: 'mailto:iqra.writer@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+1 (313) 555 6789', href: 'tel:+13135556789' },
  { icon: MapPin, label: 'Location', value: 'Remote · Worldwide', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', value: '/in/iqrausman', href: 'https://linkedin.com/in/iqrausman' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#FCF8F4] relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 right-12 w-32 h-32 dot-pattern opacity-20 rounded-full" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let&apos;s Create"
          titleHighlight="Together"
          subtitle="Have a project in mind? I&apos;d love to hear about it. Let&apos;s craft words that move your audience."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact info */}
          <div className="reveal-left space-y-8">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-[#1F2229] mb-3">
                Let&apos;s talk about your project
              </h3>
              <p className="font-manrope text-base text-[#5E5E5E] leading-relaxed">
                Whether you need a single blog post or a complete content overhaul, I&apos;m here to help. Reach out through any of the channels below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={c.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="premium-card p-5 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F4D5C4] flex items-center justify-center group-hover:bg-[#D98862] transition-colors duration-400 flex-shrink-0">
                    <c.icon size={20} className="text-[#D98862] group-hover:text-white transition-colors duration-400" />
                  </div>
                  <div>
                    <p className="font-manrope text-xs font-bold tracking-widest text-[#5E5E5E] uppercase">{c.label}</p>
                    <p className="font-manrope text-sm font-semibold text-[#1F2229] mt-0.5">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Signature */}
            <div className="pt-4">
              <p className="font-allura text-5xl text-[#1F2229]">Iqra Usman</p>
              <p className="font-manrope text-xs text-[#5E5E5E] mt-1 tracking-wider uppercase">Content Writer & Copywriter</p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="premium-card p-8 lg:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-manrope text-xs font-bold tracking-widest text-[#1F2229] uppercase">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#ECD8CC] bg-[#FCF8F4] text-sm text-[#1F2229] placeholder:text-[#5E5E5E]/50 focus:border-[#D98862] focus:outline-none transition-colors duration-300"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-manrope text-xs font-bold tracking-widest text-[#1F2229] uppercase">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#ECD8CC] bg-[#FCF8F4] text-sm text-[#1F2229] placeholder:text-[#5E5E5E]/50 focus:border-[#D98862] focus:outline-none transition-colors duration-300"
                    placeholder="jane@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-manrope text-xs font-bold tracking-widest text-[#1F2229] uppercase">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#ECD8CC] bg-[#FCF8F4] text-sm text-[#1F2229] placeholder:text-[#5E5E5E]/50 focus:border-[#D98862] focus:outline-none transition-colors duration-300"
                  placeholder="Website Copywriting Project"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-manrope text-xs font-bold tracking-widest text-[#1F2229] uppercase">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#ECD8CC] bg-[#FCF8F4] text-sm text-[#1F2229] placeholder:text-[#5E5E5E]/50 focus:border-[#D98862] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
                disabled={sent}
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
