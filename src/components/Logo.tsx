import { useState } from 'react';

type Props = {
  variant?: 'dark' | 'light';
  className?: string;
  /** Pixel height of the circular logo image. */
  size?: number;
  /** Show the wordmark beside the mark (default: true). */
  showWordmark?: boolean;
};

/**
 * Educators United logo.
 *
 * Loads the real circular logo from /assets/logo.png. If the file is
 * missing it gracefully falls back to a clean built-in gradient mark
 * so the layout never breaks.
 *
 * To set up the real logo:
 *   1. Save the official logo PNG (transparent background recommended)
 *      to:  public/assets/logo.png
 *   2. Rebuild:  npm run build
 */
export default function Logo({
  variant = 'dark',
  className = '',
  size = 44,
  showWordmark = true,
}: Props) {
  const [failed, setFailed] = useState(false);
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-950';
  const px = `${size}px`;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Educators United logo">
      {!failed ? (
        <img
          src="/assets/logo.png"
          alt="Educators United logo"
          width={size}
          height={size}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
          className="object-contain rounded-full"
          style={{ height: px, width: px }}
        />
      ) : (
        <FallbackMark size={size} />
      )}
      {showWordmark && (
        <span className={`font-display font-extrabold tracking-tight leading-tight ${textColor}`}>
          <span className="block text-sm sm:text-base">Educators United</span>
          <span className={`block text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase ${variant === 'light' ? 'text-accent-400' : 'text-saffron-600'}`}>
            Pvt Ltd
          </span>
        </span>
      )}
    </span>
  );
}

function FallbackMark({ size }: { size: number }) {
  const px = `${size}px`;
  return (
    <span
      className="relative inline-flex items-center justify-center rounded-full bg-cta-gradient shadow-glow"
      style={{ height: px, width: px }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5 12 4l9 5.5-9 5.5-9-5.5Z" />
        <path d="M7 11.5V16c1.6 1.4 3.4 2.2 5 2.2s3.4-.8 5-2.2v-4.5" />
        <path d="M21 9.5V15" />
      </svg>
    </span>
  );
}
