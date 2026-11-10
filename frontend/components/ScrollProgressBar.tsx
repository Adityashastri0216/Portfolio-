"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-500 dark:from-blue-400 dark:via-indigo-400 dark:to-amber-400 origin-left z-[60] shadow-[0_0_12px_rgba(59,130,246,0.6)] pointer-events-none"
    />
  );
}
