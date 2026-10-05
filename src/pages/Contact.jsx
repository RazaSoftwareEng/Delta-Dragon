import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'
import SelectField from '../components/SelectField.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { process as processStages, servicePath, services, site } from '../data/site.js'

const initial = { name: '', email: '', phone: '', service: '', message: '' }

const serviceOptions = services.map((s) => ({ value: s.title, label: s.title }))

// What a useful first message contains. Advice for the visitor rather than a
// claim about the business, and it mirrors what the form actually asks for.
const helpful = [
  'What your business does, and who you serve',
  'What you want the website to achieve for you',
  'Any launch date or deadline you are working towards',
  'Examples of sites you like the look or feel of',
]

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
        text="Tell us what you are trying to achieve and we will come back with honest advice on what it will take."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section">
        <div className="container contact">
          {/* ---------- the form ---------- */}
          <form className="form card" onSubmit={onSubmit}>
            <div className="form__head">
              <span className="eyebrow">Request a quote</span>
              <h2>Tell us about the project</h2>
              <p className="muted">
                Name, email and message are required — everything else helps us
                give you a more useful answer.
              </p>
            </div>

            <div className="form__row">
              <label className="field">
                <span className="field__label">Name</span>
                <input
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </label>
              <label className="field">
                <span className="field__label">Email</span>
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
              <label className="field">
                <span className="field__label">
                  Phone <span className="field__opt">Optional</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={onChange}
                />
              </label>
              <SelectField
                id="service"
                label="Service"
                name="service"
                optional
                placeholder="Select a service"
                value={form.service}
                onChange={onChange}
                options={serviceOptions}
              />
            </div>

            <label className="field">
              <span className="field__label">Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us a little about your project…"
                value={form.message}
                onChange={onChange}
                required
              />
            </label>

            <div className="form__actions">
              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                {status !== 'sending' && <Icon name="arrow" size={16} />}
              </button>
            </div>

            <div aria-live="polite">
              {status === 'sent' && (
                <p className="form__note form__note--ok">
                  <Icon name="check" size={18} />
                  <span>
                    Thanks — your message has been sent. We'll be in touch soon.
                  </span>
                </p>
              )}
              {status === 'error' && (
                <p className="form__note form__note--error">
                  <Icon name="mail" size={18} />
                  <span>
                    Sorry, the message couldn't be sent. Please email us at{' '}
                    <a href={`mailto:${site.email}`}>{site.email}</a>.
                  </span>
                </p>
              )}
            </div>
          </form>

          {/* ---------- direct contact ---------- */}
          <aside className="contact__aside">
            <div className="contact__panel">
              <span className="eyebrow">Direct contact</span>
              <h2>Prefer to skip the form?</h2>
              <p className="contact__blurb">
                Email us directly and we will pick it up from there.
              </p>

              <ul className="contact__list">
                <li>
                  <span className="contact__ico">
                    <Icon name="mail" size={18} />
                  </span>
                  <span className="contact__body">
                    <span className="contact__kicker">Email</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </span>
                </li>

                {site.phone && (
                  <li>
                    <span className="contact__ico">
                      <Icon name="phone" size={18} />
                    </span>
                    <span className="contact__body">
                      <span className="contact__kicker">Phone</span>
                      <a href={`tel:${site.phone}`}>{site.phone}</a>
                    </span>
                  </li>
                )}

                {site.address && (
                  <li>
                    <span className="contact__ico">
                      <Icon name="pin" size={18} />
                    </span>
                    <span className="contact__body">
                      <span className="contact__kicker">Office</span>
                      <span className="contact__text">{site.address}</span>
                    </span>
                  </li>
                )}

                {site.hours && (
                  <li>
                    <span className="contact__ico">
                      <Icon name="clock" size={18} />
                    </span>
                    <span className="contact__body">
                      <span className="contact__kicker">Hours</span>
                      <span className="contact__text">{site.hours}</span>
                    </span>
                  </li>
                )}
              </ul>

              <div className="contact__divider" role="presentation" />

              <span className="contact__kicker">What we can help with</span>
              <ul className="contact__svc">
                {services.map((s, i) => (
                  <li key={s.slug}>
                    <Link to={servicePath(s.slug)}>
                      <span className="contact__svcnum" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {s.title}
                      <Icon name="arrow" size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- what to include ---------- */}
      <section className="section section--alt">
        <div className="container contact__prep">
          <div className="contact__prep-head">
            <span className="eyebrow">Before you write</span>
            <h2>Four things that get you a sharper answer</h2>
            <p className="lead">
              The more of these you can share, the more specific our first reply
              will be.
            </p>
          </div>

          <ul className="contact__prep-list">
            {helpful.map((h, i) => (
              <li key={h}>
                <span className="contact__prepnum" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p>{h}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- what happens next ---------- */}
      <section className="section">
        <div className="container contact__next">
          <div className="contact__nextintro">
            <span className="eyebrow">After you send this</span>
            <h2>What happens next</h2>
            <p className="lead">
              No obligation and no hard sell. If we are not the right fit for
              your project we will say so — and point you somewhere better if we
              can.
            </p>
          </div>

          <ol className="contact__timeline">
            {processStages.map((p) => (
              <li className="contact__stage" key={p.step}>
                <span className="contact__stagenum" aria-hidden="true">
                  {p.step}
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}