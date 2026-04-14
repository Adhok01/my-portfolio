'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const { personal } = portfolioData
const metrics = [
  { num: '3+', label: 'Degrees & Certifications' },
  { num: '3', label: 'Research Publications' },
  { num: '30%', label: 'Research Speed via LLMs' },
  { num: '95%+', label: 'ML Model Accuracy' },
]

const paragraphs = [
  `I'm a dual-degree student pursuing an MBA in Marketing at CMS Business School and an MS in Data Science & Analytics at REVA University, with a foundation in Computer Science from Karnataka University.`,
  `My work lives at the intersection of market research, AI tooling, and analytics — helping organisations uncover whitespace, map competitive landscapes, and translate raw data into insight-led strategy.`,
  `I'm completing a PGP in AI Product Management from ISB, positioning myself at the frontier of AI-driven product and research workflows.`,
]

function AnimatedParagraph({ text, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
      style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.2rem' }}
    >
      {text}
    </motion.p>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '9rem 3rem', position: 'relative', zIndex: 1,
        background: 'linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.015) 50%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '160px 1fr', gap: '4rem' }} className="about-grid">

        {/* Side label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4,0,0.2,1] }}
          style={{
            writingMode: 'vertical-rl', textOrientation: 'mixed',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem', letterSpacing: '0.3em',
            color: 'var(--gold)', textTransform: 'uppercase',
            alignSelf: 'start', paddingTop: '0.5rem',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}
        >
          <span style={{
            width: 40, height: 4,
            background: '#050a14',
            borderTop: '1px solid rgba(0,0,0,0.8)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            display: 'inline-block',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)'
          }} />
          01 — About
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
              fontWeight: 300, lineHeight: 1.05,
              marginBottom: '3rem',
            }}
          >
            Where <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Business</em><br/>Meets Intelligence
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="about-body-grid">
            <div>
              {paragraphs.map((p, i) => (
                <AnimatedParagraph key={i} text={p} delay={i * 0.12} />
              ))}
            </div>

            <div style={{ display: 'grid', gap: '1.2rem' }}>
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    padding: '1.4rem 1.6rem',
                    borderLeft: '1px solid var(--gold)',
                    background: 'linear-gradient(90deg, rgba(201,168,76,0.05) 0%, transparent 100%)',
                    transition: 'background 0.3s',
                  }}
                  whileHover={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.1) 0%, transparent 100%)' }}
                >
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2.8rem', fontWeight: 700,
                    color: 'var(--gold)', lineHeight: 1, display: 'block',
                  }}>{m.num}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.3rem', display: 'block' }}>{m.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-body-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
