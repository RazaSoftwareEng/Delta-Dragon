import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import mark from '../assets/logo-mark.png'
import { projects, services, servicePath } from '../data/site.js'

// Built once outside render so filtering does not re-scan the array each keystroke
// of the category buttons, and so the "All" bucket is guaranteed to lead.
const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
const counts = categories.reduce((acc, c) => {
  acc[c] = c === 'All' ? projects.length : projects.filter((p) => p.category === c).length
  return acc
}, {})

export default function Portfolio() {
  usePageTitle('Portfolio')
  const [active, setActive] = useState('All')

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work"
        text="A few of the projects we've designed and built."
        crumbs={[{ label: 'Portfolio' }]}
      >
        <Link to="/contact" className="btn btn--gold">
          Start a project <Icon name="arrow" size={16} />
        </Link>
        <Link to="/services" className="btn btn--outline-light">
          See what we do
        </Link>
      </PageHeader>

      {/* ---------- the work ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="The work"
              title="Projects we can show you"
              text="Filter by discipline to narrow the list. Every project below ran through the same four stages, whatever the starting point."
            />
          </Reveal>

          {/* Counts live in the buttons rather than a separate strip, so a
              visitor can see where the work is concentrated before clicking. */}
          <div className="filters" role="group" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                className={`filters__btn ${active === c ? 'is-active' : ''}`}
                aria-pressed={active === c}
                onClick={() => setActive(c)}
              >
                {c}
                <span className="filters__count" aria-hidden="true">
                  {counts[c]}
                </span>
              </button>
            ))}
          </div>

          {/* Announces the result count for screen readers, since the filter
              buttons look identical once you know what they do. */}
          <p className="filters__status" role="status">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
            {active === 'All' ? '' : ` in ${active}`}
          </p>

          {visible.length > 0 ? (
            <ul className="work">
              {visible.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={(i % 3) * 70}>
                  <article className="project">
                    <div className="project__thumb">
                      {/* TODO: replace with a real project screenshot */}
                      <img src={mark} alt="" />
                      <span className="project__year">{p.year}</span>
                    </div>

                    <div className="project__body">
                      <div className="project__meta">
                        <span className="tag">{p.category}</span>
                        <span className="project__client">{p.client}</span>
                      </div>
                      <h3>{p.title}</h3>
                      <p className="muted">{p.summary}</p>

                      {/* Naming the services turns the card into a set of
                          in-context routes to the work behind it, instead of a
                          dead end. */}
                      <ul className="project__svc">
                        {p.services.map((slug) => {
                          const s = services.find((x) => x.slug === slug)
                          if (!s) return null
                          return (
                            <li key={slug}>
                              <Link to={servicePath(s.slug)}>{s.title}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          ) : (
            /* No category is currently empty, but a filter that matches nothing
               must not leave a blank gap in the page. */
            <div className="work-empty">
              <span className="work-empty__ico">
                <Icon name="search" size={22} />
              </span>
              <h3>Nothing in {active} just yet</h3>
              <p className="muted">
                We have not published a project in this category. Try another
                filter, or get in touch — we may have relevant work we can show
                you privately.
              </p>
              <button type="button" className="btn btn--ghost" onClick={() => setActive('All')}>
                Show all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ---------- the work, by service ---------- */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="By discipline"
              title="The same work, six ways"
              text="Most projects combine more than one of these. Pick the one closest to what you need and you will see how we approach it."
              action={
                <Link to="/services" className="btn btn--ghost">
                  All services <Icon name="arrow" size={16} />
                </Link>
              }
            />
          </Reveal>

          <ul className="work-svc">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 70}>
                <Link to={servicePath(s.slug)} className="work-svc__card">
                  <span className="work-svc__ico">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <h3>{s.title}</h3>
                  <p className="muted">{s.summary}</p>
                  <span className="work-svc__more">
                    Learn more <Icon name="arrow" size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- how the work gets made ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="How we work"
            title="Every project, the same four stages"
            text="Nothing on this page was delivered in a single push. This is the process each one went through."
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