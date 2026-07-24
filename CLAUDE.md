# Handwriting Speaks — Website Project

## What this project is
Multi-page static website for "Handwriting Speaks", a handwriting analysis
(graphology) brand based in Pune, India. Audience: Indian professionals,
parents, and HR teams. Tone: credible, warm, slightly intriguing — not
mystical, not clinical. Simple English with mass appeal.

## Source-of-truth files (always read these first)
- `DESIGN_TOKENS.md` — colors, typography, spacing, components. Every
  visual decision must come from here. Never invent new colors or fonts.
- `CONTENT_LIBRARY.md` — extracted from my reference image library. All
  website text must be derived from it: reuse its phrases, terminology,
  and themes. Never invent claims, services, or facts not supported by
  it. If something needed is missing, ask me instead of guessing.
- `assets/reference-library/` — the original reference images, if you
  need to re-check one.

## Site structure
Pages: Home, About, Services, Sample Reports / Gallery, Testimonials,
Contact. Shared header (mobile hamburger nav) and footer on every page.

## Contact = WhatsApp only
- No forms, no backend, no email service. The site is 100% static.
- Floating WhatsApp button on every page (bottom-right):
  wa.me/91XXXXXXXXXX with pre-filled text
  "Hi! I'd like to know more about handwriting analysis."
- Each service card CTA opens WhatsApp with a message naming that
  service, e.g. "Hi! I'm interested in a Signature Analysis."
  Services: Signature / Full handwriting / Child's handwriting /
  Corporate workshop.
- All wa.me links: URL-encoded text, open in new tab.

## Technical rules
- Stack: plain HTML + CSS + JS (static, hosted on Hostinger).
- Mobile-first, responsive down to 360px. Test at 360 / 768 / 1280.
- Semantic HTML, alt text on every image, visible keyboard focus.
- Images as WebP, lazy-loaded below the fold.
- SEO: unique title + meta description per page, OG image, sitemap.xml,
  robots.txt, LocalBusiness schema (Pune).
- No heavy frameworks or libraries unless I approve first.

## Workflow rules
- Build ONE page per request. Show it, wait for my approval, then continue.
- After each page, list anything from the design you couldn't match and why.
- Never redesign or "improve" the approved design without asking.
