"use client";

import { motion } from "framer-motion";

const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Git",
  "GitHub",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 200 }
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-100/70 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-3 text-slate-900 dark:text-white">
            <span className="text-violet-600 dark:text-violet-500">&lt;</span>
            Tech Stack
            <span className="text-violet-600 dark:text-violet-500">/&gt;</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            {"// Dependencies and tools I use to build scalable systems"}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill) => (
            <motion.span
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: [-1, 1, 0] }}
              key={skill}
              className="px-6 py-3 text-sm md:text-base font-semibold rounded-md border border-slate-300/80 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-md transition-colors hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
