import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { services, site } from '../data/site.js'

const initial = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  usePageTitle('Contact')
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Submits to Netlify Forms (matches the hidden "contact" form in index.html).
  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('sent')
      setForm(initial)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        text="Fill in the form and we'll get back to you shortly."
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="section">
        <div className="container contact">
          <form className="form card" onSubmit={onSubmit}>
            <h2>Request a quote</h2>
            <div className="form__row">
              <label>
                Name *
                <input
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </label>
              <label>
                Email *
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </label>
            </div>
            <div className="form__row">
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={onChange}
                />
              </label>
              <label>
                Service
                <select name="service" value={form.service} onChange={onChange}>
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              Message *
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us a little about your project…"
                value={form.message}
                onChange={onChange}
                required
              />
            </label>
            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <div aria-live="polite">
              {status === 'sent' && (
                <p className="form__note form__note--ok">
                  Thanks! Your message has been sent — we'll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="form__note form__note--error">
                  Sorry, the message couldn't be sent. Please email us at{' '}
                  <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
            </div>
          </form>

          <aside className="contact__info">
            <div className="card info">
              <span className="icon-badge">
                <Icon name="mail" />
              </span>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
            {site.phone && (
              <div className="card info">
                <span className="icon-badge">
                  <Icon name="phone" />
                </span>
                <div>
                  <h3>Phone</h3>
                  <a href={`tel:${site.phone}`}>{site.phone}</a>
                </div>
              </div>
            )}
            {site.address && (
              <div className="card info">
                <span className="icon-badge">
                  <Icon name="pin" />
                </span>
                <div>
                  <h3>Office</h3>
                  <p className="muted">{site.address}</p>
                </div>
              </div>
            )}
            {site.hours && (
              <div className="card info">
                <span className="icon-badge">
                  <Icon name="clock" />
                </span>
                <div>
                  <h3>Hours</h3>
                  <p className="muted">{site.hours}</p>
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
