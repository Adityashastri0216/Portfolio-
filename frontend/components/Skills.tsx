"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "database" | "tools";
  level?: string;
}

const skillsData: SkillItem[] = [
  { name: "Java", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML5 / CSS3", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Prisma ORM", category: "database" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Eclipse IDE", category: "tools" },
  { name: "Postman", category: "tools" },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "tools", label: "Tools & IDEs" },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-porcelain-100 dark:bg-navy-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden"
    >
      {/* Background ambient sapphire glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section Header with Scroll In View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-500/30">
            Technical Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-3 text-slate-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">&lt;</span>
            Tech Stack
            <span className="text-amber-500 dark:text-amber-400">/&gt;</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-mono text-sm">
            {"// Dependencies, runtimes, and languages I use to construct robust software"}
          </p>
        </motion.div>

        {/* Category Filter Pills with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white dark:text-navy-950 font-bold bg-blue-600 dark:bg-blue-500 shadow-md shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-navy-800/80 border border-slate-200 dark:border-navy-700"
                }`}
              >
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Staggered Skill Badges Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 12 },
                }}
                whileTap={{ scale: 0.95 }}
                key={skill.name}
                className="group relative px-5 py-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-navy-800/90 text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-xl shadow-slate-200/50 dark:shadow-navy-950/40 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/60 cursor-default"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-sm font-semibold tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
