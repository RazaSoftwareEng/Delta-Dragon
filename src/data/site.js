// Central place for site content — edit here, pages update automatically.

export const site = {
  name: 'Delta Dragon',
  domain: 'deltadragon.org',
  tagline: 'Websites that look sharp and work harder.',
  // TODO: replace with real contact details
  email: 'info@deltadragon.org',
  phone: '',
  address: '',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    slug: 'web-design',
    title: 'Web Design',
    summary:
      'Customized solutions to create visually appealing, user-friendly, and functional websites.',
    points: ['UI/UX design', 'Responsive layouts', 'Brand-aligned visuals', 'Landing pages'],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    summary: 'Fast, secure and scalable websites and web apps built on modern stacks.',
    points: ['React front-ends', 'Custom back-ends & APIs', 'CMS integration', 'Performance tuning'],
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce',
    summary: 'Online stores designed to convert, from product page to checkout.',
    points: ['Store setup', 'Payment integration', 'Product catalogs', 'Conversion optimization'],
  },
  {
    slug: 'seo',
    title: 'SEO',
    summary: 'Get found by the right customers with technical and on-page optimization.',
    points: ['Site audits', 'Keyword research', 'On-page SEO', 'Reporting'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    summary: 'Campaigns across search and social that turn attention into leads.',
    points: ['Social media', 'Paid ads', 'Content strategy', 'Analytics'],
  },
  {
    slug: 'branding',
    title: 'Branding',
    summary: 'Logos and identity systems that make your business recognizable.',
    points: ['Logo design', 'Brand guidelines', 'Marketing collateral', 'Visual identity'],
  },
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
