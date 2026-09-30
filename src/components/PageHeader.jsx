import { Link } from 'react-router-dom'

export default function PageHeader({ eyebrow, title, text, crumbs = [], children }) {
  return (
    <section className="page-header">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span aria-hidden="true">/</span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
        {children && <div className="page-header__actions">{children}</div>}
      </div>
    </section>
  )
}
