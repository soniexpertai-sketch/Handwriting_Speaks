// Central site config — single source of truth for shared values.
// Keeps brand/contact details out of individual components.

export const SITE = {
  name: 'Handwriting Speaks',
  tagline: 'Healing Through Writing', // logo wordmark line — NOT the brand name
  // Domain updated to healingwithhandwriting.in per deployment request
  // (2026-07-23) — was handwriting-speaks.com.
  domain: 'https://healingwithhandwriting.in',
  description:
    'Handwriting & signature analysis (graphology) by Jyoti Maheswari, Pune. Understand personality, behaviour and confidence through your handwriting — with guided correction.',
  locale: 'en_IN',
} as const;

export const CONTACT = {
  analyst: 'Jyoti Maheswari',
  // Full professional title line, as dictated by Jyoti (2026-07-19).
  // "Graphotherapist" trimmed from the end per Jyoti's request (2026-07-21) —
  // she still offers Graphotherapy as a service (see Testimonials page and
  // her "Meet Jyoti Maheswari" bio on the About page), just not in this title.
  title:
    'Handwriting Analysis Expert | Signature Transformation Consultant | International Graphology Trainer | Founder and Director, Handwriting Speaks | Drawing & Doodle Analyst',
  email: 'jyoti.maheswari21@gmail.com',
  phoneDisplay: '+91 83800 92621',
  // Digits only, country code, no +/spaces — for wa.me and tel: links.
  phoneRaw: '918380092621',
  instagramHandle: '@hand_writingspeaks',
  // Canonical profile URL — intentionally stripped of the
  // ?utm_source=ig_web_button_share_sheet&igsh=... tracking params from
  // Instagram's own share sheet; those are single-use attribution tags,
  // not meant for a permanent site link.
  instagramUrl: 'https://www.instagram.com/hand_writingspeaks/',
  // Authoritative address per Jyoti's live Google Business Profile
  // (2026-07-19) — supersedes earlier conflicting addresses seen on older
  // promotional posters. The Maps share-link that was embedded in the
  // copied listing text has been removed as a copy-paste artifact.
  // "Unit No." corrected to "Villa No." per Jyoti's request (2026-07-21).
  // "C3, 004" corrected to "C3 - 004" per Jyoti's request (2026-07-21).
  address:
    'Villa No. C3 - 004, Westernhills Rd, Baner Annex, Phase 1, Baner, Pune, Maharashtra 411021',
  // ⚠️ No Facebook page URL on file yet — do not invent one. Add it here
  // (and un-comment the Facebook icon link on the Contact page) once
  // confirmed. See facebookUrl below.
  facebookUrl: undefined as string | undefined,
} as const;

// Opens a Gmail compose window addressed to CONTACT.email, instead of
// relying on mailto: (which only works if the visitor has a desktop mail
// client configured — many won't, especially on a shared/work computer).
export const gmailComposeUrl = (email: string = CONTACT.email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

// Real, verifiable trust signal from Jyoti's live Google Business Profile
// (screenshot provided 2026-07-19). Not an estimate — do not round up/down.
export const GOOGLE_RATING = {
  value: 4.9,
  reviewCount: 105,
  category: 'Educational consultant',
  cityLine: 'Pune, Maharashtra',
} as const;

// Prefilled WhatsApp opener. Encoded at use-site.
export const WHATSAPP_MESSAGE =
  "Hi! I'd like to know more about handwriting analysis.";

// Builds a wa.me deep link. Uses full international number (country code, no
// +/spaces) so it opens the WhatsApp app on mobile AND WhatsApp Web on desktop.
// The message is URL-encoded here so callers never have to.
export const whatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`;

// Business hours — shown on the Contact page.
// ⚠️ PLACEHOLDER: confirm actual hours with Jyoti before launch.
export const BUSINESS_HOURS = [
  { days: 'Monday – Saturday', hours: '10:00 AM – 7:00 PM' },
  { days: 'Sunday', hours: 'By appointment' },
] as const;

// Services — titles transcribed from the approved "Our services" reference
// (assets/reference-library/Services/Screenshot 2026-07-19 055037.png).
// Descriptions added 2026-07-21 per Jyoti's supplied copy; spelling
// standardised to British/Indian English to match the rest of the site
// ("Colour" not "Color" in body copy — the service *title* "Color Analyst"
// is kept as originally approved). `waMessage` is the per-service prefilled
// WhatsApp opener.
export const SERVICES = [
  {
    slug: 'handwriting-signature-analysis',
    title: 'Handwriting & Signature Analysis',
    description:
      'A complete reading of your handwriting and signature together, uncovering personality traits, emotional patterns and hidden strengths through graphology.',
    waMessage: "Hi! I'm interested in Handwriting & Signature Analysis.",
  },
  {
    slug: 'signature-analysis-correction',
    title: 'Signature Analysis & Correction',
    description:
      "We decode what your signature says about you today, then redesign it to reflect the confidence and clarity you're building toward.",
    waMessage: "Hi! I'm interested in Signature Analysis & Correction.",
  },
  {
    slug: 'logo-analyst',
    title: 'Logo Analyst',
    description:
      "Beyond aesthetics, we study how a logo's shape, spacing and symbolism align with your brand's energy and the message it sends.",
    waMessage: "Hi! I'm interested in Logo Analysis.",
  },
  {
    slug: 'color-analyst',
    title: 'Color Analyst',
    description:
      'Colours carry psychology. We help you choose palettes for your brand, home or wardrobe that resonate with the identity you want to project.',
    waMessage: "Hi! I'm interested in Color Analysis.",
  },
  {
    slug: 'drawing-doodle-analyst',
    title: 'Drawing & Doodle Analyst',
    description:
      "Even a stray doodle speaks. We interpret sketches to reveal subconscious thoughts, moods and personality cues you didn't know you were sharing.",
    waMessage: "Hi! I'm interested in Drawing & Doodle Analysis.",
  },
  {
    slug: 'handwriting-improvement-students',
    title: 'Handwriting Improvement for Students — Scientific Approach',
    description:
      'A structured, research-backed method to help students write neater and faster, building focus and motor control along the way.',
    waMessage: "Hi! I'm interested in Handwriting Improvement for Students.",
  },
] as const;

// Primary navigation — shared by header + footer.
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
] as const;
