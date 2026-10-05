import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { servicePath } from '../data/site.js'

export default function ServiceCard({ service, index, id }) {
  const highlights = service.features?.slice(0, 3) ?? []

  return (
    <Link
      to={servicePath(service.slug)}
      id={id}
      className="card card--link service-card"
    >
      <span className="service-card__glow" aria-hidden="true" />

      {/* Index on the left, icon on the right — same header row as the
          "why us" plates, so every card on the site reads as one set. */}
      <div className="service-card__top">
        {typeof index === 'number' && (
          <span className="service-card__num" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
        <span className="icon-badge">
          <Icon name={service.icon} size={24} />
        </span>
      </div>

      <h3>{service.title}</h3>
      <p className="muted">{service.summary}</p>

      {highlights.length > 0 && (
        <>
          <span className="service-card__label">What&rsquo;s included</span>
          <ul className="service-card__list">
            {highlights.map((f) => (
              <li key={f.title}>
                <span className="service-card__tick">
                  <Icon name="check" size={13} />
                </span>
                {f.title}
              </li>
            ))}
          </ul>
        </>
      )}

      <span className="card__more">
        Learn more <Icon name="arrow" size={16} />
      </span>
    </Link>
  )
}