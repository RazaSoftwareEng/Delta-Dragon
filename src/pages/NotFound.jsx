import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <section className="notfound">
      <div className="container">
        <span className="notfound__code">404</span>
        <h1>Page not found</h1>
        <p className="lead">The page you're looking for doesn't exist or has been moved.</p>
        <div className="hero__actions">
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
          <Link to="/services" className="btn btn--ghost">
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
