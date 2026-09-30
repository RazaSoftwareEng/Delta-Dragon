import Reveal from './Reveal.jsx'
import { process } from '../data/site.js'

export default function ProcessSteps() {
  return (
    <ol className="steps">
      {process.map((p, i) => (
        <Reveal as="li" key={p.step} className="steps__item" delay={i * 80}>
          <span className="steps__num">{p.step}</span>
          <h3>{p.title}</h3>
          <p className="muted">{p.text}</p>
        </Reveal>
      ))}
    </ol>
  )
}
