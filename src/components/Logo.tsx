type Props = {
  variant?: 'dark' | 'light';
  className?: string;
};

export default function Logo({ variant = 'dark', className = '' }: Props) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-950';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Educators United logo">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cta-gradient shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 9.5 12 4l9 5.5-9 5.5-9-5.5Z" />
          <path d="M7 11.5V16c1.6 1.4 3.4 2.2 5 2.2s3.4-.8 5-2.2v-4.5" />
          <path d="M21 9.5V15" />
        </svg>
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
        Educators<span className="gradient-text">United</span>
      </span>
    </span>
  );
}
