'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

function PubCard({ pub, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ background: 'rgba(255,255,255,0.03)', x: 6 }}
      style={{
        display: 'grid', gridTemplateColumns: '100px 1fr',
        border: '1px solid rgba(255,255,255,0.07)',
        marginBottom: -1, overflow: 'hidden',
        transition: 'all 0.3s',
      }}
    >
      <div style={{
        borderRight: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem 1rem',
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2rem', fontWeight: 700,
          color: '#ffffff', opacity: 0.35, lineHeight: 1,
        }}>{pub.year}</span>
      </div>
      <div style={{ padding: '2rem 2.5rem' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: '#ffffff', opacity: 0.6, letterSpacing: '0.2em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{pub.venue}</div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>{pub.title}</div>
        <div style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.8rem' }}>{pub.desc}</div>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {pub.tags.map(t => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem', padding: '0.22rem 0.6rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.7)',
            }}>{t}</span>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 540px) { .pub-grid-inner { grid-template-columns: 1fr !important; } }`}</style>
    </motion.div>
  )
}

export default function Publications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="research"
      ref={ref}
      style={{
        padding: '9rem 3rem', position: 'relative', zIndex: 1,
        background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.015), transparent)',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Publications */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2rem', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>06</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1 }}>Research & Publications</h2>
          </motion.div>
        </div>

        <div style={{ marginBottom: '8rem' }}>
          {portfolioData.publications.map((p, i) => (
            <PubCard key={p.venue} pub={p} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2rem', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>07</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1 }}>Certification</h2>
          </motion.div>
        </div>

        {portfolioData.certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
            whileHover={{ boxShadow: '0 12px 50px rgba(255,255,255,0.1)' }}
            style={{
              padding: '3.5rem',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)',
              display: 'grid', gridTemplateColumns: '70px 1fr auto',
              gap: '2.5rem', alignItems: 'center',
              transition: 'box-shadow 0.3s',
            }}
            className="cert-inner"
          >
            <div style={{
              width: 70, height: 70,
              background: 'linear-gradient(135deg, #ffffff, #aaaaaa)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.8rem',
              boxShadow: '0 0 30px rgba(255,255,255,0.1)',
              color: '#000000',
            }}>{c.icon}</div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>{c.name}</div>
              <div style={{ fontSize: '0.85rem', color: '#ffffff', opacity: 0.6, letterSpacing: '0.08em', marginBottom: '0.7rem' }}>{c.issuer}</div>
              <div style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.7 }}>{c.desc}</div>
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.62rem', letterSpacing: '0.2em',
              padding: '0.8rem 1.2rem',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase', whiteSpace: 'nowrap',
            }}>ISB · Certified</div>
          </motion.div>
        ))}
      </div>

      <style>{`@media (max-width: 700px) { .cert-inner { grid-template-columns: 1fr !important; text-align: center; } }`}</style>
    </section>
  )
}
