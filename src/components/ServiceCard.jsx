import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <Link to={`/${service.slug}`} className="card card--link">
      <h3>{service.title}</h3>
      <p className="muted">{service.summary}</p>
      <span className="card__more">Learn more →</span>
    </Link>
  )
}
