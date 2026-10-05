import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import Reveal from '../components/Reveal.jsx'
import FaqList from '../components/FaqList.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import NotFound from './NotFound.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { servicePath, services } from '../data/site.js'

const nextSteps = [
  'Send us a short brief about your project',
  'We review it and come back with questions and ideas',
  'You receive a clear plan, timeline and quote',
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  usePageTitle(service ? service.title : 'Page not found')

  if (!service) return <NotFound />

  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <PageHeader
        eyebrow={service.title}
        title={service.headline}
        text={service.summary}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      >
        <Link to="/contact" className="btn btn--gold">
          Get a Quote <Icon name="arrow" size={18} />
        </Link>
        <Link to="/portfolio" className="btn btn--ghost-light">
          See Our Work
        </Link>
      </PageHeader>

      <section className="section">
        <div className="container detail">
          <div className="detail__main">
            <div className="prose">
              <span className="eyebrow">Overview</span>
              <h2>{service.title} that works for your business</h2>
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div>
              <SectionHead eyebrow="What's included" title="Everything you get" />
              <div className="grid grid--2">
                {service.features.map((f, i) => (
                  <Reveal key={f.title} delay={(i % 2) * 80}>
                    <div className="card feature">
                      <span className="checklist__tick">
                        <Icon name="check" size={16} />
                      </span>
                      <div>
                        <h3>{f.title}</h3>
                        <p className="muted">{f.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionHead eyebrow="Who it's for" title="A good fit if you are…" />
              <ul className="fit-list">
                {service.idealFor.map((item) => (
                  <li key={item}>
                    <Icon name="arrow" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="detail__aside">
            <div className="card card--maroon">
              <span className="icon-badge icon-badge--gold">
                <Icon name={service.icon} />
              </span>
              <h3>Need {service.title}?</h3>
              <p>Tell us about your project and get a tailored quote.</p>
              <ol className="next-steps">
                {nextSteps.map((step, i) => (
                  <li key={step}>
                    <span>{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link to="/contact" className="btn btn--gold btn--block">
                Get a Quote
              </Link>
            </div>

            <div className="card">
              <h3>Other services</h3>
              <ul className="link-list">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link to={servicePath(s.slug)}>
                      <Icon name={s.icon} size={18} />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            center
            eyebrow="Why it matters"
            title={`What ${service.title} does for your business`}
          />
          <div className="grid grid--3">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="card">
                  <span className="icon-badge">
                    <Icon name={b.icon} />
                  </span>
                  <h3>{b.title}</h3>
                  <p className="muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="How we work"
            title="A clear process from start to finish"
            text="You always know what is happening, what comes next and what we need from you."
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container faq">
          <SectionHead
            eyebrow="FAQ"
            title="Questions clients often ask"
            text="Can't see your question here? Get in touch and we'll answer it directly."
          />
          <FaqList items={service.faqs} />
        </div>
      </section>

      <CTA />
    </>
  )
}
