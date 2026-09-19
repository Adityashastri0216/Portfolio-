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
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
            Selected Works
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-100">
            Featured<span className="text-cyan-500">.</span>Projects
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-mono text-sm">
            {`> SELECT * FROM projects WHERE featured = true; // Click any project to open detailed case study & gallery`}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
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
                className="group relative flex flex-col h-full justify-between overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/50 p-6 sm:p-7 shadow-md hover:shadow-2xl shadow-slate-200/50 dark:shadow-cyan-950/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Card Image Thumbnail Preview */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-inner group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src={project.images[0].url}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-900/80 text-cyan-300 backdrop-blur-md border border-slate-700/60">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.frontend.concat(project.technologies.backend).slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700/80 transition-colors group-hover:border-cyan-500/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Call to action footer */}
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                    <span className="flex items-center gap-1 group-hover:underline">
                      View Project Details & Images
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
