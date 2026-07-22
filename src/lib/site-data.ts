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
    address: "827 Bedford Hwy #204, Bedford, NS B4A 0J1",
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

export const ivBenefits: DripCategory[] = [
  {
    title: "Hydration & Recovery",
    body: "Replenish fluids and essential nutrients to support recovery after workouts, travel, busy schedules, or moments when your body needs extra care.",
  },
  {
    title: "Energy & Focus",
    body: "Nourish your body with targeted nutrients to support steady energy, mental clarity, and everyday performance.",
  },
  {
    title: "Immune & Wellness Support",
    body: "Give your body nutritional support during demanding seasons and maintain your wellness routine with personalized IV therapy.",
  },
  {
    title: "Skin & Glow",
    body: "Support a healthy, radiant complexion from within, with carefully selected nutrients that complement your natural glow.",
  },
  {
    title: "Balance & Resilience",
    body: "Support your body through periods of fatigue, stress, and changing wellness needs.",
  },
];

export const pillars: Pillar[] = [
  {
    title: "Recharge Anywhere",
    body: "Whether you're at home, in the office, staying at a hotel, or hosting an event, we bring premium IV therapy directly to you.",
  },
  {
    title: "Science-Backed",
    body: "Every Personalised treatment features thoughtfully sourced IV bags, high quality ingredients and  guided by current clinical evidence to help you feel your best.",
  },
  {
    title: "Custom Wellness",
    body: "Your wellness is personal. That's why every visit includes a comprehensive assessment to create a treatment plan tailored specifically to you.",
  },
  {
    title: "Professional Care",
    body: "Receive exceptional care from licensed nurses who prioritize safety, comfort, and clinical excellence from start to finish.",
  },
];

export const aboutPrinciples: Pillar[] = [
  {
    title: "Burnout Shouldn't Be the Standard",
    body: "Life can be demanding, but constantly running on empty shouldn't feel normal. We believe wellness is about taking time to restore, recharge, and care for yourself before burnout takes over.",
  },
  {
    title: "Safety & Comfort Come First",
    body: "Your safety and comfort are our priority at every step. From thorough screening and professional nursing care to sterile technique and attention to detail, every visit is designed with your well-being in mind.",
  },
  {
    title: "No Exaggerated Promises, Just Thoughtful Care",
    body: "We believe in honest, evidence-informed wellness. No unrealistic claims, no overpromising, just carefully selected treatments designed to support your individual goals.",
  },
  {
    title: "No Two Bodies Are the Same",
    body: "Every person has unique needs, goals, and experiences. That's why we take the time to understand your wellness priorities and create an experience that is personalized to you.",
  },
];

export const ivProcess: ProcessStep[] = [
  {
    index: "01",
    title: "Book & connect",
    body: "Choose your preferred time through JaneApp. We'll confirm your appointment and guide you through a seamless experience from booking to arrival.",
  },
  {
    index: "02",
    title: "Personal wellness intake",
    body: "A brief intake helps us understand your wellness goals, health history, and individual needs before your session.",
  },
  {
    index: "03",
    title: "Personalized consultation",
    body: "Your health history and intake will be reviewed by our clinical team under medical oversight to ensure your treatment is appropriate, safe, and tailored to your health status and wellness goals.",
  },
  {
    index: "04",
    title: "We come to you",
    body: "Enjoy a premium IV therapy experience in the comfort of your chosen space, whether that's your home, office, hotel, or private event setting.",
  },
  {
    index: "05",
    title: "Relax & recharge",
    body: "Settle in while your treatment is administered with attentive care and ongoing monitoring. Take this time to relax, reset, and recharge.",
  },
  {
    index: "06",
    title: "Continued wellness support",
    body: "Receive post-treatment guidance and personalized recommendations to support your ongoing wellness journey.",
  },
];

export const eventsProcess: ProcessStep[] = [
  {
    index: "01",
    title: "Tell us about your event",
    body: "Share your date, guest count, location, and the experience you're envisioning. We'll help curate the right options for your group.",
  },
  {
    index: "02",
    title: "We handle the details",
    body: "Our nurse-led team arrives fully prepared with everything needed for a smooth, discreet setup. From supplies to service flow, we take care of the details so you can focus on your guests.",
  },
  {
    index: "03",
    title: "Personalized guest experience",
    body: "Each guest receives an individual wellness assessment before treatment, ensuring a comfortable experience tailored to their needs.",
  },
  {
    index: "04",
    title: "Relax and enjoy the moment",
    body: "Your guests enjoy premium IV therapy as a seamless part of the celebration, retreat, or gathering, enhancing the experience without taking away from it.",
  },
];

export const eventDripCategories: DripCategory[] = [
  { title: "Energy Boosters", body: "Stay productive and clear-headed while partying or working." },
  { title: "Recovery Drips", body: "Say goodbye to hangovers, jet lag, and fatigue." },
  { title: "Immune Support Drips", body: "Stay healthy while celebrating or working." },
  { title: "Vitamin & Glow Treatments", body: "Because wellness should always shine." },
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
    blurb: "MIC blend that supports fat metabolism and steady, sustained energy.",
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
    a: "Every session is led by experienced nurses following thoughtful clinical practices, with a focus on your safety and comfort. Every visit is delivered with attention to detail, professionalism, and the highest standards of care.",
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

const HERO_IMAGE = "/images/pure-drip-hero-session.jpg";
const HERO_LANDING_IMAGE = "/images/pure-drip-hero-cheers.jpg";
const WELCOME_IMAGE = "/images/pure-drip-welcome-session.jpg";
const SCIENCE_IMAGE = "/images/pure-drip-iv-bags.jpg";
const RECOVERY_IMAGE = "/images/pure-drip-recovery-client.jpg";
const GLOW_IMAGE = "/images/pure-drip-glow-infusion.jpg";
const TEAM_IMAGE = "/images/pure-drip-treatment-closeup.jpg";
const FOUNDER_IMAGE = "/images/pure-drip-founder.jpeg";
const EVENT_IMAGE = "/images/pure-drip-event-session.jpg";
const CLUB_IMAGE = "/images/pure-drip-club-comfort.jpg";
const SHOT_IMAGE = "/images/pure-drip-wellness-shots.jpeg";
const SHOT_HERO_IMAGE = "/images/pure-drip-wellness-shot-hero.jpg";
const LOCATION_IMAGE = "/images/pure-drip-brochures.jpg";

export const images = {
  hero: HERO_IMAGE,
  heroLanding: HERO_LANDING_IMAGE,
  welcome: WELCOME_IMAGE,
  science: SCIENCE_IMAGE,
  recovery: RECOVERY_IMAGE,
  glow: GLOW_IMAGE,
  team: TEAM_IMAGE,
  founder: FOUNDER_IMAGE,
  event: EVENT_IMAGE,
  club: CLUB_IMAGE,
  shot: SHOT_IMAGE,
  shotHero: SHOT_HERO_IMAGE,
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
    image: FOUNDER_IMAGE,
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
