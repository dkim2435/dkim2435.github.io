import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiCode, FiBriefcase, FiLayers } from 'react-icons/fi'

type Tab = 'projects' | 'experience' | 'skills'

const projects = [
  {
    title: 'Glowmi',
    subtitle: 'AI Skin Analysis Platform',
    description:
      'Multimodal AI skincare platform with selfie-based skin analysis, personalized routines, and agentic AI with RAG. Single agent orchestrates 6 tools via Gemini.',
    tech: ['React', 'Gemini API', 'Supabase', 'pgvector', 'AWS Lambda', 'MediaPipe', 'Cloudflare Pages'],
    link: 'https://glowmi.org',
    highlights: [
      'Agentic AI with 6-tool orchestration',
      'Multimodal skin analysis (Gemini 2.5 Flash)',
      'RAG pipeline with cosine similarity search',
      'Offline fallback with MediaPipe (468-point face landmarks)',
      'Serverless infra: AWS Lambda + S3 + CloudWatch',
    ],
  },
  {
    title: 'DuckType',
    subtitle: 'AI-Powered Typing Platform',
    description:
      'Multilingual typing platform serving 4 languages with AI-generated content, RPG-style Adventure Mode across 10 themed worlds, and real-time performance analytics.',
    tech: ['React', 'TypeScript', 'Claude API', 'Gemini API', 'OpenAI API', 'Supabase', 'Vercel'],
    link: 'https://ducktype.xyz',
    highlights: [
      'AI-driven Adventure Mode with boss battles',
      '4-language support (EN/KO/ZH/JP) via Claude API',
      'AI image generation (OpenAI DALL-E) for all visual assets',
      'Real-time WPM/accuracy tracking with performance analytics',
      'OAuth + Supabase auth with cloud sync',
    ],
  },
]

const experience = [
  {
    role: 'Founder & Applied AI Engineer',
    company: 'Glowmi',
    location: 'Atlanta, GA',
    period: 'Feb 2026 – Present',
    bullets: [
      'Architected an AI skincare platform from scratch with agentic AI orchestrating 6 tools via Gemini Function Calling',
      'Implemented RAG pipeline with pgvector for cosine similarity search across skincare knowledge base',
      'Designed multimodal skin analysis using Gemini 2.5 Flash with offline fallback via MediaPipe (468-point face landmarks)',
      'Deployed serverless infrastructure on AWS Lambda + S3 + CloudWatch with CI/CD via GitHub Actions',
    ],
  },
  {
    role: 'Founder & Applied AI Engineer',
    company: 'DuckType',
    location: 'Atlanta, GA',
    period: 'Feb 2026 – Present',
    bullets: [
      'Launched a multilingual typing platform with AI-generated content across 4 languages (EN/KO/ZH/JP)',
      'Integrated 3 LLM APIs (Claude, Gemini, OpenAI) for dynamic content generation and AI-driven Adventure Mode',
      'Generated all visual assets using OpenAI DALL-E, eliminating external design dependencies',
      'Shipped OAuth + Supabase auth with real-time performance analytics and cloud sync',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'General Motors',
    location: 'Roswell, GA',
    period: 'Jan 2022 – Dec 2025',
    bullets: [
      'Led Oracle-to-PostgreSQL migration of PDMS (700+ users), merging two schemas across 200+ tables and ~200 batch jobs; delivered in 14 months against 18-month timeline with zero downtime',
      'Migrated eKanban (1,000+ users) servers to Ubuntu across 2 factory environments; updated 374 batch jobs and managed integrations with 12 external systems',
      'Modernized KDMS PDA app using React and TypeScript, migrating 300+ screens for 1,000+ plant floor users',
      'Served as SME for PDMS; supported 7 GM Korea applications as part of a 4-person team',
    ],
  },
  {
    role: 'Technical Analyst / Senior Associate',
    company: 'Infosys',
    location: 'Atlanta, GA (Client: AT&T)',
    period: 'Oct 2019 – Dec 2021',
    bullets: [
      'Owned team-wide release process for AT&T deployments; led bi-weekly cross-team releases and emergency hotfix deployments',
      "Maintained AT&T's P13N (Personalization) platform using React and REST APIs, improving ad delivery reliability across millions of users",
      'Reduced incident resolution time through Splunk log analysis and root cause investigation',
      'Managed Kubernetes deployments on Azure across dev, test, and prod environments',
    ],
  },
]

const skillCategories = [
  {
    category: 'AI / LLM',
    skills: ['RAG', 'Agentic AI', 'Prompt Engineering', 'Function Calling', 'Structured Outputs', 'Vector Search', 'Embeddings', 'Anthropic API (Claude)', 'Google Gemini API', 'OpenAI API'],
  },
  {
    category: 'Frontend',
    skills: ['React 18', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend & DB',
    skills: ['Node.js', 'PostgreSQL', 'Supabase', 'pgvector', 'SQL', 'Java'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (Lambda, S3, CloudWatch)', 'GitHub Actions', 'CI/CD', 'Vercel', 'Cloudflare Pages', 'Azure', 'Linux'],
  },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('projects')

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'projects', label: 'Projects', icon: <FiCode /> },
    { key: 'experience', label: 'Experience', icon: <FiBriefcase /> },
    { key: 'skills', label: 'Tech Stack', icon: <FiLayers /> },
  ]

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">What I've</span> Built
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            AI products in production, enterprise systems at scale, and the skills that power it all.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex rounded-xl border border-border bg-bg-card overflow-hidden mb-12 max-w-2xl mx-auto"
        >
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-primary/10 text-primary border-b-2 border-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {projects.map(project => (
                <motion.div
                  key={project.title}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-border bg-bg-card p-6 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15),_0_0_40px_rgba(16,185,129,0.08)] hover:scale-[1.02] transition-all duration-300 text-center"
                >
                  <div className="mb-4 relative">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -top-2 -right-2 inline-flex items-center gap-1 px-2 py-0.5 text-[10px] rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      Live Demo <FiExternalLink size={10} />
                    </a>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
                    <p className="text-sm text-primary">{project.subtitle}</p>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">{project.description}</p>
                  <ul className="space-y-2 mb-4 text-left max-w-sm mx-auto">
                    {project.highlights.map(h => (
                      <li key={h} className="text-xs text-text-secondary flex items-start gap-2">
                        <span className="text-primary mt-0.5">&#9654;</span> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {experience.map(exp => (
                <motion.div
                  key={exp.company}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-border bg-bg-card p-6 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15),_0_0_40px_rgba(16,185,129,0.08)] hover:scale-[1.02] transition-all duration-300 text-center"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                    <p className="text-primary text-sm">
                      {exp.company} <span className="text-text-secondary">| {exp.location}</span>
                    </p>
                    <span className="inline-block mt-2 text-xs text-text-secondary px-3 py-1 rounded-full border border-border">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-left max-w-2xl mx-auto">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-primary mt-0.5">&#9654;</span> {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {skillCategories.map(cat => (
                <motion.div
                  key={cat.category}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-border bg-bg-card p-6 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15),_0_0_40px_rgba(16,185,129,0.08)] hover:scale-[1.02] transition-all duration-300 text-center"
                >
                  <h3 className="text-primary font-semibold mb-4">{cat.category}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {cat.skills.map(s => (
                      <span
                        key={s}
                        className="px-3 py-1.5 text-xs rounded-lg bg-bg-dark border border-border text-text-secondary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
