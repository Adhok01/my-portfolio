'use client'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'

export default function Counter({ value, duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  
  const strValue = String(value)
  
  // Extract number and suffix (e.g., "95%" -> 95, "%")
  const numValue = parseFloat(strValue.replace(/[^0-9.]/g, ''))
  const suffix = strValue.replace(/[0-9.]/g, '')
  const prefix = strValue.startsWith('+') ? '+' : ''
  
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 80,
    restDelta: 0.001
  })

  useEffect(() => {
    if (inView && !isNaN(numValue)) {
      motionValue.set(numValue)
    }
  }, [inView, motionValue, numValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toFixed(strValue.includes('.') ? 1 : 0) + suffix
      }
    })
  }, [springValue, strValue, prefix, suffix])

  return <span ref={ref}>{isNaN(numValue) ? value : '0'}</span>
}
