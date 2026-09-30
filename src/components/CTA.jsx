import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="section">
      <div className="container cta">
        <div>
          <h2>Have a project in mind?</h2>
          <p>Tell us what you need and we'll get back with a plan and a quote.</p>
        </div>
        <Link to="/contact" className="btn btn--light">
          Start a Project
        </Link>
      </div>
    </section>
  )
}
