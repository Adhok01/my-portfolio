'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import Counter from '@/components/Counter'

function EduCard({ edu, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      style={{
        padding: '3rem',
        border: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.015)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 100, height: 100,
        background: 'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.05), transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ 
        fontFamily: "'JetBrains Mono', monospace", 
        fontSize: '0.62rem', 
        color: 'var(--gold)', 
        letterSpacing: '0.2em', 
        marginBottom: '2rem',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem'
      }}>
        <span style={{ fontSize: '1.2rem' }}>{edu.icon}</span>
        {edu.period}
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ 
          fontFamily: "'Cormorant Garamond', serif", 
          fontSize: '1.6rem', 
          fontWeight: 600, 
          lineHeight: 1.2, 
          marginBottom: '0.6rem',
          color: '#ffffff'
        }}>
          {edu.degree}
        </h3>
        <p style={{ 
          fontSize: '0.8rem', 
          color: 'var(--muted)', 
          letterSpacing: '0.05em', 
          marginBottom: '2rem' 
        }}>
          {edu.school} · {edu.location}
        </p>

        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ 
            fontFamily: "'JetBrains Mono', monospace", 
            fontSize: '0.55rem', 
            color: 'white', 
            opacity: 0.3, 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em',
            marginBottom: '0.8rem'
          }}>Core Focus</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {edu.courses.map(c => (
              <span key={c} style={{
                fontSize: '0.7rem',
                color: '#ffffff',
                opacity: 0.8,
                padding: '0.2rem 0.6rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: "'Syne', sans-serif"
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'baseline', 
        gap: '0.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        paddingTop: '1.5rem',
        marginTop: 'auto'
      }}>
        <span style={{ 
          fontFamily: "'JetBrains Mono', monospace", 
          fontSize: '0.55rem', 
          color: 'var(--gold)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em' 
        }}>GPA</span>
        <span style={{ 
          fontFamily: "'Cormorant Garamond', serif", 
          fontSize: '2rem', 
          fontWeight: 700, 
          color: '#ffffff',
          lineHeight: 1
        }}>
          <Counter value={edu.gpa} />
        </span>
      </div>
    </motion.div>
  )
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="education"
      ref={ref}
      style={{
        padding: '9rem 3rem', position: 'relative', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2rem', marginBottom: '4rem', display: 'flex', alignItems: 'flex-end' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.6rem' }}><Counter value="02" /></div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1 }}>Education</h2>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.04)' }}>
          {portfolioData.education.map((edu, i) => (
            <EduCard key={edu.school} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
