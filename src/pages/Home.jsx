import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import CapabilityStack from '../components/CapabilityStack.jsx'
import StatBand from '../components/StatBand.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FaqList from '../components/FaqList.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { differentiators, heroPromises, highlights, services, site } from '../data/site.js'

export default function Home() {
  usePageTitle()

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <span className="hero__glow" aria-hidden="true" />
        <span className="hero__grid" aria-hidden="true" />

        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="pill">
              <span className="pill__dot" aria-hidden="true" />
              Web design &amp; development studio
            </span>

            <h1>{site.tagline}</h1>

            <p className="lead">
              We design and build fast, professional websites that give your business a credible online
              presence — and bring you better enquiries.
            </p>

            <div className="hero__foot">
              <div className="hero__actions">
                <Link to="/contact" className="btn btn--gold">
                  Get a Free Quote <Icon name="arrow" size={18} />
                </Link>
                <Link to="/services" className="btn btn--outline-light">
                  Explore Services
                </Link>
              </div>

              <ul className="promises">
                {heroPromises.map((p) => (
                  <li key={p.text}>
                    <span className="promises__tick">
                      <Icon name={p.icon} size={13} />
                    </span>
                    {p.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <CapabilityStack />
        </div>
      </section>

      {/* Numbers — floats up to overlap the hero */}
      <StatBand />

      {/* The four standards every project meets */}
      <section className="strip" aria-labelledby="strip-title">
        <div className="container">
          <Reveal>
            <div className="strip__head">
              <div className="strip__headline">
                <span className="eyebrow">The standard we hold</span>
                <h2 id="strip-title">Every project meets the same four standards</h2>
              </div>
              <p className="strip__intro">
                Whatever the size of the site or the industry you work in, these four apply to
                everything we build.
              </p>
            </div>
          </Reveal>

          <ul className="strip__grid">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 90} className="strip__item">
                <span className="strip__icon" aria-hidden="true">
                  <Icon name={h.icon} size={24} />
                </span>
                <strong className="strip__title">{h.title}</strong>
                <span className="strip__text">{h.text}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="What we do"
              title="Services built around your business"
              text="Everything you need to launch, grow and maintain a strong presence online."
              action={
                <Link to="/services" className="btn btn--ghost">
                  View all services <Icon name="arrow" size={16} />
                </Link>
              }
            />
          </Reveal>

          <div className="grid grid--3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Delta Dragon */}
      <section className="section section--ink" id="why">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Why Delta Dragon"
              title="A partner that cares how your site performs"
              text="We don't just hand over a design. We build websites that are easy to use, easy to find and easy to grow — then we stick around to help."
              action={
                <Link to="/about" className="btn btn--outline-light">
                  More about us <Icon name="arrow" size={16} />
                </Link>
              }
            />
          </Reveal>

          <ul className="why__grid">
            {differentiators.map((d, i) => (
              <Reveal as="li" key={d.title} delay={(i % 2) * 90} className="why__item">
                <span className="why__top">
                  <span className="why__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="icon-badge why__badge">
                    <Icon name={d.icon} size={24} />
                  </span>
                </span>
                <h3>{d.title}</h3>
                <p className="muted">{d.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="How we work"
              title="A simple, transparent process"
              text="Four clear steps from first conversation to launch — you always know what happens next."
              center
              action={
                <Link to="/contact" className="btn btn--ghost">
                  Start with step one <Icon name="arrow" size={16} />
                </Link>
              }
            />
          </Reveal>
          <ProcessSteps />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Client feedback"
              title="What working with us is like"
              text="We would rather show you than tell you."
            />
          </Reveal>
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container faq">
          <Reveal>
            <div className="faq__intro">
              <SectionHead
                eyebrow="Questions"
                title="Common questions"
                text="A few things people ask before getting in touch. If yours is not here, just ask."
                className="section__head--flush"
              />
              <Link to="/contact" className="btn btn--ghost faq__cta">
                Ask us anything <Icon name="arrow" size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FaqList />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}