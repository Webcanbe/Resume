import { FooterOneData } from '@/interface';
import { MobileMenuItem } from '../mobile-menu/MobileMenu';

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: './about' },
      { id: 'services', label: 'Services', href: './services' },
      { id: 'team', label: 'Our Team', href: './team' },
      { id: 'career', label: 'Career', href: './career' },
      { id: 'our-manifesto', label: 'Our Manifesto', href: './our-manifesto' },
      { id: 'why-choose-us', label: 'Why Choose Us', href: './why-choose-us' },
      { id: 'customers', label: 'Customers', href: './customer' },
      { id: 'use-cases', label: 'Use Cases', href: './use-case' },
      { id: 'case-studies', label: 'Case Studies', href: './case-study' },
      { id: 'testimonials', label: 'Testimonials', href: './testimonial' },
    ],
  },

  {
    id: 'platform',
    title: 'Platform',
    submenu: [
      { id: 'features', label: 'Features', href: './features' },
      { id: 'integrations', label: 'Integrations', href: './integration' },
      { id: 'process', label: 'Process', href: './process' },
      { id: 'analytics', label: 'Analytics', href: './analytics' },
      { id: 'security', label: 'Security', href: './security' },
      { id: 'whitepaper', label: 'Whitepaper', href: './whitepaper' },
      { id: 'build-overview', label: 'Build overview', href: './signup' },
      { id: 'brandkit', label: 'Brandkit', href: './brandkit' },
      { id: 'download', label: 'Download', href: './download' },
    ],
  },

  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'tutorial', label: 'Tutorial', href: './tutorial' },
      { id: 'faq', label: 'FAQ', href: './faq' },
      { id: 'glossary', label: 'Glossary', href: './glossary' },
    ],
  },

  {
    id: 'plans-support',
    title: 'Plans & Support',
    submenu: [
      { id: 'pricing', label: 'Pricing', href: './pricing' },
      { id: 'login', label: 'Login', href: './login' },
      { id: 'create-account', label: 'Create Account', href: './signup' },
      { id: 'referral-program', label: 'Referral Program', href: './referral-program' },
      { id: 'affiliate', label: 'Affiliate', href: './affiliates' },
      { id: 'affiliate-policy', label: 'Affiliate Policy', href: './affiliate-policy' },
      { id: 'terms-conditions', label: 'Terms & Conditions', href: './terms-conditions' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: './privacy-policy' },
      { id: 'refund-policy', label: 'Refund Policy', href: './refund-policy' },
      { id: 'gdpr', label: 'GDPR', href: './gdpr' },
      { id: 'legal', label: 'Legal', href: './legal' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Support', href: '/support' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];
