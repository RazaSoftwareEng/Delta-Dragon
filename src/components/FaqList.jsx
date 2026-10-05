import { useState } from 'react'
import Icon from './Icon.jsx'
import { homeFaqs } from '../data/site.js'

export default function FaqList({ items = homeFaqs }) {
  // Single-open accordion: opening a question closes whichever one was open.
  // Index rather than question text, so duplicate copy cannot clash.
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => (event) => {
    if (event.currentTarget.open) {
      setOpenIndex(index)
    } else {
      // This item closed. Only clear state if it was the one held open —
      // otherwise we would clobber the question that just opened.
      setOpenIndex((current) => (current === index ? null : current))
    }
  }

  return (
    <div className="faq__list">
      {items.map((item, i) => (
        <details
          className="faq__item"
          key={item.q}
          open={openIndex === i}
          onToggle={handleToggle(i)}
        >
          <summary>
            <span className="faq__num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="faq__q">{item.q}</span>
            <span className="faq__chev" aria-hidden="true">
              <Icon name="chevron" size={16} />
            </span>
          </summary>
          <div className="faq__answer">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  )
}