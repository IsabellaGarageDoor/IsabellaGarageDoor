// Structured data (JSON-LD) builders. One business entity (#business) is emitted
// site-wide by BaseLayout; pages reference it by @id instead of repeating it.
import { site } from '../config/site';

const BUSINESS_ID = `${site.url}/#business`;
export const businessRef = { '@id': BUSINESS_ID };

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': BUSINESS_ID,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  // Previously pointed at /logo.png and /images/hero-image.jpg, which don't exist
  logo: `${site.url}/photos/blue-isabella-garage-door-logo.png`,
  image: `${site.url}${site.defaultImage}`,
  description:
    'Professional garage door repair, broken spring replacement, opener installation, and door maintenance serving Mt. Pleasant, Rosebush, and Central Michigan.',
  slogan: site.tagline,
  telephone: site.phone.schema,
  email: site.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Central Michigan' },
    { '@type': 'AdministrativeArea', name: 'Isabella County' },
    { '@type': 'City', name: 'Mount Pleasant, MI' },
    { '@type': 'City', name: 'Alma, MI' },
    { '@type': 'City', name: 'Clare, MI' },
    { '@type': 'City', name: 'Rosebush, MI' },
    { '@type': 'City', name: 'Coleman, MI' },
    { '@type': 'City', name: 'Lake Isabella, MI' },
    { '@type': 'City', name: 'Beal City, MI' },
    { '@type': 'City', name: 'Farwell, MI' },
    { '@type': 'City', name: 'Remus, MI' },
    { '@type': 'City', name: 'St. Louis, MI' },
    { '@type': 'City', name: 'Shepherd, MI' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '12:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Isabella Garage Door Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Broken Spring Replacement',
          serviceType: 'Torsion Spring Repair',
          description: 'Safe and professional replacement of high-tension garage door springs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Garage Door Opener Repair & Replacement',
          serviceType: 'Opener Service',
          description: 'Diagnostics and repair for all major brands, plus new smart opener installations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Garage Door Cable Off',
          serviceType: 'Cable Repair & Replacement Service',
          description: 'Broken garage door cable fix and replacement.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'General Garage Door Repair',
          serviceType: 'Hardware Repair',
          description: 'Fixing off-track doors, snapped cables, worn rollers, and bent tracks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Garage Door Maintenance & Tune-Up',
          serviceType: 'Preventative Maintenance',
          description: 'Complete 20-point safety inspection, lubrication, and door balancing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'New Garage Door Installation',
          serviceType: 'Door Installation',
          description: 'Professional installation of high-quality, insulated residential garage doors.',
        },
      },
    ],
  },
  sameAs: [site.social.facebook],
};

/** Strip HTML tags/whitespace so visible FAQ answers can be reused in schema */
export function plainText(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

export interface FaqItem {
  question: string;
  /** Answer HTML (links allowed) */
  answer: string;
  /** Leave out of FAQPage structured data (e.g. "Still have questions?") */
  inSchema?: boolean;
}

/** FAQPage schema generated from the same items shown on the page */
export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.filter((item) => item.inSchema !== false).map((item) => ({
      '@type': 'Question',
      name: plainText(item.question),
      acceptedAnswer: { '@type': 'Answer', text: plainText(item.answer) },
    })),
  };
}

export interface Crumb {
  name: string;
  href: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, site.url).href,
    })),
  };
}
