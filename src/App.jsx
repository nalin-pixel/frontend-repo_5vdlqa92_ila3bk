import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Features from './components/Features'
import Outcomes from './components/Outcomes'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <Outcomes />
      <Pricing />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default App
