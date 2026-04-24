'use client'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import Background3D from '@/components/Background3D'
import { useEffect, useState } from 'react'

export default function CategoryPage() {
  const params = useParams()
  const router = useRouter()
  const categoryId = params.category
  
  const category = portfolioData.projectCategories.find(c => c.id === categoryId)
  const projects = portfolioData.projects.filter(p => p.category === categoryId)

  if (!category) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020408', color: '#fff' }}>
        <h1 className="font-display">Category Not Found</h1>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--void)', color: 'var(--text)', paddingBottom: '10rem' }}>
      <Background3D />
      
      {/* Back Button */}
      <div style={{ position: 'fixed', top: '2rem', left: '2rem', zIndex: 100 }}>
        <button 
          onClick={() => router.push('/#projects')}
          className="btn-secondary"
          style={{ padding: '0.6rem 1.2rem', borderRadius: '100px', backdropFilter: 'blur(10px)', background: 'rgba(2,4,8,0.5)' }}
        >
          ← Back to Portfolio
        </button>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '8rem 2rem 2rem' }}>
        
        {/* Header Section */}
        <header style={{ marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{category.icon}</div>
            <h1 style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 'clamp(3rem, 6vw, 5rem)', 
              fontWeight: 300, 
              lineHeight: 1,
              marginBottom: '2rem'
            }}>
              {category.title}
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--muted)', 
              lineHeight: 1.7, 
              maxWidth: '700px',
              fontWeight: 300
            }}>
              {category.desc} Explore the intersection of data and strategy through my {category.title.toLowerCase()} portfolio.
            </p>
          </motion.div>
        </header>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {projects.map((project, index) => (
            <ProjectGridCard key={project.id} project={project} index={index} router={router} />
          ))}
          
          {projects.length === 0 && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '5rem', border: '1px dashed var(--border)', borderRadius: '24px' }}>
              <p style={{ color: 'var(--muted)' }}>New projects in this domain are being documented. Check back soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectGridCard({ project, index, router }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
      whileHover={{ 
        y: -8, 
        borderColor: project.color + '44',
        boxShadow: `0 20px 40px -20px ${project.color}22`
      }}
    >
      <div>
        <h3 style={{ 
          fontFamily: "'Syne', sans-serif", 
          fontSize: '1.4rem', 
          fontWeight: 700, 
          marginBottom: '1rem',
          color: 'var(--text)'
        }}>
          {project.title}
        </h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
          {project.tools.map(tool => (
            <span key={tool} className="tag-pill" style={{ fontSize: '0.6rem' }}>{tool}</span>
          ))}
        </div>

        <p style={{ 
          fontSize: '0.9rem', 
          color: 'var(--muted)', 
          lineHeight: 1.7, 
          marginBottom: '2rem' 
        }}>
          {project.desc}
        </p>

        {project.impact && (
          <div style={{ 
            padding: '1rem', 
            background: 'rgba(255,255,255,0.02)', 
            borderLeft: `3px solid ${project.color}`,
            marginBottom: '2rem'
          }}>
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: project.color, marginBottom: '0.2rem' }}>Key Impact</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>{project.impact}</div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => router.push(`/project?id=${project.slug}`)}
          className="btn-primary" 
          style={{ padding: '0.7rem 1.4rem', fontSize: '0.7rem', width: '100%', justifyContent: 'center' }}
        >
          <span>View Details</span>
        </button>
        {project.githubLink && (
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.7rem 1.4rem', fontSize: '0.7rem' }}
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}
