import { useState, useRef, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiUser, FiMessageSquare } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setSending(true)
    setError('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      // Fallback to mailto if EmailJS is not configured
      const form = formRef.current
      const name = (form.elements.namedItem('from_name') as HTMLInputElement)?.value
      const email = (form.elements.namedItem('from_email') as HTMLInputElement)?.value
      const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value
      window.location.href = `mailto:dkim2435@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
      setSending(false)
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setSent(true)
      formRef.current.reset()
      setTimeout(() => setSent(false), 5000)
    } catch {
      setError('Failed to send message. Please email me directly at dkim2435@gmail.com')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Get in</span> Touch
          </h2>
          <p className="text-text-secondary">
            Interested in working together? Let's connect.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-lg mx-auto"
        >
          <div className="rounded-2xl border border-border bg-bg-card p-8 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.1),_0_0_50px_rgba(16,185,129,0.05)] transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary">Send a Message</h3>
            </div>
            <p className="text-sm text-text-secondary mb-6">
              I typically respond within 24 hours.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
                  <FiUser size={16} />
                </span>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-bg-dark border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 text-sm"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
                  <HiOutlineMail size={16} />
                </span>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-bg-dark border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 text-sm"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-3 text-text-secondary">
                  <FiMessageSquare size={16} />
                </span>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-bg-dark border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 text-sm resize-none"
                />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}
              {sent && <p className="text-primary text-sm">Message sent successfully!</p>}

              <button
                type="submit"
                disabled={sending}
                className="group relative w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-emerald-400 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.4),_0_0_50px_rgba(16,185,129,0.15)] hover:scale-[1.01] disabled:opacity-50 disabled:hover:shadow-none disabled:hover:scale-100"
              >
                <FiSend /> {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Connect links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
              className="mt-8 pt-6 border-t border-border"
            >
              <h4 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-primary inline-block" /> Connect With Me
              </h4>
              <div className="space-y-3">
                <motion.a
                  variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.4 }}
                  href="https://linkedin.com/in/ekim0120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-bg-dark hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:scale-[1.01] border border-border transition-all duration-300"
                >
                  <FaLinkedin className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Let's Connect</p>
                    <p className="text-xs text-text-secondary">on LinkedIn</p>
                  </div>
                </motion.a>
                <motion.a
                  variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.4 }}
                  href="mailto:dkim2435@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-bg-dark hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:scale-[1.01] border border-border transition-all duration-300"
                >
                  <HiOutlineMail className="text-red-400" size={20} />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Email Me</p>
                    <p className="text-xs text-text-secondary">dkim2435@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.4 }}
                  href="https://github.com/dkim2435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-bg-dark hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:scale-[1.01] border border-border transition-all duration-300"
                >
                  <FaGithub className="text-text-primary" size={20} />
                  <div>
                    <p className="text-sm font-medium text-text-primary">GitHub</p>
                    <p className="text-xs text-text-secondary">@dkim2435</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
