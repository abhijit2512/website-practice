import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopBar from './TopBar';

type Props = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function PolicyPageLayout({ title, intro, children }: Props) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <section className="bg-brand-gradient text-white relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-25" />
          <div aria-hidden="true" className="absolute -top-24 -right-12 h-72 w-72 rounded-full bg-cta-gradient opacity-25 blur-3xl" />
          <div className="relative mx-auto max-w-4xl container-px py-16 md:py-20">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h1 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {title}
            </h1>
            {intro && <p className="mt-3 text-white/80 max-w-2xl">{intro}</p>}
          </div>
        </section>

        <section className="section-pad bg-white">
          <article className="mx-auto max-w-3xl container-px text-slate-700 leading-relaxed space-y-5 [&_h2]:font-display [&_h2]:text-brand-950 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h3]:font-display [&_h3]:text-brand-950 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-6 [&_a]:text-brand-700 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
            {children}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
