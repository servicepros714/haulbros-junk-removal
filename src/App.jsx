import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import MobileCallBar from './components/MobileCallBar/MobileCallBar.jsx'
import MinimalHeader from './components/MinimalHeader/MinimalHeader.jsx'
import SchemaLD from './components/SchemaLD.jsx'
import Home from './pages/Home.jsx'
import GetEstimate from './pages/GetEstimate/GetEstimate.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isEstimate = pathname.startsWith('/get-estimate')

  useEffect(() => {
    document.body.classList.toggle('noCallBar', isEstimate)
  }, [isEstimate])

  return (
    <>
      <SchemaLD />
      <ScrollManager />
      {isEstimate ? <MinimalHeader /> : <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-estimate" element={<GetEstimate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isEstimate && <Footer />}
      {!isEstimate && <MobileCallBar />}
    </>
  )
}
