import PageHeader from '../components/PageHeader.jsx'
import CTA from '../components/CTA.jsx'
import { site } from '../data/site.js'

const values = [
  { title: 'Custom, not templated', text: 'Every site is built around your business and goals.' },
  { title: 'User first', text: 'Clear, fast, accessible experiences on every device.' },
  { title: 'Built to last', text: 'Clean code and ongoing support after launch.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`About ${site.name}`}
        text="We're a web design and development team helping businesses build a stronger presence online."
      />
      <section className="section">
        <div className="container grid grid--3">
          {values.map((v) => (
            <div key={v.title} className="card">
              <h3>{v.title}</h3>
              <p className="muted">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
