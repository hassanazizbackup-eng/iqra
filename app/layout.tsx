import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://iqrausman.com'),
  title: 'Iqra Usman — Professional Content Writer & Copywriter',
  description: 'Iqra Usman is a professional content writer with 7+ years of experience crafting compelling website copy, SEO articles, blogs, and email campaigns that build brands and drive growth.',
  keywords: 'content writer, copywriter, SEO writer, blog writer, website copy, email campaigns, content strategy',
  authors: [{ name: 'Iqra Usman' }],
  creator: 'Iqra Usman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iqrausman.com',
    title: 'Iqra Usman — Professional Content Writer & Copywriter',
    description: 'Words that build brands, drive growth, and inspire action. 7+ years of professional content writing experience.',
    siteName: 'Iqra Usman Portfolio',
    images: [{ url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', width: 1200, height: 630, alt: 'Iqra Usman - Content Writer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iqra Usman — Professional Content Writer & Copywriter',
    description: 'Words that build brands, drive growth, and inspire action.',
    images: ['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Manrope:wght@300;400;500;600;700&family=Allura&display=swap" rel="stylesheet" />
      </head>
      <body className="font-manrope bg-[#FCF8F4] text-[#1F2229] antialiased grain-overlay">
        {children}
      </body>
    </html>
  );
}
