"use client";

import { motion, Variants } from "framer-motion";

interface EducationMilestone {
  id: string;
  degree: string;
  field: string;
  institution?: string;
  timeline: string;
  score: string;
  scoreType: string;
  status: string;
  statusBadge: "active" | "completed";
  accent: "violet" | "cyan" | "emerald";
  description: string;
  skills: string[];
}

const educationData: EducationMilestone[] = [
  {
    id: "be",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Electronics & Telecommunication (ENTC)",
    timeline: "2023 – 2026",
    score: "7.01 CGPA",
    scoreType: "Cumulative Grade Point",
    status: "Completed with First Class",
    statusBadge: "completed",
    accent: "cyan",
    description:
      "Synthesizing high-level software engineering and full-stack web architectures with core telecommunications, signal systems, network protocols, and computing fundamentals.",
    skills: [
      "Full Stack Development",
      "Object-Oriented Design",
      "Network Architectures",
      "System Engineering",
      "Database Systems",
    ],
  },
  {
    id: "diploma",
    degree: "Diploma in Engineering",
    field: "Computer Science & Engineering (CSE)",
    timeline: "2020 – 2023",
    score: "80.69%",
    scoreType: "Aggregate Percentage",
    status: "Completed with Distinction",
    statusBadge: "completed",
    accent: "emerald",
    description:
      "Comprehensive 3-year technical foundation in computer science principles, core programming in Java & C/C++, relational databases (SQL), data structures, web technologies, and software engineering methodologies.",
    skills: [
      "Core Java & OOP",
      "Data Structures & Algorithms",
      "Relational Databases (SQL)",
      "Web Technologies",
      "Software Engineering",
    ],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    field: "Class X (General Sciences & Mathematics)",
    timeline: "2020",
    score: "83.20%",
    scoreType: "Board Examination Score",
    status: "Completed with Distinction",
    statusBadge: "completed",
    accent: "violet",
    description:
      "Built a solid analytical, mathematical, and logical foundation with excellent academic standing across sciences, mathematics, and problem-solving disciplines.",
    skills: [
      "Mathematics & Logic",
      "Science & Physics",
      "Analytical Thinking",
      "Quantitative Aptitude",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Education() {
  const getAccentStyles = (accent: "violet" | "cyan" | "emerald") => {
    switch (accent) {
      case "cyan":
        return {
          glow: "from-blue-500/20 via-indigo-500/10 to-transparent",
          border: "border-blue-500/30 hover:border-blue-500/60",
          badge: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-500/30",
          pill: "bg-blue-600 text-white dark:bg-blue-500 dark:text-navy-950 font-bold",
          dot: "bg-blue-500",
          tag: "bg-blue-50 dark:bg-navy-800 text-blue-700 dark:text-blue-300 border-blue-500/20",
          highlight: "text-blue-600 dark:text-blue-400",
        };
      case "emerald":
        return {
          glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
          border: "border-emerald-500/30 hover:border-emerald-500/60",
          badge: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
          pill: "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-navy-950 font-bold",
          dot: "bg-emerald-500",
          tag: "bg-emerald-50 dark:bg-navy-800 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
          highlight: "text-emerald-600 dark:text-emerald-400",
        };
      case "violet":
      default:
        return {
          glow: "from-amber-500/20 via-yellow-500/10 to-transparent",
          border: "border-amber-500/30 hover:border-amber-500/60",
          badge: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-500/30",
          pill: "bg-amber-500 text-slate-950 font-bold",
          dot: "bg-amber-500",
          tag: "bg-amber-50 dark:bg-navy-800 text-amber-700 dark:text-amber-300 border-amber-500/20",
          highlight: "text-amber-600 dark:text-amber-400",
        };
    }
  };

  return (
    <section
      id="education"
      className="relative py-28 px-6 bg-porcelain-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#19284f_1px,transparent_1px),linear-gradient(to_bottom,#19284f_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 dark:opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-blue-500/10 via-amber-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-500/30">
            Academic Track
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-2 text-slate-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-3xl">&lt;</span>
            <span>Education.Journey</span>
            <span className="text-amber-500 dark:text-amber-400 font-mono text-3xl">/&gt;</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-mono text-sm">
            {"// Formal academic milestones, computer science foundation & engineering degrees"}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="relative"
        >
          {/* Central Vertical Connector Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-emerald-500 to-amber-500 opacity-40 dark:opacity-30" />

          <div className="space-y-10 md:space-y-12">
            {educationData.map((item, index) => {
              const styles = getAccentStyles(item.accent);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full md:w-1/2">
                    <div
                      className={`group relative overflow-hidden rounded-2xl border ${styles.border} bg-white dark:bg-navy-900/90 p-6 sm:p-8 shadow-lg shadow-slate-200/50 dark:shadow-navy-950/60 backdrop-blur-md transition-all duration-300 hover:shadow-2xl`}
                    >
                      {/* Hover Ambient Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`}
                      />

                      <div className="relative z-10">
                        {/* Top pill row: Timeline & Status */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${styles.badge}`}
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>{item.timeline}</span>
                          </span>

                          <span className="flex items-center gap-1.5 text-xs font-mono">
                            {item.statusBadge === "active" ? (
                              <>
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                  {item.status}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                                <span className="text-slate-600 dark:text-slate-300 font-medium">
                                  {item.status}
                                </span>
                              </>
                            )}
                          </span>
                        </div>

                        {/* Degree Title & Field */}
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.degree}
                        </h3>

                        <p className={`text-base font-semibold mb-4 ${styles.highlight}`}>
                          {item.field}
                        </p>

                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Score Metric Highlight Box */}
                        <div className="p-3.5 rounded-xl bg-slate-100/90 dark:bg-navy-850 border border-slate-200 dark:border-navy-750 flex items-center justify-between mb-5">
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            {item.scoreType}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-lg text-sm font-mono tracking-tight font-extrabold shadow-sm ${styles.pill}`}
                          >
                            {item.score}
                          </span>
                        </div>

                        {/* Relevant Skill Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border ${styles.tag}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Central Node Indicator (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-navy-700 items-center justify-center shadow-lg z-20">
                    <div className={`w-3.5 h-3.5 rounded-full ${styles.dot} animate-pulse`} />
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
