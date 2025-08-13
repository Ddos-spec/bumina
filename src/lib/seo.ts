import { Metadata } from 'next';

// --- CONFIGURATION ---
// Central place for all site-wide SEO information.
const siteConfig = {
  name: "Homestay Bumina EENK",
  title: "Homestay Bumina EENK - Villa & Penginapan Terbaik di Pangalengan",
  description: "Nikmati pengalaman menginap tak terlupakan di Homestay Bumina EENK, villa sejuk di tengah kebun teh Pangalengan. Fasilitas lengkap dengan perapian hangat.",
  url: "https://buminaeenk.com",
  logo: "https://buminaeenk.com/logo.webp",
  socialBanner: "https://buminaeenk.com/herohome.webp", // Main image for social sharing
  keywords: ["homestay pangalengan", "villa di pangalengan", "penginapan kebun teh", "sewa villa bandung", "wisata pangalengan", "bumina eenk", "taman langit pangalengan"],
  // Local Business Details
  address: {
    street: "Jl. Perkebunan Teh Sosro, Pangalengan",
    city: "Bandung",
    region: "Jawa Barat",
    postalCode: "40378",
    country: "ID",
  },
  phone: "+6285219460779",
  geo: {
    latitude: -7.292925,
    longitude: 107.583073,
  },
  priceRange: "$$",
};

// --- INTERFACES ---
// Defines the structure for page-specific SEO data.
interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  schema?: any;
}

// --- SCHEMA GENERATORS ---
// These functions create specific JSON-LD schema objects.

/**
 * Generates LodgingBusiness Schema for Local SEO.
 * @returns {object} JSON-LD schema for the homestay.
 */
const generateLodgingBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "image": siteConfig.logo,
  "telephone": siteConfig.phone,
  "priceRange": siteConfig.priceRange,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.street,
    "addressLocality": siteConfig.address.city,
    "addressRegion": siteConfig.address.region,
    "postalCode": siteConfig.address.postalCode,
    "addressCountry": siteConfig.address.country,
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": siteConfig.geo.latitude,
    "longitude": siteConfig.geo.longitude,
  },
});

/**
 * Generates Article Schema for blog posts.
 * @param {object} post - The article data.
 * @returns {object} JSON-LD schema for the article.
 */
export const generateArticleSchema = (post: any) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "description": post.excerpt,
  "image": post.image,
  "datePublished": post.date,
  "author": {
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
  },
  "publisher": {
    "@type": "Organization",
    "name": siteConfig.name,
    "logo": {
      "@type": "ImageObject",
      "url": siteConfig.logo,
    },
  },
});

/**
 * Generates FAQPage Schema for pages with FAQs.
 * @param {Array<{question: string, answer: string}>} faqs - List of questions and answers.
 * @returns {object} JSON-LD schema for the FAQ page.
 */
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
});


// --- MAIN METADATA GENERATOR ---

/**
 * Generates the complete Next.js Metadata object for a page.
 * @param {PageSEOProps} props - Page-specific SEO data.
 * @returns {Metadata} The complete metadata object for a Next.js page.
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  canonical,
  schema,
}: PageSEOProps): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageKeywords = [...siteConfig.keywords, ...keywords];
  const pageImage = ogImage || siteConfig.socialBanner;
  const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;

  // Combine default schema with page-specific schema
  const schemas = [generateLodgingBusinessSchema()];
  if (schema) {
    schemas.push(schema);
  }

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    
    // Canonical URL for preventing duplicate content issues
    alternates: {
      canonical: canonicalUrl,
    },

    // Open Graph (for Facebook, WhatsApp, etc.)
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [{ url: pageImage, width: 1200, height: 630 }],
      locale: 'id_ID',
      type: 'website',
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },

    // Robots file configuration
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Icons
    icons: {
      icon: '/logo.webp',
      shortcut: '/logo.webp',
      apple: '/logo.webp',
    },

    // Structured Data (JSON-LD)
    other: {
      'application/ld+json': JSON.stringify(schemas),
    },
  };
}