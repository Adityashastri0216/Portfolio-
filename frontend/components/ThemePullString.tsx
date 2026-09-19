"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemePullString() {
  const { toggleTheme, isDark } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPanningRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Motion value for vertical pull offset (0 to ~70px)
  const pullY = useMotionValue(0);

  // Dynamic chain length based on pull (initial 80px)
  const initialChainLength = 80;
  const currentChainLength = useTransform(pullY, (y) => initialChainLength + y);

  // Play realistic mechanical pull switch click sound
  const playClickSound = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Click pulse 1 (downward pull snap)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(isDark ? 1200 : 700, now);
      osc1.frequency.exponentialRampToValueAtTime(300, now + 0.04);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.05);

      // Click pulse 2 (spring release click)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(isDark ? 1800 : 950, now + 0.02);
      osc2.frequency.exponentialRampToValueAtTime(450, now + 0.06);
      gain2.gain.setValueAtTime(0.25, now + 0.02);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.07);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.02);
      osc2.stop(now + 0.08);
    } catch {
      // AudioContext unavailable or blocked - silent fallback
    }
  };

  const triggerSwitch = () => {
    playClickSound();
    toggleTheme();
    setHasInteracted(true);
  };

  // When clicked, animate down and release
  const handleClick = () => {
    if (isPulling || isPanningRef.current) return;
    setIsPulling(true);

    // Animate pull down
    animate(pullY, 48, {
      duration: 0.15,
      ease: "easeOut",
      onComplete: () => {
        triggerSwitch();
        // Snap back up with bouncy spring
        animate(pullY, 0, {
          type: "spring",
          stiffness: 420,
          damping: 15,
          onComplete: () => {
            setIsPulling(false);
          },
        });
      },
    });
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-0 right-8 md:right-16 z-50 flex flex-col items-center select-none pointer-events-auto">
      {/* Ceiling Mount / Base Fixture */}
      <div className="w-6 h-3 rounded-b-md bg-gradient-to-b from-slate-500 via-slate-600 to-slate-700 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800 shadow-md border-t-0 border border-slate-400/50 dark:border-slate-600/50 flex flex-col items-center justify-end pb-0.5">
        <div className="w-2 h-1 rounded-b-full bg-slate-800 dark:bg-slate-950 border-t border-slate-400/40" />
      </div>

      {/* Hanging Metallic Bead Chain / String */}
      <motion.div
        style={{ height: currentChainLength }}
        className="w-3 relative flex justify-center overflow-hidden"
      >
        {/* Continuous high-contrast core wire to guarantee visibility against any background */}
        <div
          className={`absolute top-0 bottom-0 w-[2px] rounded-full transition-colors duration-200 ${
            isDark
              ? "bg-slate-300 shadow-[0_0_6px_rgba(34,211,238,0.5)]"
              : "bg-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
          }`}
        />

        {/* Tactile repeating 3D metallic beads along the string */}
        <div
          className="w-full h-full relative z-10"
          style={{
            backgroundImage: isDark
              ? `radial-gradient(circle 2.5px at 35% 30%, #ffffff 0%, #cbd5e1 45%, #475569 85%, transparent 100%)`
              : `radial-gradient(circle 2.5px at 35% 30%, #fef3c7 0%, #d97706 45%, #78350f 85%, transparent 100%)`,
            backgroundSize: "12px 8px",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center top",
          }}
        />
      </motion.div>

      {/* Pull Pendant / Acorn Handle */}
      <motion.div
        onPanStart={() => {
          isPanningRef.current = true;
        }}
        onPan={(_, info) => {
          const clamped = Math.max(0, Math.min(65, info.offset.y));
          pullY.set(clamped);
        }}
        onPanEnd={(_, info) => {
          if (info.offset.y > 25) {
            triggerSwitch();
          }
          animate(pullY, 0, {
            type: "spring",
            stiffness: 420,
            damping: 15,
            onComplete: () => {
              setTimeout(() => {
                isPanningRef.current = false;
              }, 60);
            },
          });
        }}
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="cursor-grab active:cursor-grabbing group relative -mt-0.5 flex flex-col items-center"
      >
        {/* Metal connecting collar connecting chain to pendant */}
        <div
          className={`w-3.5 h-2 rounded-t-sm shadow-sm transition-colors duration-200 ${
            isDark
              ? "bg-gradient-to-r from-slate-500 via-slate-300 to-slate-600 border-t border-slate-400"
              : "bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 border-t border-amber-300"
          }`}
        />

        {/* The Pull Bell / Teardrop Handle */}
        <div
          className={`relative w-6 h-9 rounded-b-2xl rounded-t-md flex items-center justify-center transition-all duration-300 shadow-lg ${
            isDark
              ? "bg-gradient-to-b from-slate-700 via-slate-800 to-cyan-950 border border-cyan-500/40 shadow-cyan-500/20"
              : "bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 border border-amber-400/60 shadow-amber-500/30"
          }`}
        >
          {/* Luminous Core / Filament glow inside */}
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              isDark
                ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                : "bg-amber-500 shadow-[0_0_10px_#f59e0b]"
            }`}
          />

          {/* Tiny state indicator icon inside */}
          <span className="absolute -bottom-1 text-[9px]">
            {isDark ? "🌙" : "☀️"}
          </span>
        </div>

        {/* Ring at bottom of pendant */}
        <div
          className={`w-3.5 h-3.5 rounded-full border-2 -mt-0.5 transition-colors ${
            isDark ? "border-cyan-400/70" : "border-amber-500/80"
          }`}
        />

        {/* Tooltip hint on hover or until interacted */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-12 whitespace-nowrap pointer-events-none transition-all duration-300 ${
            isHovered || !hasInteracted
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1"
          }`}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide bg-slate-900/90 text-cyan-300 dark:bg-white/90 dark:text-slate-900 border border-slate-700/60 dark:border-slate-300/60 shadow-xl backdrop-blur-md">
            <span>Pull for {isDark ? "Light" : "Dark"}</span>
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              ↓
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
