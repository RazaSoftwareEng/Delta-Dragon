import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="logo">
          <span className="logo__mark">Δ</span>
          {site.name}
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary btn--sm">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
