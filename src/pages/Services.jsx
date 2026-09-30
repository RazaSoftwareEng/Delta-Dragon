import PageHeader from '../components/PageHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { services } from '../data/site.js'

export default function Services() {
  usePageTitle('Services')

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your business needs online"
        text="From design to development to marketing — one team, end to end."
        crumbs={[{ label: 'Services' }]}
      />
      <section className="section">
        <div className="container grid grid--3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <SectionHead center eyebrow="How we work" title="Our process" />
          <ProcessSteps />
        </div>
      </section>
      <CTA />
    </>
  )
}
