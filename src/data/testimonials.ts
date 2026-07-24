// Real client testimonials — transcribed verbatim from the screenshots in
// D:\Handwriting\Testominals (Google + community reviews). NOTHING here is
// invented or padded. Two source screenshots were truncated at the image edge
// (Tisha, Alpana); those are trimmed to their last complete sentence — no
// fabricated endings. No reviewer cities were present in any screenshot, so
// `city` is intentionally omitted (do not invent).

export type ServiceId = 'analysis' | 'graphotherapy' | 'improvement';

export interface ServiceFilter {
  id: ServiceId;
  label: string;
  /** Prefilled WhatsApp opener when this tab is active. */
  waMessage: string;
}

// Tabs, in display order. "All" is prepended in the page.
export const SERVICE_FILTERS: ServiceFilter[] = [
  {
    id: 'analysis',
    label: 'Handwriting & Signature Analysis',
    waMessage: "Hi! I'm interested in Handwriting & Signature Analysis.",
  },
  {
    id: 'graphotherapy',
    label: 'Graphotherapy',
    waMessage: "Hi! I'm interested in Graphotherapy.",
  },
  {
    id: 'improvement',
    label: 'Handwriting Improvement',
    waMessage: "Hi! I'm interested in Handwriting Improvement.",
  },
];

export interface TestimonialVideo {
  service: ServiceId;
  /** Path under /public. */
  src: string;
  /**
   * Caption shown on the card. ⚠️ PLACEHOLDER — the source clips have no
   * transcript or attribution available, so these are generic until Jyoti
   * supplies real names/context per clip. Do not invent identities.
   */
  caption: string;
}

// Real client videos, copied verbatim from D:\Handwriting\Testominals into
// /public/videos. Graphotherapy intentionally has none (confirmed 2026-07-19 —
// the clip once duplicated into that folder belongs to Handwriting Improvement
// only). Order matches source filenames.
export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    service: 'analysis',
    src: '/videos/analysis-1.mp4',
    caption: 'Client testimonial — Handwriting & Signature Analysis',
  },
  {
    service: 'analysis',
    src: '/videos/analysis-2.mp4',
    caption: 'Client testimonial — Handwriting & Signature Analysis',
  },
  {
    service: 'analysis',
    src: '/videos/analysis-3.mp4',
    caption: 'Client testimonial — Handwriting & Signature Analysis',
  },
  {
    service: 'improvement',
    src: '/videos/improvement-1.mp4',
    caption: 'Client testimonial — Handwriting Improvement',
  },
];

export interface Testimonial {
  /** First name only, per privacy rule (no surnames unless provided). */
  name: string;
  city?: string;
  service: ServiceId;
  serviceLabel: string;
  /** 1–5, or null when the source review carried no star rating. */
  rating: number | null;
  text: string;
  /** Provenance shown as a small trust label. */
  source: string;
}

const label: Record<ServiceId, string> = {
  analysis: 'Handwriting & Signature Analysis',
  graphotherapy: 'Graphotherapy',
  improvement: 'Handwriting Improvement',
};

