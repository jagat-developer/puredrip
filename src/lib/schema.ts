import { company, memberships, wellnessShots } from "@/lib/site-data";
import type { FaqItem } from "@/lib/types";
import { absoluteUrl } from "@/lib/utils";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${company.baseUrl}/#business`,
    name: company.name,
    legalName: company.legalName,
    image: absoluteUrl(company.logo, company.baseUrl),
    logo: absoluteUrl(company.logo, company.baseUrl),
    url: company.baseUrl,
    telephone: company.phone,
    email: company.email,
    description: company.bio,
    slogan: company.tagline,
    medicalSpecialty: "IntegrativeMedicine",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.partnerClinic.address,
      addressLocality: "Halifax",
      addressRegion: "NS",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: company.serviceRegion,
    },
    knowsAbout: [
      "Mobile IV Therapy",
      "Vitamin Infusions",
      "Wellness Shots",
      "NAD+ Therapy",
      "Glutathione",
      "Hydration Therapy",
    ],
    priceRange: "$$$",
    sameAs: [company.instagramUrl, company.facebookUrl].filter(Boolean),
    makesOffer: memberships.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      price: tier.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "CAD",
      description: tier.tagline,
      url: absoluteUrl("/pure-drip-club", company.baseUrl),
    })),
    itemOffered: wellnessShots.map((shot) => ({
      "@type": "Product",
      name: shot.name,
      offers: {
        "@type": "Offer",
        price: shot.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "CAD",
        availability:
          shot.available === "live"
            ? "https://schema.org/InStock"
            : "https://schema.org/PreOrder",
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, company.baseUrl),
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
