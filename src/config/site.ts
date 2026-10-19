// Shared business information — the single place to update contact details,
// IDs, and brand values. Values are copied exactly from the existing site.

export const site = {
  name: 'Isabella Garage Door',
  legalName: 'Schwab & Co. Holdings LLC',
  /** How the DBA relationship is worded in the footer */
  legalNotice: 'Isabella Garage Door is a registered assumed name of Schwab & Co. Holdings LLC',
  tagline: 'Raising Performance. Elevating Standards.',
  url: 'https://isabellagaragedoor.com',
  description:
    'Local, honest, and professional garage door repair and installation in Central Michigan.',
  defaultTitle: 'Isabella Garage Door | Raising Performance. Elevating Standards.',
  defaultImage: '/og-default.jpg',

  phone: {
    display: '989-572-0303',
    /** E.164 form used in tel:/sms: links */
    e164: '+19895720303',
    /** Form used in structured data */
    schema: '+1-989-572-0303',
  },
  email: 'isabellagaragedoor@gmail.com',

  address: {
    street: '2088 North Lincoln Road',
    city: 'Rosebush',
    region: 'MI',
    postalCode: '48878',
    country: 'US',
  },
  geo: { latitude: 43.7001, longitude: -84.7674 },
  serviceRegion: 'Isabella County and the Surrounding Central Michigan Area',

  social: {
    facebook: 'https://www.facebook.com/isabellagaragedoor',
    googleReview: 'https://g.page/r/Cf6x4Aq_rhM5EBM/review',
  },

  logo: {
    white: '/photos/white-tag-isabella-garage-door-logo.svg',
    blue: '/photos/blue-isabella-garage-door-logo.avif',
    /** Logo URL used in structured data */
    schema: 'https://isabellagaragedoor.com/logo.png',
  },

  analytics: {
    googleAnalyticsId: 'G-J7NE8QVPVC',
    clarityId: 'wi5tqwpbvn',
  },
  chatbaseId: 'wPbactyhYnPn8LQYfaQWP',

  brand: {
    navy: '#1a334f',
    bronze: '#b27d57',
    white: '#ffffff',
  },
} as const;

/** tel: link for the business phone */
export const telHref = `tel:${site.phone.e164}`;

/** sms: link with an optional pre-filled message (iOS + Android compatible) */
export function smsHref(body?: string) {
  return body ? `sms:${site.phone.e164}?&body=${encodeURIComponent(body)}` : `sms:${site.phone.e164}`;
}

export const mailtoHref = `mailto:${site.email}`;

/** Default text-message bodies already used on the site */
export const smsMessages = {
  general: 'Hi, I need some help with my garage door.',
  issue: "Hi, I'm having an issue with my garage door. Can you take a look?",
};
