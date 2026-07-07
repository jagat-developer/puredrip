export type Company = {
  name: string;
  legalName: string;
  tagline: string;
  motif: string;
  ownerName: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  baseUrl: string;
  bookingUrl: string;
  serviceRegion: string;
  province: string;
  partnerClinic: {
    name: string;
    address: string;
    cadence: string;
  };
  logo: string;
  ogImage: string;
  bio: string;
  instagramUrl?: string;
  instagramHandle?: string;
  facebookUrl?: string;
  facebookHandle?: string;
};

export type SeoPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  image: string;
  priority: number;
};

export type NavItem = { label: string; href: string };

export type Benefit = {
  eyebrow: string;
  title: string;
  body: string;
};

export type Pillar = {
  title: string;
  body: string;
};

export type ProcessStep = {
  index: string;
  title: string;
  body: string;
};

export type WellnessShot = {
  slug: string;
  name: string;
  price: string;
  blurb: string;
  available: "live" | "preorder";
};

export type DripCategory = {
  title: string;
  body: string;
};

export type MembershipTier = {
  slug: string;
  name: string;
  price: string;
  cadence: string;
  emphasis?: "popular" | "elite" | "essential";
  tagline: string;
  features: string[];
  audience: string;
  cta: { label: string; href: string };
};

export type FaqItem = { q: string; a: string };

export type LeadSubmission = {
  name: string;
  email: string;
  phone: string;
  intent: "iv-therapy" | "private-event" | "membership" | "general";
  message?: string;
  preferredDate?: string;
  caslConsent: true;
  website?: string;
};
