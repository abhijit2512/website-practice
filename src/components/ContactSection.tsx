import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { site } from '../data/site';

// NOTE: This is a frontend-only form. To accept real submissions, connect it
// to EmailJS, Formspree, or a backend endpoint. The README/DEPLOYMENT files
// explain how to wire this up.
export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="Contact"
          title={<>Have a question? <span className="gradient-text">Let’s talk.</span></>}
          subtitle="Share your learning goal and our team will get back to you. We typically respond within one working day."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-5">
            <div className="card p-7 h-full">
              <h3 className="font-display text-xl font-bold text-brand-950">Reach Educators United</h3>
              <p className="mt-2 text-sm text-slate-600">
                We’re here to help students, parents and learners find the right academic support.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="h-10 w-10 grid place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
                    <a href={`mailto:${site.email}`} className="text-sm font-semibold text-brand-950 hover:text-brand-700">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-10 w-10 grid place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Phone</p>
                    <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-brand-950 hover:text-brand-700">
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-10 w-10 grid place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Location</p>
                    <p className="text-sm font-semibold text-brand-950">{site.address}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-7 rounded-xl bg-gradient-to-br from-brand-50 to-white p-5 ring-1 ring-brand-100">
                <p className="text-xs uppercase tracking-wide text-slate-500">Hours</p>
                <p className="text-sm font-semibold text-brand-950 mt-1">{site.hours}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="card p-7" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="name" label="Full Name" required type="text" placeholder="Your full name" autoComplete="name" />
                <Field id="email" label="Email" required type="email" placeholder="you@example.com" autoComplete="email" />
                <Field id="phone" label="Phone" required type="tel" placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
                <Field id="interest" label="Course or Service Interest" type="text" placeholder="e.g. Spoken English" />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us what you’re looking for…"
                  className="mt-1.5 w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-800 ring-1 ring-slate-200 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-brand-500 transition"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, you agree to be contacted by Educators United regarding your enquiry.
                </p>
                <button type="submit" disabled={submitting} className="btn-primary">
                  {submitting ? 'Sending…' : 'Send Enquiry'}
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {sent && (
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200 px-4 py-3 text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! Your enquiry has been captured. (Frontend-only demo — connect EmailJS/Formspree to receive real submissions.)
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
};
function Field({ id, label, type, placeholder, required, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wide text-slate-600">
        {label}{required && <span className="text-rose-500"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-800 ring-1 ring-slate-200 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-brand-500 transition"
      />
    </div>
  );
}
