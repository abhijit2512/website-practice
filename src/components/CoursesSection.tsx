import { ArrowRight, BadgeCheck, Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { courses } from '../data/site';

const gradients = [
  'from-brand-500 to-purple-500',
  'from-cyan-500 to-blue-600',
  'from-fuchsia-500 to-rose-500',
  'from-amber-500 to-orange-500',
  'from-emerald-500 to-teal-500',
  'from-indigo-500 to-violet-600',
];

export default function CoursesSection() {
  return (
    <section id="courses" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="Featured Programs"
          title={<>Courses that build <span className="gradient-text">real understanding</span></>}
          subtitle="A growing catalogue of programmes for school students, learners and working professionals. Replace with your actual course list when ready."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <article className="card card-hover h-full overflow-hidden">
                <div className={`h-32 sm:h-36 bg-gradient-to-br ${gradients[i % gradients.length]} relative`}>
                  <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
                  {c.tag && (
                    <span className="absolute top-3 right-3 chip-light !bg-white/95">
                      <BadgeCheck className="h-3.5 w-3.5 text-brand-700" />
                      {c.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Layers className="h-3.5 w-3.5" />
                    {c.level} · {c.mode}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-brand-950">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
