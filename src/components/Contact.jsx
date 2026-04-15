'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const { personal } = portfolioData

const contactLinks = [
  { icon: '📞', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: '✉', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: 'in', label: 'LinkedIn', value: 'Adhokshaja-Srinivas', href: personal.linkedin },
  { icon: '📍', label: 'Location', value: personal.location, href: null },
]

function ContactLink({ link, index, inView }) {
  const Tag = link.href ? 'a' : 'div'
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
    >
      <Tag
        href={link.href || undefined}
        target={link.href?.startsWith('http') ? '_blank' : undefined}
        rel={link.href?.startsWith('http') ? 'noreferrer' : undefined}
        style={{
          display: 'flex', alignItems: 'center', gap: '1.2rem',
          padding: '1.1rem 1.5rem',
          border: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.02)',
          textDecoration: 'none', color: 'var(--text)',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
          e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
          e.currentTarget.style.transform = 'translateX(6px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
          e.currentTarget.style.transform = 'translateX(0)'
        }}
      >
        <div style={{
          width: 38, height: 38, flexShrink: 0,
          border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.9rem', background: 'rgba(255,255,255,0.02)',
          fontFamily: link.icon === 'in' ? 'Syne, sans-serif' : 'inherit',
          fontWeight: 700, color: '#ffffff', fontSize: '0.75rem',
        }}>{link.icon}</div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{link.label}</div>
          <div style={{ fontSize: '0.88rem', fontWeight: 500 }}>{link.value}</div>
        </div>
      </Tag>
    </motion.div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [focused, setFocused] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const fieldStyle = (name) => ({
    width: '100%',
    background: focused === name ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
    border: `1px solid ${focused === name ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
    color: 'var(--text)',
    padding: '1.1rem 1.4rem',
    fontFamily: "'Syne', sans-serif",
    fontSize: '0.88rem',
    outline: 'none',
    transition: 'all 0.3s',
    resize: 'none',
  })

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: '10rem 3rem', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          height: '2px',
          background: '#050a14',
          borderTop: '1px solid rgba(0,0,0,0.8)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          marginBottom: '5rem',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)'
        }}></div>
        <div style={{ paddingBottom: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>08</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1 }}>Let's Connect</h2>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }} className="contact-grid">

          {/* Left */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                fontWeight: 300, lineHeight: 0.95, marginBottom: '2rem',
              }}
            >
              Open to<br/><em style={{ fontStyle: 'italic', color: '#ffffff' }}>Opportunities</em>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '3rem' }}
            >
              Based in <span style={{ color: 'var(--text)' }}>Bengaluru, India</span> — open to internships and early-career roles in market research, data analytics, AI product management, and related fields.
            </motion.p>

            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {contactLinks.map((l, i) => (
                <ContactLink key={l.label} link={l} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.9rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
                <input
                  name="name" value={form.name} onChange={handleChange}
                  placeholder="Your Name" required
                  style={fieldStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
                <input
                  name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="Your Email" required
                  style={fieldStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <input
                name="subject" value={form.subject} onChange={handleChange}
                placeholder="Subject"
                style={fieldStyle('subject')}
                onFocus={() => setFocused('subject')}
                onBlur={() => setFocused(null)}
              />
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Your Message…" required rows={6}
                style={fieldStyle('message')}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />

              {/* Submit button */}
              <motion.button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending' || status === 'sent'}
                whileHover={status === 'idle' ? { scale: 1.01 } : {}}
                whileTap={status === 'idle' ? { scale: 0.99 } : {}}
                style={{
                  width: '100%', padding: '1.1rem',
                  border: `1px solid ${status === 'sent' ? 'rgba(52,211,153,0.5)' : status === 'error' ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.4)'}`,
                  background: status === 'sent' ? 'rgba(52,211,153,0.08)' : status === 'error' ? 'rgba(239,68,68,0.08)' : 'transparent',
                  color: status === 'sent' ? '#34d399' : status === 'error' ? '#ef4444' : '#ffffff',
                  fontSize: '0.78rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{ display: 'block', position: 'relative', zIndex: 1 }}
                  >
                    {status === 'idle' && 'Send Message →'}
                    {status === 'sending' && 'Sending…'}
                    {status === 'sent' && '✓ Message Sent'}
                    {status === 'error' && 'Error — Try Again'}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
