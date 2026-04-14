'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

function ExpCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      style={{
        display: 'grid', gridTemplateColumns: '220px 1fr',
        border: '1px solid rgba(255,255,255,0.07)',
        marginBottom: -1, overflow: 'hidden',
        transition: 'background 0.3s',
      }}
      className="exp-card"
      whileHover={{ background: 'rgba(255,255,255,0.015)' }}
    >
      {/* Left meta */}
      <div style={{
        padding: '2.5rem 2rem',
        borderRight: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.62rem', color: 'var(--muted)',
            letterSpacing: '0.15em', marginBottom: '1.5rem',
          }}>{exp.period}</div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.7rem', fontWeight: 600,
            color: 'var(--gold)', lineHeight: 1.1, marginBottom: '0.4rem',
          }}>{exp.company}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{exp.location}</div>
        </div>
        <span style={{
          display: 'inline-block', fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem', padding: '0.25rem 0.6rem',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#ffffff',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          marginTop: '1rem', alignSelf: 'flex-start',
        }}>{exp.type}</span>
      </div>

      {/* Right body */}
      <div style={{ padding: '2.5rem 3rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.25rem', fontWeight: 600,
          marginBottom: '1.5rem',
        }}>
          {exp.role}
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.07), transparent)' }} />
        </div>

        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.85rem' }}>
          {exp.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + i * 0.06 + 0.3 }}
              style={{
                fontSize: '0.87rem', color: 'var(--muted)',
                lineHeight: 1.8, paddingLeft: '1.2rem', position: 'relative',
              }}
              dangerouslySetInnerHTML={{
                __html: h.replace(/~?30%|10%|3\+|4 key|LLMs/g, m => `<strong style="color:var(--text)">${m}</strong>`),
              }}
            />
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {exp.tags.map(t => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.62rem', padding: '0.28rem 0.7rem',
              border: '1px solid rgba(255,255,255,0.07)',
              color: 'var(--muted)', transition: 'all 0.2s',
            }}>{t}</span>
          ))}
        </div>
      </div>

      <style>{`
        .exp-card { cursor: none; }
        @media (max-width: 768px) { .exp-card { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.div>
  )
}

function EduCard({ edu, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ x: 6, borderColor: 'rgba(201,168,76,0.35)' }}
      style={{
        padding: '2.5rem',
        border: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.02)',
        position: 'relative', overflow: 'hidden',
        transition: 'all 0.3s',
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
          transformOrigin: 'left',
        }}
      />

      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ width: 16, height: 1, background: 'var(--gold)', opacity: 0.4, display: 'inline-block' }} />
        {edu.period}
      </div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, lineHeight: 1.2, marginBottom: '0.5rem' }}>{edu.degree}</div>
      <div style={{ fontSize: '0.75rem', color: '#ffffff', opacity: 0.7, letterSpacing: '0.08em', marginBottom: '1.5rem' }}>{edu.school} · {edu.location}</div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', opacity: 0.25 }}>{edu.gpa}</div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: '9rem 3rem', position: 'relative', zIndex: 1,
        background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.01), transparent)',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>

        {/* Experience */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2rem', marginBottom: '4rem', display: 'flex', alignItems: 'flex-end' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>04</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1 }}>Experience</h2>
          </motion.div>
        </div>

        <div style={{ marginBottom: '8rem' }}>
          {portfolioData.experience.map((exp, i) => (
            <ExpCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>

        {/* Education */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2rem', marginBottom: '4rem', display: 'flex', alignItems: 'flex-end' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>04B</div>
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
