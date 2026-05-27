# Deployment Guide — Educators United on Hostinger

This guide is written for a non-developer. Follow it step by step.

---

## 1. Run the site locally first

Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Open `http://localhost:5173/` in your browser. You should see the
Educators United website with navbar, hero, services, courses, etc.

When you’re happy, stop the dev server (Ctrl+C in the terminal).

---

## 2. Replace placeholders

Open **`src/data/site.ts`** and replace:

- `phone` → your real phone, e.g. `+91 98765 43210`
- `whatsappNumber` → digits only, with country code, **no `+`** → e.g. `919876543210`
- `email` → your real email
- `address`, `hours`
- `social.facebook`, `social.instagram`, `social.linkedin`, `social.youtube`, `social.twitter`
- `courses` and `testimonials` — replace placeholders with real items
- `stats` — replace placeholder numbers if you want

Also update the placeholder legal pages:
- `src/pages/PrivacyPolicy.tsx`
- `src/pages/Terms.tsx`
- `src/pages/Refund.tsx`

---

## 3. Build the site for production

```bash
npm run build
```

This produces a `dist/` folder. The contents of this folder are what
gets uploaded to Hostinger.

Typical contents of `dist/`:

```
dist/
├── index.html
├── favicon.svg
├── og-image.svg
├── robots.txt
├── sitemap.xml
├── .htaccess           ← important for SPA routing
└── assets/
    ├── index-xxxxx.css
    └── index-xxxxx.js
```

> **Note:** the `.htaccess` file is required so that `/privacy`, `/terms`,
> `/refund` and any other SPA routes work after a hard refresh on Hostinger.

---

## 4. Deploy to Hostinger (Option A — File Manager, easiest)

1. Log in to your Hostinger account → **hPanel**.
2. Open your **educatorsunited.in** website.
3. Go to **Files → File Manager**.
4. Navigate to the **`public_html`** folder.
5. **Delete the existing `index.html`** placeholder file Hostinger created.
   (Keep folders like `.well-known` if present.)
6. Click **Upload Files** and upload **everything that is inside `dist/`** —
   not the `dist` folder itself, but its contents.
   - Make sure hidden files (`.htaccess`) are included. In File Manager,
     enable **"Show hidden files"** before uploading.
7. After upload, your `public_html` should contain:
   ```
   public_html/
   ├── index.html
   ├── favicon.svg
   ├── og-image.svg
   ├── robots.txt
   ├── sitemap.xml
   ├── .htaccess
   └── assets/
   ```
8. Visit **https://educatorsunited.in/** — your site is live.

---

## 5. Deploy to Hostinger (Option B — FTP via FileZilla)

1. In hPanel go to **Files → FTP Accounts** and note your FTP credentials.
2. Open **FileZilla**, connect using those credentials.
3. On the remote side, open `public_html/`.
4. On the local side, open the project's `dist/` folder.
5. Select all files inside `dist/` (including `.htaccess`) and drag them
   into `public_html/`.
6. Visit https://educatorsunited.in/.

---

## 6. Deploy to Hostinger (Option C — Git auto-deploy, advanced)

If you keep this repo on GitHub and Hostinger Git auto-deployment is enabled:

1. In hPanel go to **Advanced → GIT** and connect this repository.
2. Set **branch** to `main` (or whichever branch you publish from).
3. Build is **not run on Hostinger** — you'll need to commit the contents
   of `dist/` into a deployable branch, or run `npm run build` locally and
   push the `dist/` output to a `deploy` branch.

Easiest workflow for non-coders is **Option A** (File Manager) every time
you make a change.

---

## 7. Connect the domain

If `educatorsunited.in` is already managed inside the same Hostinger
account, the domain points to `public_html` automatically — nothing to do.

If your domain is registered elsewhere:

1. In hPanel → **Domains → Add Website**, add `educatorsunited.in`.
2. Hostinger will show you nameservers like `ns1.dns-parking.com`,
   `ns2.dns-parking.com` (or similar).
3. In your registrar's DNS panel, update the nameservers to those values.
4. Wait for DNS to propagate (usually a few minutes to a few hours).

---

## 8. (Optional) Make the contact form actually send email

The form is **frontend-only** today — it just shows a success message but
does not deliver email. Two simple options:

### Option 1: EmailJS (no backend)
1. Sign up at https://www.emailjs.com/ (free tier is generous).
2. Create a service + email template + public key.
3. Install in the project: `npm install @emailjs/browser`
4. Open `src/components/ContactSection.tsx` and replace the `setTimeout`
   inside `handleSubmit` with:
   ```ts
   import emailjs from '@emailjs/browser';
   // ...
   emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.currentTarget, {
     publicKey: 'YOUR_PUBLIC_KEY',
   })
   .then(() => { setSubmitting(false); setSent(true); })
   .catch(() => { setSubmitting(false); });
   ```
5. Rebuild (`npm run build`) and re-upload `dist/`.

### Option 2: Formspree (no code)
1. Sign up at https://formspree.io/ and create a form.
2. In `src/components/ContactSection.tsx`, change the `<form>` to:
   ```tsx
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. Remove the `onSubmit` handler.
4. Rebuild and re-upload.

---

## 9. SSL / HTTPS

Hostinger provides **free SSL** for every domain. Enable it in:
**hPanel → Security → SSL** for `educatorsunited.in`.
This usually completes in a few minutes. Then test
`https://educatorsunited.in/` works without warnings.

---

## 10. Re-deploying after changes

Whenever you change content or code:

```bash
npm run build
```

…and re-upload the new `dist/` contents to `public_html/`,
overwriting existing files.

---

## 11. Quick checklist before launch

- [ ] Replaced all placeholders in `src/data/site.ts`
- [ ] Updated Privacy, Terms, Refund pages
- [ ] Replaced the placeholder logo (if you have a real one)
- [ ] `npm run build` completes with no errors
- [ ] `dist/` uploaded to `public_html/` (including `.htaccess`)
- [ ] `https://educatorsunited.in/` loads with SSL
- [ ] Mobile menu works, WhatsApp button works
- [ ] Contact form connected to EmailJS / Formspree (if needed)

You’re live.
