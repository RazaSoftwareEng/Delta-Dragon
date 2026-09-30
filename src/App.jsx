import { Navigate, Routes, Route, useParams } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { servicePath, services } from './data/site.js'

// Old service URLs like /web-design redirect to /services/web-design
function LegacyServiceRedirect() {
  const { slug } = useParams()
  return services.some((s) => s.slug === slug) ? (
    <Navigate to={servicePath(slug)} replace />
  ) : (
    <NotFound />
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path=":slug" element={<LegacyServiceRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
