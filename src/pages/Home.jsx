import Hero from '../components/Hero/Hero.jsx'
import TrustBar from '../components/TrustBar/TrustBar.jsx'
import Services from '../components/Services/Services.jsx'
import HowItWorks from '../components/HowItWorks/HowItWorks.jsx'
import Pricing from '../components/Pricing/Pricing.jsx'
import BeforeAfter from '../components/BeforeAfter/BeforeAfter.jsx'
import Reviews from '../components/Reviews/Reviews.jsx'
import About from '../components/About/About.jsx'
import ServiceAreas from '../components/ServiceAreas/ServiceAreas.jsx'
import FAQ from '../components/FAQ/FAQ.jsx'
import FinalCTA from '../components/FinalCTA/FinalCTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Pricing />
      <BeforeAfter />
      <Reviews />
      <About />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
    </>
  )
}
