// Central place for site content — edit here, pages update automatically.

export const site = {
  name: 'Delta Dragon',
  legalName: 'Web-Design Co., L.L.C.',
  domain: 'deltadragon.org',
  tagline: 'Websites that look sharp and work harder.',
  // TODO: replace with real contact details
  email: 'info@deltadragon.org',
  phone: '',
  address: '',
  hours: '',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export { services, servicePath } from './services.js'

export const highlights = [
  { icon: 'design', title: 'Custom design', text: 'No templates — built around your brand.' },
  { icon: 'device', title: 'Fully responsive', text: 'Looks right on every screen size.' },
  { icon: 'search', title: 'SEO-ready', text: 'Structured so search engines understand it.' },
  { icon: 'support', title: 'Ongoing support', text: 'We stay with you after launch.' },
]

export const reasons = [
  'One team for design, development and marketing',
  'Clear scope, timeline and pricing before we start',
  'Clean, maintainable code you fully own',
  'Fast-loading pages built for real users',
]

// Short commitments shown under the hero buttons. Keep these true — they are promises.
export const heroPromises = [
  { icon: 'check', text: 'Fixed scope & pricing' },
  { icon: 'shield', text: 'Clean code you own' },
  { icon: 'support', text: 'Support after launch' },
]

// Homepage "why us" cards.
export const differentiators = [
  {
    icon: 'users',
    title: 'One team, end to end',
    text: 'Design, development and marketing under one roof — no hand-offs between agencies or lost-in-translation briefs.',
  },
  {
    icon: 'check',
    title: 'Fixed scope and pricing',
    text: 'You approve a clear scope, timeline and price before work begins. No hourly surprises partway through the project.',
  },
  {
    icon: 'code',
    title: 'Clean code you own',
    text: 'Documented, maintainable code handed over in full. No lock-in, no proprietary black box holding your site together.',
  },
  {
    icon: 'zap',
    title: 'Built for speed',
    text: 'Lean front-ends and clean structure so pages load fast for real visitors and search engines from day one.',
  },
]

// TODO: replace with real numbers before launch — the figures below are placeholders.
export const stats = [
  { value: 120, suffix: '+', label: 'Projects delivered', text: 'Launched across industries and business sizes.' },
  { value: 10, suffix: '+', label: 'Years of experience', text: 'Designing and building for the web every day.' },
  { value: 98, suffix: '%', label: 'Client satisfaction', text: 'Measured with clients after every launch.' },
  { value: 1.2, suffix: 's', decimals: 1, label: 'Average load time', text: 'On the sites we design and build.' },
]

// TODO: replace with real, attributable reviews before launch — placeholders below.
export const testimonials = [
  {
    quote:
      'They rebuilt our site from scratch and the difference was immediate. We started getting enquiries within the first week.',
    name: 'Client Name',
    role: 'Business Owner',
    initials: 'CN',
  },
  {
    quote:
      'Clear scope, no surprises on cost, and updates at every stage. The first agency experience we have actually enjoyed.',
    name: 'Client Name',
    role: 'Marketing Manager',
    initials: 'CM',
  },
  {
    quote:
      'Our old site was slow and hard to update. Now it is fast, modern and we can add pages ourselves without calling anyone.',
    name: 'Client Name',
    role: 'Operations Lead',
    initials: 'OL',
  },
]

// Homepage FAQ. Good for search visibility and for answering objections before the contact form.
export const homeFaqs = [
  {
    q: 'How much does a website cost?',
    a: 'It depends on scope, features and how much content is ready to go. After our first conversation you get a fixed quote with a clear breakdown — no hourly surprises later.',
  },
  {
    q: 'How long will my website take?',
    a: 'Most business websites go live in four to eight weeks. We confirm a timeline before we start and keep you updated at every stage of the project.',
  },
  {
    q: 'Do I need to prepare content and images?',
    a: 'Not everything. We can structure your copy, advise on photography and work with whatever you already have, so you are never blocked waiting on assets.',
  },
  {
    q: 'Who owns the website when it is finished?',
    a: 'You do — code, content and accounts are handed over to you in full. We will also show your team how to update the site themselves.',
  },
  {
    q: 'What happens after launch?',
    a: 'We stay available for support, updates and improvements. Your site is not a one-time project for us.',
  },
]

// TODO: replace with real projects
// TODO: replace with real projects before launch. Every entry below is
// invented placeholder content — the titles, years, summaries and client
// names are all made up. Swap them for real work (with a real screenshot in
// place of the logo mark) or the portfolio should come down entirely.
// `services` should name slugs from services.js so the card links resolve.
export const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    category: 'Web Design',
    year: '2025',
    client: 'Placeholder Client',
    summary:
      'Placeholder summary describing the design engagement — what the client needed and what we built.',
    services: ['web-design'],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    category: 'E-Commerce',
    year: '2025',
    client: 'Placeholder Client',
    summary:
      'Placeholder summary describing the store build — catalogue, checkout and the trading flow behind it.',
    services: ['ecommerce'],
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    category: 'Web Development',
    year: '2024',
    client: 'Placeholder Client',
    summary:
      'Placeholder summary describing the build — the platform, the integrations and what shipped.',
    services: ['web-development'],
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    category: 'Branding',
    year: '2024',
    client: 'Placeholder Client',
    summary:
      'Placeholder summary describing the identity work and how it carried into the site itself.',
    services: ['branding', 'web-design'],
  },
  {
    slug: 'project-five',
    title: 'Project Five',
    category: 'SEO',
    year: '2024',
    client: 'Placeholder Client',
    summary:
      'Placeholder summary describing the organic search work — the audit and what changed afterwards.',
    services: ['seo'],
  },
  {
    slug: 'project-six',
    title: 'Project Six',
    category: 'Web Design',
    year: '2023',
    client: 'Placeholder Client',
    summary:
      'Placeholder summary describing the design engagement and the result it was measured on.',
    services: ['web-design', 'web-development'],
  },
]

export const process = [
  { step: '01', title: 'Discover', text: 'We learn your business, audience and goals.' },
  { step: '02', title: 'Design', text: 'Wireframes and visuals tailored to your brand.' },
  { step: '03', title: 'Develop', text: 'Clean, responsive code that performs.' },
  { step: '04', title: 'Launch', text: 'Testing, deployment and ongoing support.' },
]
