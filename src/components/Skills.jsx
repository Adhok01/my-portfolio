'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { 
  Layers, 
  Brain, 
  Database, 
  BarChart3, 
  Code2, 
  Wrench,
  ArrowRight
} from 'lucide-react'

const domains = [
  { id: 'all', label: 'All Expertise', icon: Layers },
  { id: 'ai', label: 'AI & Machine Learning', icon: Brain },
  { id: 'data', label: 'Data Science', icon: Database },
  { id: 'bi', label: 'Business Intelligence', icon: BarChart3 },
  { id: 'prog', label: 'Programming', icon: Code2 },
  { id: 'tools', label: 'Tools & Ecosystem', icon: Wrench },
]

const PowerBILogo = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M24 8V24C24 24.55 23.55 25 23 25H18C17.45 25 17 24.55 17 24V8C17 7.45 17.45 7 18 7H23C23.55 7 24 7.45 24 8Z" fill="#F2C811"/>
    <path d="M15 13V24C15 24.55 14.55 25 14 25H9C8.45 25 8 24.55 8 24V13C8 12.45 8.45 12 9 12H14C14.55 12 15 12.45 15 13Z" fill="#F2C811" fillOpacity="0.8"/>
    <path d="M6 18V24C6 24.55 5.55 25 5 25H1C0.45 25 0 24.55 0 24V18C0 17.45 0.45 17 1 17H5C5.55 17 6 17.45 6 18Z" fill="#F2C811" fillOpacity="0.6"/>
    <path d="M26 4H7V0H26C29.3137 0 32 2.68629 32 6V25H28V6C28 4.89543 27.1046 4 26 4Z" fill="#F2C811"/>
  </svg>
)

const ChatGPTLogo = () => (
  <div className="w-full h-full bg-[#10a37f] rounded-lg flex items-center justify-center p-2">
    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M22.28 7.53a4.57 4.57 0 0 0-.47-2.53 4.5 4.5 0 0 0-2.35-2.15 4.63 4.63 0 0 0-3.13.06L15.5 3.5l-.24-.14a4.48 4.48 0 0 0-2.26-.6 4.57 4.57 0 0 0-3.3 1.34L8.5 5.5l-.24.14a4.48 4.48 0 0 0-1.57 6.13l1.17 2.03-1.17 2.03a4.5 4.5 0 0 0 1.57 6.13l.24.14.83.48a4.57 4.57 0 0 0 3.3 1.34c.8 0 1.58-.22 2.26-.63l.24-.14 1.17-.68a4.63 4.63 0 0 0 3.13.06 4.5 4.5 0 0 0 2.35-2.15 4.57 4.57 0 0 0 .47-2.53L22.28 7.53zM10.69 19.85l-1.17-.68 2.03-3.51a.22.22 0 0 1 .3 0l3.51 2.03c.8.46 1.74.6 2.64.4 0 0 .01 0 .01-.01.89-.22 1.63-.76 2.1-1.52.47-.76.6-1.68.37-2.58l-2.03-3.51a.22.22 0 0 1 0-.3l2.03-3.51c.46-.8.6-1.74.4-2.64 0 0 0-.01-.01-.01-.22-.89-.76-1.63-1.52-2.1-.76-.47-1.68-.6-2.58-.37L15.35 3.1l-2.03 3.51a.22.22 0 0 1-.3 0L9.51 4.58a4.48 4.48 0 0 0-4.74-.2c-.8.46-1.4 1.22-1.68 2.12-.28.9-.22 1.86.16 2.7l1.17 2.03 3.51-2.03a.22.22 0 0 1 .3 0l2.03 3.51v4.06a.22.22 0 0 1-.11.19l-3.51 2.03a4.48 4.48 0 0 0-2.26 3.9c0 .92.34 1.81.96 2.5a4.48 4.48 0 0 0 6.64.38l1.17-.68l2.03-3.51a.22.22 0 0 1-.01-.19v-.01z"/>
    </svg>
  </div>
)

const TableauLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Center */}
    <path d="M44 56V44H28V40H44V24H48V40H64V44H48V56H44Z" fill="#E97627"/>
    {/* Top */}
    <path d="M46 16V10H41V16H35V19H41V25H46V19H52V16H46Z" fill="#768994"/>
    {/* Right */}
    <path d="M82 46V41H76V46H70V51H76V56H82V51H88V46H82Z" fill="#5E6DBE"/>
    {/* Bottom */}
    <path d="M46 86V80H41V86H35V89H41V95H46V89H52V86H46Z" fill="#6F7CC2"/>
    {/* Left */}
    <path d="M14 46V41H8V46H2V51H8V56H14V51H20V46H14Z" fill="#768994"/>
    {/* Top Right */}
    <path d="M65 24V19H59V24H53V29H59V34H65V29H71V24H65Z" fill="#5C6D77"/>
    {/* Bottom Right */}
    <path d="M74 72V67H68V72H62V77H68V82H74V77H80V72H74Z" fill="#0046AD"/>
    {/* Bottom Left */}
    <path d="M26 72V67H20V72H14V77H20V82H26V77H32V72H26Z" fill="#D32F2F"/>
    {/* Top Left */}
    <path d="M26 24V19H20V24H14V29H20V34H26V29H32V24H26Z" fill="#FF9E00"/>
  </svg>
)

const skills = [
  { name: 'LLMs & RAG', domain: 'ai', slug: 'openai', usage: 'Generative AI Workflows', color: '#10a37f', customLogo: ChatGPTLogo },
  { name: 'Prompt Engineering', domain: 'ai', slug: 'anthropic', usage: 'Complex Logic Design', color: '#D97757' },
  { name: 'Computer Vision', domain: 'ai', slug: 'opencv', usage: 'Spatial Intelligence', color: '#5C3EE8' },
  { name: 'NLP', domain: 'ai', slug: 'huggingface', usage: 'Language Modeling', color: '#FFD21E' },
  { name: 'Python', domain: 'data', slug: 'python', usage: 'Advanced Automation', color: '#3776AB' },
  { name: 'Pandas / EDA', domain: 'data', slug: 'pandas', usage: 'Insight Extraction', color: '#150458' },
  { name: 'SQL', domain: 'data', slug: 'mysql', usage: 'Data Architecture', color: '#4479A1' },
  { name: 'Statistics', domain: 'data', slug: 'numpy', usage: 'Predictive Analysis', color: '#8CAAE6' },
  { name: 'Power BI', domain: 'bi', slug: 'powerbi', usage: 'Enterprise Reporting', color: '#F2C811', customLogo: PowerBILogo },
  { name: 'Tableau', domain: 'bi', slug: 'tableau', usage: 'Visual Storytelling', color: '#E97627', customLogo: TableauLogo },
  { name: 'Excel / DAX', domain: 'bi', slug: 'microsoftexcel', usage: 'Logic & Modeling', color: '#217346' },
  { name: 'Next.js', domain: 'prog', slug: 'nextdotjs', usage: 'Full-stack Systems', color: '#ffffff' },
  { name: 'JavaScript', domain: 'prog', slug: 'javascript', usage: 'Reactive Logic', color: '#F7DF1E' },
  { name: 'React', domain: 'prog', slug: 'react', usage: 'UI Architecture', color: '#61DAFB' },
  { name: 'N8N', domain: 'tools', slug: 'n8n', usage: 'Low-code Automation', color: '#EA4B71' },
  { name: 'AWS', domain: 'tools', slug: 'amazonaws', usage: 'Cloud Scale-out', color: '#FF9900' },
  { name: 'Notion', domain: 'tools', slug: 'notion', usage: 'Strategic Ops', color: '#ffffff' },
]

