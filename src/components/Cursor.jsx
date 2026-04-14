'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 250 }
  const mainX = useSpring(cursorX, springConfig)
  const mainY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHoverStart = () => setIsHovered(true)
    const handleHoverEnd = () => setIsHovered(false)

    window.addEventListener('mousemove', moveCursor)
    
    const interactables = document.querySelectorAll('a, button, [data-cursor]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main outer ring / wings */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Butterfly Rays */}
        {[0, 90, 180, 270].map((rotation, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [rotation, rotation + 15, rotation - 15, rotation],
              scale: isHovered ? [1, 1.4, 1] : [1, 1.1, 1],
              opacity: isHovered ? 0.8 : 0.4,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
            style={{
              position: 'absolute',
              width: isHovered ? 60 : 40,
              height: 2,
              background: 'linear-gradient(90deg, #0066FF, transparent)',
              transformOrigin: 'left center',
              borderRadius: '2px',
            }}
          />
        ))}

        {/* Diagonal Rays */}
        {[45, 135, 225, 315].map((rotation, i) => (
          <motion.div
            key={`diag-${i}`}
            animate={{
              rotate: [rotation, rotation - 10, rotation + 10, rotation],
              scale: isHovered ? [0.8, 1.2, 0.8] : [0.6, 0.8, 0.6],
              opacity: isHovered ? 0.6 : 0.2,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            style={{
              position: 'absolute',
              width: isHovered ? 50 : 30,
              height: 1,
              background: 'linear-gradient(90deg, #00D4FF, transparent)',
              transformOrigin: 'left center',
            }}
          />
        ))}

        {/* Central Core */}
        <motion.div
          animate={{
            scale: isHovered ? 1.5 : 1,
            backgroundColor: isHovered ? '#00D4FF' : '#0066FF',
          }}
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            boxShadow: isHovered ? '0 0 15px #00D4FF' : '0 0 10px #0066FF',
          }}
        />
      </motion.div>

      {/* Trailing glow */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
          width: 100,
          height: 100,
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
          scale: isHovered ? 1.5 : 1,
        }}
      />
    </>
  )
}
