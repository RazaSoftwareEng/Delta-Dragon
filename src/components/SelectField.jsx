import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

/**
 * Custom listbox used for the contact form's service field.
 *
 * Why not just style the native <select>? Because its popup is drawn by the OS,
 * so the options cannot be given the field's own typography and spacing. This
 * stays deliberately plain for that reason — plain rows, one highlight tint and
 * a check on the chosen one.
 *
 * Why the native <select> comes back on touch: on a phone the OS picker is the
 * better control — it gets the platform scroll, platform search and platform
 * drag behaviour for free. Hand-building a list there would be a downgrade, so
 * coarse pointers get the real <select> and only fine pointers get this.
 *
 * Follows the ARIA 1.2 combobox-with-listbox pattern: focus stays on the
 * trigger at all times and the highlighted option is conveyed through
 * aria-activedescendant rather than by moving focus into the popup.
 */
export default function SelectField({
  id,
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select a service',
  optional = false,
}) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const rootRef = useRef(null)
  const listRef = useRef(null)
  // Type-ahead buffer, cleared by the timeout below so "b" then "r" searches
  // for "br" while a single "b" repeated quickly still cycles the b's.
  const typeRef = useRef({ text: '', at: 0 })

  const listId = `${id}-list`
  const labelId = `${id}-label`
  const empty = value === ''
  const selectedIndex = options.findIndex((o) => o.value === value)

  const fine =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches

  // Pointer + close-on-outside-click, only while the popup is actually open.
  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open])

  // Keep the highlighted row inside the scroll area when arrowing through a
  // long list. block:'nearest' means this does nothing while it is already
  // visible, so it cannot jerk the page on every keypress.
  useEffect(() => {
    if (!open || active < 0) return
    listRef.current
      ?.querySelectorAll('[role="option"]')
      [active]?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  const commit = (i) => {
    const opt = options[i]
    if (!opt) return
    onChange({ target: { name, value: opt.value } })
    setOpen(false)
    setActive(-1)
    rootRef.current?.querySelector('.select__trigger')?.focus()
  }

  const openAt = (i) => {
    setOpen(true)
    // Opening onto the current value keeps the popup where the eye already is;
    // with nothing chosen yet, start at the top rather than pre-selecting a
    // service the visitor never asked for.
    setActive(i)
  }

  const step = (from, dir) => {
    const n = options.length
    const base = from < 0 ? (dir > 0 ? -1 : n) : from
    return (base + dir + n) % n
  }

  const typeAhead = (char) => {
    const now = Date.now()
    const buf =
      now - typeRef.current.at > 700 ? char : typeRef.current.text + char
    typeRef.current = { text: buf, at: now }

    const q = buf.toLowerCase()
    const from = active >= 0 ? active + 1 : 0
    // Wrap once, then fall back to any match so a wrong guess still helps.
    const order = [...options.slice(from), ...options.slice(0, from)]
    const hit = order.findIndex((o) => o.label.toLowerCase().startsWith(q))
    if (hit < 0) return
    const i = (from + hit) % options.length
    if (!open) openAt(i)
    else setActive(i)
  }

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        open ? setActive(step(active, 1)) : openAt(selectedIndex < 0 ? 0 : selectedIndex)
        break
      case 'ArrowUp':
        e.preventDefault()
        open ? setActive(step(active, -1)) : openAt(selectedIndex < 0 ? options.length - 1 : selectedIndex)
        break
      case 'Home':
        if (!open) return
        e.preventDefault()
        setActive(0)
        break
      case 'End':
        if (!open) return
        e.preventDefault()
        setActive(options.length - 1)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        // Closed: open. Open: commit whatever is highlighted.
        if (!open) openAt(selectedIndex < 0 ? 0 : selectedIndex)
        else if (active >= 0) commit(active)
        break
      case 'Escape':
        if (!open) return
        e.preventDefault()
        setOpen(false)
        setActive(-1)
        break
      case 'Tab':
        setOpen(false)
        setActive(-1)
        break
      default:
        // Single printable characters start a type-ahead search. Anything with
        // a modifier is a browser shortcut (cmd+R, ctrl+F) and must pass through.
        if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
          typeAhead(e.key.toLowerCase())
        }
    }
  }

  // ---- touch fallback: the real <select> ----
  if (!fine) {
    return (
      <div className="field">
        <span className="field__label" id={labelId}>
          {label} {optional && <span className="field__opt">Optional</span>}
        </span>
        <span className="field__select" data-empty={empty ? '' : undefined}>
          <select
            id={id}
            name={name}
            aria-labelledby={labelId}
            value={value}
            onChange={onChange}
          >
            <option value="">{placeholder}</option>
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <Icon name="chevron" size={16} className="field__select-chev" />
        </span>
      </div>
    )
  }

  // ---- fine pointer: the listbox ----
  return (
    <div className="field">
      <span className="field__label" id={labelId}>
        {label} {optional && <span className="field__opt">Optional</span>}
      </span>

      <div
        className="select"
        ref={rootRef}
        data-empty={empty ? '' : undefined}
        data-open={open ? '' : undefined}
      >
        <button
          type="button"
          id={id}
          className="select__trigger"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId}
          aria-activedescendant={open && active >= 0 ? `${id}-opt-${active}` : undefined}
          onClick={() => (open ? setOpen(false) : openAt(selectedIndex < 0 ? 0 : selectedIndex))}
          onKeyDown={onKeyDown}
        >
          <span className="select__value">{empty ? placeholder : value}</span>
          <Icon name="chevron" size={16} className="select__chev" />
        </button>

        {/* Carries the form value for Netlify. Without it the popup would be
            pure decoration, since a <button> is not a form control. */}
        <input type="hidden" name={name} value={value} />

        {open && (
          <ul
            className="select__list"
            id={listId}
            role="listbox"
            ref={listRef}
            aria-labelledby={labelId}
          >
            {options.map((o, i) => {
              const isSel = o.value === value
              return (
                <li
                  key={o.value}
                  id={`${id}-opt-${i}`}
                  role="option"
                  aria-selected={isSel}
                  className="select__option"
                  data-active={i === active ? '' : undefined}
                  data-selected={isSel ? '' : undefined}
                  // pointerdown, not click: on touch-adjacent pointers the
                  // outside-click handler would otherwise see a document event
                  // first and close the popup before the click landed.
                  onPointerDown={(e) => {
                    e.preventDefault()
                    commit(i)
                  }}
                  onPointerEnter={() => setActive(i)}
                >
                  {o.label}
                  <Icon name="check" size={15} className="select__check" />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}