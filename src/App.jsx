import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeroSection from './components/Hero-Section/HeroSection'
import Clients from './components/Clients/Clients'
import About from './components/About/About'
import Mission from './components/Mission/Mission'
import Values from './components/Values/Values'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import MarqueComp from './components/MarqueComp/MarqueComp'
import Solutions from './components/Solutions/Solutions'
import Summary from './components/Summary/Summary'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <Clients />
      <About />
      <Mission />
      <Values />
      <Services />
      <Testimonials />
      <MarqueComp />
      <Solutions />
      <hr className="w-[80%] m-auto border-t border-gray-300" />
      <Summary />
      <Footer />
    </>
  )
}

export default App
