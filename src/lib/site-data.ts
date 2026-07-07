import type {
  Benefit,
  Company,
  DripCategory,
  FaqItem,
  MembershipTier,
  NavItem,
  Pillar,
  ProcessStep,
  SeoPage,
  WellnessShot,
} from "@/lib/types";

export const company: Company = {
  name: "Pure Drip",
  legalName: "Pure Drip Mobile IV Inc.",
  tagline: "Recharge · Recover · Rehydrate",
  motif: "Mobile IV therapy, delivered to you.",
  ownerName: "Daman Kaur, LPN",
  email: "info@puredrip.ca",
  phone: "+19022338347",
  phoneDisplay: "902-233-8347",
  baseUrl: "https://puredrip.ca",
  bookingUrl: "https://puredripbook.janeapp.com",
  serviceRegion: "Halifax & Beyond, Nova Scotia",
  province: "Nova Scotia",
  partnerClinic: {
    name: "FLUID Multidisciplinary Health Clinic",
    address: "Demone Street, Halifax, NS B3K 0G9",
    cadence: "In-clinic every second Wednesday & Saturday",
  },
  logo: "/images/logo.svg",
  ogImage: "/images/og.jpg",
  bio: "Pure Drip is Nova Scotia's first mobile IV therapy clinic. Nurse-led hydration, vitamin infusions, and wellness shots — delivered to your home, office, hotel, or event across Halifax and beyond.",
  instagramUrl: "https://www.instagram.com/puredrip.ca/",
  instagramHandle: "@puredrip.ca",
  facebookUrl: "https://www.facebook.com/puredrip",
  facebookHandle: "Pure Drip",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "IV Therapy", href: "/iv-therapy" },
  { label: "Wellness Shots", href: "/wellness-shot" },
  { label: "Private Events", href: "/private-events" },
  { label: "Pure Drip Club", href: "/pure-drip-club" },
  { label: "About", href: "/about" },
  { label: "Location", href: "/location" },
  { label: "FAQs", href: "/faqs" },
];

export const heroBenefits: Benefit[] = [
  {
    eyebrow: "Instant Hydration",
    title: "Instant Hydration, Instant Relief",
    body: "Replenish your body at a cellular level and feel revived within hours. Say goodbye to sluggish mornings and foggy afternoons.",
  },
  {
    eyebrow: "Skin, but glowing",
    title: "Your Skin, But Glowing",
    body: "Pure nutrients like vitamin C and glutathione work from within to brighten your complexion and restore your natural glow.",
  },
  {
    eyebrow: "Natural Energy",
    title: "Natural Energy, No Crash",
    body: "Ditch the endless coffee refills. Experience steady, lasting energy that keeps you focused and unstoppable.",
  },
  {
    eyebrow: "Recover & Rebalance",
    title: "Recover & Rebalance",
    body: "Whether it's from stress, workouts, or a night out, your body deserves a reset. IV therapy helps you bounce back faster and feel refreshed.",
  },
];

export const pillars: Pillar[] = [
  {
    title: "Recharge anywhere",
    body: "Home, office, hotel, event — we bring the clinic to you. No commute, no waiting room, no recovery time on the other side.",
  },
  {
    title: "Science-backed",
    body: "Every drip is built on clinical evidence. Our pharmacist-led formulations are dosed to the standards a hospital pharmacy would recognise.",
  },
  {
    title: "Custom wellness",
    body: "No two bodies are the same. Every session begins with a short intake so the drip you receive is the drip your body needs.",
  },
  {
    title: "Professional care",
    body: "Treatment is delivered by registered nurses and an LPN under pharmacist oversight. Sterile technique, every visit.",
  },
];

