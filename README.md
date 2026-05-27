# Educators United

Premium online learning and academic support website for **Educators United** (educatorsunited.in).
Built as a fast, modern, single-page experience with optional policy routes.

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (custom brand tokens, gradients, animation)
- **Framer Motion** (scroll reveal, hero entrance, FAQ + menu animations)
- **Lucide React** (icons)
- **React Router** (Home + Privacy / Terms / Refund / 404)

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start local preview at http://localhost:5173/
npm run build    # production build -> ./dist
npm run preview  # preview production build locally
```

Node 18+ recommended.

## Project structure

```
.
├── index.html               SEO meta, fonts, theme color
├── public/                  favicon, OG image, robots.txt, sitemap.xml, .htaccess
├── src/
│   ├── main.tsx             entry + BrowserRouter
│   ├── App.tsx              routes + floating WhatsApp
│   ├── index.css            Tailwind layers + component utilities
│   ├── data/site.ts         ALL EDITABLE CONTENT (nav, courses, services, faqs, contact)
│   ├── components/          Navbar, Hero, ServicesSection, CoursesSection, ...
│   └── pages/               Home, PrivacyPolicy, Terms, Refund, NotFound
├── tailwind.config.js
├── vite.config.ts
└── DEPLOYMENT.md            Hostinger deployment instructions
```

## Editing content

Most content lives in a single file: **`src/data/site.ts`**
You can change:

- Contact info (`email`, `phone`, `whatsappNumber`, `address`, `hours`, `social.*`)
- Navigation links
- Services / Courses / Why Choose Us / Steps / Testimonials / FAQs
- Stats

Replace the placeholder phone, email, WhatsApp number, and social links before publishing.

## WhatsApp button

The floating WhatsApp button reads `site.whatsappNumber` from `src/data/site.ts`.
Use the international format **without** the `+` sign, e.g. `919876543210`.

## Contact form

The contact form is **frontend-only** by design — no secrets, no backend.
To accept real submissions, wire it to a free service:

- **EmailJS** — fastest, no backend. Add `@emailjs/browser` and replace the
  `setTimeout` in `src/components/ContactSection.tsx`.
- **Formspree** — set the form `action` to your Formspree endpoint and
  remove `onSubmit`.
- **Hostinger PHP** — point the form to a small `mail.php` on your domain.

See `DEPLOYMENT.md` for step-by-step Hostinger options.

## Pages / routes

- `/` — Home (all sections, single-page scroll)
- `/privacy` — Privacy Policy (placeholder, edit before publishing)
- `/terms` — Terms & Conditions (placeholder)
- `/refund` — Refund Policy (placeholder)
- `*` — Custom 404 page

A `.htaccess` file in `public/` rewrites all routes to `index.html` so the
SPA routes work correctly on Hostinger's Apache hosting.

## Placeholders to replace before going live

- [ ] Phone number (`site.phone` in `src/data/site.ts`)
- [ ] WhatsApp number (`site.whatsappNumber` — digits only)
- [ ] Email address (`site.email`)
- [ ] Address (`site.address`) and hours (`site.hours`)
- [ ] Social profile URLs (`site.social.*`)
- [ ] Courses list — replace placeholder courses with your real offerings
- [ ] Testimonials — replace placeholders with verified quotes
- [ ] Privacy / Terms / Refund — replace placeholder legal text
- [ ] (Optional) Real screenshots / videos in `VideoPreviewSection`
- [ ] (Optional) Your own logo — see "Logo" below

## Logo

A clean text + mark "EducatorsUnited" logo is rendered in
`src/components/Logo.tsx`. To use your own image logo:

1. Drop `logo.png` (or `logo.svg`) into `public/assets/`.
2. Edit `src/components/Logo.tsx` and replace the inline SVG + text with:
   ```tsx
   <img src="/assets/logo.png" alt="Educators United logo" className="h-9 w-auto" />
   ```
3. The logo is used in both navbar and footer.

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for full Hostinger instructions.

Short version:
```bash
npm run build
# upload everything inside ./dist/ to public_html/ on Hostinger
```

## License

Original code and content created for Educators United. Do not redistribute without permission.
