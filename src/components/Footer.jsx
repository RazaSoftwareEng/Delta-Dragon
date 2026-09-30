import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { navLinks, servicePath, services, site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="dark" />
          <p>
            Customized web design and development that makes your business look sharp and work
            harder online.
          </p>
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
                <Link to={servicePath(s.slug)}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.phone && (
              <li>
                <Icon name="phone" size={18} />
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </li>
            )}
            {site.address && (
              <li>
                <Icon name="pin" size={18} />
                <span>{site.address}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {site.name} {site.legalName} All rights reserved.
        </span>
        <span>{site.domain}</span>
      </div>
    </footer>
  )
}