export const ivProcess: ProcessStep[] = [
  { index: "01", title: "Book & connect", body: "Choose a time on JaneApp. We confirm within the hour and send a short pre-visit guide." },
  { index: "02", title: "Quick intake", body: "A two-minute intake captures your goals, medical history, and any current medications." },
  { index: "03", title: "Personal consultation", body: "On arrival, your nurse reviews intake, answers questions, and finalises the formula." },
  { index: "04", title: "We come to you", body: "Treatment in your chosen space — couch, office chair, hotel room, event suite. Setup is calm and clinical." },
  { index: "05", title: "Relax & recharge", body: "Forty-five minutes to an hour, monitored throughout. Most clients feel the lift before the drip is done." },
  { index: "06", title: "Ongoing support", body: "Follow-up notes the next day, plus tailored recommendations for the next session if you want one." },
];

export const eventsProcess: ProcessStep[] = [
  { index: "01", title: "Share your details", body: "Tell us the date, headcount, and what you'd like everyone to leave feeling. We'll suggest a menu." },
  { index: "02", title: "We arrive ready", body: "A nurse-led team brings everything — drips, shots, chairs, sanitised supplies. You host, we set up." },
  { index: "03", title: "Quick consultation", body: "Each guest gets a private one-minute intake before treatment. Privacy and consent, every time." },
  { index: "04", title: "Enjoy the experience", body: "Hydration, glow, recovery — delivered as part of the event, not a clinical interruption to it." },
];

export const eventDripCategories: DripCategory[] = [
  { title: "Energy Boosters", body: "B-complex and amino blends for groups facing a long day, a launch, or a long flight." },
  { title: "Recovery Drips", body: "Post-celebration formulas with anti-nausea and electrolyte rebalance — wedding mornings, corporate retreats." },
  { title: "Immune Support", body: "High-dose vitamin C and zinc to keep the room well through winter travel, conferences, and shoots." },
  { title: "Vitamin & Glow", body: "Glutathione, biotin, and antioxidant-led infusions — bridal parties, on-camera prep, milestone weekends." },
];

export const wellnessShots: WellnessShot[] = [
  {
    slug: "b-complex-d3",
    name: "B Complex + D3 (Sunshine)",
    price: "$75",
    blurb: "Energy, mood, and immune support in one fast-acting shot. Our most-booked daily lift.",
    available: "live",
  },
  {
    slug: "b12",
    name: "B12",
    price: "$55",
    blurb: "Methylcobalamin B12 — the energy and mental-clarity shot you can feel within hours.",
    available: "live",
  },
  {
    slug: "d3",
    name: "D3",
    price: "$55",
    blurb: "High-dose vitamin D3 for immune resilience and mood through Nova Scotia winters.",
    available: "live",
  },
  {
    slug: "metabolic",
    name: "Metabolic",
    price: "$55",
    blurb: "MIC and B-complex blend that supports fat metabolism and steady, sustained energy.",
    available: "preorder",
  },
  {
    slug: "biotin",
    name: "Biotin",
    price: "$55",
    blurb: "Hair, skin, and nails — high-dose biotin delivered straight to where it works.",
    available: "preorder",
  },
  {
    slug: "nad",
    name: "NAD+",
    price: "$95",
    blurb: "Cellular energy, cognitive sharpness, and longevity support. The pro-level shot.",
    available: "preorder",
  },
];

export const memberships: MembershipTier[] = [
  {
    slug: "essential-wellness",
    name: "Essential Wellness",
    price: "$199",
    cadence: "per month",
    emphasis: "essential",
    tagline: "Consistent hydration, energy, and immunity support.",
    features: [
      "1 Basic IV monthly + B12 shot",
      "10% preferred member pricing on add-ons",
      "Priority booking",
      "Minimum 6-month commitment",
    ],
    audience: "For the consistent baseline — hydration, energy, and immunity that compound.",
    cta: { label: "Join Essential", href: "https://puredripbook.janeapp.com" },
  },
  {
    slug: "signature-glow",
    name: "Signature Glow",
    price: "$249",
    cadence: "per month",
    emphasis: "popular",
    tagline: "Energy, skin health, and recovery — built for demanding weeks.",
    features: [
      "1 Basic IV monthly + Glutathione IV Push",
      "15% preferred member pricing on add-ons",
      "Priority + after-hours access",
      "Minimum 6-month commitment",
    ],
    audience: "For energy, skin, and recovery through demanding schedules and burnout cycles.",
    cta: { label: "Join Signature", href: "https://puredripbook.janeapp.com" },
  },
  {
    slug: "elite-longevity",
    name: "Elite Longevity",
    price: "$315",
    cadence: "per month",
    emphasis: "elite",
    tagline: "Premium care for high performers who treat wellness as essential.",
    features: [
      "Premium IV monthly",
      "Glutathione IV Push + NAD shot included",
      "20% preferred member pricing on add-ons",
      "VIP priority access",
      "Minimum 6-month commitment",
    ],
    audience: "For high performers, entrepreneurs, and individuals who treat wellness as a lifestyle.",
    cta: { label: "Join Elite", href: "https://puredripbook.janeapp.com" },
  },
];

