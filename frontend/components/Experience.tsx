"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ProjectExperience {
  name: string;
  category: string;
  tagline: string;
  tech: string[];
  points: string[];
  liveUrl?: string;
}

interface WorkExperience {
  id: string;
  company: string;
  location: string;
  role: string;
  timeline: string;
  isCurrent: boolean;
  type: string;
  accent: "cyan" | "violet";
  overview: string;
  projects?: ProjectExperience[];
  responsibilities?: string[];
}

const experienceData: WorkExperience[] = [
  {
    id: "navkar-dreamsoft",
    company: "NAVKAR DREAMSOFT",
    location: "Pune, India",
    role: "Software Development Intern",
    timeline: "Oct 2026 – Present",
    isCurrent: true,
    type: "Internship",
    accent: "cyan",
    overview:
      "Developing production-ready web applications, modern responsive UI systems, and backend API integrations for scalable client solutions, including active recruitment and career platforms.",
    projects: [
      {
        name: "FitBazaar",
        category: "Recruitment & Job Portal Platform for Fitness Industry",
        tagline: "End-to-end recruitment platform connecting active job seekers with hiring companies and curated listings",
        liveUrl: "https://job.fitbazaar.in/",
        tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Responsive UI"],
        points: [
          "Developed and optimized user-facing features, responsive layouts, and modern job portal interfaces for the live production site.",
          "Implemented comprehensive job search, category-based filtering, application tracking, and user profile management modules.",
          "Integrated RESTful APIs for candidate registrations, profile updates, and dynamic real-time job listings.",
          "Ensured cross-browser compatibility, high-performance rendering benchmarks, and smooth mobile responsiveness.",
          "Collaborated within an agile team to diagnose bugs, conduct code reviews, and ship new features to production.",
        ],
      },
    ],
  },
  {
    id: "indux",
    company: "Indux Technology",
    location: "Pune, India",
    role: "Full Stack Developer Intern",
    timeline: "Feb 2026 – Oct 2026",
    isCurrent: false,
    type: "Internship",
    accent: "cyan",
    overview:
      "Engineering full-stack architectures, relational database schemas, and responsive user interfaces across enterprise insurance policy suites, sales automation tools, and health & wellness e-commerce applications.",
    projects: [
      {
        name: "JEM Soft — Insurance Policy Management",
        category: "Enterprise InsurTech Solution",
        tagline: "End-to-end insurance policy lifecycle, underwriting logic & premium calculation engine",
        tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL"],
        points: [
          "Contributing to the development and implementation of core business modules and insurance policy workflows.",
          "Analyzing business requirements and implementing policy-related business logic, including automated premium calculations.",
          "Developing and integrating secure REST APIs using Next.js, TypeScript, Node.js/Express.js, Prisma, and PostgreSQL.",
          "Designing relational database schemas and executing performant database operations with PostgreSQL and Prisma ORM.",
          "Performing thorough debugging and testing of application flows, REST APIs, database queries, and newly rolled out features.",
          "Collaborating with cross-functional team members to analyze module dependencies, troubleshoot blockers, and deliver milestones within tight sprints.",
        ],
      },
      {
        name: "Sales Automation",
        category: "Enterprise Business Workflows",
        tagline: "Streamlining enterprise sales pipelines and operational dashboards with modular UI systems",
        tech: ["React.js", "JavaScript", "Tailwind CSS", "Reusable Components"],
        points: [
          "Engineered frontend interfaces and designed modular, reusable UI components for business application workflows.",
          "Built responsive layouts and smoothly integrated application components aligned with project specifications.",
          "Maintained consistent user interface behavior, clean code abstractions, and standard design system guidelines across all screens.",
        ],
      },
      {
        name: "MagikPro",
        category: "E-Commerce & Brand Platform",
        tagline: "Admin panel engineering & consumer interfaces for health & wellness drink mix brand",
        tech: ["Next.js", "React.js", "Tailwind CSS", "Admin Dashboard"],
        points: [
          "Developed responsive Admin Panel interfaces and reusable frontend components using React.js and Next.js.",
          "Implemented interactive UI features, real-time feedback elements, and enhanced application usability for administrators.",
          "Engineered maintainable application components and structured layouts adhering to modern software engineering best practices.",
        ],
      },
      {
        name: "NutriNative",
        category: "Health & Nutrition Platform",
        tagline: "Consumer storefront homepage & interactive wellness components",
        tech: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
        points: [
          "Developed responsive homepage landing sections and engaging, interactive UI components.",
          "Implemented modern fluid layouts and frontend enhancements tailored to nutrition product catalogs and user flows.",
        ],
      },
    ],
  },
  {
    id: "ramusha",
    company: "Ramusha Mentors",
    location: "Pune, India",
    role: "Intern",
    timeline: "Jun 2022 – Aug 2022",
    isCurrent: false,
    type: "Internship",
    accent: "violet",
    overview:
      "Gained hands-on practical software development exposure, contributing to feature development, software debugging, and version control collaboration within structured agile cycles.",
    responsibilities: [
      "Assisted in developing and testing application features while acquiring hands-on exposure to practical programming, debugging, and software engineering practices.",
      "Collaborated alongside senior engineers to break down technical requirements, resolve application bugs, and uphold standardized Git version-control workflows.",
      "Conducted functional validation and code reviews, ensuring code reliability and consistent technical delivery.",
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  const [activeProjectTabs, setActiveProjectTabs] = useState<Record<string, number>>({});

  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-porcelain-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[300px] bg-gradient-to-tl from-amber-500/10 via-blue-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

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
            Career Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-2 text-slate-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-3xl">&lt;</span>
            <span>Professional.Experience</span>
            <span className="text-amber-500 dark:text-amber-400 font-mono text-3xl">/&gt;</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-mono text-sm">
            {"// Production full-stack development, enterprise backend services & UI engineering"}
          </p>
        </motion.div>

        {/* Experience Cards List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="space-y-12"
        >
          {experienceData.map((exp) => {
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative rounded-2xl border border-slate-200/90 dark:border-navy-700 bg-white dark:bg-navy-900/90 p-7 sm:p-9 shadow-xl shadow-slate-200/50 dark:shadow-navy-950/60 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-blue-500/40"
              >
                {/* Top accent border stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500" />

                {/* Company Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200/80 dark:border-navy-750">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-blue-700 dark:text-blue-400 font-mono flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-400 dark:text-navy-600">•</span>
                      <span className="text-slate-600 dark:text-slate-400 font-normal text-sm">
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 sm:text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 text-slate-700 dark:text-slate-300 shadow-sm">
                      <svg
                        className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
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
                      <span>{exp.timeline}</span>
                    </span>
                  </div>
                </div>

                {/* Company Overview */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {exp.overview}
                </p>

                {/* Indux Technology: Project Tabs */}
                {exp.projects && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Assigned Project Workflows
                      </span>
                      <span className="h-px flex-1 bg-slate-200 dark:border-navy-750" />
                    </div>

                    {/* Project Selector Buttons */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.projects.map((proj, idx) => {
                        const activeIdx = activeProjectTabs[exp.id] ?? 0;
                        const isActive = activeIdx === idx;
                        return (
                          <button
                            key={proj.name}
                            type="button"
                            onClick={() =>
                              setActiveProjectTabs((prev) => ({
                                ...prev,
                                [exp.id]: idx,
                              }))
                            }
                            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${isActive
                              ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-navy-950 font-bold shadow-md shadow-blue-500/25 scale-[1.02]"
                              : "bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-700 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400"
                              }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white dark:bg-navy-950" : "bg-blue-500"
                                }`}
                            />
                            <span>{proj.name}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Project Detail Card */}
                    <AnimatePresence mode="wait">
                      {(() => {
                        const activeIdx = activeProjectTabs[exp.id] ?? 0;
                        const currentProj = exp.projects[activeIdx] || exp.projects[0];
                        return (
                          <motion.div
                            key={currentProj.name}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25 }}
                            className="rounded-xl border border-slate-200/80 dark:border-navy-750 bg-slate-50/80 dark:bg-navy-850/80 p-6 sm:p-7"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                              <div className="flex items-center gap-3 flex-wrap">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                  <span className="text-blue-600 dark:text-blue-400">▹</span>
                                  <span>{currentProj.name}</span>
                                </h4>
                                {currentProj.liveUrl && (
                                  <a
                                    href={currentProj.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all shadow-sm group"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Live Site</span>
                                    <svg
                                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                  </a>
                                )}
                              </div>
                              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-500/30 w-fit">
                                {currentProj.category}
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 mb-5">
                              {currentProj.tagline}
                            </p>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                              {currentProj.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-navy-700"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            {/* Bullet Points */}
                            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              {currentProj.points.map((pt) => (
                                <li key={pt} className="flex items-start gap-2.5">
                                  <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold text-xs">
                                    •
                                  </span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      })()}
                    </AnimatePresence>
                  </div>
                )}

                {/* Ramusha Mentors Responsibilities */}
                {exp.responsibilities && (
                  <div className="rounded-xl border border-slate-200/80 dark:border-navy-750 bg-slate-50/80 dark:bg-navy-850/80 p-6 sm:p-7">
                    <ul className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <span className="text-amber-500 dark:text-amber-400 mt-1 font-bold text-xs">
                            ▹
                          </span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
