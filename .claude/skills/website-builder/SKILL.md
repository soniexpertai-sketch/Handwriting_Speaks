---
name: website-builder
description: Build or edit pages for a static business website that follows a token-based design system and a content library. Use whenever the user asks to create, modify, or review any website page, section, or component, or mentions DESIGN_TOKENS.md or CONTENT_LIBRARY.md.
---

# Website Builder

## Before writing any code
1. Read `CLAUDE.md`, `DESIGN_TOKENS.md`, and `CONTENT_LIBRARY.md`.
2. Confirm which single page or section is being built this session.
3. If reference screenshots exist for this page, look at them and match
   them exactly — never redesign.

## Design discipline
- Every color, font, size, radius, and shadow comes from DESIGN_TOKENS.md.
  If a needed token doesn't exist, ask — don't invent.
- Define tokens once as CSS custom properties in `css/tokens.css` and use
  `var(--token)` everywhere. Never hardcode hex values in page CSS.
- Shared header and footer are identical across pages. If editing them,
  update every page.

## Content discipline
- All copy is derived from CONTENT_LIBRARY.md: reuse its phrases,
  terminology, and themes. No invented claims, services, or statistics.
- If a page needs content the library doesn't cover, stop and ask the
  user for it.
- Headings in sentence case. CTAs say what happens: "Chat on WhatsApp",
  not "Submit" or "Learn more".

## WhatsApp CTA pattern (this site has no forms)
```html
<a class="btn btn-whatsapp"
   href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I'm%20interested%20in%20a%20Signature%20Analysis."
   target="_blank" rel="noopener">Chat on WhatsApp</a>
```
- URL-encode the text. One tailored message per service.
- The floating button partial lives in every page before `</body>`.

## Quality floor for every page
- Valid semantic HTML5; one `<h1>` per page; landmarks (header/main/footer).
- Responsive at 360 / 768 / 1280 px, mobile-first CSS.
- Every image: descriptive alt, width/height attributes, WebP, lazy
  loading below the fold.
- Visible focus styles; touch targets ≥ 44px; contrast ≥ 4.5:1.
- Unique `<title>` and meta description; OG tags; canonical URL.

## Finish each page with
1. A summary of what was built.
2. A list of anything from the design or content library that could not
   be matched, with the reason.
3. A reminder of which page is next in the plan.
