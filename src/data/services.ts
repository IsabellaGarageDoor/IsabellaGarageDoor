// Service pages (src/pages/services/*).

export interface Service {
  name: string;
  href: string;
  /** Icon name from components/Icon.astro */
  icon: string;
}

export const services: Service[] = [
  { name: 'Broken Spring Replacement', href: '/services/broken-springs', icon: 'spring' },
  { name: 'General Door Repair', href: '/services/door-repair', icon: 'wrench' },
  { name: 'New Door Installation', href: '/services/new-door-installation', icon: 'door' },
  { name: 'Opener Repair', href: '/services/opener-repair', icon: 'opener' },
  { name: 'Opener Installation', href: '/services/new-opener-installation', icon: 'zap' },
  { name: 'Maintenance & Safety', href: '/services/maintenance', icon: 'shield' },
];

export const tools = [
  { name: 'EasyEstimate™', href: '/homeowner-tools/easy-estimate#estimate-form', blurb: 'Instant ballpark pricing', logo: '/photos/easy-estimate-logo.avif' },
  { name: 'DoorDiagnosis™', href: '/homeowner-tools/door-diagnosis#troubleshooting', blurb: 'Find the likely cause', logo: '/photos/door-diagnosis-logo.avif' },
  { name: 'SpringStatus™', href: '/homeowner-tools/spring-status#springstatus', blurb: 'Check your spring life', logo: '/photos/spring-status-logo.avif' },
  { name: 'AskAbel™', href: '/homeowner-tools/ask-abel-ai-assistant', blurb: '24/7 AI garage door help', logo: '/photos/askabel-robot-head-logo.avif' },
];
