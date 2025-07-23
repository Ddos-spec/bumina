import SocialWidget from './components/SocialWidget';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <SocialWidget /> {/* <-- UBAH INI */}
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
