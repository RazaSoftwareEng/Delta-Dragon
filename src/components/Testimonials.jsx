import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  return (
    <div className="quotes">
      {testimonials.map((t, i) => (
        <Reveal as="figure" className="quote" key={t.name + i} delay={i * 90}>
          <header className="quote__head">
            <span className="quote__mark" aria-hidden="true">
              &ldquo;
            </span>
            <div className="quote__stars" role="img" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }, (_, s) => (
                <Icon key={s} name="star" size={15} />
              ))}
            </div>
          </header>

          <blockquote>{t.quote}</blockquote>

          <figcaption className="quote__by">
            <span className="quote__avatar" aria-hidden="true">
              {t.initials}
            </span>
            <span className="quote__who">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </span>
          </figcaption>
        </Reveal>
      ))}
    </div>
  )
}