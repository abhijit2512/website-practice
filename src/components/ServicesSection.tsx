import { services } from '../data/site';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Icon from './Icon';

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="What We Offer"
          title={<>Learning services <span className="gradient-text">built around you</span></>}
          subtitle="Practical, structured programmes that focus on understanding, confidence and real progress."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group card card-hover h-full p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 group-hover:bg-cta-gradient group-hover:text-white group-hover:ring-transparent transition-all">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-950">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
