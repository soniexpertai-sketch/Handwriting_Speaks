# Handwriting Speaks — Design Tokens

Extracted verbatim from the approved Claude Design mockup
(`Handwriting Speaks Website.dc.html`). Every value below is a literal
inline-style value from that file — nothing here is invented or "improved."
Items I could not resolve from the source are called out under
**⚠️ Ambiguities & flags** at the bottom. **Match the screens exactly — do not redesign.**

Brand: **Handwriting Speaks** (domain `healingwithhandwriting.in`, updated
2026-07-23 — was `handwriting-speaks.com`; Instagram
`@hand_writingspeaks`). **"Healing Through Writing"** is the tagline / logo
wordmark line, not the brand name. Graphology (handwriting & signature analysis),
Jyoti Maheswari, Pune, India.

---

## 1. Color Palette

Fonts and colors are all pulled directly from the mockup. Names are role labels
I assigned; hex values are exact.

### Core / brand
| Role | Hex | Where used |
|------|-----|------------|
| `--bg` — Canvas / background | `#faf6f0` | Page background (warm cream) |
| `--ink` — Body ink | `#233a36` | Default text color |
| `--ink-strong` — Heading ink | `#16332c` | Headings, darkest green; dark section fills |
| `--green` — Primary green | `#1f6f5c` | Links, primary buttons, "Book a Consultation" fill, accents |
| `--green-mid` — Sage | `#5fa88a` | Logo/icon circles, avatar chips, testimonial quote mark |
| `--green-soft` — Soft teal | `#7fc2ac` | Personality-cards section background |
| `--coral` — Coral / terracotta accent | `#e0664a` | Link hover, "Book Consultation" nav pill, script accents, `"YOU"`, left-border accents |
| `--amber` — Amber / marigold | `#f7ad4a` | "Book Now" button fill, problem-list bullets |

### Text tints
| Role | Hex | Where used |
|------|-----|------------|
| Muted body text | `#4d5f5a` | Paragraph copy on light bg |
| Muted meta text | `#5a6b66` | Card sub-copy, testimonial role line |
| Muted text on dark | `#cfe6dd` | Problem list & contact address on dark green |
| Footer text | `#a9c4bc` | Footer line |
| Callout brown text | `#8a3e12` | About-section quote box text |
| "Book Now" label text | `#3a2408` | Text on amber button |

### Surface / section backgrounds
| Role | Hex | Where used |
|------|-----|------------|
| Dark green panel | `#16332c` | Problem strip, footer |
| Pale green section | `#eef6f1` | "Key areas" section, testimonial cards |
| Pale green section (alt) | `#e9f4ee` | Hero eyebrow badge fill |
| Cream section | `#faf1e6` | "Why your signature matters" section |
| Peach callout | `#fef4ec` | About-section aphorism box |
| Warm card cream | `#fdf1ea` | Personality lozenge card body |
| Salmon card header | `#f5c6b8` | Personality card header, "formations to avoid" number band |
| Deep navy banner | `#12294f` | Quote banner ("unique like fingerprints") |
| Nav bar fill | `rgba(250,246,240,0.92)` | Sticky nav (cream + blur) |

### Decorative / one-off accents
| Role | Hex | Where used |
|------|-----|------------|
| Magenta script | `#c14a72` | Logo badge "Find the real YOU" |
| Coral asterisk | `#e8887a` | ✻ glyph on personality cards |
| Deep orange | `#c1440e` | "Formations to avoid" big numbers |
| Orange square | `#f2b26a` | Floating decorative square (hero) |
| Yellow highlight | `#f7d54a` | Highlighted line in navy quote banner |
| Near-black | `#1a1a1a` | "Jyoti" handwriting sample on personality cards |
| Selection highlight | `#cdeee2` | `::selection` background |
| Hairline border | `#e7ded1` | Nav bottom border, outlined service cards |
| White | `#ffffff` | Inner logo circles, card fills, text on green |

---

## 2. Typography

Loaded from Google Fonts (Poppins + Caveat):
```
family=Poppins:wght@400;500;600;700;800
family=Caveat:wght@500;600;700
```

- **Display / handwriting font:** `'Caveat', cursive` — weights 500/600/700.
  Used for headline H1/H2, script eyebrows, logo wordmark, and handwriting
  samples. This is the brand's signature typographic voice (see §7).
