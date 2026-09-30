import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { servicePath } from '../data/site.js'

export default function ServiceCard({ service }) {
  return (
    <Link to={servicePath(service.slug)} className="card card--link service-card">
      <span className="icon-badge">
        <Icon name={service.icon} />
      </span>
      <h3>{service.title}</h3>
      <p className="muted">{service.summary}</p>
      <span className="card__more">
        Learn more <Icon name="arrow" size={16} />
      </span>
    </Link>
  )
}
