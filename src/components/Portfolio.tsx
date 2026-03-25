import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiCode, FiBriefcase, FiLayers } from 'react-icons/fi'

type Tab = 'projects' | 'experience' | 'skills'

const projects = [
  {
    title: 'StudyLock',
    subtitle: 'Real-Time Collaborative Study Room',
    description:
      'Pixel-art virtual library where users study together in real-time. AI multi-agent system adapts room atmosphere based on live weather and time of day. 14 themed floors with ambient sounds and Pomodoro timer.',
    tech: ['CrewAI', 'AutoGen', 'LangGraph', 'LangChain', 'MCP', 'Claude API', 'Canvas 2D', 'FastAPI', 'Next.js', 'Supabase Realtime'],
    link: 'https://studylock.dev',
    highlights: [
      'Multi-agent AI system (CrewAI + AutoGen + LangGraph)',
      'Custom Canvas 2D engine with 60fps pixel-art rendering',
      'Real-time presence via WebSocket across 14 themed rooms',
      'MCP integration for weather data and Notion auto-docs',
      '23 Playwright E2E tests + AI-driven browser monitoring',
    ],
  },
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
      'AI-driven Adventure Mode (Claude + Gemini) with boss battles',
      '4-language support (EN/KO/ZH/JP) via Claude API',
      'AI image generation (Gemini) for all visual assets',
      'SEO/GEO with Schema.org structured data and 20+ blog posts',
      'Real-time WPM/accuracy tracking with performance analytics',
    ],
  },
]

