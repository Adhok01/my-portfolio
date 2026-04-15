"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Use MotionValues for high-performance movement (bypasses React render cycle)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply smooth springs to the motion values
  const springConfigMain = { damping: 40, stiffness: 1000, mass: 0.1 };
  const springConfigOuter = { damping: 30, stiffness: 400, mass: 0.5 };
  
  const mainX = useSpring(cursorX, springConfigMain);
  const mainY = useSpring(cursorY, springConfigMain);
  
  const outerX = useSpring(cursorX, springConfigOuter);
  const outerY = useSpring(cursorY, springConfigOuter);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    // Efficient hover detection using a global listener
    const handleOver = (e) => {
      if (e.target.closest("button, a, [data-cursor]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot - Instant & Snappy */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none"
        style={{ 
          zIndex: 20000,
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />

      {/* Outer Circle - Smooth trailing effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none"
        style={{ 
          zIndex: 19999,
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 1 : 0.5,
          borderColor: isHovering ? "rgba(34, 211, 238, 1)" : "rgba(34, 211, 238, 0.4)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
