import { CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { stats } from '../data/site';

const points = [
  'Structured guidance led by experienced educators',
  'Online academic support with flexible scheduling',
  'Mentoring that respects every learner’s pace',
  'Practical resources designed for real outcomes',
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-slate-50/60 relative">
      <div className="absolute inset-0 bg-soft-radial pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl container-px">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              align="left"
              eyebrow="About Educators United"
              title={<>Education that meets every <span className="gradient-text">student where they are</span></>}
              subtitle="Educators United supports learners through structured guidance, online academic support, mentoring and practical learning resources — built for the realities of Indian students and families."
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-600 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`card p-6 sm:p-7 ${i % 2 === 0 ? 'sm:translate-y-4' : ''}`}
                >
                  <p className="font-display text-3xl sm:text-4xl font-extrabold gradient-text">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
