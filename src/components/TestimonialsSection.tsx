import { Quote, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { testimonials } from '../data/site';

const avatarGradients = [
  'from-brand-500 to-purple-500',
  'from-cyan-500 to-blue-600',
  'from-fuchsia-500 to-rose-500',
  'from-amber-500 to-orange-500',
  'from-emerald-500 to-teal-500',
  'from-indigo-500 to-violet-600',
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>What learners and parents <span className="gradient-text">say about us</span></>}
          subtitle="Placeholder testimonials. Replace with verified student and parent feedback before publishing."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.05}>
              <figure className="card card-hover h-full p-7 relative">
                <Quote className="absolute -top-3 -left-3 h-9 w-9 text-brand-200" aria-hidden="true" />
                <div className="flex items-center gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm text-slate-700 leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className={`inline-grid place-items-center h-10 w-10 rounded-full text-white font-bold bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]}`}
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-950">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
