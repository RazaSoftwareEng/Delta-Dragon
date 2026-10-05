import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { services } from '../data/site.js'

// Engagement commitments. Each restates a promise already made in the data
// files (heroPromises, reasons) rather than introducing a new claim.
const engagement = [
  {
    icon: 'users',
    title: 'One team, start to finish',
    text: 'Design, development and launch handled by the same people, so nothing is lost between suppliers.',
  },
  {
    icon: 'check',
    title: 'Scope and price agreed first',
    text: 'You approve a clear scope, timeline and price before any work begins — no hourly surprises later.',
  },
  {
    icon: 'code',
    title: 'You own everything',
    text: 'Documented code and final assets handed over in full. No lock-in and no proprietary black box.',
  },
  {
    icon: 'support',
    title: 'Support after launch',
    text: 'Updates, fixes and improvements once your site is live, so it keeps working for your customers.',
  },
]

export default function Services() {
  usePageTitle('Services')

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your business needs online"
        text="From design to development to marketing — one team, end to end."
        crumbs={[{ label: 'Services' }]}
      >
        <Link to="/contact" className="btn btn--gold">
          Get a quote <Icon name="arrow" size={16} />
        </Link>
        <Link to="/portfolio" className="btn btn--outline-light">
          See our work
        </Link>
      </PageHeader>

      {/* Index rail — the whole offer listed up front so a visitor can scan
          it in one line instead of scrolling six cards to find out what
          you do. Anchor targets get scroll-margin in CSS to clear the nav. */}
      <nav className="svc-index" aria-label="Services on this page">
        <div className="container svc-index__inner">
          <span className="svc-index__label">On this page</span>
          <ul className="svc-index__list">
            {services.map((s, i) => (
              <li key={s.slug}>
                <a className="svc-index__link" href={`#${s.slug}`}>
                  <span className="svc-index__num">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* The services themselves */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="What we do"
              title="Six services, one team"
              text="Take a single service or combine them — most projects use two or three, and each one works on its own."
              action={
                <Link to="/contact" className="btn btn--ghost">
                  Not sure what you need? <Icon name="arrow" size={16} />
                </Link>
              }
            />
          </Reveal>

          <ul className="grid grid--3 svc-grid">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 80}>
                <ServiceCard service={s} index={i} id={s.slug} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Ink band breaks the run of cream sections and states what holds
          true whichever services you pick. */}
      <section className="section section--ink">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Working together"
              title="The same four commitments, every project"
              text="Whichever services you choose, these apply from the first conversation through to launch day and after it."
            />
          </Reveal>

          <ul className="svc-commit">
            {engagement.map((e, i) => (
              <Reveal as="li" key={e.title} delay={i * 80}>
                <div className="svc-commit__item">
                  <span className="svc-commit__badge">
                    <Icon name={e.icon} />
                  </span>
                  <h3>{e.title}</h3>
                  <p className="muted">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            center
            eyebrow="How we work"
            title="Our process"
            text="The same four stages run on every project, whether it is one landing page or a complete rebuild."
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