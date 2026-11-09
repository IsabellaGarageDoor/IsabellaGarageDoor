// Main navigation, rendered by both the desktop menu and the mobile drawer.
// Items the owner has hidden for now (new door installation, performance
// membership, pricing) stay out of the menu but their pages still exist.

export interface NavLink {
  label: string;
  href: string;
}
export interface NavGroup {
  label: string;
  children: NavLink[];
}
export type NavItem = NavLink | NavGroup;

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    children: [
      { label: 'Broken Springs', href: '/services/broken-springs' },
      { label: 'Door Repair', href: '/services/door-repair' },
      { label: 'Opener Repair', href: '/services/opener-repair' },
      { label: 'New Opener Installation', href: '/services/new-opener-installation' },
      { label: 'Maintenance', href: '/services/maintenance' },
      { label: 'All Services', href: '/services/services' },
    ],
  },
  {
    label: 'Homeowner Tools',
    children: [
      { label: 'EasyEstimate™', href: '/homeowner-tools/easy-estimate' },
      { label: 'DoorDiagnosis™', href: '/homeowner-tools/door-diagnosis' },
      { label: 'SpringStatus™', href: '/homeowner-tools/spring-status' },
      { label: 'AskAbel™', href: '/homeowner-tools/ask-abel-ai-assistant' },
    ],
  },
  {
    label: 'About',
    children: [
      { label: 'Why Choose Us', href: '/about/why-choose-isabella-garage-door' },
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Testimonials', href: '/about/testimonials' },
      { label: 'Gallery', href: '/about/gallery-isabella-garage-door' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Learning Center', href: '/resources/learning-center' },
      { label: 'FAQs', href: '/resources/faq' },
      { label: 'Warranty', href: '/resources/warranty' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/services' },
  { label: 'Estimate', href: '/homeowner-tools/easy-estimate' },
  { label: 'Testimonials', href: '/about/testimonials' },
  { label: 'About', href: '/about/our-story' },
  { label: 'Learning Center', href: '/resources/learning-center' },
  { label: 'Book Online', href: '/booking' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms of Service', href: '/legal/terms-of-service' },
];