- **Body / UI font:** `'Poppins', sans-serif` — weights 400/500/600/700/800.
  Everything else: paragraphs, nav, buttons, card titles, meta.

### Type scale (exact px from source)
| Token | Font | Size | Weight | Line-height | Example use |
|-------|------|------|--------|-------------|-------------|
| Hero H1 | Caveat | `76px` | 700 | `1.02` | "Find the real YOU in every stroke." |
| Section H2 (script) | Caveat | `40–46px` | 700 | — | "3 formations to avoid" `40px`; "Please DM to book" `46px`; personality section `44px` |
| Section H2 (sans) | Poppins | `38px` | 800 | — | "Where handwriting analysis helps", "Testimonials", "Jyoti Maheswari" |
| Problem-strip H2 | Poppins | `30px` | 700 | — | "Is your child facing…" |
| Quote banner | Poppins | `32px` | 800 | `1.4` | "Your handwriting is unique…" |
| Card H3 | Poppins | `28px` | 800 | — | "Why your signature matters" |
| Personality name | Poppins | `24px` | 700 | — | "Ambivert" / "Introvert" / "Extrovert" |
| Services CTA line | Poppins | `22px` | 700 | — | Green CTA band copy |
| Script eyebrow | Caveat | `22px` | 700 | — | "Meet your analyst", "Key areas of consultation" |
| Logo wordmark | Caveat | `26px` | 700 | `1` | "Healing Through Writing" |
| Lead paragraph | Poppins | `18px` | 400 | `1.6` | Hero subhead |
| Body large | Poppins | `17px` | 400 | `1.7` | About paragraph |
| Body | Poppins | `16px` | 400/600 | `1.6` | Card body, testimonial quote |
| Card title | Poppins | `17–18px` | 700 | — | Consult-area / service titles |
| Card sub-copy | Poppins | `15px` | 400 | `1.5` | Consult-area descriptions |
| Nav / button label | Poppins | `15–16px` | 600/700 | — | Nav links, buttons |
| Eyebrow badge | Poppins | `13px` | 600 | — | "GRAPHOLOGY & SIGNATURE ANALYSIS", `letter-spacing:0.5px`, uppercase |
| Meta / role | Poppins | `13–15px` | 400 | — | Testimonial role, footer |

Letter-spacing appears only on the uppercase hero badge (`0.5px`) and the logo
inner label (`1px`). Everything else uses default tracking.

---

## 3. Spacing scale

Spacing is expressed in raw px in the source. Observed values, grouped:

- **Section vertical rhythm:** `100px` top/bottom is the dominant section
  padding (`padding:100px 48px`). Variants: `90px` (quote banner), `64px`
  (problem strip), `32px` (footer). Hero uses `90px 48px 100px`.
  - ⚠️ **Updated 2026-07-28 (Home page):** Home sections use `56px`
    top/bottom and the quote banner `40px`, down from `100px` / `90px`.
    Reason: the mockup's 100px rhythm was set for long sections; Home's
    are short (the quote banner is two lines), so 200px of padding around
    78px of content read as empty bands rather than breathing room. The
    `--section-y` token is unchanged at 100px and other pages still use it.
- **Horizontal gutter:** `48px` on all full-width section paddings.
- **Content max-widths:** `1280px` (hero), `1100px` (most sections), `1000px`
  (personality), `900px` (contact), `800px` (quote banner). Centered via
  `margin:0 auto`.
  - ⚠️ **Updated 2026-07-28 (Home page):** every block on the Home page now
    uses the single `1100px` container — hero and quote banner included,
    rather than the `1280px` / `800px` the mockup gave them. Reason: Jyoti
    asked for all text on the page to share one left edge, and three
    different container widths put the hero, the sections, and the quote at
    three different indents. One width is the only way to align them. The
    `--container-wide` (1280px) token still exists and is still used by the
    sticky header. Other pages are unchanged.
- **Grid gaps:** `24px` (3-col card grids), `40px` (2-col splits, problem strip),
  `60px` (about split).
- **Nav padding:** `20px 48px`.
- **Common small steps seen:** `6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 30, 34, 40, 44, 50`px.
  There is **no strict modular scale** — treat these as the observed set and
  reuse them rather than inventing new increments.

---

## 4. Border radius

