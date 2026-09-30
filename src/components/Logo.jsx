import { Link } from 'react-router-dom'
import mark from '../assets/logo-mark.png'
import { site } from '../data/site.js'

export default function Logo({ variant = 'light' }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label={`${site.name} home`}>
      <span className="logo__mark">
        <img src={mark} alt="" width="248" height="301" />
      </span>
      <span className="logo__text">
        <span className="logo__name">{site.name}</span>
        <span className="logo__sub">{site.legalName}</span>
      </span>
    </Link>
  )
}
