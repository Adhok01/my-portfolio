'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

function ProjectCard({ project, index, onClick }) {
  const ref = useRef(null)
  const tiltRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const onMouseMove = (e) => {
    const el = tiltRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width - 0.5) * 18
    const y = -((e.clientY - r.top) / r.height - 0.5) * 18
    el.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(10px)`
  }
  const onMouseLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = 'rotateY(0) rotateX(0) translateZ(0)'
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(project)}
      style={{
        perspective: 1000, cursor: 'none',
        position: 'relative',
      }}
    >
      <div
        ref={tiltRef}
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '2.5rem',
          position: 'relative', overflow: 'hidden',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s linear, box-shadow 0.3s',
        }}
      >
        {/* Color accent glow */}
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 120, height: 120, borderRadius: '50%',
          background: `radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.62rem', color: 'var(--gold)', opacity: 0.4,
          letterSpacing: '0.2em', marginBottom: '2rem',
        }}>
          {String(index + 1).padStart(2, '0')} / {String(portfolioData.projects.length).padStart(2, '0')}
        </div>

        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.4rem', fontWeight: 600,
          lineHeight: 1.3, marginBottom: '1rem',
        }}>{project.title}</div>

        <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          {project.desc}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {project.tools.map(t => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.62rem', padding: '0.28rem 0.7rem',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#ffffff', letterSpacing: '0.08em',
            }}>{t}</span>
          ))}
        </div>

        {/* View button */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileHover={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.75rem', color: 'var(--gold)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          View Details ↗
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg, transparent, #ffffff, transparent)`,
            transformOrigin: 'left',
          }}
        />
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 800,
            background: 'rgba(2,4,8,0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <motion.div
            key="modal-box"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: 680, width: '100%',
              background: 'rgba(5,12,20,0.98)',
              border: `1px solid rgba(255,255,255,0.15)`,
              padding: '3.5rem',
              position: 'relative',
              boxShadow: `0 0 80px rgba(255,255,255,0.05)`,
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                background: 'none', border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--muted)', width: 36, height: 36,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', transition: 'all 0.2s',
              }}
            >✕</button>

            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#ffffff', letterSpacing: '0.2em', marginBottom: '1rem', textTransform: 'uppercase', opacity: 0.6 }}>
              {project.category}
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, lineHeight: 1.2, marginBottom: '1.5rem' }}>{project.title}</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2rem' }}>{project.long}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginRight: '0.5rem', alignSelf: 'center' }}>Stack:</span>
              {project.tools.map(t => (
                <span key={t} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem', padding: '0.3rem 0.75rem',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: '9rem 3rem', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2rem', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>05</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1 }}>
              Featured Projects
            </h2>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.04)' }}>
          {portfolioData.projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onClick={setSelected} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
