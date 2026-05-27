import { Mail, Phone, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { site } from '../data/site';

export default function TopBar() {
  return (
    <div className="hidden md:block bg-brand-950 text-white/80 text-xs">
      <div className="mx-auto max-w-7xl container-px flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="h-3.5 w-3.5" /> {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="h-3.5 w-3.5" /> {site.phone}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {site.hours}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href={site.social.facebook} aria-label="Facebook" className="hover:text-white transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
          <a href={site.social.instagram} aria-label="Instagram" className="hover:text-white transition-colors"><Instagram className="h-3.5 w-3.5" /></a>
          <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
          <a href={site.social.youtube} aria-label="YouTube" className="hover:text-white transition-colors"><Youtube className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </div>
  );
}
