// Location landing pages (src/pages/locations/*). Used by footers, maps and menus.

export interface Location {
  name: string;
  href: string;
  /** Regional pages (counties / Central Michigan) vs. individual towns */
  kind: 'region' | 'town';
}

export const locations: Location[] = [
  { name: 'Central Michigan', href: '/locations/central-michigan', kind: 'region' },
  { name: 'Isabella County', href: '/locations/isabella-county', kind: 'region' },
  { name: 'Midland County', href: '/locations/midland-county', kind: 'region' },
  { name: 'Mt. Pleasant', href: '/locations/mt-pleasant', kind: 'town' },
  { name: 'Lake Isabella', href: '/locations/lake-isabella', kind: 'town' },
  { name: 'Clare', href: '/locations/clare', kind: 'town' },
  { name: 'Alma', href: '/locations/alma', kind: 'town' },
  { name: 'Shepherd', href: '/locations/shepherd', kind: 'town' },
  { name: 'Rosebush', href: '/locations/rosebush', kind: 'town' },
  { name: 'Remus', href: '/locations/remus', kind: 'town' },
  { name: 'Farwell', href: '/locations/farwell', kind: 'town' },
  { name: 'Coleman', href: '/locations/coleman', kind: 'town' },
  { name: 'Beal City', href: '/locations/beal-city', kind: 'town' },
  { name: 'St. Louis', href: '/locations/st-louis', kind: 'town' },
];
