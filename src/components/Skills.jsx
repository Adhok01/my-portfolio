'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const tools = [
  { name: 'Power BI',     icon: '📊', color: '#f2c811', border: 'rgba(242,200,17,0.25)' },
  { name: 'Python',       icon: '🐍', color: '#3776ab', border: 'rgba(55,118,171,0.3)'  },
  { name: 'SQL',          icon: '🗄️', color: '#00758f', border: 'rgba(0,117,143,0.3)'  },
  { name: 'Tableau',      icon: '📈', color: '#e97627', border: 'rgba(233,118,39,0.3)'  },
  { name: 'Excel',        icon: '📗', color: '#217346', border: 'rgba(33,115,70,0.3)'   },
  { name: 'Claude AI',    icon: '✦',  color: '#d97706', border: 'rgba(217,119,6,0.3)'   },
  { name: 'ChatGPT',      icon: '🤖', color: '#10a37f', border: 'rgba(16,163,127,0.3)'  },
  { name: 'N8N',          icon: '⚡', color: '#ea4b71', border: 'rgba(234,75,113,0.3)'  },
  { name: 'Notion',       icon: '📝', color: '#ffffff', border: 'rgba(255,255,255,0.15)'},
  { name: 'DAX',          icon: '∑',  color: '#f2c811', border: 'rgba(242,200,17,0.25)' },
  { name: 'AWS',          icon: '☁️', color: '#ff9900', border: 'rgba(255,153,0,0.3)'   },
  { name: 'Prompt Eng.',  icon: '💬', color: '#00d4ff', border: 'rgba(0,212,255,0.3)'   },
  { name: 'Google Slides',icon: '🟡', color: '#f4b400', border: 'rgba(244,180,0,0.3)'   },
  { name: 'EDA',          icon: '🔬', color: '#a78bfa', border: 'rgba(167,139,250,0.3)' },
  { name: 'PowerPoint',   icon: '🟠', color: '#d04423', border: 'rgba(208,68,35,0.3)'   },
  { name: 'Research',     icon: '🔍', color: '#c9a84c', border: 'rgba(201,168,76,0.3)'  },
]

const row1 = [...tools, ...tools, ...tools]
const row2 = [...tools.slice(8), ...tools.slice(0, 8), ...tools.slice(8), ...tools.slice(0, 8), ...tools.slice(8), ...tools.slice(0, 8)]

function IconCard({ tool }) {
  return (
    <div
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.08)'
        e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.5), 0 0 24px ${tool.border}`
        e.currentTarget.style.borderColor = tool.color + '60'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.35)'
        e.currentTarget.style.borderColor = tool.border
      }}
      style={{
        flexShrink: 0,
        width: 88, height: 88,
        borderRadius: 20,
        background: 'rgba(18,22,38,0.95)',
        border: `1px solid ${tool.border}`,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 5, margin: '0 8px',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
        transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s, border-color 0.3s',
        cursor: 'none', position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Inner glow */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 20,
        background: `radial-gradient(circle at 50% 0%, ${tool.color}18, transparent 65%)`,
        pointerEvents: 'none',
      }} />
      {/* Shine */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
        borderRadius: '20px 20px 50% 50%',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.06), transparent)',
        pointerEvents: 'none',
      }} />
      <span style={{ fontSize: '1.9rem', lineHeight: 1, position: 'relative', zIndex: 1 }}>
        {tool.icon}
      </span>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.52rem', letterSpacing: '0.04em',
        color: 'rgba(255,255,255,0.4)',
        textAlign: 'center', lineHeight: 1.2,
        maxWidth: 76, position: 'relative', zIndex: 1,
      }}>{tool.name}</span>
    </div>
  )
}

function MarqueeRow({ items, direction = 'left', duration = 40 }) {
  const anim = direction === 'left' ? 'marquee-left' : 'marquee-right'
  return (
    <div style={{
      overflow: 'hidden', width: '100%',
      maskImage: 'linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center',
        width: 'max-content',
        animation: `${anim} ${duration}s linear infinite`,
        willChange: 'transform',
        padding: '10px 0',
      }}>
        {items.map((tool, i) => <IconCard key={`${tool.name}-${i}`} tool={tool} />)}
      </div>
    </div>
  )
}

const softSkills = [
  'Secondary Research','Competitor Mapping','Market Landscape','Customer Profiling',
  'Hiring Demand Signals','Pricing Insights','Whitespace Identification','Insight Reports',
  'Research Briefs','Leadership Decks','Business Storytelling','Quant + Qual Synthesis',
  'Prompt Engineering','AI Insight Extraction','Output Validation','Stakeholder Communication',
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} style={{ padding: '9rem 0', position: 'relative', zIndex: 1, overflow: 'hidden' }}>

      {/* BG glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 900, height: 600, pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)',
      }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 3rem' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem', color: 'var(--gold)',
            letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem',
          }}
        >03 — Toolkit</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
            fontWeight: 700, lineHeight: 1, marginBottom: '1rem',
            color: '#ffffff'
          }}
        >Technologies</motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          style={{ fontSize: '1rem', color: '#ffffff', letterSpacing: '0.01em', opacity: 0.8 }}
        >Tools and technologies I use to bring ideas to life</motion.p>
        
        {/* 3D Line */}
        <div style={{
          height: '2px',
          background: '#050a14',
          borderTop: '1px solid rgba(0,0,0,0.8)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          marginTop: '3rem',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)',
          width: '100px',
          marginInline: 'auto'
        }}></div>
      </div>

      {/* Row 1 — left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.28 }}
        style={{ marginBottom: '1.2rem' }}
      >
        <MarqueeRow items={row1} direction="left" duration={45} />
      </motion.div>

      {/* Row 2 — right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.38 }}
      >
        <MarqueeRow items={row2} direction="right" duration={55} />
      </motion.div>

      {/* Soft skill pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.52 }}
        style={{
          maxWidth: 860, margin: '3.5rem auto 0',
          padding: '0 3rem',
          display: 'flex', flexWrap: 'wrap',
          gap: '0.55rem', justifyContent: 'center',
        }}
      >
        {softSkills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.55 + i * 0.022 }}
            whileHover={{ background: 'rgba(96,165,250,0.1)', borderColor: 'rgba(96,165,250,0.3)', color: '#93c5fd', y: -2 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.62rem', padding: '0.32rem 0.82rem',
              borderRadius: 100,
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.025)',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.05em', transition: 'all 0.2s', cursor: 'none',
            }}
          >{skill}</motion.span>
        ))}
      </motion.div>

      <style>{`
        @keyframes marquee-left  { from{transform:translateX(0)} to{transform:translateX(calc(-100%/3))} }
        @keyframes marquee-right { from{transform:translateX(calc(-100%/3))} to{transform:translateX(0)} }
      `}</style>
    </section>
  )
}
