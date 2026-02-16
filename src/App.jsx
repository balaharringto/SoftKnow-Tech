import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesGrid />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
