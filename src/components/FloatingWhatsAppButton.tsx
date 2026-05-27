import { MessageCircle } from 'lucide-react';
import { site } from '../data/site';

// Replace site.whatsappNumber in src/data/site.ts with your real WhatsApp
// number in international format (country code + number, no + or spaces).
export default function FloatingWhatsAppButton() {
  const text = encodeURIComponent("Hi Educators United! I'd like to know more about your courses.");
  const href = `https://wa.me/${site.whatsappNumber}?text=${text}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-xl animate-pulse" aria-hidden="true" />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.65)] ring-4 ring-white group-hover:scale-105 transition-transform">
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
