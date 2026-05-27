import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { faqs } from '../data/site';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-slate-50/60">
      <div className="mx-auto max-w-3xl container-px">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Quick answers to <span className="gradient-text">common questions</span></>}
          subtitle="Can’t find what you’re looking for? Reach out — we’re happy to help."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="card overflow-hidden">
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                  >
                    <span className="font-semibold text-brand-950 text-sm sm:text-base">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`grid place-items-center h-8 w-8 rounded-full ${isOpen ? 'bg-cta-gradient text-white' : 'bg-brand-50 text-brand-700'}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
