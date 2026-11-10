"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAllProjects } from "@/lib/projectsData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 100 }
  },
};

export default function Projects() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="py-24 px-6 bg-porcelain-100 dark:bg-navy-900 overflow-hidden text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-500/30">
            Selected Works
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-100">
            Featured<span className="text-blue-600 dark:text-blue-400">.</span>Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-mono text-sm">
            {`> SELECT * FROM projects WHERE featured = true; // Click any project to open detailed case study & gallery`}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-8 perspective-1000"
        >
          {projects.map((project) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              key={project.id}
              className="h-full"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col h-full justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-850 p-6 sm:p-7 shadow-md hover:shadow-2xl shadow-slate-200/60 dark:shadow-navy-950/60 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Card Image Thumbnail Preview */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-slate-200 dark:border-navy-700 bg-navy-950 shadow-inner group-hover:shadow-lg transition-all duration-300">
                    {project.images && project.images.length > 0 ? (
                      <>
                        <Image
                          src={project.images[0].url}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                      </>
                    ) : (
                      /* Interactive Micro-Banking Workflow Card for Projects without Screenshot */
                      <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 relative overflow-hidden select-none">
                        {/* Soft Glow Circles */}
                        <div className="absolute -top-8 -right-8 w-28 h-28 bg-amber-500/15 rounded-full blur-xl pointer-events-none" />
                        <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-blue-500/15 rounded-full blur-xl pointer-events-none" />

                        {/* Top terminal dots */}
                        <div className="flex items-center justify-between z-10 border-b border-navy-700/60 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            <span className="text-[10px] font-mono text-slate-300 ml-1.5">{project.slug}.flow</span>
                          </div>
                          <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                            Doorstep Micro-Banking
                          </span>
                        </div>

                        {/* 5-Stage Lifecycle Preview */}
                        <div className="my-auto py-1 z-10">
                          <div className="text-[10px] font-mono text-slate-400 mb-1.5 flex items-center justify-between">
                            <span>OPERATIONAL LIFECYCLE</span>
                            <span className="text-emerald-400 font-semibold">● 5 Stages</span>
                          </div>
                          <div className="grid grid-cols-5 gap-1 text-center">
                            <div className="p-1 rounded bg-navy-850/90 border border-navy-700/80">
                              <p className="text-[8px] font-mono text-slate-400">01</p>
                              <p className="text-[9px] font-bold text-slate-200 truncate">Agent</p>
                            </div>
                            <div className="p-1 rounded bg-navy-850/90 border border-navy-700/80">
                              <p className="text-[8px] font-mono text-slate-400">02</p>
                              <p className="text-[9px] font-bold text-slate-200 truncate">Login</p>
                            </div>
                            <div className="p-1 rounded bg-navy-850/90 border border-navy-700/80">
                              <p className="text-[8px] font-mono text-slate-400">03</p>
                              <p className="text-[9px] font-bold text-slate-200 truncate">Customer</p>
                            </div>
                            <div className="p-1 rounded bg-amber-500/20 border border-amber-500/50">
                              <p className="text-[8px] font-mono text-amber-400 font-bold">04</p>
                              <p className="text-[9px] font-bold text-amber-300 truncate">Deposit</p>
                            </div>
                            <div className="p-1 rounded bg-navy-850/90 border border-navy-700/80">
                              <p className="text-[8px] font-mono text-slate-400">05</p>
                              <p className="text-[9px] font-bold text-slate-200 truncate">History</p>
                            </div>
                          </div>
                        </div>

                        {/* Bottom bar info */}
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-navy-700/60 z-10">
                          <span className="text-slate-300 font-mono">Daily Collection System</span>
                          <span className="text-amber-400 font-semibold font-mono">₹ Real-Time Passbook</span>
                        </div>
                      </div>
                    )}

                    {/* Internship Badge */}
                    {project.status.toLowerCase().includes("internship") && (
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-slate-950 backdrop-blur-md shadow-md flex items-center gap-1.5 z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                        {project.status.toLowerCase().includes("current") || project.status.toLowerCase().includes("active")
                          ? "Internship"
                          : "Internship Project"}
                      </span>
                    )}

                    {/* Personal Project Badge */}
                    {project.status.toLowerCase().includes("personal") && (
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-slate-950 backdrop-blur-md shadow-md flex items-center gap-1.5 z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                        Personal Project
                      </span>
                    )}

                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-navy-950/90 text-blue-300 backdrop-blur-md border border-navy-700">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-400">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.frontend.concat(project.technologies.backend).slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-navy-700 transition-colors group-hover:border-blue-500/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Call to action footer */}
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-navy-750 flex items-center justify-between text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                    <span className="flex items-center gap-1 group-hover:underline">
                      {project.images && project.images.length > 0
                        ? "View Project Details & Images"
                        : "View Project Architecture & Flow"}
                    </span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
