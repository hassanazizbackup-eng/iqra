interface SectionHeadingProps {
  label: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <p className="section-label reveal">{label}</p>
      <div className="mt-3 reveal delay-100">
        <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2229] leading-tight">
          {title}{' '}
          {titleHighlight && (
            <span className="text-[#D98862]">{titleHighlight}</span>
          )}
        </h2>
        <div className={`mt-4 h-0.5 w-12 bg-[#D98862] rounded ${align === 'center' ? 'mx-auto' : ''}`} />
      </div>
      {subtitle && (
        <p className="mt-5 font-manrope text-base text-[#5E5E5E] leading-relaxed max-w-2xl mx-auto reveal delay-200">
          {subtitle}
        </p>
      )}
    </div>
  );
}
