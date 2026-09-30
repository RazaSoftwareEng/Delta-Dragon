import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import CTA from '../components/CTA.jsx'
import NotFound from './NotFound.jsx'
import { services } from '../data/site.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <NotFound />

  return (
    <>
      <PageHeader eyebrow="Service" title={service.title} text={service.summary} />
      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>What's included</h2>
          </div>
          <div className="grid grid--4">
            {service.points.map((point) => (
              <div key={point} className="card">
                <h3>{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
