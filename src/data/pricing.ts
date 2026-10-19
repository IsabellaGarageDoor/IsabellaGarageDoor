// ============================================================================
// PRICING — the one place to change prices on the whole site.
//
// Edit the numbers in `prices` below, save, and every page that shows that
// price updates on the next build: the pricing page, booking page, FAQs,
// service pages, coupons, blog posts, and the EasyEstimate™ tool.
//
// Each price is stored once as a number (or a { low, high } range). The site
// formats it for wherever it is shown, e.g. 325–395 appears as
//   "$325–$395" on the pricing page, "$325 - $395" in EasyEstimate™.
//
// Prices that two parts of the site currently show DIFFERENTLY are kept as
// separate entries (marked "differs" below) so nothing changed silently when
// this file was created. Make them the same here if they should match.
// ============================================================================

export interface Range {
  low: number;
  high: number;
}
const r = (low: number, high: number): Range => ({ low, high });

export const prices = {
  // ---- Visit & membership --------------------------------------------------
  /** Flat-rate service call (waived when parts/repairs are done) */
  serviceCallFee: 80,
  /** Performance Membership, per month (page is "coming soon") */
  membershipMonthly: 49,
  /** Membership discount on openers, electronics and specialty parts, in percent */
  memberDiscountPercent: 25,

  // ---- Springs & conversions -----------------------------------------------
  /** One torsion spring (pricing page + EasyEstimate™ agree) */
  springSingle: r(325, 395),
  /** Two torsion springs — pricing page */
  springDouble: r(395, 525),
  /** Two torsion springs — EasyEstimate™ and the spring-cost blog post (differs from springDouble) */
  springDoubleEstimate: r(395, 595),
  /** Extension spring, one — EasyEstimate™ */
  extensionSpringSingle: r(250, 350),
  /** Extension springs, two — EasyEstimate™ and the spring-cost blog post */
  extensionSpringDouble: r(275, 375),
  /** Converting to torsion — pricing page */
  torsionConversion: r(595, 795),

  // ---- Openers ---------------------------------------------------------------
  /** New opener installation (pricing page + EasyEstimate™ agree) */
  openerInstall: r(495, 750),
  /** Opener repair (pricing page + EasyEstimate™ agree) */
  openerRepair: r(150, 450),
  openerRemoteRepair: r(150, 250),
  openerMotorRepair: r(150, 350),
  openerDiagnostic: r(150, 200),

  // ---- Cables, rollers, tracks, hardware -----------------------------------
  cableReplacement: r(160, 200),
  cableReattach: r(140, 200),
  cableBalance: r(120, 300),
  rollerReplacement: r(165, 200),
  rollerFew: r(130, 170),
  rollerSingleDoor: r(160, 200),
  rollerDoubleDoor: r(160, 200),
  rollerMovementRepair: r(150, 200),
  rollerTrackRealign: r(150, 500),
  trackBent: r(250, 375),
  trackAlign: r(150, 250),
  trackEmergency: r(300, 600),
  hardwareRefresh: r(395, 495),
  maintenance: r(120, 150),

  // ---- Coupons (src/components/editable-sections/Coupons.astro) -------------
  couponTuneUp: 79,
  couponOpenerSavingsA: 50,
  couponOpenerSavingsB: 75,
  couponTorsionSavings: 25,
  couponLocalHero: 20,
} as const;

export type PriceKey = keyof typeof prices;

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

const money = (n: number) => `$${n.toLocaleString('en-US')}`;
const isRange = (v: unknown): v is Range => typeof v === 'object' && v !== null && 'low' in v;

/**
 * How a price is written:
 *  - 'range'  → $325–$395   (pricing page, FAQs, service pages)  [default]
 *  - 'spaced' → $325 - $395 (EasyEstimate™ results)
 *  - 'prose'  → $275 – $375 (blog posts)
 *  - 'low'    → $325        (just the starting price)
 */
export type PriceStyle = 'range' | 'spaced' | 'prose' | 'low';

export function priceText(key: PriceKey, style: PriceStyle = 'range'): string {
  const v = prices[key];
  if (!isRange(v)) return money(v);
  switch (style) {
    case 'spaced':
      return `${money(v.low)} - ${money(v.high)}`;
    case 'prose':
      return `${money(v.low)} – ${money(v.high)}`;
    case 'low':
      return money(v.low);
    default:
      return `${money(v.low)}–${money(v.high)}`;
  }
}

/** Markdown token replacement: "{{price:springSingle}}" or "{{price:springSingle:prose}}" */
export function replacePriceTokens(text: string): string {
  return text.replace(/\{\{price:([A-Za-z0-9]+)(?::([a-z]+))?\}\}/g, (match, key: string, style?: string) => {
    if (!(key in prices)) throw new Error(`Unknown price in text: ${match}`);
    return priceText(key as PriceKey, (style as PriceStyle) ?? 'prose');
  });
}

// ---------------------------------------------------------------------------
// Service call fee, membership
// ---------------------------------------------------------------------------

export const serviceCallFee = {
  display: money(prices.serviceCallFee),
  /** Value used in structured data */
  schemaPrice: prices.serviceCallFee.toFixed(2),
  currency: 'USD',
};

export const performanceMembership = {
  /** Shown as "$49/month." */
  price: `${money(prices.membershipMonthly)}/month`,
  /** Member discount on openers, electronics, and specialty parts */
  discount: `${prices.memberDiscountPercent}%`,
};

