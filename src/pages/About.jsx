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
    text: 'Every site is built around your business and goals.',
  },
  {
    icon: 'device',
    title: 'User first',
    text: 'Clear, fast, accessible experiences on every device.',
  },
  {
    icon: 'support',
    title: 'Built to last',
    text: 'Clean code and ongoing support after launch.',
  },
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
      />

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

      <section className="section section--alt">
        <div className="container">
          <SectionHead center eyebrow="What we value" title="How we approach every project" />
          <div className="grid grid--3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card">
                  <span className="icon-badge">
                    <Icon name={v.icon} />
                  </span>
                  <h3>{v.title}</h3>
                  <p className="muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="How we work" title="Our process" />
          <ProcessSteps />
        </div>
      </section>

      <CTA />
    </>
  )
}
