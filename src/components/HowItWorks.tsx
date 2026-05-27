import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { steps } from '../data/site';

export default function HowItWorks() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="How It Works"
          title={<>Start learning in <span className="gradient-text">four simple steps</span></>}
          subtitle="A clear, friendly process — no confusion, no pressure."
        />

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <li className="card card-hover h-full p-6 relative">
                <span className="absolute -top-4 left-6 font-display text-sm font-bold inline-flex items-center justify-center h-9 px-3 rounded-full bg-cta-gradient text-white shadow-glow">
                  Step {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-950">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