const experience = [
  {
    role: 'Founder & Applied AI Engineer',
    company: 'StudyLock',
    location: 'Atlanta, GA',
    period: 'Mar 2026 – Present',
    bullets: [
      'Orchestrated multi-agent AI system with CrewAI (3 agents), AutoGen (inter-agent consensus), and LangGraph (condition-based state machine) via LangChain + Claude Haiku; dynamically adapts room atmosphere and capacity from live weather and time-of-day data, cost-optimized to ~50 API calls/day under $5/month',
      'Built MCP server with Tool registration for agent data access (weather, time, room stats) and Notion API auto-documentation; implemented Playwright MCP enabling AI agents to verify live site health and canvas rendering via headless Chromium',
      'Integrated Canvas 2D pixel-art engine (60fps, Y-coordinate Z-sorting, sprite sheet slicing) with custom MCP weather-driven window rendering (day/night, rain); Supabase Realtime WebSockets for live presence across 14 themed rooms with auto-expanding capacity',
      'Architected FastAPI backend with GitHub Actions CI/CD (TypeScript check, Next.js build, 23 Playwright E2E tests) and Vercel auto-deploy',
    ],
  },
  {
    role: 'Founder & Applied AI Engineer',
    company: 'Glowmi',
    location: 'Atlanta, GA',
    period: 'Feb 2026 – Present',
    bullets: [
      'Implemented agentic AI with Gemini Function Calling; single agent orchestrates 6 tools (skin analysis, RAG product search, weather, routine, diary) for context-aware personalized responses with graceful fallback',
      'Built RAG pipeline with Supabase pgvector and Gemini embeddings for cosine similarity search; SkinChat and ingredient analyzer (OCR + Gemini) grounded in curated product/ingredient database',
      'Built multimodal AI skin analysis using Gemini 2.5 Flash, generating personalized skincare reports and seasonal color typing across 10 types from user selfies',
      'Architected serverless infra with AWS Lambda (Gemini API proxy, multi-layer fallback), S3 (server-side encryption), and CloudWatch (logs, error alerting); implemented GitHub Actions CI/CD with ESLint, 28-point automated QA, custom pre-push hooks, and Cloudflare Pages auto-deploy',
      'Integrated MediaPipe for fully in-browser face analysis (468-point landmark detection, WebGPU/CPU fallback) as offline-capable Gemini fallback, eliminating server dependency for core feature',
    ],
  },
  {
    role: 'Founder & Applied AI Engineer',
    company: 'DuckType',
    location: 'Atlanta, GA',
    period: 'Feb 2026 – Present',
    bullets: [
      'Designed AI-driven Adventure Mode end-to-end (Claude + Gemini): game logic, debuff systems, boss phase mechanics, and all 10 world storylines via Claude API',
      'Built multilingual support with 4-language content (EN/KO/ZH/JP) generated and maintained via Claude API across all game content and UI elements',
      'Implemented SEO/GEO strategy with AI-assisted authoring of 20+ blog posts, Schema.org structured data for organic search, and GEO strategies for AI-indexed discoverability',
      'Produced all visual assets (monsters, bosses, backgrounds) via Gemini AI image generation pipelines integrated into the content workflow',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'General Motors',
    location: 'Roswell, GA',
    period: 'Jan 2022 – Dec 2025',
    bullets: [
      'Led Oracle-to-PostgreSQL migration of PDMS (700+ users), merging two schemas across 200+ tables and ~200 batch jobs; refactored 269 PowerBuilder screens, delivering in 14 months against an 18-month timeline with zero downtime',
      'Migrated eKanban (1,000+ users) servers to Ubuntu across 2 factory environments; updated 374 batch jobs, resolved Korean encoding issues, and managed integrations with 12 external systems via Connect Direct and Sterling',
      'Served as SME for PDMS; supported 7 GM Korea applications as part of a 4-person team, collaborating daily with Korean Operations Managers and Business Owners across timezones',
      'Modernized KDMS PDA app using React and TypeScript, migrating 300+ screens to modern UI and enabling real-time data sync for 1,000+ plant floor users',
      'Migrated KSIS contract document system from legacy PDF generator to iframe-based solution; contributed to PostgreSQL migration, refactoring 40+ batch job queries using GitHub Copilot',
      'Created automated scripts for annual AIME password rotation, reducing manual effort by 90%',
    ],
  },
  {
    role: 'Technical Analyst / Senior Associate',
    company: 'Infosys',
    location: 'Atlanta, GA (Client: AT&T)',
    period: 'Oct 2019 – Dec 2021',
    bullets: [
      'Owned team-wide release process for AT&T deployments; led bi-weekly cross-team releases and emergency same-day hotfix deployments, coordinating across US and India engineering teams',
      "Maintained AT&T's P13N (Personalization) platform using React and REST APIs, improving ad delivery reliability across millions of users; wrote Cucumber.js BDD test coverage to reduce regression risk",
      'Reduced incident resolution time by identifying production microservice failures through Splunk log analysis and root cause investigation',
      'Managed Kubernetes deployments on Azure across dev, test, and prod environments; configured Jenkins pipelines to automate build and deployment workflows',
    ],
  },
]

const skillCategories = [
  {
    category: 'AI / LLM',
    skills: ['Multi-Agent Orchestration', 'RAG', 'MCP', 'CrewAI', 'AutoGen', 'LangChain', 'LangGraph', 'Function Calling', 'Prompt Engineering', 'Vector Search', 'Embeddings', 'Anthropic API (Claude)', 'Gemini API', 'OpenAI API'],
  },
  {
    category: 'Frameworks & Languages',
    skills: ['React', 'Next.js', 'FastAPI', 'TypeScript', 'Python', 'JavaScript (ES6+)', 'Node.js', 'Java', 'SQL', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Databases & Platforms',
    skills: ['PostgreSQL', 'Supabase', 'pgvector', 'AWS (Lambda, S3, CloudWatch)', 'Azure', 'MySQL', 'OracleSQL'],
  },
  {
    category: 'Build / Tools / Product',
    skills: ['GitHub Actions', 'CI/CD', 'Playwright', 'SEO/GEO', 'TDD', 'Git', 'REST APIs', 'Vercel', 'Cloudflare Pages', 'Jenkins', 'Splunk', 'Linux', 'Agile/Scrum'],
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
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
