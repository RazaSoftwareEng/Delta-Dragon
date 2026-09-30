import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { navLinks, servicePath, services } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  const closeAll = () => {
    setOpen(false)
    setSubOpen(false)
  }

  useEffect(() => {
    closeAll()
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeAll()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Hover only applies to a real mouse; touch uses the chevron button instead.
  const hover = (value) => (e) => e.pointerType === 'mouse' && setSubOpen(value)

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-nav" className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) =>
            link.to === '/services' ? (
              <div
                key={link.to}
                className={`nav-item ${subOpen ? 'is-open' : ''}`}
                onPointerEnter={hover(true)}
                onPointerLeave={hover(false)}
                onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setSubOpen(false)}
              >
                <NavLink to={link.to} onClick={closeAll}>
                  {link.label}
                </NavLink>
                <button
                  className="nav-item__toggle"
                  aria-label={subOpen ? 'Hide services menu' : 'Show services menu'}
                  aria-expanded={subOpen}
                  aria-controls="services-menu"
                  onClick={() => setSubOpen((o) => !o)}
                >
                  <Icon name="chevron" size={16} />
                </button>

                <div id="services-menu" className="dropdown">
                  <ul className="dropdown__panel">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <NavLink to={servicePath(s.slug)} onClick={closeAll}>
                          <span className="dropdown__icon">
                            <Icon name={s.icon} size={18} />
                          </span>
                          {s.title}
                        </NavLink>
                      </li>
                    ))}
                    <li className="dropdown__all">
                      <Link to="/services" onClick={closeAll}>
                        View all services <Icon name="arrow" size={16} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ),
          )}
          <Link to="/contact" className="btn btn--primary btn--sm">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
