import { IFooterSection } from "../footer-interface/footer-links.interface";

export const footerLinks: IFooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', url: '/about' },
      { label: 'Features', url: '/features' },
      { label: 'Works', url: '/works' },
      { label: 'Career', url: '/career' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Customer Support', url: '/support' },
      { label: 'Delivery Details', url: '/delivery' },
      { label: 'Terms & Conditions', url: '/terms' },
      { label: 'Privacy Policy', url: '/privacy' },
    ],
  },
  {
    title: 'FAQ',
    links: [
      { label: 'Account', url: '/faq/account' },
      { label: 'Manage Deliveries', url: '/faq/deliveries' },
      { label: 'Orders', url: '/faq/orders' },
      { label: 'Payments', url: '/faq/payments' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Free eBooks', url: '/ebooks' },
      { label: 'Development Tutorial', url: '/tutorials' },
      { label: 'How to - Blog', url: '/blog' },
      { label: 'Youtube Playlist', url: '/youtube' },
    ],
  },
];
