// Prices shown on the pricing page (src/pages/resources/pricing.astro).
// Update amounts here. Values are copied exactly from the existing page —
// including how each range is written.

export interface PriceItem {
  name: string;
  /** Price range exactly as displayed, e.g. "$325–$395" */
  range: string;
  description: string;
}

export interface PriceGroup {
  heading: string;
  items: PriceItem[];
}

/** Flat-rate service call / diagnostic visit */
export const serviceCallFee = {
  display: '$80',
  /** Value used in structured data */
  schemaPrice: '80.00',
  currency: 'USD',
};

export const repairPriceGroups: PriceGroup[] = [
  {
    heading: 'Springs & Conversions',
    items: [
      {
        name: 'Single Spring Replacement',
        range: '$325–$395',
        description: 'Torsion springs counterbalance your door’s weight. Larger or heavy-duty doors require bigger springs, which affects pricing.',
      },
      {
        name: 'Double Spring Replacement',
        range: '$395–$525',
        description: 'Torsion springs counterbalance your door’s weight. Larger or heavy-duty doors require bigger springs, which affects pricing.',
      },
      {
        name: 'Torsion Conversion',
        range: '$595–$795',
        description: 'All neccesary parts and labor to convert your existing spring system over to a smoother, more modern torsion system.',
      },
    ],
  },
  {
    heading: 'Openers & Repair',
    items: [
      {
        name: 'New Opener Installation',
        range: '$495–$750',
        description: 'Includes the new opener, professional installation, and testing to ensure smooth and safe operation. Price depends on door type and optional features.',
      },
      {
        name: 'Opener Repair',
        range: '$150–$450',
        description: 'Repairs can include motor issues, logic board replacements, or gear repair. Price varies with opener type, specific issue, and complexity.',
      },
    ],
  },
  {
    heading: 'Cables & Rollers',
    items: [
      {
        name: 'Full Hardware Refresh',
        range: '$395-495',
        description: 'This package includes replacement of Rollers, Hinges, Bearings, Cables, and Drums',
      },
      {
        name: 'Cable Replacement',
        range: '$160–$200',
        description: 'Replacing cables restores smooth, balanced door operation. Price varies depending on door size and cable type.',
      },
      {
        name: 'Roller Replacement',
        range: '$165–$200',
        description: 'New rollers reduce friction, minimize noise, and prevent uneven door movement. Costs depend on roller type and door size.',
      },
    ],
  },
];

export const performanceMembership = {
  /** Shown as "$49/month." */
  price: '$49/month',
  /** Member discount on openers, electronics, and specialty parts */
  discount: '25%',
};
