"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

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
    <motion.div
      className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none"
      style={{ 
        zIndex: 20000,
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        boxShadow: "0 0 15px rgba(255,255,255,0.3)",
      }}
      animate={{
        scale: isHovering ? 4 : 1,
        opacity: isHovering ? 0.3 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    />
  );
}