| Token | Value | Use |
|-------|-------|-----|
| Pill / full round | `999px` | Buttons, eyebrow badges |
| Circle | `50%` | Logo rings, icon circles, avatar chips, decorative dot |
| Lozenge | `100px` | Personality cards |
| XL card | `40px` | "Formations to avoid" cards |
| Large card | `24px` | About photo, service CTA band, signature cards, contact box |
| Card | `20px` | Consult-area cards, service cards, testimonial cards |
| Medium | `16px` | Child illustration slot |
| Small | `8px` | About aphorism box |
| Chip | `6px` | Signature-matters ✓ checkbox |
| Tiny | `4px` | Rotated decorative square |

---

## 5. Shadows & effects

- **Hero logo circle:** `box-shadow: 0 30px 60px -20px rgba(31,111,92,0.4)`
  (large soft green-tinted lift).
- **Consult-area cards:** `box-shadow: 0 8px 24px -12px rgba(22,51,44,0.15)`
  (subtle green-tinted card shadow).
- **Sticky nav:** `backdrop-filter: blur(6px)` over `rgba(250,246,240,0.92)`,
  plus `border-bottom:1px solid #e7ded1`.
- **Service card hover:** border transitions `#e7ded1 → #5fa88a`
  (`transition:border-color 0.2s`). ⚠️ see flags — hover is declared via a
  non-standard `style-hover`/`style-hover` attribute in the mockup.
- No blur/gradient fills anywhere; the design is flat color + a couple of soft
  shadows.

---

## 6. Components

### Buttons
| Variant | Fill | Text | Border | Padding | Radius | Weight/Size |
|---------|------|------|--------|---------|--------|-------------|
| Primary (green) | `#1f6f5c` | `#fff` | — | `16px 30px` | `999px` | 700 / 16px |
| Nav pill (coral) | `#e0664a` | `#fff` | — | `10px 22px` | `999px` | 600 / 15px |
| Outline (green) | transparent | `#1f6f5c` | `2px solid #1f6f5c` | `16px 30px` | `999px` | 700 / 16px |
| Amber CTA ("Book Now") | `#f7ad4a` | `#3a2408` | — | `16px 34px` | `999px` | 700 / 16px |

All buttons are fully-rounded pills. No shadow on buttons.

### Form fields
⚠️ **No form fields exist in the mockup.** Contact is DM/email/phone links only
(`Please DM to book`). There are no input, textarea, or select styles to extract.
If a booking form is added later, it must be designed to match — do not assume
styles. See flags.

### Cards
- **Elevated card** (consult areas): `#fff`, radius `20px`, padding `30px 26px`,
  soft shadow (§5). Icon = 46px sage circle (`#5fa88a`) with white `✎` glyph,
  `margin-bottom:16px`.
- **Outlined card** (services): `2px solid #e7ded1`, radius `20px`,
  padding `28px 24px`, hover border → sage.
- **Testimonial card:** `#eef6f1` fill, radius `20px`, padding `34px 28px`,
  flex column; oversized Caveat `"` quote mark in sage `#5fa88a` at 40px;
  avatar = 44px sage circle with white initial.
- **Personality lozenge:** radius `100px`, `#fdf1ea` body, `#f5c6b8` header band
  with coral `#e0664a` name text; centered trait + Caveat "Jyoti" sample + ✻.
- **"Formations to avoid" card:** radius `40px`, `#eef6f1` body,
  `#f5c6b8` number band with deep-orange `#c1440e` numeral.
- **Aphorism / callout box:** `#fef4ec` fill, `border-left:4px solid #e0664a`,
  radius `8px`, padding `18px 22px`, brown text `#8a3e12`, weight 600.
- **CTA band:** `#1f6f5c` fill, radius `24px`, padding `40px 48px`, white copy +
  amber button, `flex-wrap` for responsiveness.

### Icon / logo badge
- Concentric circles: outer sage `#5fa88a` ring, inner white circle. Nav uses
  44/32px; hero uses 340/270px with the full lockup inside (label + pen
  image-slot + magenta script).

### Bullets & checks
- Problem list bullet: 8px amber `#f7ad4a` dot.
- Signature-matters check: 24px sage `#5fa88a` rounded square (radius 6px) with
  white `✓`.

---

## 7. Signature visual element

