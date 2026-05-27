import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { site, nav, services } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white/80 pt-20 pb-8 relative overflow-hidden">
      <div aria-hidden="true" className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-cta-gradient opacity-20 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-purple-500/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl container-px grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 backdrop-blur">
            <Logo variant="light" size={52} />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
            Educators United is an online learning and academic support brand for Indian students —
            built around mentoring, clarity and meaningful progress.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Social href={site.social.facebook} label="Facebook"><Facebook className="h-4 w-4" /></Social>
            <Social href={site.social.instagram} label="Instagram"><Instagram className="h-4 w-4" /></Social>
            <Social href={site.social.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></Social>
            <Social href={site.social.youtube} label="YouTube"><Youtube className="h-4 w-4" /></Social>
            <Social href={site.social.twitter} label="Twitter / X"><Twitter className="h-4 w-4" /></Social>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="hover:text-white text-white/70 transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-white text-white/70 transition-colors">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 text-accent-400" />
              <a href={`mailto:${site.email}`} className="hover:text-white text-white/70">{site.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 text-accent-400" />
              <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="hover:text-white text-white/70">{site.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-accent-400" />
              <span className="text-white/70">{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl container-px mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
        <p>© 2026 Educators United. All rights reserved.</p>
        <ul className="flex items-center gap-5">
          <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
          <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
        </ul>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-9 w-9 grid place-items-center rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
