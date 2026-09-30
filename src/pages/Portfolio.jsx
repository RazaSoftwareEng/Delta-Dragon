import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import CTA from '../components/CTA.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import mark from '../assets/logo-mark.png'
import { projects } from '../data/site.js'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function Portfolio() {
  usePageTitle('Portfolio')
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work"
        text="A few of the projects we've designed and built."
        crumbs={[{ label: 'Portfolio' }]}
      />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                className={`filters__btn ${active === c ? 'is-active' : ''}`}
                aria-pressed={active === c}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid--3">
            {visible.map((p) => (
              <article key={p.title} className="project">
                {/* TODO: replace placeholder thumb with a real project screenshot */}
                <div className="project__thumb">
                  <img src={mark} alt="" />
                </div>
                <div className="project__body">
                  <span className="tag">{p.category}</span>
                  <h3>{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
