import { PlayCircle } from 'lucide-react';
import Reveal from './Reveal';
import { previewCards } from '../data/site';

const gradients = [
  'from-brand-700 via-brand-500 to-purple-500',
  'from-cyan-600 via-blue-600 to-indigo-700',
  'from-fuchsia-600 via-purple-600 to-brand-700',
];

export default function VideoPreviewSection() {
  return (
    <section className="section-pad bg-brand-950 text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-soft-radial opacity-60" />
      <div aria-hidden="true" className="absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl container-px">
        <div className="max-w-3xl mx-auto text-center">
          <span className="chip">Learning Preview</span>
          <h2 className="section-title !text-white mt-4">
            A glimpse into our <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#22d3ee,#a78bfa,#facc15)]">online classroom</span>
          </h2>
          <p className="mt-4 text-white/75">
            Calm, focused sessions designed for understanding — not just lectures. Replace these
            previews with real recordings or course highlights.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {previewCards.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <button
                type="button"
                aria-label={`Preview: ${p.title}`}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 text-left"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`} />
                <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/90 text-brand-700 shadow-glow group-hover:scale-110 transition-transform">
                    <PlayCircle className="h-9 w-9" />
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-display text-base font-bold text-white">{p.title}</p>
                  <p className="text-xs text-white/80 mt-1">{p.sub}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-xs text-white/60">
            * Preview thumbnails are placeholder gradients. Replace with original screenshots or
            videos before publishing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
