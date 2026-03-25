import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiBriefcase } from 'react-icons/fi'

const stats = [
  { icon: <FiBriefcase size={24} />, value: '6+', label: 'YEARS EXPERIENCE', desc: 'Enterprise delivery' },
  { icon: <FiCode size={24} />, value: '3', label: 'AI PRODUCTS', desc: 'Live in production' },
  { icon: <FiCpu size={24} />, value: '2.7K+', label: 'USERS SERVED', desc: 'Across enterprise & AI products' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">About</span> Me
          </h2>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto"
        >
          {stats.map(stat => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-bg-card hover:border-primary/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15),_0_0_40px_rgba(16,185,129,0.08)] hover:scale-[1.02] transition-all duration-300 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-primary">{stat.icon}</div>
                <span className="text-3xl font-bold text-text-primary">{stat.value}</span>
              </div>
              <h3 className="text-xs font-semibold tracking-wider text-text-secondary mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-text-secondary/70">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-text-secondary leading-relaxed">
            After six years shipping enterprise systems at GM and Infosys/AT&T,
            I moved into applied AI by building three production products from scratch.
            I work across the full stack, from prompt design and multi-agent orchestration
            to serverless infra and CI/CD, and I own every layer without hand-offs.
            All three are live, deployed, and actively maintained.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