// ---------------------------------------------------------------------------
// Pricing page (src/pages/resources/pricing.astro)
// ---------------------------------------------------------------------------

export interface PriceItem {
  name: string;
  /** Price range as displayed, e.g. "$325–$395" */
  range: string;
  description: string;
}

export interface PriceGroup {
  heading: string;
  items: PriceItem[];
}

export const repairPriceGroups: PriceGroup[] = [
  {
    heading: 'Springs & Conversions',
    items: [
      {
        name: 'Single Spring Replacement',
        range: priceText('springSingle'),
        description: 'Torsion springs counterbalance your door’s weight. Larger or heavy-duty doors require bigger springs, which affects pricing.',
      },
      {
        name: 'Double Spring Replacement',
        range: priceText('springDouble'),
        description: 'Torsion springs counterbalance your door’s weight. Larger or heavy-duty doors require bigger springs, which affects pricing.',
      },
      {
        name: 'Torsion Conversion',
        range: priceText('torsionConversion'),
        description: 'All neccesary parts and labor to convert your existing spring system over to a smoother, more modern torsion system.',
      },
    ],
  },
  {
    heading: 'Openers & Repair',
    items: [
      {
        name: 'New Opener Installation',
        range: priceText('openerInstall'),
        description: 'Includes the new opener, professional installation, and testing to ensure smooth and safe operation. Price depends on door type and optional features.',
      },
      {
        name: 'Opener Repair',
        range: priceText('openerRepair'),
        description: 'Repairs can include motor issues, logic board replacements, or gear repair. Price varies with opener type, specific issue, and complexity.',
      },
    ],
  },
  {
    heading: 'Cables & Rollers',
    items: [
      {
        name: 'Full Hardware Refresh',
        range: priceText('hardwareRefresh'),
        description: 'This package includes replacement of Rollers, Hinges, Bearings, Cables, and Drums',
      },
      {
        name: 'Cable Replacement',
        range: priceText('cableReplacement'),
        description: 'Replacing cables restores smooth, balanced door operation. Price varies depending on door size and cable type.',
      },
      {
        name: 'Roller Replacement',
        range: priceText('rollerReplacement'),
        description: 'New rollers reduce friction, minimize noise, and prevent uneven door movement. Costs depend on roller type and door size.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// EasyEstimate™ (src/pages/homeowner-tools/easy-estimate.astro)
// Each id is a step in the tool's question flow; the tool shows the price and
// service name for the step the customer lands on. Do not rename the ids.
// ---------------------------------------------------------------------------

const estimateSteps: Record<string, { price: PriceKey; service: string }> = {
  'pricing-torsion-1': { price: 'springSingle', service: 'Torsion Spring Repair (1 spring)' },
  'pricing-torsion-2': { price: 'springDoubleEstimate', service: 'Torsion Spring Repair (2 springs)' },
  'pricing-extension-1': { price: 'extensionSpringSingle', service: 'Extension Spring Repair (1 spring)' },
  'pricing-extension-2': { price: 'extensionSpringDouble', service: 'Extension Spring Repair (2 springs)' },
  'pricing-remote': { price: 'openerRemoteRepair', service: 'Remote/Wall Button Repair' },
  'pricing-motor': { price: 'openerMotorRepair', service: 'Motor Drive Repair' },
  'pricing-open-close': { price: 'openerRepair', service: 'Opener Operation Repair' },
  'pricing-light': { price: 'openerDiagnostic', service: 'Opener Diagnostic & Repair' },
  'pricing-replacement': { price: 'openerInstall', service: 'Complete Opener Replacement' },
  'pricing-few-rollers': { price: 'rollerFew', service: 'Roller Replacement (1-2 rollers)' },
  'pricing-single-door': { price: 'rollerSingleDoor', service: 'Roller Replacement (Single Door)' },
  'pricing-double-door': { price: 'rollerDoubleDoor', service: 'Roller Replacement (Double Door)' },
  'pricing-jerky': { price: 'rollerMovementRepair', service: 'Roller Repair (Movement Issues)' },
  'pricing-wear': { price: 'rollerReplacement', service: 'Roller Replacement (Worn)' },
  'pricing-off-track': { price: 'rollerTrackRealign', service: 'Roller & Track Realignment' },
  'pricing-frayed': { price: 'cableReplacement', service: 'Cable Replacement (Frayed)' },
  'pricing-rusty': { price: 'cableReplacement', service: 'Cable Replacement (Corroded)' },
  'pricing-off-drum': { price: 'cableReattach', service: 'Cable Reattachment & Repair' },
  'pricing-uneven': { price: 'cableBalance', service: 'Cable & Balance Adjustment' },
  'pricing-bent': { price: 'trackBent', service: 'Track Repair (Bent/Damaged)' },
  'pricing-rubbing': { price: 'trackAlign', service: 'Track Alignment' },
  'pricing-completely-off': { price: 'trackEmergency', service: 'Track Realignment (Emergency)' },
  'maintenance-pricing': { price: 'maintenance', service: 'Maintenance & Inspection' },
};

/** The object the EasyEstimate™ script reads: { [stepId]: { price: '$325 - $395', service: '…' } } */
export const estimatorPricing: Record<string, { price: string; service: string }> = Object.fromEntries(
  Object.entries(estimateSteps).map(([id, step]) => [id, { price: priceText(step.price, 'spaced'), service: step.service }])
);
