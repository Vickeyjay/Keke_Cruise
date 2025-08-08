import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Hero from './components/Hero/hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/about'
import Services from './components/Services/services'
import Why from './components/Why/why'
import Carousel from './components/Carousel/carousel'
import Faq from './components/FAQ/faq'
import Comm from './components/Comm/comm'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Why />
      <Carousel />
      <Faq />
      <Comm />
      <Footer />
    </>
  )
}

export default App
