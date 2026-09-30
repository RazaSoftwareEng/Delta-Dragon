import PageHeader from '../components/PageHeader.jsx'
import CTA from '../components/CTA.jsx'
import { projects } from '../data/site.js'

export default function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work"
        text="A few of the projects we've designed and built."
      />
      <section className="section">
        <div className="container grid grid--3">
          {projects.map((p) => (
            <article key={p.title} className="project">
              <div className="project__thumb" />
              <div className="project__body">
                <span className="eyebrow">{p.category}</span>
                <h3>{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