export const faqs: FaqItem[] = [
  {
    q: "Who administers the IV?",
    a: "Every session is led by a registered nurse or LPN under pharmacist oversight. We follow sterile technique on every visit, and our team carries the full scope of training expected in a hospital infusion setting.",
  },
  {
    q: "Where can you come?",
    a: "Anywhere safe and private in Halifax Regional Municipality and the surrounding area — homes, offices, hotels, and event spaces. Reach out if you're outside HRM; we travel for groups and special bookings.",
  },
  {
    q: "How long does a session take?",
    a: "Plan for 45 to 60 minutes per IV, plus 10 minutes of intake and set-up. Wellness shots take under five minutes.",
  },
  {
    q: "How fast will I feel it?",
    a: "Most clients feel the lift before the drip finishes. Hydration is immediate; nutrient effects build over the next 24 to 48 hours.",
  },
  {
    q: "Is mobile IV therapy safe?",
    a: "Yes — when delivered by trained nurses with proper screening. Our intake captures medical history and current medications, and every drip is matched to your clinical picture before we begin.",
  },
  {
    q: "What does a Pure Drip Club membership include?",
    a: "Monthly IV therapy plus member-only pricing on add-ons, priority booking, and progressively elevated benefits at each tier. See the Pure Drip Club page for full details.",
  },
  {
    q: "Can you serve private events?",
    a: "Absolutely — bridal parties, corporate offsites, milestone celebrations, retreat groups. We bring a nurse-led team, all supplies, and a discreet set-up that fits the room.",
  },
];

const HERO_IMAGE = "/images/hero-sauna.webp";
const WELCOME_IMAGE = "/images/nurse-care.jpg";
const SCIENCE_IMAGE = "/images/nurse-iv-setup.jpg";
const RECOVERY_IMAGE = "/images/nurse-care.jpg";
const GLOW_IMAGE = "/images/hero-sauna.webp";
const TEAM_IMAGE = "/images/nurse-care.jpg";
const EVENT_IMAGE = "/images/nurse-iv-setup.jpg";
const CLUB_IMAGE = "/images/hero-sauna.webp";
const SHOT_IMAGE = "/images/nurse-iv-setup.jpg";
const LOCATION_IMAGE = "/images/hero-sauna.webp";

export const images = {
  hero: HERO_IMAGE,
  welcome: WELCOME_IMAGE,
  science: SCIENCE_IMAGE,
  recovery: RECOVERY_IMAGE,
  glow: GLOW_IMAGE,
  team: TEAM_IMAGE,
  event: EVENT_IMAGE,
  club: CLUB_IMAGE,
  shot: SHOT_IMAGE,
  location: LOCATION_IMAGE,
};

function buildSeo(args: SeoPage): SeoPage {
  return args;
}

