import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import mark from '../assets/logo-mark.png'
import { highlights, reasons, services, site } from '../data/site.js'

export default function Home() {
  usePageTitle()

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">Web Design & Development</span>
            <h1>{site.tagline}</h1>
            <p className="lead">
              Our web development and design services offer customized solutions to create visually
              appealing, user-friendly, and functional websites.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Get a Quote <Icon name="arrow" size={18} />
              </Link>
              <Link to="/services" className="btn btn--ghost">
                Our Services
              </Link>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__panel">
              <div className="hero__disc">
                <img src={mark} alt="" width="248" height="301" />
              </div>
              <span className="hero__chip hero__chip--a">
                <Icon name="design" size={16} /> Custom design
              </span>
              <span className="hero__chip hero__chip--b">
                <Icon name="device" size={16} /> Responsive
              </span>
              <span className="hero__chip hero__chip--c">
                <Icon name="search" size={16} /> SEO-ready
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="container strip__grid">
          {highlights.map((h) => (
            <div key={h.title} className="strip__item">
              <Icon name={h.icon} size={26} />
              <div>
                <strong>{h.title}</strong>
                <span>{h.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="What we do"
            title="Services built around your business"
            text="Everything you need to launch, grow and maintain a strong presence online."
          />
          <div className="grid grid--3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split">
          <Reveal>
            <SectionHead
              eyebrow="Why Delta Dragon"
              title="A partner that cares how your site performs"
              text="We don't just hand over a design. We build websites that are easy to use, easy to find and easy to grow."
            />
            <Link to="/about" className="btn btn--ghost">
              About us
            </Link>
          </Reveal>
          <Reveal as="ul" className="checklist" delay={100}>
            {reasons.map((r) => (
              <li key={r}>
                <span className="checklist__tick">
                  <Icon name="check" size={16} />
                </span>
                {r}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="How we work"
            title="A simple, transparent process"
            text="Four clear steps from first conversation to launch."
          />
          <ProcessSteps />
        </div>
      </section>

      <CTA />
    </>
  )
}