function SkillItem({ skill, index }) {
  const logoUrl = `https://cdn.simpleicons.org/${skill.slug}`
  const CustomLogo = skill.customLogo
  
  // Advanced 3D Tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [20, -20]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), { stiffness: 150, damping: 20 })
  
  // Parallax Logo Movement
  const logoX = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]))
  const logoY = useSpring(useTransform(y, [-0.5, 0.5], [-15, 15]))

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, perspective: 1200 }}
      className="group relative"
    >
      {/* Floating Bobbing Effect Wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.2 
        }}
        className="flex items-center gap-6 p-6 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] rounded-2xl transition-colors duration-500 backdrop-blur-md relative overflow-hidden"
      >
        {/* Spotlight Glow */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            background: useTransform(
              [x, y],
              ([latestX, latestY]) => `radial-gradient(circle at ${(latestX + 0.5) * 100}% ${(latestY + 0.5) * 100}%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)`
            )
          }}
        />

        <motion.div 
          style={{ x: logoX, y: logoY }}
          className="w-16 h-16 shrink-0 rounded-xl bg-black/50 flex items-center justify-center p-3.5 border border-white/10 group-hover:border-blue-500/50 shadow-2xl transition-all duration-500 z-10"
        >
          {CustomLogo ? (
            <CustomLogo />
          ) : (
            <img src={logoUrl} alt={skill.name} className="w-full h-full object-contain filter brightness-125" />
          )}
        </motion.div>
        
        <div className="flex-1 z-10">
          <div className="flex items-center gap-3 mb-1">
            <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">{skill.name}</h4>
            <div className="h-px flex-1 bg-white/[0.05] group-hover:bg-blue-500/20 transition-colors" />
          </div>
          <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors font-medium">
            {skill.usage}
          </p>
        </div>

        <motion.div 
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ArrowRight size={20} className="text-blue-500" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  
  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.domain === activeTab)

  return (
    <section id="skills" ref={sectionRef} className="py-32 bg-[#020306] relative overflow-hidden">
      {/* 3D Moving Orbs in Background */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4"
            >
              System Capabilities
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Expertise <span className="italic font-light text-blue-600">3D.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/30 text-xl max-w-sm font-light italic"
          >
            "The intersection of logic, data, and spatial intelligence."
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Enhanced Sticky Sidebar */}
          <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-3">
            {domains.map((domain, i) => {
              const Icon = domain.icon
              const isActive = activeTab === domain.id
              return (
                <motion.button
                  key={domain.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveTab(domain.id)}
                  whileHover={{ x: 10 }}
                  className={`w-full group flex items-center justify-between p-5 rounded-2xl transition-all duration-500 relative border ${
                    isActive ? 'bg-blue-600/10 border-blue-500/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-transparent text-white/30 hover:text-white/60 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon size={22} className={isActive ? 'text-blue-400' : 'text-white/10 group-hover:text-blue-500/50'} />
                    <span className="text-sm font-bold tracking-widest uppercase">{domain.label}</span>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="sidebarGlow" 
                      className="absolute left-0 w-1 h-8 bg-blue-500 rounded-r-full shadow-[0_0_15px_#3b82f6]" 
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* High-Motion Skills Grid */}
          <div className="lg:w-3/4">
            <motion.div 
              layout
              className="grid grid-cols-1 xl:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, i) => (
                  <SkillItem key={skill.name} skill={skill} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Floating Metrics Section */}
        <div className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/[0.05] pt-20">
          {[
            { label: 'Core Tools', value: '17' },
            { label: 'Deep Domains', value: '05' },
            { label: 'Innovation', value: '100%' },
            { label: 'Precision', value: '99.9' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="text-6xl font-black text-white mb-3 font-mono tracking-tighter outline-text">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.4em] text-blue-500 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
          transition: all 0.5s ease;
        }
        .group:hover .outline-text {
          -webkit-text-stroke: 1px rgba(59,130,246,0.5);
          color: white;
        }
      `}</style>
    </section>
  )
}
