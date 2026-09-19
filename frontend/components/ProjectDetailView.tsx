"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectDetail, getNextProject } from "@/lib/projectsData";
import ThemePullString from "@/components/ThemePullString";

interface ProjectDetailViewProps {
  project: ProjectDetail;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "features">("overview");

  const nextProject = getNextProject(project.slug);

  const getAccentColors = (primary: string) => {
    switch (primary) {
      case "emerald":
        return {
          text: "text-emerald-500 dark:text-emerald-400",
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/30",
          borderHover: "hover:border-emerald-500/60",
          glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
          badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
          button: "bg-emerald-500 hover:bg-emerald-400 text-slate-950",
          pill: "bg-emerald-500",
        };
      case "violet":
        return {
          text: "text-violet-500 dark:text-violet-400",
          bg: "bg-violet-500/10",
          border: "border-violet-500/30",
          borderHover: "hover:border-violet-500/60",
          glow: "shadow-[0_0_20px_rgba(139,92,246,0.2)]",
          badge: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/30",
          button: "bg-violet-500 hover:bg-violet-400 text-white",
          pill: "bg-violet-500",
        };
      case "cyan":
      default:
        return {
          text: "text-cyan-600 dark:text-cyan-400",
          bg: "bg-cyan-500/10",
          border: "border-cyan-500/30",
          borderHover: "hover:border-cyan-500/60",
          glow: "shadow-[0_0_20px_rgba(6,182,212,0.2)]",
          badge: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
          button: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
          pill: "bg-cyan-500",
        };
    }
  };

  const accent = getAccentColors(project.accent.primary);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Theme Pull String switch available on project page */}
      <ThemePullString />

      {/* Top sticky navigation bar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3.5 px-6 transition-colors">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#projects"
            className="group flex items-center gap-2 text-sm font-mono font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1 duration-200">
              ←
            </span>
            <span>Back to Projects</span>
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-1.5 text-base font-mono font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <span className="text-cyan-600 dark:text-cyan-400">&lt;</span>
            <span>Aditya</span>
            <span className="text-violet-600 dark:text-violet-400">/&gt;</span>
          </Link>

          <div className="w-16" />
        </div>
      </header>

      {/* Tech Grid Background pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 dark:opacity-20 -z-10" />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Project Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Metadata pill row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${accent.badge}`}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800">
              {project.year}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${accent.pill} animate-pulse`} />
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            {project.tagline}
          </p>

          {/* Quick Details & Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/40 dark:shadow-none backdrop-blur-md mb-8">
            <div>
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                Role
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {project.role}
              </p>
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                Timeline
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {project.timeline}
              </p>
            </div>
            {project.keyMetrics.slice(0, 2).map((metric) => (
              <div key={metric.label}>
                <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                  {metric.label}
                </p>
                <p className={`text-sm font-bold font-mono ${accent.text}`}>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md ${accent.button}`}
              >
                <span>Launch Live Preview</span>
                <span className="text-base">↗</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View Source Code</span>
            </a>
          </div>
        </motion.div>

        {/* Featured Interactive Project Showcase Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-2xl shadow-slate-900/20 group">
            {/* Window control bar decoration */}
            <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  {project.slug}.app
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(project.images[0].url)}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Click to expand</span>
                <span>⤢</span>
              </button>
            </div>

            {/* Main Preview Image */}
            <div
              className="relative aspect-video w-full cursor-zoom-in overflow-hidden"
              onClick={() => setSelectedImage(project.images[0].url)}
            >
              <Image
                src={project.images[0].url}
                alt={project.images[0].title}
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Caption bar */}
            <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-semibold text-slate-200">
                  {project.images[0].title}
                </h4>
                <p className="text-xs text-slate-400">
                  {project.images[0].description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.frontend.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Navigation Tabs */}
        <div className="flex items-center gap-2 mb-10 border-b border-slate-200 dark:border-slate-800 pb-3">
          {[
            { id: "overview", label: "Overview & Mission" },
            { id: "features", label: "Key Features" },
            { id: "architecture", label: "System Architecture" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 dark:bg-cyan-500/20 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-3 left-0 right-0 h-0.5 bg-cyan-500"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview & Problem/Solution */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Narrative description */}
            <section className="bg-white/70 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                <span className={accent.text}>#</span>
                <span>Project Narrative & Purpose</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Problem vs Solution Split Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-red-500/5 dark:bg-red-950/20 border border-red-500/20 shadow-sm">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-mono font-semibold text-sm mb-3">
                  <span>⚠</span>
                  <span>The Engineering Challenge</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Problem Statement
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  {project.problem}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono font-semibold text-sm mb-3">
                  <span>✓</span>
                  <span>The Implemented Solution</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Architectural Resolution
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  {project.solution}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Key Features Grid */}
        {activeTab === "features" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {project.features.map((feature, idx) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group hover:border-cyan-500/40"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-mono font-bold text-sm mb-4 group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: System Architecture & Tech Stack */}
        {activeTab === "architecture" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            {/* Architecture Pillars */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-sm font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold mb-2">
                  Frontend Architecture
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.architecture.frontend}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-sm font-mono text-violet-600 dark:text-violet-400 uppercase tracking-wider font-semibold mb-2">
                  Backend & API Design
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.architecture.backend}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold mb-2">
                  Database & Data Modeling
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.architecture.database}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-sm font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold mb-2">
                  Security & Access Control
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.architecture.security}
                </p>
              </div>
            </div>

            {/* Categorized Tech Badges */}
            <div className="p-8 rounded-2xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">
                Comprehensive Technology Matrix
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Frontend Layer
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.frontend.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Backend Layer
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.backend.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Database & Storage
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.database.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Tools & Deployment
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.tools.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Next Project Footer Bar */}
        <section className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/#projects"
            className="text-sm font-mono text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            <span>←</span>
            <span>All Projects</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="text-right">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Next Project
              </span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition-colors">
                {nextProject.title}
              </span>
            </div>
            <span className="text-lg text-slate-400 group-hover:text-cyan-500 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </section>
      </main>

      {/* Lightbox Modal for Image Expansion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded project screenshot"
                fill
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors border border-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