**Handwritten Caveat script as the brand's headline voice — the type literally
*is* handwriting, which is the product.** Headlines, eyebrows, the logo wordmark,
and the on-card "Jyoti" samples are all set in Caveat, so the page reads as if
written by hand. This pairs with two supporting signatures:

1. **The round "Healing Through Writing" badge** — a sage-green ring around a
   white disc (repeated at nav scale and hero scale), the fixed brand mark.
2. **The warm-cream canvas + green/coral duo** — everything sits on `#faf6f0`
   cream, with `#1f6f5c` green as the trustworthy base and `#e0664a` coral as
   the human/energetic accent (notably the coral `"YOU"` inside the green
   headline). Small floating geometric accents (orange square, coral dot) add a
   crafted, playful touch.

Fully-rounded pill buttons and the exaggerated `100px`/`40px` lozenge cards
reinforce the soft, approachable, hand-drawn feel.

---

## 8. Tone of voice (observed in copy)

- **Warm, reassuring, and direct** — speaks to parents and individuals in plain
  second person ("Find the real *YOU* in every stroke", "Is your child facing
  any of these problems?").
- **Empowering, outcome-focused** — emphasizes building confidence, focus,
  willpower; "guided correction to build the traits you want."
- **Lightly scientific / credible** — frames graphology as "a scientific window
  into personality," positions Jyoti as a credentialed "Graphologist."
- **Aphoristic** — memorable one-liners used as design anchors: *"If handwriting
  analysis contradicts a person's behaviour, believe the handwriting."*;
  *"No two persons in the world have the same handwriting, not even twins."*
- **Personal & local** — first-name analyst ("Meet your analyst — Jyoti
  Maheswari"), Pune address, DM-to-book informality ("Please DM to book").
- **Indian-English register** — audience phrasing like "teenagers, students and
  professionals, Business Owners, Home Makers"; conversational, inclusive.
- **Action-oriented CTAs** — short imperatives: "Book a Consultation", "Book
  Now", "Follow @hand_writingspeaks".

---

## ⚠️ Ambiguities & flags (not guessed — confirm before building)

1. ~~**Brand name inconsistency.**~~ ✅ **Resolved:** brand name is **Handwriting
   Speaks** (domain `healingwithhandwriting.in`, updated 2026-07-23 — was
   `handwriting-speaks.com`). **"Healing Through Writing"** is the
   tagline / logo wordmark line — keep it inside the round badge and footer, but
   use "Handwriting Speaks" as the primary brand name in titles, metadata, and any
   new copy.
2. **Two "primary" greens.** `#1f6f5c` (buttons/links) and `#16332c` (headings/
   dark panels) both act as brand green. I've split them as `--green` and
   `--ink-strong`; confirm the intended primary if a single brand green is needed.
3. **Coral vs. amber CTAs.** Three different CTA colors appear: coral `#e0664a`
   (nav), green `#1f6f5c` (hero), amber `#f7ad4a` (Book Now). This looks
   intentional per placement, but confirm there's a rule (e.g. amber = high-
   intent conversion) rather than inconsistency.
4. **No form styles.** Contact is DM/email/phone only — there are no input/
   textarea/select tokens in the source. If a booking form is required, its
   styles must be designed to match and approved separately.
5. **Hover states are minimal & non-standard.** Only the service card declares a
   hover (via a non-standard `style-hover` attribute) and the global `a:hover`
   → `#e0664a`. Button hover/active/focus states are **not defined** in the
   mockup — they'll need to be specified for the real build (accessibility:
   focus-visible especially).
6. **`image-slot` placeholders.** Logo pen icon, child illustration, and Jyoti's
   photo are placeholders (not final assets). Radii given (`16` / `24`), but the
   actual images/aspect ratios are TBD.
7. **Pink/magenta accents (`#c14a72`, `#e8887a`, `#f5c6b8`).** These appear only
   in decorative spots (logo script, personality/formation cards). Confirm
   whether pink is an official palette color or purely decorative.
8. **Responsive behavior undefined.** All grids/sizes are desktop values
   (`grid-template-columns`, `76px` H1, `48px` gutters). No breakpoints or mobile
   type scale are in the source — these need to be defined for implementation.
9. **Single screen reviewed.** I extracted from the one approved mockup file (and
   confirmed the thumbnail matches it). If additional approved screens exist,
   they should be cross-checked against these tokens.
