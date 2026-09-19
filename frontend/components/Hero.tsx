"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      {/* Techy Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 dark:opacity-20" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/20 dark:bg-violet-500/10 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center pt-16 md:pt-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          Hello World
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-cyan-700 dark:from-slate-200 dark:via-cyan-100 dark:to-violet-300 bg-clip-text text-transparent"
        >
          Aditya Shastri
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-8 font-mono"
        >
          <span className="text-cyan-600 dark:text-cyan-400">const</span> <span className="text-violet-600 dark:text-violet-400">role</span> = <span className="text-emerald-600 dark:text-emerald-400">&quot;Full Stack Developer&quot;</span>;
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-12"
        >
          Engineering robust web architectures and seamless digital experiences using cutting-edge frontend and backend technologies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-lg bg-cyan-500 text-slate-950 font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10">Deploy Projects</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-transparent text-slate-800 dark:text-slate-300 font-semibold hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300 shadow-sm dark:shadow-none"
          >
            Initialize Contact
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
            System.<span className="text-cyan-600 dark:text-cyan-400">out</span>.println(&quot;<a href="mailto:aditya.s.shastri1817@gmail.com" className="text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 hover:underline transition-all">aditya.s.shastri1817@gmail.com</a>&quot;);
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
