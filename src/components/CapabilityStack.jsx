import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import mark from '../assets/logo-mark.png'
import { servicePath, services, site } from '../data/site.js'

// The hero's visual column: a layered stack of real services from services.js,
// anchored by the brand mark. No invented metrics — only content the site owns.
const featured = services.slice(0, 4)

export default function CapabilityStack() {
  return (
    <div className="stack">
      <span className="stack__glow" aria-hidden="true" />

      <div className="stack__head">
        <span className="stack__mark">
          <img src={mark} alt="" />
        </span>
        <span className="stack__headtext">
          <span className="stack__title">What we build</span>
          <span className="stack__sub">Design · Build · Grow</span>
        </span>
      </div>

      <ul className="stack__list">
        {featured.map((s, i) => (
          <li key={s.slug} style={{ '--i': i }}>
            <Link to={servicePath(s.slug)} className="stack__item">
              <span className="stack__ico">
                <Icon name={s.icon} size={18} />
              </span>
              <span className="stack__body">
                <span className="stack__name">{s.title}</span>
                <span className="stack__desc">{s.summary}</span>
              </span>
              <span className="stack__arrow">
                <Icon name="arrow" size={15} />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/services" className="stack__all">
        <span>
          All services
          <em>web design, development, e-commerce, SEO, marketing and branding</em>
        </span>
        <Icon name="arrow" size={16} />
      </Link>

      <span className="stack__badge stack__badge--a" aria-hidden="true">
        <Icon name="check" size={14} />
        You own the result
      </span>
      <span className="stack__badge stack__badge--b" aria-hidden="true">
        <Icon name="clock" size={14} />
        Launch in weeks
      </span>
    </div>
  )
}