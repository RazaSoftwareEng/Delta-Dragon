import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'
import CTA from '../components/CTA.jsx'
import { process, services, site } from '../data/site.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Web Design & Development</span>
          <h1>{site.tagline}</h1>
          <p className="lead">
            Our web development and design services offer customized solutions to create visually
            appealing, user-friendly, and functional websites.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Get a Quote
            </Link>
            <Link to="/services" className="btn btn--ghost">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What we do</span>
            <h2>Services</h2>
          </div>
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">How we work</span>
            <h2>Our Process</h2>
          </div>
          <div className="grid grid--4">
            {process.map((p) => (
              <div key={p.step} className="card">
                <span className="step">{p.step}</span>
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
