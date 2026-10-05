import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { stats } from '../data/site.js'

// Counts up to the target value the first time the number scrolls into view.
function useCountUp(target, decimals = 0) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      setValue(target)
      return
    }

    let frame = 0
    const duration = 1400
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setValue(target * eased)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target])

  return [ref, value.toFixed(decimals)]
}

// 1 -> "01", 9 -> "09"
const pad = (n) => String(n + 1).padStart(2, '0')

function Stat({ index, value, suffix = '', decimals = 0, label, text }) {
  const [ref, display] = useCountUp(value, decimals)

  return (
    <Reveal as="li" className="stat" delay={index * 90}>
      <span className="stat__index" aria-hidden="true">
        {pad(index)}
      </span>
      <span className="stat__value" ref={ref}>
        {display}
        <span className="stat__suffix">{suffix}</span>
      </span>
      <span className="stat__rule" aria-hidden="true" />
      <strong className="stat__label">{label}</strong>
      <span className="stat__text">{text}</span>
    </Reveal>
  )
}

export default function StatBand() {
  return (
    <section className="band" aria-labelledby="band-title">
      <div className="container band__inner">
        <header className="band__head">
          <h2 className="band__eyebrow" id="band-title">
            <span className="band__eyemark" aria-hidden="true" />
            At a glance
          </h2>
          <p className="band__intro">
            A snapshot of the studio — the experience we bring, the work we ship, and the standard we hold
            every launch to.
          </p>
        </header>

        <ul className="band__grid">
          {stats.map((s, i) => (
            <Stat key={s.label} index={i} {...s} />
          ))}
        </ul>
      </div>
    </section>
  )
}