// Authored in an interleaved (round-robin) order so the default "All" view
// reads as a natural mix of services rather than grouped blocks.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Pankaj',
    service: 'analysis',
    serviceLabel: label.analysis,
    rating: 5,
    source: 'Google review',
    text: "I recently had a handwriting analysis done by Mrs. Jyoti Maheshwari, and it was truly a wonderful experience. She has an incredible ability to read between the lines … quite literally! Her insights were remarkably accurate and helped me understand myself better, both personally and professionally. They were deeply reflective, helping me understand aspects of my personality and behaviour that I hadn't consciously noticed before. She explains her findings in a calm, clear, and compassionate manner, which makes the entire process engaging and meaningful. I truly appreciate the time and sincerity she put into her work. Highly recommended for anyone looking for a thoughtful and professional handwriting analysis experience.",
  },
  {
    name: 'Prisha',
    service: 'graphotherapy',
    serviceLabel: label.graphotherapy,
    rating: 5,
    source: 'Google review',
    text: "I had got my handwriting analysis done by Jyoti which, when explained by her, took me by surprise by its accuracy. Then I started with graphotherapy sessions with her, where I was given a few patterns to write everyday. Now, after almost one and a half months, I can feel the difference in me. I am much more aware of my thought process and can handle them better now. Have a bit more clarity on things now. My overthinking, though not gone, its intensity has reduced. These sessions were an adjunct to my meditation which I am doing for quite some time now. I really think these sessions with Jyoti have accelerated my progress. Also, about Jyoti — she has been a very sincere person with these sessions, constantly checking on me and motivating me with true feedback. Very grateful for her help. I wish her the best in her career.",
  },
  {
    name: 'Nidhi',
    service: 'improvement',
    serviceLabel: label.improvement,
    rating: null,
    source: 'Community review (PULA Pune Ladies)',
    text: "This review is for Jyoti Maheswari ma'am, who is a handwriting expert. She is an exceptional teacher who has made a drastic change in my daughter's handwriting. My daughter joined her class and now is adoring her handwriting. Jyoti miss taught basic alphabets to easy techniques of improving handwriting skills. She also takes Hindi handwriting improving classes. She is very kind with the kids! Though the course is over, my daughter still wants to continue. I highly recommend everyone to check out Jyoti Maheswari ma'am's classes!",
  },
  {
    name: 'Khushbu',
    service: 'analysis',
    serviceLabel: label.analysis,
    rating: 5,
    source: 'Google review',
    text: "I had my signature and handwriting analysed by Jyoti. I am a life coach, and I thought I knew so much about me, but the way Jyoti analysed my handwriting was absolutely insane. She told me about things which were there in my unconscious mind, but were not revealed to me. I immediately went for handwriting and signature improvement because of the loopholes which she told needed to be worked upon. With simple practices of formation, she changed my life. I would say it was a 360° change in my life post changing my handwriting. Now for every ups and downs in my life, I just quickly scan my handwriting and, by changing the formation, the impact of the problem is reduced to an extent. Thank you so much, Jyoti Maheshwari, for your guidance on handwriting.",
  },
  {
    name: 'Alpana',
    service: 'graphotherapy',
    serviceLabel: label.graphotherapy,
    rating: null,
    source: 'Google review',
    text: "I was always curious about graphology, and I came across Jyoti Maheshwari. I had my son's handwriting and signature analysed. The outcome of the analysis was perfect. Mentioning and identifying the issue is not graphology; having therapy is also important. After the analysis we had therapy sessions. After analysing the handwriting, Jyotiji suggested some writing patterns and changes in letter formation. It helped to train his subconscious mind. I would highly recommend Jyotiji.",
  },
  {
    name: 'Parent of a student',
    service: 'improvement',
    serviceLabel: label.improvement,
    rating: null,
    source: 'Community review',
    text: "Finding the right tutor for your child is never easy — especially when you're juggling work and need someone flexible, patient, and truly kid-friendly. After a long search, I found Jyoti Maheswari, and I can confidently say she's been an absolute blessing for my son's handwriting journey. With my hectic schedule, I requested late evening classes, and despite her own family commitments, Jyoti ma'am graciously agreed to conduct sessions at 9 PM — something not many would even consider. In just 14 days, my son went from struggling with print formation to showing a drastic improvement in his handwriting. But more than the technical progress, what truly amazed me was the shift in his attitude — he now enjoys writing! That spark was all thanks to her. What sets her apart? Incredibly patient and child-friendly, understands how to engage kids, and truly passionate about teaching. I wholeheartedly recommend Jyoti Maheswari to any parent looking for a handwriting or formation tutor. She doesn't just teach — she connects, and that makes all the difference. Thank you, ma'am.",
  },
  {
    name: 'Prachi',
    service: 'analysis',
    serviceLabel: label.analysis,
    rating: 5,
    source: 'Google review',
    text: "Handwriting analysis is a great way to understand more deeply about ourselves. I approached Jyoti Maheshwari for my handwriting analysis, and the results were surprisingly correct of what I felt and understood about myself. Few were genuinely surprising (the good aspects), as I never thought of myself as that person. She gives some aspects on which we need to work on ourselves, which I found practically doable. Looking forward to seeing good changes in myself. If you are looking to understand and want to work on the self, it's a great medium and Jyoti does a good job.",
  },
  {
    name: 'Swati',
    service: 'graphotherapy',
    serviceLabel: label.graphotherapy,
    rating: 5,
    source: 'Google review',
    text: "I'm very happy to share my experience with Ms. Jyoti Maheshwari. I consulted her last year and, as per her advice, I made some changes in my signature, and those changes show positive impact in my life. Really, her knowledge is incredible and I would suggest others also to at least once take her guidance and advice. She is blessed with special knowledge to bring changes in our life.",
  },
  {
    name: 'Madhuri',
    service: 'improvement',
    serviceLabel: label.improvement,
    rating: null,
    source: 'Community review (PULA Pune Ladies)',
    text: "This review goes to Jyoti Maheswari for the Handwriting Improvement course. I saw her reviews on PULA and enquired for my kid for a handwriting class. She is very friendly, polite and a highly motivated person. Her teaching techniques really helped my kids a lot to improve handwriting. I started getting results within 7–8 days. I was amazed to see the result. The result I got from this course is beyond my expectations. She teaches all types of handwriting like print, cursive, and MR script. I highly recommend her.",
  },
];
// Note (2026-07-21): Tisha's "Handwriting & Signature Analysis" review was
// removed here per request, so every service category shows exactly 3
// reviews — keeps the masonry grid visually even across all three tabs
// instead of Analysis having a 4th that the others didn't.
