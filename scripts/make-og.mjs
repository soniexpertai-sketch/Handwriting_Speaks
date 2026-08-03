import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const W = 1200, H = 630;
const CREAM = '#faf6f0', GREEN = '#1f6f5c', INK = '#16332c', CORAL = '#e0664a',
      AMBER = '#f7ad4a', SAGE = '#5fa88a', MUTED = '#4d5f5a';
const FONT = 'Segoe UI, Arial, Helvetica, sans-serif';

// Logo shrunk to 340 and pushed right so the text column has a hard 760px
// ceiling — at 400px the brand name and byline ran underneath the circle.
const LOGO = 340;
const LOGO_X = W - LOGO - 64;           // 796
const mask = Buffer.from(
  `<svg width="${LOGO}" height="${LOGO}"><circle cx="${LOGO/2}" cy="${LOGO/2}" r="${LOGO/2}" fill="#fff"/></svg>`
);
const logo = await sharp('public/images/logo.jpg')
  .resize(LOGO, LOGO, { fit: 'cover' })
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer();

const bg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${CREAM}"/>
  <circle cx="1150" cy="64" r="13" fill="${CORAL}" opacity="0.9"/>
  <rect x="1092" y="556" width="24" height="24" rx="4" fill="${AMBER}" opacity="0.95"
        transform="rotate(45 1104 568)"/>
  <circle cx="56" cy="566" r="9" fill="${SAGE}" opacity="0.85"/>

  <text x="80" y="196" font-family="${FONT}" font-size="22" font-weight="600"
        letter-spacing="2.4" fill="${GREEN}">HANDWRITING &amp; SIGNATURE ANALYSIS</text>

  <text x="80" y="278" font-family="${FONT}" font-size="64" font-weight="700"
        fill="${INK}">Handwriting Speaks</text>

  <text x="80" y="344" font-family="${FONT}" font-size="38" font-weight="600"
        fill="${CORAL}">Find the real &#8220;YOU&#8221;</text>

  <text x="80" y="424" font-family="${FONT}" font-size="26" fill="${MUTED}">Jyoti Maheswari &#183; Graphologist</text>
  <text x="80" y="462" font-family="${FONT}" font-size="26" fill="${MUTED}">Pune, India</text>

  <rect x="80" y="502" width="110" height="5" rx="2.5" fill="${GREEN}"/>
</svg>`);

await sharp(bg)
  .composite([{ input: logo, left: LOGO_X, top: Math.round((H - LOGO) / 2) }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/og-default.jpg');

const m = await sharp('public/og-default.jpg').metadata();
console.log('og-default.jpg', m.width + 'x' + m.height,
  Math.round(readFileSync('public/og-default.jpg').length / 1024) + 'KB',
  '| text ceiling', LOGO_X, 'px');
