import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiExternalLink, FiMail, FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const techTags = ['Agentic AI', 'RAG', 'LLM Integration', 'React', 'TypeScript', 'Node.js']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient blob */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_#10b981_0%,_#06b6d4_40%,_#8b5cf6_70%,_transparent_100%)] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block mb-2">Applied AI</span>
              <span className="block text-primary mb-6">Engineer</span>
            </h1>

            {/* Typing animation */}
            <div className="text-xl md:text-3xl text-text-secondary mb-6 h-10">
              <span className="text-primary font-mono mr-2">&gt;</span>
              <TypeAnimation
                sequence={[
                  'Agentic AI & RAG Systems',
                  2000,
                  'Multimodal LLM Integration',
                  2000,
                  'Full Stack AI Products',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <span className="animate-pulse">_</span>
            </div>

            {/* Description */}
            <p className="text-text-secondary max-w-lg text-base md:text-lg mb-8 mx-auto lg:mx-0">
              Two production AI products shipped from zero to launch.
              Over six years of enterprise delivery at GM and Infosys/AT&T.
            </p>

            {/* Tech tags */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {techTags.map(tag => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="px-4 py-2 rounded-full border border-border bg-bg-card text-sm text-text-secondary"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-8">
              <a
                href={`${import.meta.env.BASE_URL}Evan_Kim-Resume.pdf`}
                download
                className="group relative flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-emerald-400 text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.4),_0_0_50px_rgba(16,185,129,0.15)] hover:scale-[1.02]"
              >
                <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2"><FiDownload /> Download CV</span>
              </a>
              <a
                href="#portfolio"
                className="group relative flex items-center gap-2 px-8 py-3.5 rounded-xl border border-primary/50 text-primary text-sm font-semibold transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(16,185,129,0.3),_0_0_40px_rgba(16,185,129,0.1)] hover:bg-primary/5"
              >
                <span className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">View Projects <FiExternalLink /></span>
              </a>
              <a
                href="#contact"
                className="group relative flex items-center gap-2 px-8 py-3.5 rounded-xl border border-primary/50 text-primary text-sm font-semibold transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(16,185,129,0.3),_0_0_40px_rgba(16,185,129,0.1)] hover:bg-primary/5"
              >
                <span className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">Contact <FiMail /></span>
              </a>
            </div>

            {/* Social icons - glowing */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/dkim2435"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-border/60 bg-bg-card/50 text-text-secondary hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-primary/5 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ekim0120"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-border/60 bg-bg-card/50 text-text-secondary hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-primary/5 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/40 to-cyan-500/40 blur-2xl opacity-60" />
              <video
                src={`${import.meta.env.BASE_URL}Evan_TV_OFF.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl object-cover object-top border-2 border-primary/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
