import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ParticlesBg from './components/ParticlesBg'

function App() {
  return (
    <div className="min-h-screen bg-bg-dark relative overflow-x-hidden">
      {/* Particles fixed behind everything */}
      <div className="fixed inset-0 z-0">
        <ParticlesBg />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-border"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-text-secondary">
              &copy; {new Date().getFullYear()} Evan Kim. Built with React & Tailwind CSS.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}

export default App
