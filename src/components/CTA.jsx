import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Tell us what you need and we'll get back with a plan and a quote.</p>
          </div>
          <Link to="/contact" className="btn btn--gold">
            Start a Project <Icon name="arrow" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
