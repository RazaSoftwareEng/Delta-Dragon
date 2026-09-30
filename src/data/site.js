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

// TODO: replace with real projects
export const projects = [
  { title: 'Project One', category: 'Web Design' },
  { title: 'Project Two', category: 'E-Commerce' },
  { title: 'Project Three', category: 'Web Development' },
  { title: 'Project Four', category: 'Branding' },
  { title: 'Project Five', category: 'SEO' },
  { title: 'Project Six', category: 'Web Design' },
]

export const process = [
  { step: '01', title: 'Discover', text: 'We learn your business, audience and goals.' },
  { step: '02', title: 'Design', text: 'Wireframes and visuals tailored to your brand.' },
  { step: '03', title: 'Develop', text: 'Clean, responsive code that performs.' },
  { step: '04', title: 'Launch', text: 'Testing, deployment and ongoing support.' },
]