export const homePageSeo: SeoPage = buildSeo({
  slug: "home",
  path: "/",
  title: "Pure Drip | Mobile IV Therapy in Halifax & Beyond",
  description:
    "Nova Scotia's first mobile IV therapy clinic. Nurse-led hydration, vitamin infusions, and wellness shots delivered to your home, office, hotel, or event across Halifax.",
  keywords: [
    "mobile iv therapy halifax",
    "iv therapy nova scotia",
    "vitamin infusions halifax",
    "nad therapy halifax",
    "wellness shots halifax",
    "pure drip",
  ],
  image: HERO_IMAGE,
  priority: 1,
});

export const pageSeo: Record<string, SeoPage> = {
  home: homePageSeo,
  "iv-therapy": buildSeo({
    slug: "iv-therapy",
    path: "/iv-therapy",
    title: "IV Therapy in Halifax | Pure Drip Mobile IV",
    description:
      "Mobile IV therapy in Halifax delivered by registered nurses. Hydration, energy, recovery, and glow infusions — booked online, set up in your space.",
    keywords: ["iv therapy halifax", "mobile iv halifax", "iv drip halifax", "vitamin iv nova scotia"],
    image: SCIENCE_IMAGE,
    priority: 0.9,
  }),
  "wellness-shot": buildSeo({
    slug: "wellness-shot",
    path: "/wellness-shot",
    title: "Wellness Shots in Halifax | Pure Drip",
    description:
      "Fast-acting vitamin shots — B12, D3, B-complex, biotin, NAD+ and more. Delivered to you in under five minutes.",
    keywords: ["b12 shot halifax", "vitamin shots halifax", "nad shot halifax", "wellness shots nova scotia"],
    image: SHOT_IMAGE,
    priority: 0.85,
  }),
  "private-events": buildSeo({
    slug: "private-events",
    path: "/private-events",
    title: "IV Therapy for Private Events | Pure Drip",
    description:
      "Bridal parties, corporate offsites, retreats, and milestone celebrations. Nurse-led IV therapy and wellness shots brought to your event.",
    keywords: ["iv therapy private events halifax", "bridal iv halifax", "corporate wellness halifax"],
    image: EVENT_IMAGE,
    priority: 0.8,
  }),
  "pure-drip-club": buildSeo({
    slug: "pure-drip-club",
    path: "/pure-drip-club",
    title: "Pure Drip Club | Wellness Membership",
    description:
      "An exclusive membership for those who prioritise energy, recovery, and long-term well-being. Curated monthly care, nurse-led and intentional.",
    keywords: ["wellness membership halifax", "iv membership halifax", "pure drip club"],
    image: CLUB_IMAGE,
    priority: 0.9,
  }),
  about: buildSeo({
    slug: "about",
    path: "/about",
    title: "About Pure Drip | Halifax Mobile IV Therapy",
    description:
      "Founded by LPN Daman Kaur, Pure Drip is Nova Scotia's first mobile IV therapy clinic — nurse-led, pharmacist-overseen, and built around your wellness.",
    keywords: ["pure drip about", "daman kaur halifax", "mobile iv halifax team"],
    image: TEAM_IMAGE,
    priority: 0.7,
  }),
  location: buildSeo({
    slug: "location",
    path: "/location",
    title: "Location & Service Area | Pure Drip Halifax",
    description:
      "Pure Drip serves Halifax and beyond. In-clinic visits available at FLUID Multidisciplinary Health Clinic every second Wednesday and Saturday.",
    keywords: ["pure drip location", "halifax iv therapy location", "fluid clinic halifax"],
    image: LOCATION_IMAGE,
    priority: 0.7,
  }),
  faqs: buildSeo({
    slug: "faqs",
    path: "/faqs",
    title: "FAQs | Pure Drip Mobile IV Therapy",
    description:
      "Answers to the most common questions about mobile IV therapy, wellness shots, memberships, and private events with Pure Drip.",
    keywords: ["iv therapy faq", "mobile iv questions halifax"],
    image: HERO_IMAGE,
    priority: 0.6,
  }),
};

export const publicRoutes: string[] = [
  "/",
  "/iv-therapy",
  "/wellness-shot",
  "/private-events",
  "/pure-drip-club",
  "/about",
  "/location",
  "/faqs",
];
