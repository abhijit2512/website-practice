import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Icon from './Icon';
import { whyChooseUs } from '../data/site';

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-slate-50/60">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>An education partner you can <span className="gradient-text">actually rely on</span></>}
          subtitle="Six reasons families and learners choose Educators United for online learning and academic support."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-glow">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-950">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
