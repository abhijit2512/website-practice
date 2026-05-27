import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: Props) {
  return (
    <Reveal className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-4">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-slate-600">{subtitle}</p>}
    </Reveal>
  );
}
