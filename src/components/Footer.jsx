import { Link } from 'react-router-dom'
import { navLinks, services, site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link to="/" className="logo">
            <span className="logo__mark">Δ</span>
            {site.name}
          </Link>
          <p className="muted">{site.tagline}</p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.phone && <li>{site.phone}</li>}
            {site.address && <li>{site.address}</li>}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
