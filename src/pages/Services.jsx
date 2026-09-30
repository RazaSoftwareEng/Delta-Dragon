import PageHeader from '../components/PageHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTA from '../components/CTA.jsx'
import { services } from '../data/site.js'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your business needs online"
        text="From design to development to marketing — one team, end to end."
      />
      <section className="section">
        <div className="container grid grid--3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
