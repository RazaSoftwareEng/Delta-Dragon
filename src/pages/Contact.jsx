import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { services, site } from '../data/site.js'

const initial = { name: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: send to a backend / form service (EmailJS, Formspree, own API)
    console.log('Contact form:', form)
    setSent(true)
    setForm(initial)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        text="Fill in the form and we'll get back to you shortly."
      />
      <section className="section">
        <div className="container contact">
          <form className="form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={onChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={onChange} required />
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
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                required
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
            {sent && <p className="form__success">Thanks! We'll be in touch soon.</p>}
          </form>

          <aside className="card">
            <h3>Reach us directly</h3>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            {site.phone && <p>{site.phone}</p>}
            {site.address && <p className="muted">{site.address}</p>}
          </aside>
        </div>
      </section>
    </>
  )
}
