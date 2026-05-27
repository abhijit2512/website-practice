export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-950 focus:text-white focus:shadow-glow"
    >
      Skip to main content
    </a>
  );
}
