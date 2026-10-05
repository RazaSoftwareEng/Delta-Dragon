import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import mark from '../assets/logo-mark.png'
import { reasons, site } from '../data/site.js'

const values = [
  {
    icon: 'design',
    title: 'Custom, not templated',
    text: 'Every site is built around your business and goals, not dropped into a template and adjusted.',
  },
  {
    icon: 'device',
    title: 'User first',
    text: 'Clear, fast, accessible experiences — designed for the phone in someone’s hand as much as the desktop.',
  },
  {
    icon: 'support',
    title: 'Built to last',
    text: 'Clean, documented code and ongoing support, so the site keeps working long after launch day.',
  },
]

// What the team actually works with day to day. Every entry is drawn from a
// capability already listed under the services in data/services.js.
const capabilities = [
  { icon: 'design', title: 'UI & UX design', text: 'Wireframes, mockups and design systems built around how people browse.' },
  { icon: 'code', title: 'Front-end engineering', text: 'Modern React builds that stay quick and maintainable as they grow.' },
  { icon: 'device', title: 'Responsive layout', text: 'Genuinely designed per breakpoint, not one layout squeezed smaller.' },
  { icon: 'zap', title: 'CMS integration', text: 'A content management system so you can edit your own site afterwards.' },
  { icon: 'cart', title: 'E-commerce builds', text: 'Stores, payments and catalogues set up to convert and to be manageable.' },
  { icon: 'search', title: 'Technical SEO', text: 'Structure, speed and metadata handled properly from the first build.' },
  { icon: 'shield', title: 'Accessibility', text: 'Keyboard support, contrast and semantics considered from the outset.' },
  { icon: 'chart', title: 'Analytics & reporting', text: 'Tracking set up so you can see what your site is actually doing.' },
]

export default function About() {
  usePageTitle('About')

  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`About ${site.name}`}
        text="We're a web design and development team helping businesses build a stronger presence online."
        crumbs={[{ label: 'About' }]}
      >
        <Link to="/services" className="btn btn--gold">
          See what we do <Icon name="arrow" size={16} />
        </Link>
        <Link to="/contact" className="btn btn--outline-light">
          Start a project
        </Link>
      </PageHeader>

      {/* Who we are */}
      <section className="section">
        <div className="container split">
          <Reveal className="about__visual">
            <img src={mark} alt={`${site.name} logo`} width="248" height="301" />
          </Reveal>
          <Reveal delay={100}>
            <SectionHead
              eyebrow="Who we are"
              title="Design and engineering under one roof"
              text="Our web development and design services offer customized solutions to create visually appealing, user-friendly, and functional websites."
            />
            <p className="about__body">
              We are a small team, and that is deliberate. The people who scope
              your project are the same people who design and build it, so
              nothing gets lost in translation or handed to a junior after the
              pitch. You get one point of contact and a straight answer when
              something needs explaining.
            </p>
            <ul className="checklist">
              {reasons.map((r) => (
                <li key={r}>
                  <span className="checklist__tick">
                    <Icon name="check" size={16} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* What we value — numbered plates, matching the card language elsewhere */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHead
              center
              eyebrow="What we value"
              title="How we approach every project"
              text="Three principles decide how we design, what we build and what we hand over."
            />
          </Reveal>

          <ul className="about__values">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 80}>
                <div className="card about__value">
                  <div className="about__value-top">
                    <span className="about__value-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="icon-badge">
                      <Icon name={v.icon} />
                    </span>
                  </div>
                  <h3>{v.title}</h3>
                  <p className="muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What we work with day to day */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Capabilities"
              title="What we work with, day to day"
              text="The practical detail behind the services pages — this is the toolkit a project actually gets built with."
              action={
                <Link to="/services" className="btn btn--ghost">
                  Browse the services <Icon name="arrow" size={16} />
                </Link>
              }
            />
          </Reveal>

          <ul className="about__caps">
            {capabilities.map((c, i) => (
              <Reveal as="li" key={c.title} delay={(i % 4) * 70}>
                <div className="about__cap">
                  <span className="about__cap-ico">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <div>
                    <h3>{c.title}</h3>
                    <p className="muted">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead
            center
            eyebrow="How we work"
            title="Our process"
            text="The same four stages on every project, so you always know what is happening and what comes next."
            action={
              <Link to="/contact" className="btn btn--ghost">
                Start with step one <Icon name="arrow" size={16} />
              </Link>
            }
          />
          <ProcessSteps />
        </div>
      </section>

      <CTA />
    </>
  )
}