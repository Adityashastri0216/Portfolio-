"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Smooth scroll parallax transforms
  const yText = useTransform(scrollY, [0, 500], [0, -60]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0.2]);
  const orb1Y = useTransform(scrollY, [0, 600], [0, 150]);
  const orb2Y = useTransform(scrollY, [0, 600], [0, -120]);
  const orbScale = useTransform(scrollY, [0, 500], [1, 1.3]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-porcelain-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      {/* Techy Grid Background with subtle Midnight/Porcelain grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#19284f_1px,transparent_1px),linear-gradient(to_bottom,#19284f_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 dark:opacity-25 pointer-events-none" />

      {/* Glowing Parallax Orbs that drift when scrolling */}
      <motion.div
        style={{ y: orb1Y, scale: orbScale }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y, scale: orbScale }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center pt-20 md:pt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-50 dark:border-blue-400/30 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-widest uppercase shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-sm"
        >
          &lt; Hello World /&gt;
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 dark:from-white dark:via-blue-100 dark:to-indigo-200 bg-clip-text text-transparent"
        >
          Aditya Shastri
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-8 font-mono"
        >
          <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
          <span className="text-amber-600 dark:text-amber-400">role</span> ={" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            &quot;Full Stack Developer&quot;
          </span>
          ;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 mb-10"
        >
          Engineering robust web architectures and seamless digital experiences using
          modern full-stack systems, clean code, and scalable design.
        </motion.p>

        {/* CTA Buttons Row including GitHub & LinkedIn profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-blue-600 dark:text-navy-950 text-white font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-md shadow-blue-500/25 dark:shadow-[0_0_25px_rgba(59,130,246,0.45)] flex items-center justify-center gap-2"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10">Deploy Projects</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a
            href="https://github.com/Adityashastri0216"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-white/90 dark:bg-navy-900/80 text-slate-800 dark:text-slate-200 font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
            <span className="text-xs">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-shastri-400176367/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-white/90 dark:bg-navy-900/80 text-slate-800 dark:text-slate-200 font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
            <span className="text-xs">↗</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-white/60 dark:bg-navy-900/40 text-slate-800 dark:text-slate-300 font-semibold hover:border-amber-500 hover:text-amber-600 dark:hover:border-amber-400 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-500/10 transition-all duration-300 shadow-sm"
          >
            Initialize Contact
          </a>
        </motion.div>

        {/* Terminal Println snippet with GitHub, LinkedIn & Email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400"
        >
          <span>
            System.<span className="text-blue-600 dark:text-blue-400">out</span>.println(&quot;
            <a
              href="mailto:aditya.s.shastri1817@gmail.com"
              className="text-amber-600 dark:text-amber-400 hover:underline transition-all"
            >
              aditya.s.shastri1817@gmail.com
            </a>
            &quot;);
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-navy-700">|</span>
          <span>
            <a
              href="https://github.com/Adityashastri0216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>github</span>
              <span className="text-[10px]">↗</span>
            </a>
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-navy-700">|</span>
          <span>
            <a
              href="https://www.linkedin.com/in/aditya-shastri-400176367/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>linkedin</span>
              <span className="text-[10px]">↗</span>
            </a>
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Animated Scroll-Down Indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">
          Scroll Down
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-300 dark:border-navy-600 flex justify-center pt-1.5 shadow-sm">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-blue-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
